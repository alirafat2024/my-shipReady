

export default function EmptyState({
  text = "There was no data found.",
  minHeight = 300,
}) {
  return (
    <s-box
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        minHeight: minHeight + "px",
        width: "100%",
      }}
    >
      <s-paragraph  tone="subdued"  alignment="center">
        {text}
      </s-paragraph>
    </s-box>
  );
}
