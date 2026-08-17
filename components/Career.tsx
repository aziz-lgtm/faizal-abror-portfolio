import { career } from "@/data/career";

export default function Career() {
  return (
    <section>
      {/* box title */}
      <div>
        <h2>{career.title}</h2>
        <p>{career.subtitle}</p>
      </div>

      {/* box general */}
      <div>
        {career.generalSkills.map((item, index) => (
          <div key={index}>
            <h3>{item.title}</h3>
            <p>{item.description}</p>
            <ul>
              {item.skills.map((skill, i) => (
                <li key={i}>{skill}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* box core */}
      <div>
        {career.deepSkills.map((item, index) => (
          <div key={index}>
            <h3>{item.title}</h3>
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