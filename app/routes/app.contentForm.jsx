import ContentForm from "../components/contents/contentForm.jsx";
import { redirect } from "react-router-dom";
import { authenticate } from "../shopify.server.js";
export const loader = async ({ request }) => {
  const { admin } = await authenticate.admin(request);

  // Create Metaobject Definition if not exists
  const defResponse = await admin.graphql(
    `#graphql
    mutation {
      metaobjectDefinitionCreate(definition: {
        name: "Contents",
        type: "Contents",
        fieldDefinitions: [
          { name: "title", key: "title", type: "single_line_text_field" },
          { name: "products", key: "products", type: "json" },
          { name: "description", key: "description", type: "multi_line_text_field" },
          { name: "color", key: "color", type: "color" },
          { name: "status", key: "status", type: "single_line_text_field" },
          { name: "publishAt", key: "publishAt", type: "date" },
         
        ]
      }) {
        metaobjectDefinition { name type }
        userErrors { field message code }
      }
    }`,
  );
  const defData = await defResponse.json();
  if (defData.data.metaobjectDefinitionCreate.userErrors.length > 0) {
    const alreadyExists =
      defData.data.metaobjectDefinitionCreate.userErrors.some(
        (e) => e.code === "ALREADY_EXISTS",
      );
    if (!alreadyExists) {
      return { errors: defData.data.metaobjectDefinitionCreate.userErrors };
    }
  }

  return null;
};

export const action = async ({ request }) => {
  const { admin } = await authenticate.admin(request);
  const formData = await request.formData();

  // Get all fields
  const title = formData.get("title");
  const products = formData.get("products");
  const description = formData.get("description");
  const color = formData.get("color");
  const status = formData.get("status");
  const publishAt = formData.get("publishAt");
  const actionType = formData.get("type");
  const metaobjectId = formData.get("metaobjectId"); // Needed for update/delete
  console.log(">>>>>>>>>>>><<<<<<<<<<<<<<<<<<<<");
  console.log(title);
  console.log(products);
  console.log(description);
  console.log(color);
  console.log(status);
  console.log(publishAt);
  console.log(actionType);
  console.log(">>>>>>>>>>>><<<<<<<<<<<<<<<<<<<<");

  // Helper to build fields array
  const fieldsArr = [
    { key: "title", value: title },
    { key: "products", value: products },
    { key: "description", value: description },
    { key: "color", value: color },
    { key: "status", value: status },
    { key: "publishAt", value: publishAt },
  ].filter((f) => f.value !== undefined && f.value !== null);

  // CREATE
  if (actionType === "create") {
    const createResponse = await admin.graphql(
      `#graphql
      mutation {
        metaobjectCreate(metaobject: {
          type: "Contents",
          fields: [
            ${fieldsArr.map((f) => `{ key: "${f.key}", value: """${f.value}""" }`).join(",\n")}
          ]
        }) {
          metaobject {
            id
            type
            fields { key value }
          }
          userErrors { field message code }
        }
      }`,
    );
    const createData = await createResponse.json();
    if (createData.data.metaobjectCreate.userErrors.length > 0) {
      return { errors: createData.data.metaobjectCreate.userErrors };
    }
    return redirect("/app/contents", {
      state: {
        metaobject: createData.data.metaobjectCreate.metaobject,
      },
    });
  }

  return { error: "Invalid action type or missing metaobjectId" };
};

export default function ContentForms() {
  return <ContentForm />;
}
