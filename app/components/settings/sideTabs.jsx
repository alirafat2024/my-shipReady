export const SideTabs = ({ setSelectedTab, selectedTab }) => {
  const settingSidebar = [
    {
      title: "App Settings",
      items: [
        { content: "General", icon: "settings" },
        { content: "Features", icon: "cursor-option" },
        { content: "Notification", icon: "notification" },
        { content: "Change-log", icon: "note" },
      ],
    },
  ];

  return (
    <s-section>
      {settingSidebar.map((section, index) => (
        <s-stack gap="small-300" key={index}>
          <h2>{section.title}</h2>
          {section.items.map((item, itemIndex) => (
            <s-clickable
              padding="base"
              key={itemIndex}
              onClick={() => setSelectedTab(item.content)}
            >
              <s-stack justifyContent="space-between" direction="inline">
                <s-stack direction="inline" gap="small-300" alignItems="center">
                  <s-icon type={item.icon} />
                  {selectedTab === item.content ? (
                    <strong>{item.content}</strong>
                  ) : (
                    <s-heading>{item.content}</s-heading>
                  )}
                </s-stack>
                <s-box>
                    {selectedTab === item.content ? (
                    <s-icon type="check"/>
                  ) : (
                    ""
                  )}
                 
                </s-box>
              </s-stack>
            </s-clickable>
          ))}
        </s-stack>
      ))}
    </s-section>
  );
};
