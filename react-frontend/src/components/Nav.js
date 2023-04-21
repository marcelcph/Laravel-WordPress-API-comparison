import React from "react";
import { Link } from "react-router-dom";
import Shop from "../pages/Shop";
function Nav() {
  return (
    <>
      <div class="navbar bg-base-100">
        <div class="flex-1">
          <a class="btn btn-ghost normal-case text-xl">Memis' Kebabbix</a>
        </div>
        <div class="flex-none">
          <ul class="menu menu-horizontal px-1">
            <li>
              <Link to="/">Forside</Link>
            </li>
            <li tabindex="0">
              <Link to="/shop">
                Produkter
                <svg
                  class="fill-current"
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                >
                  <path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" />
                </svg>
              </Link>
              <ul class="p-2 bg-base-100">
                <li>
                  <a>Nike</a>
                </li>
                <li>
                  <a>Adidas</a>
                </li>
                <li>
                  <a>New Balance</a>
                </li>
                <li>
                  <a>Vans</a>
                </li>
              </ul>
            </li>
            <li>
            <a>Om os</a>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default Nav;
