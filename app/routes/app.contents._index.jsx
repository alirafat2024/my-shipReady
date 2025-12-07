import { useLoaderData } from "react-router";
import Contents from "../components/contents/index.jsx";
import { authenticate } from "../shopify.server.js";

export const loader = async ({ request }) => {
  const { admin } = await authenticate.admin(request);

  const getResponse = await admin.graphql(
    `#graphql
    query {
      metaobjects(type: "Contents", first: 50) {
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

  const meta = getData.data.metaobjects.edges.map((edge) => edge.node);

  return { meta };
};

export const action = async ({ request }) => {
  const { admin } = await authenticate.admin(request);
  const formData = await request.formData();

  const title = formData.get("title");

  const status = formData.get("status");
  const publishAt = formData.get("publishAt");
  const actionType = formData.get("type");
  const metaobjectId = formData.get("metaobjectId");

  const fieldsArr = [
    { key: "title", value: title },
    { key: "status", value: status },
    { key: "publishAt", value: publishAt },
  ].filter((f) => f.value !== undefined && f.value !== null);

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
      deletedMetaobjectId: deleteData.data.metaobjectDelete.deletedId,
    };
  }
  //UPDATE
  if (actionType === "update" && metaobjectId) {
    const updateResponse = await admin.graphql(
      `#graphql
      mutation {
        metaobjectUpdate(id: "${metaobjectId}", metaobject: {
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
    const updateData = await updateResponse.json();
    if (updateData.data.metaobjectUpdate.userErrors.length > 0) {
      return { errors: updateData.data.metaobjectUpdate.userErrors };
    }
    return { metaobject: updateData.data.metaobjectUpdate.metaobject };
  }

  return { error: "Invalid action type or missing metaobjectId" };
};

export default function Content() {
  const { meta } = useLoaderData();

  return <Contents contents={meta} />;
}
