import React from "react";
import { Link } from "react-router-dom";
function Footer() {
  return (
    <>
      <footer class="footer footer-center p-10 bg-base-200 text-base-content rounded">
        <div class="grid grid-flow-col gap-4">
          <Link to="/"><a class="link link-hover">Forside</a></Link>
          <Link to="/shop"><a class="link link-hover">Produkter</a></Link>
          <Link to="/cart"><a class="link link-hover">Kurv</a></Link>
        </div>
        <div>
          <p>Copyright © 2023 - All right reserved by Shoe'Fix Aps</p>
        </div>
      </footer>
    </>
  );
}

export default Footer;
