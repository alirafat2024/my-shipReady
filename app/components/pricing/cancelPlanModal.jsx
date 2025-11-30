import { useFetcher } from "react-router";

export const CancelPlanModal = ({ subscriptionId }) => {
  const fetcher = useFetcher();

  return (
    <>
      <s-button variant="primary" tone="critical" commandFor="modal">
        cancel plan
      </s-button>
      <s-modal id="modal" heading="Are you sure">
        <s-s-paragraph>
          You will lose access to the features of the current plan. Please
          confirm if you really want to change the plan.
        </s-s-paragraph>

        <s-button slot="secondary-action" commandFor="modal" command="--hide">
          Close
        </s-button>

        <s-button
          slot="primary-action"
          variant="primary"
          tone="critical"
          commandFor="modal"
          command="--hide"
          onClick={() => {
            fetcher.submit({ subscriptionId }, { method: "POST" });
          }}
        >
          Yes, cancel
        </s-button>
      </s-modal>
    </>
  );
};
