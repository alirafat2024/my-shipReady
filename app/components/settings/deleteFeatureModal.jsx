

export const DeleteFeatureModal = ({ selected, setSelected }) => {
  const handleSubmit = () => {
    shopify.modal.hide("delete-feature-modal");
    setSelected(undefined);
  };

  return (
    <s-section method="post" >
      <s-modal id="delete-feature-modal">
        <s-box padding="400">
          <s-input type="hidden" name="deleteFeatures" value={true} />
          <s-input type="hidden" name="id" value={selected?.id} />
          <s-text>Do you want to remove the feature?</s-text>
        </s-box>

       
          <s-button
            onClick={() => handleSubmit()}
            variant="primary"
            type="submit"
            tone="critical"
          >
            Yes
          </s-button>
          <s-button
            onClick={() => {
              shopify.modal.hide("delete-feature-modal");
              setSelected(undefined);
            }}
          >
            No
          </s-button>
       
      </s-modal>
    </s-section>
  );
};
