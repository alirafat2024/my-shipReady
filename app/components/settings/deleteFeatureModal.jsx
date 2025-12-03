import { useFetcher } from "react-router";

export const DeleteFeatureModal = ({ featureId }) => {
  const fetcher = useFetcher();

  return (
    <>
      <s-button variant="primary" tone="critical" commandFor="modal">
        <s-button tone="critical">
          <s-icon type="delete" />
        </s-button>
      </s-button>
      <s-modal id="modal" heading="Are you sure">
        <s-s-paragraph>Do you want to remove the feature?</s-s-paragraph>

        <s-button slot="secondary-action" commandFor="modal" command="--hide">
          No
        </s-button>

        <s-button
          slot="primary-action"
          variant="primary"
          tone="critical"
          commandFor="modal"
          command="--hide"
          onClick={() => {
            // Check if the featureId is a valid gid (for Shopify, it's usually a global ID)
            const idToDelete = featureId.split('/').pop(); // Extract just the numeric ID

            fetcher.submit(
              {
                metaobjectId: idToDelete, 
                type: "delete"
              },
              { method: "POST" }
            );
          }}
        >
          Yes
        </s-button>
      </s-modal>
    </>
  );
};
