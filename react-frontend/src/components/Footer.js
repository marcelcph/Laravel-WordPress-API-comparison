import React from "react";

function Footer() {
  return (
    <>
      <footer class="footer footer-center p-10 bg-base-200 text-base-content rounded">
        <div class="grid grid-flow-col gap-4">
          <a class="link link-hover">Om os</a>
          <a class="link link-hover">Produkter</a>
          <a class="link link-hover">Kurv</a>
        </div>
        <div>
          <p>Copyright © 2023 - All right reserved by ACME Industries Ltd</p>
        </div>
      </footer>
    </>
  );
}

export default Footer;
