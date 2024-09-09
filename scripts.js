import {toggleDrawer, fetchYaml, renderHeroSection, renderFeatureSections, renderGeneralFeatures, renderTestimonials, renderCTA  } from './modules.js' 

document.addEventListener("DOMContentLoaded", function () {
  const menuIcon = document.querySelector(".menu-icon");
  const overlay = document.querySelector(".overlay");

  menuIcon.addEventListener("click", toggleDrawer);
  overlay.addEventListener("click", toggleDrawer);
});


async function renderLandingPage() {
  const page = await fetchYaml("indexx.yml");
  const content = document.getElementById("homepage");
  content.appendChild(renderHeroSection(page));
  content.appendChild(renderFeatureSections(page));
  content.appendChild(renderGeneralFeatures(page));
  content.appendChild(renderTestimonials(page));
  content.appendChild(renderCTA(page));
}

async function renderTestimonialsPage() {
  const page = await fetchYaml("indexx.yml");
  const content = document.getElementById("content");
  content.appendChild(renderTestimonials(page));
  content.appendChild(renderCTA(page));
}

renderLandingPage();
