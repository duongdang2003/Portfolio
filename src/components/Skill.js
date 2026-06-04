export default function Skill() {
  return (
    <div>
      <div className="grid grid-cols-12 gap-3 text-xl">
        {/* engine */}
        <div className="font-bold col-span-2">Engine</div>
        <div className="col-span-10 p-1">Unity</div>

        <div className="font-bold col-span-2">Langues</div>
        <div className="col-span-10">C#, HTML, CSS, Javascript</div>

        <div className="font-bold col-span-2">Tools</div>
        <div className="col-span-10">
          Aseprite, Blender, Gimp, GitHub, GitLab
        </div>
      </div>
    </div>
  );
}
