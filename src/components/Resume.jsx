import React from 'react';
import './Resume.css';

const Resume = () => {
  return (
    <section id="resume" className="resume">
      <div className="container">

        <div className="section-title">
          <h2>Resume</h2>
          <p>Highly motivated Computer Engineering student at Yıldız Technical University with substantial leadership, research, and full-stack development experience. Active explorer of quantum computing, autonomous robotics, and deep learning algorithms.</p>
        </div>

        <div className="row">
          {/* Left Column: Summary & Education */}
          <div className="col-lg-6">
            <h3 className="resume-title">Summary</h3>
            <div className="resume-item pb-0">
              <h4>Yahya Asım Döner</h4>
              <p><em>Versatile Computer Engineering student dedicated to exploring diverse technological domains and engineering scalable software solutions. Demonstrated full-stack development experience, startup cofounding, and scientific editing leadership.</em></p>
              <ul>
                <li>Istanbul, Turkey</li>
                <li>+90 551 022 81 99</li>
                <li>yasimdoner@gmail.com</li>
              </ul>
            </div>

            <h3 className="resume-title">Education</h3>
            <div className="resume-item">
              <h4>Undergraduate in Computer Science</h4>
              <h5>2023 - Present</h5>
              <p><em>Yıldız Technical University, Istanbul, Turkey</em></p>
              <p>Relevant coursework in software engineering, algorithms, database systems, and robotics navigation. Maintaining a strong academic track record with a <strong>GPA of 3.38 / 4.0</strong>.</p>
            </div>

            <h3 className="resume-title">Research Experience</h3>
            <div className="resume-item">
              <h4>Intern Researcher</h4>
              <h5>Feb 2025 - Jul 2025</h5>
              <p><em>TUBITAK (Scientific and Technological Research Council of Turkey)</em></p>
              <p>Worked on national project TUBITAK-123Y145 under the supervision of Assoc. Prof. Osman GÜNAY.</p>
              <ul>
                <li>Assisted in seismic data collection and monitoring variations.</li>
                <li>Studied the assessment of soil gas radon variations in terms of seismicity.</li>
                <li>Utilized deep learning models for forecasting and analysis.</li>
              </ul>
            </div>
          </div>

          {/* Right Column: Experience */}
          <div className="col-lg-6">
            <h3 className="resume-title">Professional Experience</h3>
            
            <div className="resume-item">
              <h4>Cofounder</h4>
              <h5>Dec 2025 - Present</h5>
              <p><em>Enco (Yıldız Kaşifleri)</em></p>
              <ul>
                <li>Designed and developed an interactive platform prototype.</li>
                <li>Pitched the platform's vision to VCs, angel investors, and tech leaders.</li>
                <li>Architected strategic matching structures and payment gateways.</li>
              </ul>
            </div>

            <div className="resume-item">
              <h4>Team Member</h4>
              <h5>Oct 2025 - Present</h5>
              <p><em>Yıldız Rover</em></p>
              <ul>
                <li>Developed autonomous navigation stacks utilizing ROS 2 and Gazebo.</li>
                <li>Implemented localization algorithms and state estimations.</li>
                <li>Integrated hardware including LiDAR sensors, Pixhawk controllers, and IMUs.</li>
              </ul>
            </div>

            <div className="resume-item">
              <h4>Cofounder</h4>
              <h5>Feb 2025 - Present</h5>
              <p><em>Alsana</em></p>
              <ul>
                <li>Co-founded an AI-driven e-commerce startup, leading full-stack dev.</li>
                <li>Implemented intelligent search engine integrating vector databases.</li>
                <li>Managed scalable cloud infrastructure and brand identity systems.</li>
              </ul>
            </div>

            <div className="resume-item">
              <h4>Assistant Editor & Web Designer</h4>
              <h5>Jan 2024 - Present</h5>
              <p><em>Nörotrofin Scientific Journal</em></p>
              <ul>
                <li>Served as Co-Editor in 2024, successfully publishing a complete issue.</li>
                <li>Designed, deployed, and currently maintain the official website.</li>
                <li>Managed cross-functional editorial and proofreading teams.</li>
              </ul>
            </div>

            <div className="resume-item">
              <h4>Team Member</h4>
              <h5>Nov 2024 - Jul 2025</h5>
              <p><em>YODA (Robotaxi Teknofest)</em></p>
              <ul>
                <li>Participated in national autonomous vehicle competition.</li>
                <li>Contributed to critical mapping and localization features.</li>
                <li>Collaborated on robotics integrations and automotive systems.</li>
              </ul>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Resume;
