
import { ArrowUpRight } from "../../../assets/arrowUpRight";
import { ArrowDownRight } from "../../../assets/arrowDownRight";

export const WidgetHeading = ({
  title,
  subTitle,
  fluctuation,
  isDark = false,
}) =>
  title && (
    <s-box paddingInline="400">
      <s-stack gap="200">
        <s-heading
          variant="headingSm"
          as="h3"
          tone={isDark ? "text-inverse" : "base"}
        >
          {title}
        </s-heading>
        {subTitle && (
          <s-stack gap="200">
            <s-heading variant="headingLg" tone={isDark ? "text-inverse" : "base"}>
              {subTitle}
            </s-heading>

            {fluctuation && (
              <s-box style={{ 
                display: "flex", 
                justifyContent: "start",
                alignItems: "start",
                width: "62px",
                gap: "4px"
                }}>
                <s-stack direction="inline"  gap="100">
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
