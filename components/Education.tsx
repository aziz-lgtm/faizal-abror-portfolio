import { education } from "@/data/education";

export default function Education() {
  return (
    <section>
      {/* box title */}
      <div>
        <h2>{education.title}</h2>
        <p>{education.subtitle}</p>
      </div>

      {/* box general */}<div>
        {education.journey.map((item, index) => (
          <div key={index}>
            <h3>{item.title}</h3>
            <span>{item.institution}</span>
            <span>{item.year}</span>
            <p>{item.description}</p>
            <ul>
              {item.skills.map((skill, i) => (
                <li key={i}>{skill}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>

    </section>
  );
}