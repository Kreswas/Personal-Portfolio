import Head from 'next/head';
import Navbar from '../components/Navbar';

function About() {
  return (
    <>
      <Head>
        <title>About</title>
      </Head>

      <Navbar />

      <section className="hero">
        <div className="container">
          <div className="text-wrapper w-full">
            <h1 data-cy="pageTitle" className="title">
              About
            </h1>
            <p className="description">
              A guy who's either 24 or 25 years old. Likes gaming, have 3 cats
              and a dog, trying to learn how to code and not very creative.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}

export default About;
