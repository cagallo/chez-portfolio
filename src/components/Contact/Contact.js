import './Contact.scss';

const Contact = () => {
  return (
    <section className='Contact'>
      <h1 className='header'>04. Get In Touch</h1>
      <p className='msg'>
        I am looking for any new opportunities and my inbox is always open.
        Please reach out if you have a question or just want to say hello. I
        will try my best to get back to you promptly.
      </p>
      <a
        className='mailer'
        href='mailto:cesaregallo0@gmail.com'
        target='_blank'
        rel='noreferrer'
      >
        Say Hello
      </a>
    </section>
  );
};

export default Contact;
