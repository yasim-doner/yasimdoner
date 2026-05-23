import React from 'react';
import './About.css';

const About = () => {
  const detailsLeft = [
    { label: 'Website', value: 'yasimdoner.com', link: 'https://yasimdoner.com' },
    { label: 'Phone', value: '+90 551 022 81 99', link: 'tel:+905510228199' },
    { label: 'City', value: 'Istanbul, Turkey' },
  ];

  const detailsRight = [
    { label: 'Degree', value: 'Undergraduate (Computer CS)' },
    { label: 'GPA', value: '3.38 / 4.0' },
    { label: 'Email', value: 'yasimdoner@gmail.com', link: 'mailto:yasimdoner@gmail.com' },
  ];

  const skills = [
    { name: 'C / C++', value: 85 },
    { name: 'Python', value: 80 },
    { name: 'JavaScript', value: 75 },
    { name: 'Kotlin', value: 70 },
    { name: 'React', value: 75 },
    { name: 'ROS (Robot Operating System)', value: 70 },
    { name: 'Qiskit (Quantum Computing)', value: 65 },
    { name: 'Git & GitHub', value: 90 },
  ];

  return (
    <section id="about" className="about section-bg">
      <div className="container">
        
        <div className="section-title">
          <h2>About</h2>
          <p>
            I am a versatile Computer Engineering student dedicated to exploring diverse technological domains and engineering scalable software solutions. I demonstrate strong leadership and full-stack development experience, notably serving as an editor for a scientific journal where I managed cross-functional teams to publish an issue and architected the platform's web infrastructure (norotrofin.com).
          </p>
        </div>

        <div className="row">
          <div className="col-lg-4" data-aos="fade-right">
            <div className="about-img-box">
              <img src="/resume-pp.jpeg" className="img-fluid" alt="Profile" />
            </div>
          </div>
          <div className="col-lg-8 pt-4 pt-lg-0 content" data-aos="fade-left">
            <h3>Computer Engineer & Full-Stack Developer</h3>
            <p className="fst-italic mb-4">
              Actively seeking to bridge foundational software engineering with cutting-edge research, with a dedicated career focus on the advancements, simulations, and algorithmic developments within quantum computing.
            </p>
            <div className="row mb-4">
              <div className="col-lg-6">
                <ul>
                  {detailsLeft.map((detail, index) => (
                    <li key={index}>
                      <i className="fa-solid fa-chevron-right text-primary"></i> 
                      <strong>{detail.label}:</strong>{' '}
                      {detail.link ? (
                        <a href={detail.link} target="_blank" rel="noreferrer">{detail.value}</a>
                      ) : (
                        <span>{detail.value}</span>
                      )}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="col-lg-6">
                <ul>
                  {detailsRight.map((detail, index) => (
                    <li key={index}>
                      <i className="fa-solid fa-chevron-right text-primary"></i> 
                      <strong>{detail.label}:</strong>{' '}
                      {detail.link ? (
                        <a href={detail.link}>{detail.value}</a>
                      ) : (
                        <span>{detail.value}</span>
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Skills Sub-section */}
        <div className="skills-section mt-5">
          <div className="section-title">
            <h2>Skills</h2>
            <p>Here are the core technologies, programming languages, and professional competencies I work with regularly:</p>
          </div>

          <div className="row">
            <div className="col-lg-4 col-md-6">
              <div className="skill-box">
                <h4><i className="fa-solid fa-code"></i> Programming</h4>
                <div className="skill-chips">
                  <span>C / C++</span>
                  <span>Python</span>
                  <span>JavaScript</span>
                  <span>Kotlin</span>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 mt-4 mt-md-0">
              <div className="skill-box">
                <h4><i className="fa-solid fa-layer-group"></i> Tools & Tech</h4>
                <div className="skill-chips">
                  <span>ROS 2</span>
                  <span>Qiskit</span>
                  <span>React</span>
                  <span>Git & GitHub</span>
                  <span>WordPress</span>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 mt-4 mt-lg-0">
              <div className="skill-box">
                <h4><i className="fa-solid fa-language"></i> Languages & Writing</h4>
                <div className="skill-chips">
                  <span>Turkish (Native)</span>
                  <span>English (Int.)</span>
                  <span>French (Beg.)</span>
                  <span>Scientific Editing</span>
                  <span>Proofreading</span>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default About;
