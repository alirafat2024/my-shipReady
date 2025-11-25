import SideNavigation from "../nav/sideNavigation";
import TabNavigation from "../nav/tabNavigation";
import { Footer } from "../shared/footer";
export default function Contents() {
  return (
    <s-page>
      <s-stack direction="block" gap="base">
           <TabNavigation/>
        <s-box border="base" padding="base" borderRadius="base">
          <s-stack direction="inline" justifyContent="space-between">
            <s-box>
              <SideNavigation pageTitle={"Content"} />
            </s-box>
            <s-box>
              <s-button icon="plus" variant="primary">
                New function
              </s-button>
            </s-box>
          </s-stack>
          <s-stack paddingInlineStart="large-300">
            <s-paragraph>
              Create and manage your contents here. You can add, edit, and
              delete contents.
            </s-paragraph>
          </s-stack>
        </s-box>

        <s-section accessibilityLabel="Empty state section">
          <s-grid gap="base" justifyItems="center" paddingBlock="large-400">
            <s-box maxInlineSize="200px" maxBlockSize="200px">
              <s-image
                aspectRatio="1/0.5"
                src="https://cdn.shopify.com/s/files/1/0579/8749/8059/files/create-content.svg?v=1723585472"
                alt="A stylized graphic of four characters, each holding a puzzle piece"
              />
            </s-box>
            <s-grid justifyItems="center" maxInlineSize="450px" gap="base">
              <s-stack alignItems="center">
                <s-heading level="1" variant="headingLg">
                  Manage your contents
                </s-heading>
                <s-paragraph>
                  Create and manage your contents here. You can add, edit, and
                  delete contents.
                </s-paragraph>
              </s-stack>
              <s-button-group>
                <s-button
                  slot="secondary-actions"
                  aria-label="Learn more about creating puzzles"
                >
                 Learn more
                </s-button>
                <s-button slot="primary-action" variant="primary">
                  {" "}
                  Add Content{" "}
                </s-button>
              </s-button-group>
            </s-grid>
          </s-grid>
        </s-section>
         <s-stack>
        <Footer />
      </s-stack>
      </s-stack>
     
    </s-page>
  );
}
