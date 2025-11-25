
import SideNavigation from "./sideNavigation";
import TabNavigation from "./tabNavigation";

export default function Nav() {
 
  return (
    <>
      <SideNavigation pageTitle={pageTitle}/>
      <TabNavigation />
    </>
  );
}
