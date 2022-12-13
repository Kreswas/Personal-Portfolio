import Head from 'next/head';
import Navbar from '../components/Navbar';

function Contact() {
  return (
    <>
      <Head>
        <title>Contact</title>
      </Head>

      <Navbar />

      <section className="hero">
        <div className="container">
          <div className="text-wrapper w-full">
            <h1 data-cy="pageTitle" className="title">
              Contact Me!
            </h1>
            <p className="description">
              If you have any questions or just want to chat maybe(?), <br />{' '}
              you can always contact me through any of these.
            </p>
            <ul className="contact-links">
              <li className="contact-item">
                Email:{' '}
                <a href="mailto:melihuraz@hotmail.com">melihuraz@hotmail.com</a>
              </li>
              <li className="contact-item">Phone: +43 660 672 9626</li>
              <li className="contact-item">
                <a
                  href="https://www.linkedin.com/in/melih-uraz-ab346210a/"
                  target="_blank"
                  rel="noreferrer"
                >
                  LinkedIn
                </a>
              </li>
              <li className="contact-item">
                <a
                  href="https://twitter.com/Kreswas"
                  target="_blank"
                  rel="noreferrer"
                >
                  Twitter
                </a>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </>
  );
}

export default Contact;
