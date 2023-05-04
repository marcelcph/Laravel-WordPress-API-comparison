import React from "react";

function Newsletter() {
  return (
    <>
      <div class="hero min-h-1/2 bg-base-200 mt-12">
        <div class="hero-content flex-col lg:flex-row-reverse">
          <div class="text-center lg:text-left">
            <h1 class="text-5xl font-bold">Subscribe to our newsletter now!</h1>
            <p class="py-6">
              Be the first to know about the latest sneaker drops, exclusive
              offers, and promotions! Sign up for our newsletter and stay
              up-to-date with everything happening at Shoe'Fix.
            </p>
          </div>
          <div class="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <div class="card-body">
              <div class="form-control">
                <label class="label">
                  <span class="label-text">Email</span>
                </label>
                <input
                  type="text"
                  placeholder="E-mail"
                  class="input input-bordered"
                />
              </div>
              <div class="form-control mt-6">
                <button class="btn btn-primary">Sign up!</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Newsletter;
