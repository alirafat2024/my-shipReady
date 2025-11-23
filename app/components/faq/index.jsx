export const FAQ = () => {
  return (
    <s-page>
      <s-stack
        paddingBlockEnd="large-100"
        direction="inline"
        gap="base"
        justifyContent="start"
        alignItems="center"
      >
        <s-icon type="arrow-left" />
        <s-heading level="1" variant="headingLg">
          <h2>FAQ page </h2>
        </s-heading>
      </s-stack>
      <s-query-container>
        <s-grid
          gridTemplateColumns="@container (inline-size > 500px)1fr 1fr 1fr , 1fr"
          gap="base"
        >
          <s-grid-item gridColumn="span 1">
            <s-box >
              <s-stack gap="large-100">
                <s-heading level="1" variant="headingLg">
                  Frequently asked questions
                </s-heading>
                <s-paragraph>
                  Find answers to common questions about ShipReady and how it
                  can help you build Shopify apps faster.
                </s-paragraph>

                <s-heading level="1" variant="headingLG">
                  Knowledge base
                </s-heading>
                <s-paragraph>
                  Browse our knowledge base to find detailed guides and
                  tutorials on how to use ShipReady to its full potential.
                </s-paragraph>

                <s-heading level="1" variant="headingLg">
                  Contact us by email
                </s-heading>
                <s-paragraph>
                  If you wish to write us an email instead please use
                  contact@yourapp.com
                </s-paragraph>
              </s-stack>
            </s-box>
          </s-grid-item>

          <s-grid-item gridColumn="span 2">
            <s-section>
              <s-stack>
                <s-heading>Search FAQs</s-heading>
                <s-search-field
                  label="Search"
                  labelAccessibilityVisibility="exclusive"
                  placeholder="Search items"
                />
                <s-stack direction="inline" justifyContent="center" gap="base">
                  <s-box direction="inline">
                    <s-clickable background="subdued" borderRadius="bas">
                      All
                    </s-clickable>
                  </s-box>
                  <s-box direction="inline">
                    <s-clickable background="subdued" borderRadius="base">
                      Pricing
                    </s-clickable>
                  </s-box>
                  <s-box direction="inline">
                    <s-clickable background="subdued" borderRadius="base">
                      Features
                    </s-clickable>
                  </s-box>
                  <s-box direction="inline">
                    <s-clickable background="subdued" borderRadius="base">
                      Compatibility
                    </s-clickable>
                  </s-box>
                  <s-box direction="inline">
                    <s-clickable background="subdued" borderRadius="base">
                      Support
                    </s-clickable>
                  </s-box>
                </s-stack>
                <s-stack>
                  <s-clickable background="subdued"
                  border="base"
                  padding="small-300"
                   borderRadius="base">
                      How much does ShipReady cost?
                    </s-clickable><s-clickable background="subdued" borderRadius="base"
                    border="base"
                  padding="small-300"
                    >
                      Can I use ShipReady with my existing shipping carrier?
                    </s-clickable><s-clickable background="subdued" borderRadius="base"
                    border="base"
                  padding="small-300">
                      How does ShipReady handle international shipping?
                    </s-clickable><s-clickable background="subdued" borderRadius="base"
                    border="base"
                  padding="small-300">
                      Is ShipReady compatible with my Shopify theme?
                    </s-clickable><s-clickable background="subdued" borderRadius="base"
                    border="base"
                  padding="small-300">
                     How can I contact ShipReady support?
                    </s-clickable><s-clickable background="subdued" borderRadius="base"
                    border="base"
                  padding="small-300">
                      How much does ShipReady cost?
                    </s-clickable><s-clickable background="subdued" borderRadius="base"
                    border="base"
                  padding="small-300">
                      
                     Can I use ShipReady with my existing shipping carrier?
                    </s-clickable><s-clickable background="subdued" borderRadius="base"
                    border="base"
                  padding="small-300">
                      How does ShipReady handle international shipping?
                    </s-clickable><s-clickable background="subdued" borderRadius="base"
                    border="base"
                  padding="small-300">
                     Is ShipReady compatible with my Shopify theme?
                    </s-clickable><s-clickable background="subdued" borderRadius="base"
                    border="base"
                  padding="small-300">
                      How can I contact ShipReady support?
                    </s-clickable>
                </s-stack>
              </s-stack>
            </s-section>
          </s-grid-item>
        </s-grid>
      </s-query-container>
    </s-page>
  );
};
