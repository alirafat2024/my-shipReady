import { Footer } from "../shared/footer";
import { AddFeatureModal } from "./addFeatureModal";

import { DeleteFeatureModal } from "./deleteFeatureModal";

export function FeaturesSettings({ selectedTab, features }) {
  const hasFeatures = features && features.fields && features.fields.length > 0;
  const featureId = features ? features.id : null;
  console.log("...................................");
  console.log(featureId);
  console.log("...................................");

  const getFeatureValues = (key) => {
    return features && features.fields
      ? features.fields
          .filter((field) => field.key === key)
          .map((field) => field.value)
      : [];
  };

  const featureNames = getFeatureValues("featureName");
  const featureDetails = getFeatureValues("featureDetails");

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
          {hasFeatures ? (
            <s-table>
              <s-table-header-row>
                <s-table-header>#</s-table-header>
                <s-table-header>Feature Name</s-table-header>
                <s-table-header>Feature Details</s-table-header>
                <s-table-header></s-table-header>
              </s-table-header-row>
              <s-table-body>
                {featureNames.map((name, index) => {
                  const details = featureDetails[index]; 
                  return (
                    <s-table-row key={index}>
                      <s-table-cell>{index + 1}</s-table-cell>
                      <s-table-cell>{name}</s-table-cell>
                      <s-table-cell>{details}</s-table-cell>
                      <s-table-cell>
                        <s-stack direction="inline" gap="small-300" justifyContent="end" alignItems="center">
                         <s-box><DeleteFeatureModal featureId={featureId} /></s-box>
                          <s-box><AddFeatureModal 
                          featureId={featureId}
                           featureName={name}
                          featureDetails={details}
                          /></s-box>
                        </s-stack>
                      </s-table-cell>
                    </s-table-row>
                  );
                })}
              </s-table-body>
            </s-table>
          ) : (
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
                    <AddFeatureModal featureId={featureId} />
                  </s-box>
                </s-grid>
              </s-grid>
            </s-section>
          )}
        </s-stack>
        <Footer />
      </s-stack>
    </s-page>
  );
}
