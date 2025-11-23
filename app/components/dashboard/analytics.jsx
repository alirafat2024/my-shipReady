import { TotalRevenue } from "../chart/totalRevenue";
import { ReturningCustomerRate } from "../chart/returningCustomerRate";
import { TotalSales } from "../chart/totalSales";
import { SalesByChannels } from "../chart/salesByChannels";
import { SessionsByDeviceType } from "../chart/sessionsByDeviceType";
import { UserViews } from "../chart/userViews";
import { TotalOrders } from "../chart/totalOrders";
import { CustomerOverTime } from "../chart/customerOverTime";
import { FulfilledOrdersOverTime } from "../chart/fulfilledOrdersOverTime";

export const Analytics = () => (
  <>
    <s-stack gap="base" direction="block" >
      <s-query-container>
        <s-grid
        gridTemplateColumns="@container (inline-size > 500px) 1fr 1fr 1fr 1fr , 1fr"
        gap="small"
        justifyContent="center"
      >
        <s-grid-item>
          <s-section>
            <TotalRevenue />
          </s-section>
        </s-grid-item>
        <s-grid-item>
          <s-section>
            <TotalOrders />
          </s-section>
        </s-grid-item>
        <s-grid-item>
          <s-section>
            <CustomerOverTime />
          </s-section>
        </s-grid-item>
        <s-grid-item>
          <s-section>
            <FulfilledOrdersOverTime />
          </s-section>
        </s-grid-item>
      </s-grid>
      </s-query-container>

      <s-query-container>
        <s-grid gridTemplateColumns="@container (inline-size > 500px) 1fr 1fr  , 1fr"
        gap="small"
       
        >
        <s-grid-item>
          <s-section>
            <UserViews />
          </s-section>
        </s-grid-item>
        <s-grid-item>
          <s-section>
            <ReturningCustomerRate />
          </s-section>
        </s-grid-item>
      </s-grid>
      </s-query-container>

      <s-section>
        <TotalSales />
      </s-section>

      <s-query-container>
        <s-grid gridTemplateColumns="@container (inline-size > 500px) 1fr 1fr  , 1fr"
        gap="small">
        <s-grid-item>
          <s-section>
            <SalesByChannels />
          </s-section>
        </s-grid-item>
        <s-grid-item>
          <s-section>
            <SessionsByDeviceType />
          </s-section>
        </s-grid-item>
      </s-grid>
      </s-query-container>
    </s-stack>
  </>
);
