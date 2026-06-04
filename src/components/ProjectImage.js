export default function ProjectImage({
  src,
  note,
  textColor = "text-gray-600",
  width = "600px",
}) {
  return (
    <div className="w-full flex flex-col justify-center items-center pb-10">
      <div style={{ width }}>
        <img className="w-full" src={src} alt="Project" />
        <div className={`text-center ${textColor} text-lg p-2 italic`}>
          {note}
        </div>
      </div>
    </div>
  );
}
