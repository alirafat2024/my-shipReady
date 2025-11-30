import { Footer } from "../shared/footer";
import { Heading } from "./heading";
import {Plans}   from  "./plans"

export default function Pricing() {
 
 

  return (
    <s-page heading=" PowerX - Functions">
     <s-satck direction="block" padding="base" gap="base" >
     <Heading/>
     <Plans/>
    <Footer/>
     </s-satck>
    </s-page>
  );
}
