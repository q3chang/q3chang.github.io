export default function ExperiencesSection() {
  return (
    <section id="experiences" className="experiences-section" aria-labelledby="experiences-heading">
      <h2 id="experiences-heading">Experiences</h2>
      <div className="experience-list">
        <article className="experience-entry">
          <h3 className="experience-institution">
            <span>University of California, Los Angeles (UCLA)</span>{' '}
            <span className="experience-location">USA</span>
          </h3>
          <p className="experience-lab">Structures-Computer Interaction Lab</p>
          <div className="experience-role-row">
            <p className="experience-role">Visiting Graduate Researcher</p>
            <p className="experience-dates"><time dateTime="2024-09">Sep. 2024</time> – <time dateTime="2025-08">Aug. 2025</time></p>
          </div>
          <p className="experience-advisor">Advisor: Prof. M. Khalid Jawed</p>
        </article>

        <article className="experience-entry">
          <h3 className="experience-institution">
            <span>Samsung Advanced Institute of Technology (SAIT)</span>{' '}
            <span className="experience-location">South Korea</span>
          </h3>
          <p className="experience-lab">Computer Vision Lab</p>
          <div className="experience-role-row">
            <p className="experience-role">Research Internship</p>
            <p className="experience-dates"><time dateTime="2023-06">Jun. 2023</time> – <time dateTime="2023-09">Sep. 2023</time></p>
          </div>
          <div className="experience-role-row">
            <p className="experience-role">Visiting Student Researcher</p>
            <p className="experience-dates"><time dateTime="2022-09">Sep. 2022</time> – <time dateTime="2024-04">Apr. 2024</time></p>
          </div>
          <p className="experience-advisor">Advisor: Principal Researcher Sujin Jang</p>
        </article>
      </div>
    </section>
  );
}
