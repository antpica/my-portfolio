import React from 'react';

const Work = () => {
  return (
    <header>
      <section id="work">
    <div class="container mt-3">
        <h1 class="text-center">Work</h1>
        <div class="row">
            <div class="col-lg-6 mt-4">
                <div class="card">
                    <div class="card-body">
                        <h4 class="card-title">Project 1</h4>
                        <p class="card-text">BrewCast</p>
                        <div class="text-center">
                            <a href="https://domconf.github.io/BrewCast" class="btn btn-success">Link</a>
                        </div>
                    </div>
                </div>
            </div>

            <div class="col-lg-6 mt-4">
                <div class="card portfolioContent">
                    <div class="card-body">
                        <h4 class="card-title">Project 2</h4>
                        <p class="card-text">Real Dills Pro Shop</p>
                        <div class="text-center">
                            <a href="https://real-dills-pro-shop.herokuapp.com/" class="btn btn-success">Link</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>
    </header>
  );
};

export default Work;

