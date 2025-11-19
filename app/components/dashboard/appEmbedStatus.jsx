export function AppEmbedStatus() {
  return (
    <s-section>
      <s-stack direction="inline"  justifyContent="space-between" >
        <s-box maxInlineSize="600px">
          <s-stack direction="block" gap="base">
            <s-heading>One more step: Enable your app embed</s-heading>
            <s-paragraph>
              To start using the app, you need to enable the app embed in your
              store theme and save. Then, verify that it is enabled.
            </s-paragraph>
            <s-unordered-list type="bullet">
              <s-list-item>
                Click on <strong>Online Store</strong> &gt;{" "}
                <strong>Themes</strong>
              </s-list-item>
              <s-list-item>
                Click on the current theme <strong>Customize</strong>
              </s-list-item>
              <s-list-item>
                App embeds &gt; <strong>ShipReady Assets</strong>
              </s-list-item>
              <s-list-item>
                Enable the app embed and click <strong>Save</strong>
              </s-list-item>
            </s-unordered-list>
            <s-stack direction="inline" gap="base">
              <s-button variant="primary" icon="toggle-on">
                  Enable app embed
              </s-button>
              <s-button variant="secondary" icon="check-circle">
                  Verify app embed is enabled
              </s-button>
            </s-stack>
          </s-stack>
        </s-box>
        <s-box border="base">
          <s-image
            src="https://cdn.shopify.com/s/files/1/0579/8749/8059/files/shipready-app-embed.gif?v=1710618877&width=300"
            alt="Enable app embed"
             aspectRatio="3/2"
             inlineSize="auto"
             objectFit="cover"
            
          />
        </s-box>
      </s-stack>
    </s-section>
  );
}
