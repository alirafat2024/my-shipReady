
import { TotalRevenue } from "../chart/totalRevenue";
import { ReturningCustomerRate } from "../chart/returningCustomerRate";
import { TotalSales } from "../chart/totalSales";
import { SalesByChannels } from "../chart/salesByChannels";
import { SessionsByDeviceType } from "../chart/sessionsByDeviceType";
import { UserViews } from "../chart/userViews";
import { TotalOrders } from "../chart/totalOrders";
import { CustomerOverTime } from "../chart/customerOverTime";
import { FulfilledOrdersOverTime } from "../chart/fulfilledOrdersOverTime";


export const Analytics=()=>(

  <>
    <s-section>
    
        <s-grid gridTemplateColumns="repeat(4, 1fr)"
        gap="small"
        justifyContent="center"
        >
          <s-grid-item ><TotalRevenue /></s-grid-item>
          <s-grid-item ><TotalOrders /></s-grid-item>
          <s-grid-item ><CustomerOverTime /></s-grid-item>
          <s-grid-item ><FulfilledOrdersOverTime /></s-grid-item>
      </s-grid>
    
    </s-section>

     {/* <s-section>
      <s-grid columns={{ xs: 1, sm: 1, md: 2, lg: 2, xl: 2 }} gap="400">
        <UserViews />
        <ReturningCustomerRate />
      </s-grid>
    </s-section>

    <s-section>
      <TotalSales />
    </s-section>

    <s-section>
      <s-grid columns={{ xs: 1, sm: 1, md: 2, lg: 2, xl: 2 }} gap="400">
        <SalesByChannels />
        <SessionsByDeviceType />
      </s-grid>
    </s-section>  */}
  </>

)

 
