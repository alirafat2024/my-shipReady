import Settings from "../components/settings/index.jsx";


import { authenticate } from "../shopify.server.js";

export const loader = async ({ request }) => {
  const { admin } = await authenticate.admin(request);

  // Try to fetch the metaobject by type "Feature"
  const getResponse = await admin.graphql(
    `#graphql
    query {
      metaobjects(type: "Features", first: 1) {
        edges {
          node {
            id
            type
            fields {
              key
              value
            }
          }
        }
      }
    }`,
  );
  const getData = await getResponse.json();

  // If metaobject exists, return it
  const meta = getData.data.metaobjects.edges[0]?.node;
  if (meta) {
    console.log("_______________________________________________");
    console.log(meta);
    console.log("_______________________________________________");
    return meta;
  }

  // Create Metaobject Definition if not exists
  const defResponse = await admin.graphql(
    `#graphql
    mutation {
      metaobjectDefinitionCreate(definition: {
        name: "Features",
        type: "Features",
        fieldDefinitions: [
          { name: "Feature Name", key: "featureName", type: "single_line_text_field" },
          { name: "Feature Details", key: "featureDetails", type: "single_line_text_field" }
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

  return { meta };
};

export const action = async ({ request }) => {
  const { admin } = await authenticate.admin(request);
  const formData = await request.formData();

  const featureName = formData.get("featureName");
  const featureDetails = formData.get("featureDetails");
  const actionType = formData.get("type"); // Should be "create", "update", or "delete"
  const metaobjectId = formData.get("metaobjectId"); // Needed for update/delete
  console.log(">>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>");
  console.log(featureName);
  console.log(featureDetails);
  console.log(actionType);
  console.log(metaobjectId);

  console.log(">>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>");
  // CREATE
  if (actionType === "create") {
    const createResponse = await admin.graphql(
      `#graphql
      mutation {
        metaobjectCreate(metaobject: {
          type: "Features",
          fields: [
            { key: "featureName", value: "${featureName}" },
            { key: "featureDetails", value: "${featureDetails}" }
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
    return { metaobject: createData.data.metaobjectCreate.metaobject };
  }

  // UPDATE
  if (actionType === "update" && metaobjectId) {
    const updateResponse = await admin.graphql(
      `#graphql
      mutation {
        metaobjectUpdate(id: "${metaobjectId}", metaobject: {
          fields: [
            { key: "featureName", value: "${featureName}" },
            { key: "featureDetails", value: "${featureDetails}" }
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
    const updateData = await updateResponse.json();
    if (updateData.data.metaobjectUpdate.userErrors.length > 0) {
      return { errors: updateData.data.metaobjectUpdate.userErrors };
    }
    return { metaobject: updateData.data.metaobjectUpdate.metaobject };
  }

  // DELETE
  if (actionType === "delete" && metaobjectId) {
    const deleteResponse = await admin.graphql(
      `#graphql
      mutation {
       metaobjectDelete(id: "${metaobjectId}") {
             deletedId
           userErrors { field message code }
          }
      }`,
    );
    const deleteData = await deleteResponse.json();
    if (deleteData.data.metaobjectDelete.userErrors.length > 0) {
      return { errors: deleteData.data.metaobjectDelete.userErrors };
    }
    return {
      deletedMetaobjectId: deleteData.data.metaobjectDelete.deletedMetaobjectId,
    };
  }

  return { error: "Invalid action type or missing metaobjectId" };
};

export default function SettingsPage() {
  return <Settings />;
}
