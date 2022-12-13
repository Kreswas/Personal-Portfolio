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
              A 25 years old guy. Super into tech and always following what's
              new and trying to get it if it's possible.
              <br /> Like any kind of games, have 3 cats and a dog, always
              trying to learn new things and improve myself
              <br />
              <br />
              <br />
              Fun Fact: I came up with the username "Kreswas" when i was around
              8 or so and using that name on every platform I am on since then.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}

export default About;
