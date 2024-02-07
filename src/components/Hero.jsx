import React from "react";

import { logo } from "../assets";

const Hero = () => {
  return (
    <header className='w-full flex justify-center items-center flex-col'>
      <nav className='flex justify-between items-center w-full mb-10 pt-3'>
        <img src={logo} alt='sumz_logo' className='w-28 object-contain' />

        <button
          type='button'
          onClick={() =>
            window.open("https://github.com/Subhojit666/SummAI", "_blank")
          }
          className='black_btn'
        >
          GitHub
        </button>
      </nav>

      <h1 className='head_text'>
        Summarize <br className='max-md:hidden' />
        <span className='orange_gradient '>Articles</span>
      </h1>
      <h2 className='desc'>
      By just pasting the link
      </h2>
    </header>
  );
};

export default Hero;