import React from 'react';
import '../assets/style.css';

const About = () => {
  return (
    <section id="about">
       <section class="bgimage" id="home">
  <div class="container-fluid">
      <div class="row">
      <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12 hero-text">
          <h2 class="hero_title">Anthony Pica</h2>
          <p class="hero_desc">Portfolio</p>
      </div>
      </div>
  </div>
</section>
        <h1 class="text-center">About Me</h1>
        <div class="row mt-4">
            <div class="col-lg-4">
            <img src={require('../images/IMG_8305.jpg').default} alt="" className="imageAboutPage" />
            </div>
  
            <div class="col-lg-8">
               <div class="row mt-3">
                    <div class="col-md-6">
                        <ul>
                            <li>Name: Anthony Pica</li>
                            <li>Age: 27</li>
                            <li>Occupation: Web Developer</li>
  
                        </ul>
                    </div>
                </div>
                <div class="row mt-3">
                    <p>Hi,my name is Anthony Pica. I grew up in Jersey City, NJ and just recently moved to North Bergen a few years ago. Some of my favorite things to do include: playing with my dog/best friend Rico, playing/watching sports, playing video games, and traveling the world with my fiancee. 
                    </p>
                </div>
            </div>
        </div>
  </section>
  );
};

export default About;
