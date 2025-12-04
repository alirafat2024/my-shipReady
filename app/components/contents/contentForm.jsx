import SideNavigation from "../nav/sideNavigation";

const handleProduct = async () => {
  const selected = await shopify.resourcePicker({ type: "product", multiple: true });
};
export const ContentForm = () => {
  return (
    <s-page>
      <s-stack>
        <s-box>
          <SideNavigation pageTitle={"Content"} />
        </s-box>
        <s-query-container>
          <s-grid
            gridTemplateColumns="@container (inline-size > 500px) 1fr 1fr 1fr, 1fr"
            gap="base"
          >
            <s-grid-item gridColumn="span 2">
              <s-section>
                <s-stack gap="base">
                  <s-text-field name="title" label="Title" />

                  <s-text-area label="Description" rows={5} />
                  <s-box border="base" padding="base" borderRadius="base">
                    <s-headding>Select Content Products</s-headding>
                    <s-text>Choose the products that will be part of this campaign</s-text>
                    <s-stack
                      direction="inline"
                      gap="base"
                      justifyContent="space-between"
                      alignItems="center"
                    >
                      <s-box inlineSize="450px">
                        <s-select >
                          <s-option value="1">Specific products</s-option>
                        </s-select>
                      </s-box>
                      <s-box>
                        <s-button onClick={handleProduct}>brows</s-button>
                      </s-box>
                    </s-stack>
                  </s-box>
                </s-stack>
              </s-section>
            </s-grid-item>
            <s-grid-item>
              <s-section>
                <s-stack gap="large">
                  <s-select label="Status">
                    <s-option value="1">Draft</s-option>
                    <s-option value="1">Published</s-option>
                  </s-select>

                  <s-date-field
                    type="range"
                    value="2025-05-28--2025-05-31"
                    label="Publish at"
                  />

                  <s-color-field
                    placeholder="Select a color"
                    value="#FF0000"
                    label="Select color #000000"
                  />
                </s-stack>
              </s-section>
            </s-grid-item>
          </s-grid>
        </s-query-container>
      </s-stack>
    </s-page>
  );
};

export default ContentForm;
