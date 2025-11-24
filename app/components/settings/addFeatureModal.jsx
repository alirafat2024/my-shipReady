

export const AddFeatureModal = ( ) => {
 
  return (
   <s-stack>
     <s-form method="post" >
      <s-modal id="add-feature-modal">
        <s-box padding="400">
          <s-input type="hidden" name="saveFeatures"  />
           <s-input type="hidden" name="id"  />
          <s-section>
            <s-stack>
                <s-text-field
                  label="Feature name"
                  name="featureName"
                />
                <s-text-field
                  label="Feature details"
                  name="featureDetails"
                  multiline={2}
                />
            </s-stack>
          </s-section>
        </s-box>
        <s-heading title="Add Feature">
          <s-button
            variant="primary"
            type="submit"
          >
            Save
          </s-button>
          <s-button
            type=""
          >
            Cancel
          </s-button>
        </s-heading>
      </s-modal>
    </s-form>
   </s-stack>
  );
};
