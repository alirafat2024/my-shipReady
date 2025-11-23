export default function Contents() {
  return (
    <s-page heading="Additional page">
      <s-stack direction="block" gap="base">
        <s-box border="base" padding="base" borderRadius="base">
          <s-stack direction="inline" justifyContent="space-between">
            <s-box inlineSize="760px">
              <s-stack direction="inline" gap="base">
                <s-heading>content</s-heading>
                <s-icon></s-icon>
              </s-stack>
              <s-paragraph>
                Create and manage your contents here. You can add, edit, and
                delete contents.
              </s-paragraph>
            </s-box>
            <s-button icon="plus" variant="primary">
              New function
            </s-button>
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
                <s-heading>Start creating puzzles</s-heading>
                <s-paragraph>
                  Create and manage your collection of puzzles for players to
                  enjoy.
                </s-paragraph>
              </s-stack>
              <s-button-group>
                <s-button
                  slot="secondary-actions"
                  aria-label="Learn more about creating puzzles"
                >
                  {" "}
                  Learn more{" "}
                </s-button>
                <s-button slot="primary-action" aria-label="Add a new puzzle">
                  {" "}
                  Create puzzle{" "}
                </s-button>
              </s-button-group>
            </s-grid>
          </s-grid>
        </s-section>
      </s-stack>
    </s-page>
  );
}
