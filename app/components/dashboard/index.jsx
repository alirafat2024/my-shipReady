import { AppProvider } from "@shopify/shopify-app-react-router/react";
import { AppEmbedStatus } from "./appEmbedStatus";
import { GetStarted } from "./getStarted";
import { Specs } from "./specs";
import { Analytics } from "./analytics";

import { Footer } from "../shared/footer";
export const Dashboard = () => {
  return (
    <AppProvider>
      <s-stack direction="block" gap="base">
       
        <AppEmbedStatus />
        <s-stack
          direction="inline"
          justifyContent="space-between"
          gap="small-300"
        >
          <s-box maxInlineSize="630px" padding="none">
            <GetStarted />
          </s-box>
          <s-box>
            <Specs />
          </s-box>
        </s-stack>
        <Analytics />
        <Footer />
      </s-stack>
    </AppProvider>
  );
};
