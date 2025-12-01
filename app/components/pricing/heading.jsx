import SideNavigation from "../nav/sideNavigation";
import { useLoaderData } from "react-router";
export const Heading=()=>{
  const {currentPlan }=useLoaderData();

  return(
    <s-page>
     <s-stack direction="block" padding="base" gap="base">
      
        <s-stack>
          <s-box>
            <SideNavigation pageTitle={"Pricing page"} />
          </s-box>
        </s-stack>
        <s-section heading="lease select a plan that suits your business">
          <s-stack
            direction="inline"
            justifyContent="space-between"
            alignItems="center"
          >
            <s-box maxInlineSize="500px">
              <s-paragraph>
                You are currently on the {currentPlan||"FREE"} plan and have limited access to
                all the features. Please read the <s-link>FAQ </s-link> page for
                more information.
              </s-paragraph>
            </s-box>
            <s-box maxInlineSize="100px" maxBlockSize="200px">
              <s-image
                src="https://cdn.shopify.com/s/files/1/0725/8836/2008/files/bill.png?v=1685711340"
                alt="Featured product"
                aspectRatio="1/1"
                inlineSize="auto"
                objectFit="cover"
                loading="lazy"
              />
            </s-box>
          </s-stack>
        </s-section>
      </s-stack>

    </s-page>
  )




}