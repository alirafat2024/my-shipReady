import { useState } from "react";
import SideNavigation from "../nav/sideNavigation";

import { Footer } from "../shared/footer";
export const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState([]);
  const [activeCategory, setActiveCategory] = useState("All");

  const handleCategoryChange = (category) => {
    setActiveCategory(category);
  };

  const handleToggle = (index) => {
    if (activeIndex.includes(index)) {
      setActiveIndex(activeIndex.filter((i) => i !== index));
    } else {
      setActiveIndex([...activeIndex, index]);
    }
  };
  return (
    <s-page>
      <s-stack gap="base">
        <s-box >
          <SideNavigation pageTitle={"Pricing page"} />
        </s-box>
        
        <s-query-container>
          <s-grid
            gridTemplateColumns="@container (inline-size > 500px)1fr 1fr 1fr , 1fr"
            gap="base"
          >
            <s-grid-item gridColumn="span 1">
              <s-box>
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
                <s-stack gap="small-300">
                  <s-text>Search FAQs</s-text>
                  <s-search-field
                    label="Search"
                    labelAccessibilityVisibility="exclusive"
                    placeholder="Search items"
                  />
                  <s-stack direction="inline" justifyContent="start" gap="base">
                    <s-box direction="inline">
                      <s-clickable
                        padding="small-300"
                        borderRadius="bas"
                        onClick={() => handleCategoryChange("All")}
                        background={activeCategory === "All" ? "subdued" : "transparent"}
                      >
                        All
                      </s-clickable>
                    </s-box>
                    <s-box direction="inline">
                      <s-clickable
                        padding="small-300"
                        borderRadius="base"
                        onClick={() => handleCategoryChange("Pricing")}
                        background={activeCategory === "Pricing" ? "subdued" : "transparent"}
                      >
                        Pricing
                      </s-clickable>
                    </s-box>
                    <s-box direction="inline">
                      <s-clickable
                        padding="small-300"
                        borderRadius="base"
                        onClick={() => handleCategoryChange("Features")}
                        background={activeCategory === "Features" ? "subdued" : "transparent"}
                      >
                        Features
                      </s-clickable>
                    </s-box>
                    <s-box direction="inline">
                      <s-clickable
                        padding="small-300"
                        borderRadius="base"
                        onClick={() => handleCategoryChange("Compatibility")}
                        background={activeCategory === "Compatibility" ? "subdued" : "transparent"}
                      >
                        Compatibility
                      </s-clickable>
                    </s-box>
                    <s-box direction="inline">
                      <s-clickable
                        padding="small-300"
                        borderRadius="base"
                        onClick={() => handleCategoryChange("Support")}
                        background={activeCategory === "Support" ? "subdued" : "transparent"}
                      >
                        Support
                      </s-clickable>
                    </s-box>
                  </s-stack>
                  <s-stack  >
                    <s-box>
                      {activeCategory === "All" && (
                        <>
                          <s-clickable
                            onClick={() => handleToggle(0)}
                            padding="small-100"
                            borderRadius="base"
                          >
                            <s-stack gap="small-300">
                              <s-heading>
                                How much does ShipReady cost?
                              </s-heading>
                              {activeIndex.includes(0) && (
                                <s-paragraph>
                                  ShipReady offers flexible pricing plans
                                  starting at $29/month. We also offer a 14-day
                                  free trial for all new users.
                                </s-paragraph>
                              )}
                            </s-stack>
                          </s-clickable>
                          <s-divider/>
                          <s-clickable
                            onClick={() => handleToggle(1)}
                            borderRadius="base"
                            padding="small-100"
                           >
                            <s-stack gap="small-300">
                              <s-heading>
                                {" "}
                                Can I use ShipReady with my existing shipping
                                carrier?
                              </s-heading>
                              {activeIndex.includes(1) && (
                                <s-paragraph>
                                  Yes, ShipReady integrates with most major
                                  shipping carriers, including USPS, FedEx, UPS,
                                  and DHL.
                                </s-paragraph>
                              )}
                            </s-stack>
                          </s-clickable>
                          <s-divider/>
                          <s-clickable
                            onClick={() => handleToggle(2)}
                            borderRadius="base"
                            padding="small-100"
                           >
                            <s-stack gap="small-300">
                              <s-heading>
                                {" "}
                                How does ShipReady handle international
                                shipping?
                              </s-heading>
                              {activeIndex.includes(2) && (
                                <s-paragraph>
                                  ShipReady supports international shipping and
                                  automatically generates all required customs
                                  forms and documentation.
                                </s-paragraph>
                              )}
                            </s-stack>
                          </s-clickable>
                          <s-divider/>
                          <s-clickable
                            onClick={() => handleToggle(3)}
                            borderRadius="base"
                            padding="small-100"
                           >
                            <s-stack gap="small-300">
                              <s-heading>
                                {" "}
                                Is ShipReady compatible with my Shopify theme?
                              </s-heading>
                              {activeIndex.includes(3) && (
                                <s-paragraph>
                                  ShipReady is designed to work seamlessly with
                                  all Shopify themes. If you encounter any
                                  issues, our support team is here to help.
                                </s-paragraph>
                              )}
                            </s-stack>
                          </s-clickable>
                          <s-divider/>
                          <s-clickable
                            onClick={() => handleToggle(4)}
                            borderRadius="base"
                            padding="small-100"
                          >
                            <s-stack gap="small-300">
                              <s-heading>
                                How can I contact ShipReady support?
                              </s-heading>
                              {activeIndex.includes(4) && (
                                <s-paragraph>
                                  You can reach our support team via email at
                                  support@shipready.com or through the in-app
                                  chat feature available 24/7.
                                </s-paragraph>
                              )}
                            </s-stack>
                          </s-clickable>
                        </>
                      )}
                    </s-box>
                    <s-box >
                      {activeCategory === "Pricing" && (
                        <>
                          <s-clickable
                            onClick={() => handleToggle(5)}
                            borderRadius="base"
                            padding="small-100"
                          >
                            <s-stack gap="small-300">
                              <s-heading>
                                How much does ShipReady cost?
                              </s-heading>
                              {activeIndex.includes(5) && (
                                <s-paragraph>
                                  ShipReady offers flexible pricing plans
                                  starting at $29/month. We also offer a 14-day
                                  free trial for all new users.
                                </s-paragraph>
                              )}
                            </s-stack>
                          </s-clickable>
                        </>
                      )}
                    </s-box>
                    <s-box>
                      {activeCategory === "Features" && (
                        <>
                          <s-clickable
                            onClick={() => handleToggle(6)}
                            borderRadius="base"
                            padding="small-100"
                           >
                            <s-stack gap="small-300">
                              <s-heading>
                                Can I use ShipReady with my existing shipping
                                carrier?
                              </s-heading>
                              {activeIndex.includes(6) && (
                                <s-paragraph>
                                  Yes, ShipReady integrates with most major
                                  shipping carriers, including USPS, FedEx, UPS,
                                  and DHL.
                                </s-paragraph>
                              )}
                            </s-stack>
                          </s-clickable>
                          <s-divider/>
                          <s-clickable
                            onClick={() => handleToggle(7)}
                            borderRadius="base"
                            padding="small-100"
                          >
                            <s-stack gap="small-300">
                              <s-heading>
                                How does ShipReady handle international
                                shipping?
                              </s-heading>
                              {activeIndex.includes(7) && (
                                <s-paragraph>
                                  ShipReady supports international shipping and
                                  automatically generates all required customs
                                  forms and documentation.
                                </s-paragraph>
                              )}
                            </s-stack>
                          </s-clickable>
                        </>
                      )}
                    </s-box>
                    <s-box>
                      {activeCategory === "Compatibility" && (
                        <>
                          <s-clickable
                            onClick={() => handleToggle(8)}
                            borderRadius="base"
                            padding="small-100"
                          >
                            <s-stack gap="small-300">
                              <s-heading>
                                Is ShipReady compatible with my Shopify theme?
                              </s-heading>
                              {activeIndex.includes(8) && (
                                <s-paragraph>
                                  ShipReady is designed to work seamlessly with
                                  all Shopify themes. If you encounter any
                                  issues, our support team is here to help.
                                </s-paragraph>
                              )}
                            </s-stack>
                          </s-clickable>
                        </>
                      )}
                    </s-box>
                    <s-box>
                      {activeCategory === "Support" && (
                        <>
                          <s-clickable
                            onClick={() => handleToggle(9)}
                            borderRadius="base"
                            padding="small-100"
                          >
                            <s-stack gap="small-300">
                              <s-heading>
                                {" "}
                                How can I contact ShipReady support?
                              </s-heading>
                              {activeIndex.includes(9) && (
                                <s-paragraph>
                                  You can reach our support team via email at
                                  support@shipready.com or through the in-app
                                  chat feature available 24/7.
                                </s-paragraph>
                              )}
                            </s-stack>
                          </s-clickable>
                        </>
                      )}
                    </s-box>
                  </s-stack>
                </s-stack>
              </s-section>
            </s-grid-item>
          </s-grid>
        </s-query-container>
        <Footer />
      </s-stack>
    </s-page>
  );
};
