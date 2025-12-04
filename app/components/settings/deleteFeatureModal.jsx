import { useFetcher } from "react-router";

export const DeleteFeatureModal = ({ featureId }) => {
  const fetcher = useFetcher();

  return (
    <>
      <s-button variant="secondary" commandFor="modal">
        <s-icon type="delete" tone="critical" />
      </s-button>
      <s-modal id="modal" heading="Are you sure">
        <s-paragraph>Do you want to remove the feature?</s-paragraph>

        <s-button slot="secondary-actions" commandFor="modal" command="--hide">
          No
        </s-button>
        <s-button
          slot="primary-action"
          variant="primary"
          tone="critical"
          commandFor="modal"
          command="--hide"
          onClick={() => {
            fetcher.submit(
              {
                metaobjectId: featureId,
                type: "delete",
              },
              { method: "POST" },
            );
          }}
        >
          Yes
        </s-button>
      </s-modal>
    </>
  );
};
