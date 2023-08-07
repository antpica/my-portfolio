import React from 'react';

const Header = () => {
  return (
    <header>
    <nav class="navbar navbar-expand-lg fixed-top navbarScroll">
     <div class="container">
          <a class="navbar-brand">Anthony Pica</a>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
              <ul class="navbar-nav ms-auto">
                  <li class="nav-item">
                      <a class="nav-link" href="#home">Home</a>
                  </li>
                  <li class="nav-item">
                      <a class="nav-link" href="#about">About</a>
                  </li>
                
                  <li >
                      <a class="nav-link" href="#work">Work</a>
                  </li>
                  <li class="nav-item">
                      <a class="nav-link" href="#contact">Contact</a>
                  </li>
              </ul>
           </div>
      </div>
    </nav>
    </header>
  );
};

export default Header;
