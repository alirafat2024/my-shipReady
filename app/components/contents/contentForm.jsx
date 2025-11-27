export const ContentForm = () => {
  return (
    <s-page>
      <s-query-container>
        <s-grid
          gridTemplateColumns="@container (inline-size > 500px) 1fr 1fr 1fr, 1fr"
          gap="base"
        >
          <s-grid-item gridColumn="span 2">
            <s-section>
              <s-stack gap="base">
                <s-text-field name="title" label="Title" />

                <s-text-area
                  label="description"
             
                  rows={5}
                />
                <s-headding>Select Content Products</s-headding>
                <s-stack direction="inline" gap="base" justifyContent="space-between">
                  <s-box>
                    <s-select label="Choose the products that will be part of this campaign">
                      <s-option value="1">Specific products</s-option>
                    </s-select>
                  </s-box>
                  <s-box>
                    <s-button>brows</s-button>
                  </s-box>
                </s-stack>
              </s-stack>
            </s-section>
          </s-grid-item>
          <s-grid-item>
            <s-section>
              <s-stack gap="base">
                <s-select label="Status">
                  <s-option value="1">Draft</s-option>
                  <s-option value="1">Published</s-option>
                </s-select>

                <s-date-field type="range" value="2025-05-28--2025-05-31" />

                <s-color-field placeholder="Select a color" value="#FF0000" />
              </s-stack>
            </s-section>
          </s-grid-item>
        </s-grid>
      </s-query-container>
    </s-page>
  );
};

export default ContentForm;
