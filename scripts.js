import { fetchYaml, renderHeroSection, renderFeatureSections, renderGeneralFeatures, renderTestimonials, renderCTA  } from './modules.js' 

export async function toggleDrawer() {
  const drawer = document.getElementById("drawer");
  const overlay = document.getElementById("overlay");
  const content = document.getElementById("content");

  drawer.classList.toggle("open");
  overlay.classList.toggle("open");
  content.classList.toggle("drawer-open");
}


document.addEventListener("DOMContentLoaded", function () {
  const menuIcon = document.querySelector(".menu-icon");
  const overlay = document.querySelector(".overlay");

  [menuIcon , overlay].forEach(element => { element.addEventListener("click", toggleDrawer);
});
})

export async function renderLandingPage() {
  const page = await fetchYaml("indexx.yml");
  const content = document.getElementById("homepage");
  content.appendChild(renderHeroSection(page));
  content.appendChild(renderFeatureSections(page));
  content.appendChild(renderGeneralFeatures(page));
  content.appendChild(renderTestimonials(page));
  content.appendChild(renderCTA(page));
}

export async function renderTestimonialsPage() {
  const page = await fetchYaml("indexx.yml");
  const content = document.getElementById("content");
  content.appendChild(renderTestimonials(page));
  content.appendChild(renderCTA(page));
}

