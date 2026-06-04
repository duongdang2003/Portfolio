export default function ContentButton({
  label,
  icon: Icon,
  href = "#",
  textColor = "#1dad9a",
  borderColor = "#1dad9a",
  hoverBgColor = "#1dad9a",
  hoverTextColor = "white",
}) {
  return (
    <a href={href} target="_blank" rel="noopener noreferrer" className="px-2">
      <button
        className={`inline-flex items-center gap-2 rounded px-6 py-2 text-sm font-semibold transition-all hover:shadow-lg disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none`}
        style={{
          color: textColor,
          border: `1px solid ${borderColor}`,
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.backgroundColor = hoverBgColor;
          e.currentTarget.style.color = hoverTextColor;
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.backgroundColor = "transparent";
          e.currentTarget.style.color = textColor;
        }}
      >
        {Icon && <Icon />}
        {label}
      </button>
    </a>
  );
}
