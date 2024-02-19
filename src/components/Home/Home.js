import './Home.scss';

const Home = () => {
  return (
    <main>
      <h2 className='intro'>Hi, my name is</h2>
      <h1 className='name'>Chez Gallo</h1>
      <p className='info'>
        I am a software developer out of Denver, CO. I studied front-end
        development at the Turing School of Software and Design and I most
        recently worked as a full stack engineer at
        <a
          href='https://www.coupa.com/'
          className='hyperlink'
          target='_blank'
          rel='noreferrer'
        >
          {' '}
          Coupa Software
        </a>
        . I am currently pursuing a Computer Science degree at Western Governors
        University and I am looking for new opportunities as a frontend or full
        stack engineer.
      </p>
			<div className='link-container'>
      <a href='mailto:chez.a.gallo@gmail.com' target='_blank' rel="noreferrer">
        <button>Get in Touch</button>
      </a>
      <a href='https://www.linkedin.com/in/chez-gallo' target='_blank' rel="noreferrer">
        <button>Add me on LinkedIn</button>
      </a>
			</div>
    </main>
  );
};

export default Home;
