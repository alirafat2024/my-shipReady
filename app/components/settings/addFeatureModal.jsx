import { useState, useEffect } from "react";
import { useFetcher } from "react-router";

export const AddFeatureModal = ({ featureId, featureName, featureDetails }) => {
  const [name, setName] = useState(featureName || "");
  const [details, setDetails] = useState(featureDetails || "");
  const fetcher = useFetcher();
  useEffect(() => {
    setName(featureName || "");
    setDetails(featureDetails || "");
  }, [featureName, featureDetails]);

  const handleSubmit = () => {
    fetcher.submit(
      {
        featureName: name,
        featureDetails: details,
        type: featureId ? "update" : "create",
        metaobjectId: featureId,
      },

      { method: "POST" },
    );
  };
  return (
    <s-stack gap="small-300">
      <s-button
        variant={featureId ? "secondary" : "primary"}
        commandFor="editModal"
        command="--show"
      >
        {featureId ? <s-icon type="edit" /> : "New Feature"}
      </s-button>
      <s-modal id="editModal" heading="Add Features">
        <s-stack gap="small-300">
          <s-text-field
            label="Feature Name"
            name="Feature"
            value={name}
            onChange={(e) => {
              setName(e.target.value);
            }}
          />
          <s-text-field
            label="Feature Details"
            name="featureDetails"
            value={details}
            onChange={(e) => {
              setDetails(e.target.value);
            }}
          />
        </s-stack>
        <s-button
          slot="secondary-actions"
          commandFor="editModal"
          command="--hide"
        >
          Close
        </s-button>
        <s-button
          onClick={handleSubmit}
          slot="primary-action"
          variant="primary"
          commandFor="editModal"
          command="--hide"
        >
          {featureId ? "save new feature" : "Save"}
        </s-button>
      </s-modal>
    </s-stack>
  );
};
