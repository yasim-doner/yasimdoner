import React, { useState } from 'react';
import './Projects.css';

const projectsData = [
  {
    title: 'Alsana Startup',
    category: 'web',
    description: 'AI-driven e-commerce platform with automated vector search integrations, customized recommendation models, and scalable AWS cloud structure.',
    link: 'https://alsana.site',
    tags: ['React', 'Node.js', 'Vector DB', 'AWS']
  },
  {
    title: 'MetroBuzz App',
    category: 'mobile',
    description: 'Android application leveraging Google Maps API and Istanbul transit datasets to offer live vehicle tracking and user stop notifications.',
    link: 'https://play.google.com/store/apps/details?id=com.example.metrobuzz',
    tags: ['Kotlin', 'Jetpack Compose', 'Google Maps API']
  },
  {
    title: 'Enco Platform',
    category: 'web',
    description: 'Interactive portfolio and strategic framework matching early-stage startup ventures with prospective seed investors and angels.',
    link: 'https://encollab.net',
    tags: ['React', 'CSS3', 'Figma', 'Secure Payments']
  },
  {
    title: 'Yıldız Rover Autonomy',
    category: 'robotics',
    description: 'Simulation-validated autonomous navigation stack utilizing Gazebo virtual fields, LiDAR, sensor fusions, and ROS 2 hardware interfaces.',
    link: 'https://github.com/yasim-doner',
    tags: ['ROS 2', 'C++', 'Python', 'Gazebo']
  },
  {
    title: 'Nörotrofin Platform',
    category: 'web',
    description: 'Official student science journal portal hosting indexed academic and opinion writing, supporting global editorial and submission routines.',
    link: 'https://www.norotrofin.com',
    tags: ['HTML5', 'Vanilla CSS', 'JS', 'Journal System']
  },
  {
    title: 'Chaos Theory Review',
    category: 'writing',
    description: 'Popular science article published in Nörotrofin, explaining mathematical definitions of deterministic chaotic systems and strange attractors.',
    link: 'https://www.norotrofin.com/kaos-teorisi',
    tags: ['Academic Writing', 'Mathematics', 'Chaos Theory']
  }
];

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('all');

  const handleFilterChange = (filter) => {
    setActiveFilter(filter);
  };

  const filteredProjects = activeFilter === 'all' 
    ? projectsData 
    : projectsData.filter(project => project.category === activeFilter);

  const filters = [
    { value: 'all', label: 'All' },
    { value: 'web', label: 'Web' },
    { value: 'mobile', label: 'Mobile' },
    { value: 'robotics', label: 'Robotics' },
    { value: 'writing', label: 'Writing' }
  ];

  return (
    <section id="portfolio" className="portfolio section-bg">
      <div className="container">

        <div className="section-title">
          <h2>Portfolio</h2>
          <p>Here is an architectural showcase of the software startups, academic publications, and robotics initiatives I've co-founded or engineered:</p>
        </div>

        <div className="row">
          <div className="col-12 d-flex justify-content-center">
            <ul id="portfolio-flters">
              {filters.map((filter) => (
                <li 
                  key={filter.value}
                  className={activeFilter === filter.value ? 'filter-active' : ''}
                  onClick={() => handleFilterChange(filter.value)}
                >
                  {filter.label}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="row portfolio-container">
          {filteredProjects.map((project, index) => (
            <div className="col-lg-4 col-md-6 portfolio-item" key={index}>
              <div className="portfolio-wrap">
                <div className="portfolio-info">
                  <h4>{project.title}</h4>
                  <p>{project.description}</p>
                  <div className="portfolio-tags mt-2">
                    {project.tags.map((tag, tIndex) => (
                      <span className="portfolio-tag" key={tIndex}>{tag}</span>
                    ))}
                  </div>
                  <div className="portfolio-links mt-3">
                    <a href={project.link} target="_blank" rel="noreferrer" title="View Source/Link">
                      <i className="fa-solid fa-arrow-up-right-from-square"></i> Live / Code
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Projects;
