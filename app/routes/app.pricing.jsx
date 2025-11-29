import Pricing from "../components/pricing/index.jsx";
import { authenticate, Free_PLAN, Pro_PLAN, Premium_PLAN } from "../shopify.server";
import { redirect } from "react-router";

export const loader = async ({ request }) => {
  const { billing } = await authenticate.admin(request);

  const active = await billing.check({
    plans: [Free_PLAN, Pro_PLAN, Premium_PLAN],
    isTest: true,
  });
    const activePlan =
    active.oneTimePurchases?.[0] ||
    active.appSubscriptions?.[0] ||
    null;


  let activePlanName = null;
  if (active.hasActivePayment) {
    if (activePlan?.name.includes("Free")) activePlanName = "Free";
    else if (activePlan?.name.includes("Pro")) activePlanName = "Pro";
    else if (activePlan?.name.includes("Premium")) activePlanName = "Premium";
  }

  return {
    activePlanName, 
  };
};


export const action = async ({ request }) => {
  const { plan } = Object.fromEntries(await request.formData());
  const { billing } = await authenticate.admin(request);

  
  let selectedPlan = null;

  if (plan === Free_PLAN.plan) selectedPlan = Free_PLAN;
  if (plan === Pro_PLAN.plan) selectedPlan = Pro_PLAN;
  if (plan === Premium_PLAN.plan) selectedPlan = Premium_PLAN;

 
  if (!selectedPlan) return null;

  const { confirmationUrl } = await billing.request({
    plan: selectedPlan,      
    isTest: true,
    returnUrl: "https://admin.shopify.com/store/my-store1/apps/my-shipready/pricing",
  });

  return redirect(confirmationUrl);
};


export default function Pricings() {
  return <Pricing />;
}
