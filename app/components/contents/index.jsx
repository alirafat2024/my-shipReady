import SideNavigation from "../nav/sideNavigation";
import { Footer } from "../shared/footer";
import { useNavigate } from "react-router";
import { DeleteContentModal } from "./deleteContentModal";
import { EditContentModal } from "./editContentModal";
export default function Contents({ contents }) {
  const hasContent = Array.isArray(contents) && contents.length > 0;
  const navigate = useNavigate();

  const getFeatureValue = (content, key) => {
    const field = content?.fields?.find((field) => field.key === key);
    return field ? field.value : "";
  };

  return (
    <s-page>
      <s-stack direction="block" gap="base">
        <s-stack>
          <s-stack direction="inline" justifyContent="space-between">
            <s-box>
              <SideNavigation pageTitle={"Content"} />
            </s-box>
            <s-box>
              <s-button
                icon="plus"
                variant="primary"
                onClick={() => {
                  navigate("/app/contentForm");
                }}
              >
                New Content
              </s-button>
            </s-box>
          </s-stack>
          <s-stack paddingInlineStart="large-400">
            <s-paragraph>
              Create and manage your contents here. You can add, edit, and
              delete contents.
            </s-paragraph>
          </s-stack>
        </s-stack>

        {hasContent ? (
          <s-table>
            <s-table-header-row>
              <s-table-header>Title</s-table-header>
              <s-table-header>Status</s-table-header>
              <s-table-header>Created At</s-table-header>
              <s-table-header></s-table-header>
            </s-table-header-row>
            <s-table-body>
              {contents.map((content, index) => {
                const title = getFeatureValue(content, "title");
                const status = getFeatureValue(content, "status");
                const createdAt = getFeatureValue(content, "publishAt");

                return (
                  <s-table-row key={index}>
                    <s-table-cell>{title}</s-table-cell>
                    <s-table-cell>
                      <s-badge
                        tone={status === "published" ? "success" : "critical"}
                      >
                        {status === "published" ? "Active" : "Incomplete"}
                      </s-badge>
                    </s-table-cell>

                    <s-table-cell>{createdAt}</s-table-cell>
                    <s-table-cell>
                    
                        <s-stack direction="inline" gap="small" justifyContent="end" alignItems="center">
                          <DeleteContentModal contentId={content.id} />
                          <EditContentModal
                            contentId={content.id}
                            title={title}
                            status={status}
                            createdAt={createdAt}
                          />
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
              <s-box maxInlineSize="200px" maxBlockSize="200px">
                <s-image
                  aspectRatio="1/0.5"
                  src="https://cdn.shopify.com/s/files/1/0579/8749/8059/files/create-content.svg?v=1723585472"
                  alt="A stylized graphic of four characters, each holding a puzzle piece"
                />
              </s-box>
              <s-grid justifyItems="center" maxInlineSize="450px" gap="base">
                <s-stack alignItems="center" justifyContent="center">
                  <s-heading level="1" variant="headingLg">
                    Manage your contents
                  </s-heading>
                  <s-paragraph justifyContent="center">
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
                    Add Content
                  </s-button>
                </s-button-group>
              </s-grid>
            </s-grid>
          </s-section>
        )}

        <s-stack>
          <Footer />
        </s-stack>
      </s-stack>
    </s-page>
  );
}
