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
              Contact
            </h1>
            <p className="description">
              If you can't reach me that means im dead.
            </p>
            <ul className="contact-links">
              <li className="contact-item">Email: melihuraz@hotmail.com</li>
              <li className="contact-item">Phone: +43 660 672 9626</li>
            </ul>
          </div>
        </div>
      </section>
    </>
  );
}

export default Contact;
