const HERO_ACTIONS = [
  { label: 'View Work', href: '#work', variant: 'primary' },
  { label: "Let's Talk", href: '#contact', variant: 'secondary' },
];

const HERO_STATS = [
  { value: '6+', label: 'Years Experience' },
  { value: '40+', label: 'Projects Shipped' },
  { value: '12', label: 'Happy Clients' },
  { value: '4.9?', label: 'Avg. Rating' },
];

function Hero() {
  return (
    <main className="hero" id="home">
      <div className="hero-top">
        <p className="hero-eyebrow">Full-stack developer</p>
        <p className="hero-meta">Available for work � 2026</p>
      </div>

      <div className="hero-body">
        <div className="hero-center">
          <h1 className="hero-title">
            Building <span>Things</span> That Matter
          </h1>

          <img src="/img/photo.jpg" alt="" />
        </div>
        
        <p className="hero-copy">
          I build fast, accessible, and beautifully designed products • from design systems to full-stack apps.
        </p>

        <div className="hero-actions">
          {HERO_ACTIONS.map((action) => (
            <a key={action.label} className={`hero-button hero-button--${action.variant}`} href={action.href}>
              {action.label}
            </a>
          ))}
        </div>
      </div>

      <div className="hero-stats" aria-label="Hero statistics">
        {HERO_STATS.map((stat) => (
          <div key={stat.label} className="hero-stat">
            <p className="hero-stat-value">{stat.value}</p>
            <p className="hero-stat-label">{stat.label}</p>
          </div>
        ))}
      </div>
    </main>
  );
}

export default Hero;
