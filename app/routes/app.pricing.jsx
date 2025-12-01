import Pricing from "../components/pricing/index.jsx";
import { authenticate, PRO_PLAN, PREMIUM_PLAN } from "../shopify.server";

export const headers = (headers) => {
  const mergedHeaders = new Headers();
  for (const temp of Object.values(headers)) {
    if (!temp) {
      break;
    }
    temp.forEach((value, key) => {
      mergedHeaders.set(key, value);
    });
  }
  console.log("-------------------------------------");
  console.log(mergedHeaders);
  console.log("-------------------------------------");
  return mergedHeaders;
};

export const loader = async ({ request }) => {
  const { billing } = await authenticate.admin(request);

  const { hasActivePayment, appSubscriptions } = await billing.check({
    plans: [PRO_PLAN, PREMIUM_PLAN],
    isTest: true,
  });

  return {
    hasActivePayment,
    currentPlan: appSubscriptions.length > 0 ? appSubscriptions[0].name : "FREE",
    appSubscriptions,
    subscriptionId: appSubscriptions.length > 0 ? appSubscriptions[0].id : null,
  };
};

export const action = async ({ request }) => {
  const formData = await request.formData();

  const selectedPlan = formData.get("plan");
  const subscriptionId = formData.get("subscriptionId");
  const { billing, session } = await authenticate.admin(request);
  if (subscriptionId) {
    const cancelledSubscription = await billing.cancel({
      subscriptionId: subscriptionId,
      isTest: true,
      prorate: true,
    });
    return { cancelledSubscription };
  }

  console.log(selectedPlan);

  console.log(">>>>>>>>>>>>>>>>>>>>>>>>>>>>");
  console.log(session);
  console.log(">>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>");
  let planKey="FREE";
  if (selectedPlan == "PRO") planKey = PRO_PLAN.toUpperCase();
  if (selectedPlan == "PREMIUM") planKey = PREMIUM_PLAN.toUpperCase();

  const billingCheck = await billing.require({
    plans: [planKey],
    isTest: true,
    onFailure: async () =>
      billing.request({
        plan: planKey,
        returnUrl: `https://admin.shopify.com/store/${session.shop.split(".")[0]}/apps/my-shipready/app/pricing`,
      }),
  });

  return { billingCheck };
};

export default function Pricings() {
  return <Pricing />;
}
