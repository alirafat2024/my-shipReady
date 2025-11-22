import { boundary } from "@shopify/shopify-app-react-router/server";
import { Dashboard } from "../components/dashboard/index";

import { EventModel } from "../models/event.model";

export const loader = async () => {
  const sales = await EventModel.list("", { name: "sales" });
  const orders = await EventModel.list("", { name: "orders" });
  const customers = await EventModel.list("", { name: "customers" });
  const revenues = await EventModel.list("", { name: "revenues" });
  const views = await EventModel.list("", { name: "views" });
  const sessions = await EventModel.list("", { name: "sessions" });
  const channelSales = await EventModel.list("", { name: "channelSales" });
  const fulfilledOrders = await EventModel.list("", {
    name: "fulfilledOrders",
  });
  const returningCustomerRates = await EventModel.list("", {
    name: "returningCustomerRates",
  });

  return {
    sales,
    orders,
    customers,
    revenues,
    views,
    sessions,
    channelSales,
    fulfilledOrders,
    returningCustomerRates,
  };
};

export default function Index() {
  return <Dashboard />;
}

export const headers = (headersArgs) => {
  return boundary.headers(headersArgs);
};