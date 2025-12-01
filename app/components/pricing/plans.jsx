import { useLoaderData, useFetcher } from "react-router";
import { useState, useEffect } from "react";
import { CancelPlanModal } from "./cancelPlanModal";

export const Plans = () => {
  const { currentPlan, subscriptionId } = useLoaderData();
  const fetcher = useFetcher();
  const [selectedPlan, setSelectedPlan] = useState(currentPlan || "FREE");

  const handlePlanSelect = (plan) => {
    setSelectedPlan(plan.toUpperCase());

    fetcher.submit({ plan: plan.toUpperCase() }, { method: "post" });
  };

  const isPlanActive = (planName) => {
    return currentPlan === planName;
  };

  useEffect(() => {
    if (!currentPlan) {
      setSelectedPlan("FREE");
    }
  }, [currentPlan]);
  return (
    <s-page>
      <s-query-container>
        <s-grid
          gridTemplateColumns="@container (inline-size > 500px) 1fr 1fr 1fr , 1fr"
          gap="base"
          alignItems="start"
        >
          <s-grid-item>
            <s-section>
              <s-stack justifyContent="space-between" direction="inline">
                <s-heading>Free</s-heading>
                {isPlanActive("FREE") && (
                  <s-badge tone="info">Current plan</s-badge>
                )}
              </s-stack>
              <s-paragraph>
                <s-text type="strong">$39</s-text>/ month
              </s-paragraph>
              <s-paragraph>For small business</s-paragraph>
              <s-divider></s-divider>
              <s-stack direction="inline" gap="base">
                <s-icon type="check-circle" tone="success" />
                <s-text>1k pages views & visitors</s-text>
              </s-stack>

              <s-stack direction="inline" gap="base">
                <s-icon type="check-circle" tone="success" />
                <s-text>10 basic features</s-text>
              </s-stack>
              <s-stack direction="inline" gap="base">
                <s-icon type="check-circle" tone="success" />
                <s-text>Basic customisation</s-text>
              </s-stack>
              <s-stack direction="inline" gap="base">
                <s-icon type="check-circle" tone="success" />
                <s-text>Basic support</s-text>
              </s-stack>
              <s-stack paddingBlockStart="large">
                <s-button
                  variant="primary"
                  disabled={!isPlanActive("FREE")}
                  onClick={() => handlePlanSelect("FREE")}
                >
                  upgrade to unlock all features
                </s-button>
              </s-stack>
            </s-section>
          </s-grid-item>
          <s-grid-item>
            <s-section
        
            >
              <s-stack justifyContent="space-between" direction="inline">
                <s-heading>Pro</s-heading>
                {isPlanActive("PRO") && (
                  <s-badge tone="info">Current plan</s-badge>
                )}
              </s-stack>
              <s-paragraph>
                <s-text type="strong">$99</s-text>/ month
              </s-paragraph>
              <s-paragraph>For growing business</s-paragraph>
              <s-divider></s-divider>
              <s-stack direction="inline" gap="base">
                <s-icon type="check-circle" tone="success" />
                <s-text>Unlimted pages views & visitors</s-text>
              </s-stack>

              <s-stack direction="inline" gap="base">
                <s-icon type="check-circle" tone="success" />
                <s-text>All features</s-text>
              </s-stack>
              <s-stack direction="inline" gap="base">
                <s-icon type="check-circle" tone="success" />
                <s-text>Customisation</s-text>
              </s-stack>
              <s-stack direction="inline" gap="base">
                <s-icon type="check-circle" tone="success" />
                <s-text>Fast email support</s-text>
              </s-stack>
              <s-stack direction="inline" gap="base">
                <s-icon type="check-circle" tone="success" />
                <s-text>Custom domain</s-text>
              </s-stack>
              <s-stack
                direction="block"
                paddingBlockStart="base"
                paddingInline="large-500"
              >
                {isPlanActive("PRO") && subscriptionId ? (
                  <CancelPlanModal subscriptionId={subscriptionId} />
                ) : (
                  <s-button
                    variant="primary"
                    disabled={isPlanActive("PRO")}
                    onClick={() => handlePlanSelect("PRO")}
                  >
                    start 3-days trila
                  </s-button>
                )}
              </s-stack>
            </s-section>
          </s-grid-item>
          <s-grid-item>
            <s-section>
              <s-stack justifyContent="space-between" direction="inline">
                <s-heading>Premium</s-heading>
                {isPlanActive("PREMIUM") && (
                  <s-badge tone="info">Current plan</s-badge>
                )}
              </s-stack>
              <s-paragraph>
                <s-text type="strong">Free</s-text>/ month
              </s-paragraph>
              <s-paragraph>For large business</s-paragraph>
              <s-divider></s-divider>
              <s-stack direction="inline" gap="base">
                <s-icon type="check-circle" tone="success" />
                <s-text>Unlimted pages views & visitors</s-text>
              </s-stack>

              <s-stack direction="inline" gap="base">
                <s-icon type="check-circle" tone="success" />
                <s-text>All features</s-text>
              </s-stack>
              <s-stack direction="inline" gap="base">
                <s-icon type="check-circle" tone="success" />
                <s-text>Customisation</s-text>
              </s-stack>
              <s-stack direction="inline" gap="base">
                <s-icon type="check-circle" tone="success" />
                <s-text>Dedicated developer support</s-text>
              </s-stack>
              <s-stack direction="inline" gap="base">
                <s-icon type="check-circle" tone="success" />
                <s-text>Priority email support</s-text>
              </s-stack>
              <s-stack direction="inline" gap="base">
                <s-icon type="check-circle" tone="success" />
                <s-text>Custom domain</s-text>
              </s-stack>
              <s-stack direction="inline" gap="base">
                <s-icon type="check-circle" tone="success" />
                <s-text>Custom analytics</s-text>
              </s-stack>
              <s-stack paddingBlockStart="base" paddingInline="large-500">
                {isPlanActive("PREMIUM") && subscriptionId ? (
                  <CancelPlanModal subscriptionId={subscriptionId} />
                ) : (
                  <s-button
                    variant="primary"
                    disabled={isPlanActive("PREMIUM")}
                    onClick={() => handlePlanSelect("PREMIUM")}
                  >
                    start 3-days trila
                  </s-button>
                )}
              </s-stack>
            </s-section>
          </s-grid-item>
        </s-grid>
      </s-query-container>
    </s-page>
  );
};
