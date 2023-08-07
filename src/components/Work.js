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
                        <h4 class="card-title">BrewCast</h4>
                        <p class="card-text">Project 1</p>
                        <div class="text-center">
                            <a href="https://domconf.github.io/BrewCast" class="btn btn-success">Link</a>
                        </div>
                    </div>
                </div>
            </div>

            <div class="col-lg-6 mt-4">
                <div class="card portfolioContent">
                    <div class="card-body">
                        <h4 class="card-title">Real Dills Pro Shop</h4>
                        <p class="card-text">Project 2</p>
                        <div class="text-center">
                            <a href="https://real-dills-pro-shop.herokuapp.com/" class="btn btn-success">Link</a>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-lg-6 mt-4">
                <div class="card portfolioContent">
                    <div class="card-body">
                        <h4 class="card-title">Cinema Stash</h4>
                        <p class="card-text">Project 3</p>
                        <div class="text-center">
                            <a href="https://cinema-stash-c85de8364f90.herokuapp.com/" class="btn btn-success">Link</a>
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

