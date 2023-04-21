import React from "react";

function Card() {
  return (
    <>
      <div class="card card-compact w-96 bg-base-100 shadow-xl">
        <figure>
          <img
            src="https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
            alt="Shoes"
          />
        </figure>
        <div class="card-body">
          <h2 class="card-title">Shoes!</h2>
          <p>
            If a dog chews shoes whose shoes does he choose?If a dog chews shoes
            whose shoes does he choose?If a dog chews shoes whose shoes does he
            choose?
          </p>
          <div class="card-actions justify-end">
            <p class="font-bold text-lg">199 kr.</p>
            <button class="btn btn-primary">Buy Now</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Card;
