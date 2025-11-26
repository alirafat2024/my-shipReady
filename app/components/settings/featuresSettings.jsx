import { Footer } from "../shared/footer";
export function FeaturesSettings({ selectedTab }) {
  return selectedTab !== "Features" ? null : (
    <s-page>
      <s-stack gap="base">
        <s-stack gap="base">
          <s-section>
            <s-stack gap="200">
              <s-text as="h2" variant="headingMd">
                Features Settings
              </s-text>
              <s-unordered-list>
                <s-list-item>
                  <s-link
                    url="https://shopify.dev/docs/apps/design-guidelines/navigation#app-nav"
                    target="_blank"
                    removeUnderline
                  >
                    App nav best practices
                  </s-link>
                </s-list-item>
              </s-unordered-list>
            </s-stack>
          </s-section>

          <s-section accessibilityLabel="Empty state section">
            <s-grid gap="base" justifyItems="center" paddingBlock="large-400">
              <s-box maxInlineSize="300px" maxBlockSize="300px">
                {/* aspectRatio should match the actual image dimensions (width/height) */}
                <s-image
                  aspectRatio="1/1"
                  src="https://cdn.shopify.com/s/files/1/0262/4071/2726/files/emptystate-files.png"
                  alt="A stylized graphic of four characters, each holding a puzzle piece"
                />
              </s-box>
              <s-grid justifyItems="center" gap="base">
                <s-stack alignItems="center" gap="base">
                  <s-heading>Add New Feature</s-heading>
                  <s-paragraph>No feature available yet!</s-paragraph>
                </s-stack>

                <s-box>
                  <s-button variant="primary" commandFor="modal">
                    New Feature
                    <s-modal id="modal" heading="Add Features">
                      <s-stack gap="base">
                        <s-section>
                          <s-stack gap="base">
                            <s-text-field label="Feature Name" name="appName" />
                            <s-text-field
                              label="Feature Details"
                              name="appVersion"
                            />
                          </s-stack>
                        </s-section>

                       
                      </s-stack>
                    </s-modal>
                  </s-button>
                </s-box>
              </s-grid>
            </s-grid>
          </s-section>
        </s-stack>
        <Footer />
      </s-stack>
    </s-page>
  );
}
