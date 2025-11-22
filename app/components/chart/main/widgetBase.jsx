
import { useEffect, useState } from "react";

export const WidgetBase = ({ children, theme }) => {
  const [chart, setChart] = useState(null);
  const chartMarkup = (
    <s-box>
      <s-box padding="0" background={theme == "Dark" ? "bg-fill-brand" : "bg-fill"}>
        <s-box paddingBlock="400">
          <s-stack gap="600">{children}</s-stack>
        </s-box>
      </s-box>
    </s-box>
  );

  useEffect(() => setChart(chartMarkup), []);
  return chart;
};
