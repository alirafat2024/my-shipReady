const SideNavigation = ({ pageTitle }) => {
  return (
    <s-stack
      direction="inline"
      gap="base"
      justifyContent="start"
      alignItems="center"
    >
      <s-box>
        <s-clickable background="transparent"
         href="/app" borderRadius="small-300">
          <s-icon type="arrow-left" />
        </s-clickable>
      </s-box>

      <s-box>
        <h2>{pageTitle} </h2>
      </s-box>
    </s-stack>
  );
};

export default SideNavigation;
