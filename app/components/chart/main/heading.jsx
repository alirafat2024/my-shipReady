
import { ArrowUpRight } from "../../../assets/arrowUpRight";
import { ArrowDownRight } from "../../../assets/arrowDownRight";

export const Heading = ({ title, subTitle, fluctuation, isDark = false }) =>
  title && (
    <s-stack gap="small-300" >
      <s-stack direction="inline">
        <s-box
         
        >
          <s-heading
         
          >
            {title}
          </s-heading>
        </s-box>
      </s-stack >
      {subTitle && (
        <s-stack direction="inline" alignItems="center" gap="small-300">
          <s-heading variant="headingLg" tone={isDark ? "text-inverse" : "base"}>
            {subTitle}
          </s-heading>
          {fluctuation && (
            <s-stack direction="inline">
              <s-icon
                tone={
                  fluctuation > 0
                    ? isDark
                      ? "text-inverse"
                      : "success"
                    : "critical"}
                source={fluctuation > 0 ? ArrowUpRight : ArrowDownRight}
              />
              <s-text
                
                tone={
                  fluctuation > 0
                    ? isDark
                      ? "s-text-inverse"
                      : "success"
                    : "critical"
                }
                variant="bodySm"
                fontWeight="semibold"
              >
                {parseFloat(fluctuation)}%
              </s-text>
            </s-stack >
          )}
        </s-stack >
      )}
    </s-stack>
  );
