import { useState } from "react";
import { useFetcher } from "react-router";

export const AddFeatureModal = ({featureId}) => {
  const [featureName, setFeatureName] = useState("");
  const [featureDetails, setFeatureDetails] = useState("");
  const fetcher = useFetcher();

  const handleSubmit = () => {
    fetcher.submit(
      { 
        featureName: featureName,
        featureDetails: featureDetails,
        type: "create",
      },
      
      { method: "POST" },
    );
  };
  return (
    <s-stack gap="small-300">
      <s-button variant="primary" commandFor="modal" command="--show">
        New Feature
      </s-button>
      <s-modal id="modal" heading="Add Features">
        <s-stack gap="small-300">
          <s-text-field
            label="Feature Name"
            name="Feature"
            onChange={(e)=>{
              setFeatureName(e.target.value)
            }}
          />
          <s-text-field
            label="Feature Details"
            name="featureDetails"
            onChange={(e)=>{
              setFeatureDetails(e.target.value)
            }}
          />
        </s-stack>
        <s-button slot="secondary-actions" commandFor="modal" command="--hide">
          Close
        </s-button>
        <s-button
          onClick={ handleSubmit}
          slot="primary-action"
          variant="primary"
          commandFor="modal"
          command="--hide"
        >
          Save
        </s-button>
      </s-modal>
    </s-stack>
  );
};
