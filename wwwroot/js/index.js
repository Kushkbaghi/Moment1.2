"use strict";
// Set current page as the active page
const activePage = window.location.pathname;
const navLinks = document.querySelectorAll("aside a").forEach((link) => {
  if (link.href.includes(`${activePage}`)) {
    link.classList.add("active");
  }
});
