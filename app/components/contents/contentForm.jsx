import SideNavigation from "../nav/sideNavigation";
import { useState } from "react";
import { Form } from "react-router";
import { useFetcher } from "react-router";
export const ContentForm = () => {
  const fetcher = useFetcher();
  const [products, setProducts] = useState([]);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [color, setColor] = useState("#000000");
  const [status, setStatus] = useState("draft");
  const [publishAt, setPublishAt] = useState(Date.now());

  const handleSave = () => {
    fetcher.submit(
      {
        title: title,
        products: products,
        description: description,
        color: color,
        status: status,
        publishAt: publishAt,
        type: "create",
      },

      { method: "POST" },
    );
  };
  const handleProduct = async () => {
    const selected = await shopify.resourcePicker({
      type: "product",
      multiple: true,
    });
    setProducts(selected);
    console.log(">>>>>>>>>>>>>>>>>>>>>>>>>>>>>>");
    console.log(selected);
    console.log(">>>>>>>>>>>>>>>>>>>>>>>>>>>>>>");
  };

  return (
    <s-page>
      <s-stack>
        <s-box>
          <SideNavigation pageTitle={"Content"} />
        </s-box>
        <Form
          data-save-bar
          onSubmit={handleSave}
          onReset="handleDiscord(event)"
        >
          <s-query-container>
            <s-grid
              gridTemplateColumns="@container (inline-size > 500px) 1fr 1fr 1fr, 1fr"
              gap="base"
            >
              <s-grid-item gridColumn="span 2">
                <s-section>
                  <s-stack gap="base">
                    <s-text-field
                      name="title"
                      label="Title"
                      onChange={(e) => {
                        setTitle(e.target.value);
                      }}
                    />

                    <s-text-area
                      label="Description"
                      rows={5}
                      onChange={(e) => {
                        setDescription(e.target.value);
                      }}
                      name="description"
                    />
                    <s-box border="base" padding="base" borderRadius="base">
                      <s-headding>Select Content Products</s-headding>
                      <s-text>
                        Choose the products that will be part of this campaign
                      </s-text>
                      <s-stack
                        direction="inline"
                        gap="base"
                        justifyContent="space-between"
                        alignItems="center"
                      >
                        <s-box inlineSize="450px">
                          <s-select>
                            <s-option value="1">Specific products</s-option>
                          </s-select>
                        </s-box>
                        <s-box>
                          <s-button onClick={handleProduct}>brows</s-button>
                        </s-box>
                      </s-stack>
                      {products.length > 0 && (
                        <s-stack gap="small">
                          {products.map((product) => (
                            <s-stack
                              key={product.id}
                              direction="inline"
                              gap="base"
                            >
                              <s-box inlineSize="50px" blockSize="50px">
                                <s-image
                                  src={
                                    product.images && product.images[0]
                                      ? product.images[0].originalSrc
                                      : ""
                                  }
                                  alt={product.title}
                                  aspectRatio="1/0.5"
                                  objectFit="cover"
                                />
                              </s-box>
                              <s-box>
                                <s-text>{product.title}</s-text>
                                <s-paragraph>{product.publishedAt}</s-paragraph>
                              </s-box>
                            </s-stack>
                          ))}
                        </s-stack>
                      )}
                    </s-box>
                  </s-stack>
                </s-section>
              </s-grid-item>
              <s-grid-item>
                <s-section>
                  <s-stack gap="large">
                    <s-select
                      label="Status"
                      onChange={(e) => {
                        setStatus(e.target.value);
                      }}
                      value={status}
                    >
                      <s-option value="draft">Draft</s-option>
                      <s-option value="published">Published</s-option>
                    </s-select>

                    <s-date-field
                      type="range"
                      value="2025-05-28--2025-05-31"
                      label="Publish at"
                      onChange={(e) => {
                        setPublishAt(e.target.value);
                      }}
                      name="publishAt"
                    />

                    <s-color-field
                      placeholder="Select a color"
                      value="#FF0000"
                      label="Select color #000000"
                      onChange={(e) => {
                        setColor(e.target.value);
                      }}
                      name="color"
                    />
                  </s-stack>
                </s-section>
              </s-grid-item>
            </s-grid>
          </s-query-container>
        </Form>
      </s-stack>
    </s-page>
  );
};

export default ContentForm;
