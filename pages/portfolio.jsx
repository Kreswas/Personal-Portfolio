import Head from 'next/head';
import Navbar from '../components/Navbar';

function Portfolio() {
  return (
    <>
      <Head>
        <title>Portfolio</title>
      </Head>

      <Navbar />

      <section className="hero">
        <div className="container">
          <div className="text-wrapper w-full">
            <h1 data-cy="pageTitle" className="title">
              Portfolio
            </h1>
            <p className="description">
              These are two of my finished project from my ever growing repo.
            </p>

            <div className="portfolio-wrapper">
              <div className="portfolio-item">
                <img src="/gameit.jpeg" className="portfolio-image" alt="" />
                <a
                  href="https://game-it.fly.dev"
                  target="_blank"
                  rel="noreferrer"
                >
                  <h4 className="portfolio-name">GameIt Social Media App</h4>
                  <div className="portfolio-category">Next.js</div>
                </a>
              </div>
              <div className="portfolio-item">
                <img src="/kajian.jpg" className="portfolio-image" alt="" />

                <h4 className="portfolio-name">kajian App</h4>
                <div className="portfolio-category">Mobile Dev</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Portfolio;
