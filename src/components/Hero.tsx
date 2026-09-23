export function Hero() {
  return (
    <section className="hero" id="home">
      <div className="hero-inner container">
        <div className="hero-copy">
          <h1>
            Build Your Ideal
            <span>Development Stack</span>
          </h1>
          <p>
            Explore frontend, backend, database, and tooling options,
            compare them side by side, and put together the stack that fits your next project.
          </p>
          <div className="hero-actions">
            <a className="gradient-button" href="#technologies">Explore Technologies</a>
            <a className="outline-button" href="#technologies">Learn More</a>
          </div>
        </div>
        <div className="hero-art" aria-hidden="true">
          <img src="/hero-stack.png" alt="" />
        </div>
      </div>
    </section>
  )
}
