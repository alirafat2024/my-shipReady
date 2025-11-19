
import { boundary } from "@shopify/shopify-app-react-router/server";
import { Dashboard } from "../components/dashboard";

export default function Index() {
  return <Dashboard />;
}

export const headers = (headersArgs) => {
  return boundary.headers(headersArgs);
};
