export const Specs = () => (
  <s-section >
    <s-stack gap="small-300">
      <s-box>
        <s-stack gap="small-300">
          <s-heading >
            ShipReady App
          </s-heading>
          <s-stack  gap="small-300">
            <s-stack direction="inline" justifyContent="space-between" gap="small-200">
              <s-text  >
                Documentation
              </s-text>
              <s-link url="https://docs.shipready.dev" target="_blank" removeUnderline>
                Docs
              </s-link>
            </s-stack >
            <s-stack direction="inline" justifyContent="space-between" >
              <s-text>
                Template
              </s-text>
              <s-link url="https://shipready.dev" target="_blank" removeUnderline>
                ShipReady
              </s-link>
            </s-stack >
            <s-stack direction="inline" justifyContent="space-between"gap="small-200" >
              <s-text >
                Datasmall-200
              </s-text>
              <s-link
                url="https://www.prisma.io/"
                target="_blank"
                removeUnderline
              >
                Prisma
              </s-link>
            </s-stack >
            <s-stack direction="inline" justifyContent="space-between" gap="small-200">
              <s-text >
                Interface
              </s-text>
              <s-box>
                <s-link
                  url="https://polaris.shopify.com"
                  target="_blank"
                  removeUnderline
                >
                  Polaris
                </s-link>
                {", "}
                <s-link
                  url="https://polaris-viz.shopify.com"
                  target="_blank"
                  removeUnderline
                >
                  Polaris Viz
                </s-link>
                {", "}
                <s-link
                  url="https://shopify.dev/docs/apps/tools/app-bridge"
                  target="_blank"
                  removeUnderline
                >
                  App Bridge
                </s-link>
              </s-box>
            </s-stack >
            <s-stack direction="inline" justifyContent="space-between" gap="small-200">
              <s-text>
                API
              </s-text>
              <s-link
                url="https://shopify.dev/docs/api/admin-graphql"
                target="_blank"
                removeUnderline
              >
                GraphQL API
              </s-link>
            </s-stack >
          </s-stack>
        </s-stack>
      </s-box>
    </s-stack>
  </s-section>
);