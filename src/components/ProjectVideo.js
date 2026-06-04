export default function ProjectVideo(props) {
  const textColor = props.textColor || "text-gray-600";
  const width = props.width || "600px";

  const isYouTube =
    props.src.includes("youtube.com") || props.src.includes("youtu.be");

  return (
    <div className="w-full flex flex-col justify-center items-center pb-10">
      <div style={{ width }}>
        {isYouTube ? (
          <iframe
            width={width}
            height={(parseInt(width) * 340) / 600} // keep original aspect ratio
            src={props.src.replace("watch?v=", "embed/")}
            title="YouTube video"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        ) : (
          <video style={{ width }} controls>
            <source src={props.src} type="video/mp4" />
          </video>
        )}

        <div className={`text-center ${textColor} text-lg p-2 italic`}>
          {props.note}
        </div>
      </div>
    </div>
  );
}
