import skills from "./skills.json";

export default function Skills() {
  return (
    <div>
      <p>Programming languages: {skills["Programming Languages"].join(" ")}</p>
      <p>Frameworks: {skills.Frameworks.join(" ")}</p>
      <p>Tools: {skills.Tools.join(" ")}</p>
    </div>
  );
}
