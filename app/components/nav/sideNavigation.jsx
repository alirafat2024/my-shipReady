
const SideNavigation = ({ pageTitle }) => {
  return (
    <s-stack
        direction="inline"
        gap="base"
        justifyContent="start"
        alignItems="center"
      >
    
          <s-icon type="arrow-left" />
       
        <s-heading level="1" variant="headingLg">
          <h2>{pageTitle} </h2>
        </s-heading>
      </s-stack>
  );
};

export default SideNavigation;
