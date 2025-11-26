
import { ArrowUpRight } from "../../../assets/arrowUpRight";
import { ArrowDownRight } from "../../../assets/arrowDownRight";

export const WidgetHeading = ({
  title,
  subTitle,
  fluctuation,
  isDark = false,
}) =>
  title && (
    <s-box  >
      <s-stack gap="small-300" >
        <s-heading
        level="1"
          variant="headingLg"
        >
          {title}
        </s-heading>
        {subTitle && (
          <s-stack gap="small-300">
            <s-heading variant="headingLg" tone={isDark ? "text-inverse" : "base"}>
              {subTitle}
            </s-heading>

            {fluctuation && (
              <s-box style={{ 
                display: "flex", 
                justifyContent: "start",
                alignItems: "start",
                width: "62px",
                gap: "small-300"
                }}>
                <s-stack direction="inline"  gap="small-300">
                  <s-icon
                    tone={
                      fluctuation > 0
                        ? isDark
                          ? "text-inverse"
                          : "success"
                        : "critical"
                    }
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
              </s-box>
            )}
          </s-stack>
        )}
      </s-stack>
    </s-box>
  );
