const PROJECTS = [
  {
    id: 1,
    title: 'Luxe E-commerc',
    subtitle: 'E-Commerce Website',
    description: 'A comprehensive token-based design system powering three products across web and mobile. Includes 80+ components, dark mode, and accessibility-first architecture.',
    year: '2026',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSNOWxkqSZtJlujFAoWwgby2_-WUVB06-fQ7QtLVk5wWMB604DQSTQi008&s=10',
    imageClass: 'project-image--luxe',
    url: 'https://yonas-gadisa-oni.github.io/Luxe-E-commerce/',
    tags: ['React', 'TypeScript', 'Figma', 'Storybook'],
  },
  {
    id: 2,
    title: 'Restaurant',
    subtitle: 'Full-stack / Data Viz',
    description: 'Real-time data visualization dashboard for IoT sensor networks. Handles 50k events per second with sub-100ms render latency using WebSocket streaming.',
    year: '2026',
    image: 'https://yonas-gadisa-oni.github.io/Restaurant/images/room.avif',
    tags: ['Next.js', 'D3.js', 'Supabase', 'WebSockets'],
    url: 'https://yonas-gadisa-oni.github.io/Restaurant/',
  },
];

function Work() {
  return (
    <section className="work" id="work">
      <div className="work-heading">
        <p className="work-eyebrow">Selected Work</p>
        <h2 className="work-title">Recent projects</h2>
      </div>

      <div className="projects-grid">
        {PROJECTS.map((project) => (
          <article key={project.id} className="project-card">
            <a
              href={project.url}
              target="_blank"
              rel="noreferrer"
              className={`project-image ${project.imageClass || ''}`}
              style={project.image ? { backgroundImage: `url(${project.image})` } : undefined}
              aria-label={`Open ${project.title} project website`}
            >
              <span className="project-badge">{project.year}</span>
            </a>

            <div className="project-content">
              <p className="project-meta">{project.id.toString().padStart(2, '0')} • {project.subtitle}</p>
              <h3 className="project-title">{project.title}</h3>
              <p className="project-description">{project.description}</p>
              <ul className="project-tags">
                {project.tags.map((tag) => (
                  <li key={tag} className="project-tag">{tag}</li>
                ))}
              </ul>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export default Work;
