
import { useEffect, useState } from "react";

export const ChartBase = ({ children, theme }) => {
  const [chart, setChart] = useState(null);
  const chartMarkup = (
    <s-box background={theme == "Dark" ? "bg-fill-brand" : "bg-fill"}>
      <s-stack gap="large-100">{children}</s-stack>
    </s-box>
  );

  useEffect(() => setChart(chartMarkup), []);
  return chart;
};
