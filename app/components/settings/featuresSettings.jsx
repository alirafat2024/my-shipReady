import { useState, useEffect } from "react";
import { AddFeatureModal } from "./addFeatureModal";
import { DeleteFeatureModal } from "./deleteFeatureModal";


export function FeaturesSettings() {
  // Define the 'features' state
  const [features, setFeatures] = useState([]);  // Initially empty, you would fetch data here
  const [selected, setSelected] = useState(null);

  // Define the 'selectedTab' state
  const [selectedTab, setSelectedTab] = useState("features"); // Set default tab as "features"

  // Mocking fetching features (You would replace this with a real API call)
  useEffect(() => {
    const fetchFeatures = () => {
      // Replace this mock with an API call
      const mockFeatures = [
        { id: "1", featureName: "Feature 1", featureDetails: "Feature 1 details" },
        { id: "2", featureName: "Feature 2", featureDetails: "Feature 2 details" },
        { id: "3", featureName: "Feature 3", featureDetails: "Feature 3 details" },
      ];
      setFeatures(mockFeatures);
    };

    fetchFeatures();
  }, []);

  // Empty state markup if no features exist
  const emptyStateMarkup = (
    <s-section accessibilityLabel="Empty state section">
      <s-grid gap="base" justifyItems="center" paddingBlock="large-400">
        <s-box maxInlineSize="200px" maxBlockSize="200px">
          <s-image
            aspectRatio="1/0.5"
            src="https://cdn.shopify.com/static/images/polaris/patterns/callout.png"
            alt="A stylized graphic of four characters, each holding a puzzle piece"
          />
        </s-box>
        <s-grid justifyItems="center" maxInlineSize="450px" gap="base">
          <s-stack alignItems="center">
            <s-heading>Start creating puzzles</s-heading>
            <s-paragraph>
              Create and manage your collection of puzzles for players to enjoy.
            </s-paragraph>
          </s-stack>
          <s-button-group>
            <s-button
              slot="secondary-actions"
              aria-label="Learn more about creating puzzles"
            >
              Learn more
            </s-button>
            <s-button slot="primary-action" aria-label="Add a new puzzle">
              Create puzzle
            </s-button>
          </s-button-group>
        </s-grid>
      </s-grid>
    </s-section>
  );

  // Render list of features if available
  const listMarkup = features.length > 0 && (
    <s-table
      resourceName={{
        singular: "feature",
        plural: "features",
      }}
      itemCount={features.length}
      selectable={false}
      headings={[
        { title: "#" },
        { title: "Name" },
        { title: "Details" },
        { title: "" },
      ]}
    >
      {features.map(({ id, featureName, featureDetails }, i) => (
        <s-table-row id={id} key={i} position={i}>
          <s-table-cell>
            <s-text variant="bodyMd" fontWeight="bold" as="span">
              <s-badge tone="info">{i + 1}</s-badge>
            </s-text>
          </s-table-cell>
          <s-table-cell>
            <s-text variant="headingSm">{featureName}</s-text>
          </s-table-cell>
          <s-table-cell>
            <s-box width="200px">
              <s-text variant="bodyMd" truncate={true}>
                {featureDetails}
              </s-text>
            </s-box>
          </s-table-cell>
          <s-table-cell>
            <s-stack direction="inline" gap="200">
              <s-button
                variant="tertiary"
                tone="success"
                onClick={() => {
                  setSelected({ id, featureName, featureDetails });
                  shopify.modal.show("add-feature-modal");
                }}
              >
                Edit
              </s-button>
              <s-button
                variant="tertiary"
                tone="critical"
                onClick={() => {
                  setSelected({ id, featureName, featureDetails });
                  shopify.modal.show("delete-feature-modal");
                }}
              >
                Delete
              </s-button>
            </s-stack>
          </s-table-cell>
        </s-table-row>
      ))}
    </s-table>
  );

  return selectedTab !== "features" ? null : (
    <s-stack gap="400">
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
      <s-stack gap="200">
        {features.length > 0 && (
          <s-box>
            <s-button
              
              variant="primary"
              onClick={() => shopify.modal.show("add-feature-modal")}
            >
              Add
            </s-button>
          </s-box>
        )}
        <s-section padding={0}>
          {features.length > 0 ? listMarkup : emptyStateMarkup}
        </s-section>
      </s-stack>
      <AddFeatureModal selected={selected} setSelected={setSelected} />
      <DeleteFeatureModal selected={selected} setSelected={setSelected} />
    </s-stack>
  );
}
