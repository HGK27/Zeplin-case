import "./TitleGroup.scss";

export default function TitleGroup({ title, subtitle }) {
  return (
    <div className="titleGroup">
      <h5 className="section_subtitle">{subtitle}</h5>
      <h2 className="section_title">{title}</h2>
    </div>
  );
}
