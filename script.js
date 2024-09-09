export function toggleDrawer() {
  const drawer = document.getElementById("drawer");
  const overlay = document.getElementById("overlay");
  const content = document.getElementById("content");

  drawer.classList.toggle("open");
  overlay.classList.toggle("open");
  content.classList.toggle("drawer-open");
}

export async function fetchYaml(url) {
  try {
    // Fetch the data source
    const response = await fetch(url, { method: "GET" });
    // console.log(response);

    // Convert YAML to JSON
    const page = await response.text().then(jsyaml.load);

    return page;
  } catch (error) {
    console.error("YAML file not loaded", error);
  }
}

// Hero section
export function renderHeroSection(page) {
  const heroDiv = document.createElement("div");
  heroDiv.className = "landing-hero";

  // These are temporary variables that exist only within scope of each function, so Im not concerned about naming
  const h1 = document.createElement("h1");
  h1.textContent = page.hero.title;
  heroDiv.appendChild(h1);

  const p = document.createElement("p");
  p.textContent = page.hero.description;
  heroDiv.appendChild(p);

  const img = document.createElement("img");
  img.src = page.hero.image;
  img.alt = "Landing Image";
  img.className = "hero-image";
  heroDiv.appendChild(img);

  return heroDiv;
}

// Feature sections
export function renderFeatureSections(page) {
  const sectionsDiv = document.createElement("div");

  page.sections.forEach((section) => {
    const sectionDiv = document.createElement("div");
    sectionDiv.className = "landing-section";

    const h2 = document.createElement("h2");
    h2.textContent = section.title;
    sectionDiv.appendChild(h2);

    const p = document.createElement("p");
    p.textContent = section.description;
    sectionDiv.appendChild(p);

    section.features.forEach((feature) => {
      const featureDiv = document.createElement("div");
      featureDiv.className = "landing-card";

      const h3 = document.createElement("h3");
      h3.textContent = feature.name;
      featureDiv.appendChild(h3);

      const featureDesc = document.createElement("p");
      featureDesc.textContent = feature.description;
      featureDiv.appendChild(featureDesc);

      const img = document.createElement("img");
      img.src = feature.icon;
      img.className = "landing-feature-pic";
      featureDiv.appendChild(img);

      sectionDiv.appendChild(featureDiv);
    });

    sectionsDiv.appendChild(sectionDiv);
  });

  return sectionsDiv;
}

// General Features
export function renderGeneralFeatures(page) {
  const generalFeaturesDiv = document.createElement("div");
  generalFeaturesDiv.className = "landing-general-features";

  const h2 = document.createElement("h2");
  h2.textContent = page.features.title;
  generalFeaturesDiv.appendChild(h2);

  const p = document.createElement("p");
  p.textContent = page.features.description;
  generalFeaturesDiv.appendChild(p);

  const gridDiv = document.createElement("div");
  gridDiv.className = "data-grid";

  page.features.items.forEach((feature) => {
    const featureDiv = document.createElement("div");
    featureDiv.className = "landing-card";

    const h3 = document.createElement("h3");
    h3.textContent = feature.title;
    featureDiv.appendChild(h3);

    const featureDesc = document.createElement("p");
    featureDesc.textContent = feature.description;
    featureDiv.appendChild(featureDesc);

    const img = document.createElement("img");
    img.src = feature.icon;
    img.className = "landing-feature-pic";
    featureDiv.appendChild(img);

    gridDiv.appendChild(featureDiv);
  });

  // Putting these in a main axis grid
  generalFeaturesDiv.appendChild(gridDiv);

  return generalFeaturesDiv;
}

// Testimonials section
export function renderTestimonials(page) {
  const testimonialsDiv = document.createElement("div");
  testimonialsDiv.className = "landing-testimonials";

  const h2 = document.createElement("h2");
  h2.textContent = page.testimonials.title;
  testimonialsDiv.appendChild(h2);

  const p = document.createElement("p");
  p.textContent = page.testimonials.description;
  testimonialsDiv.appendChild(p);

  const columnsDiv = document.createElement("div");
  columnsDiv.className = "data-columns";

  // Card for each testimonial
  page.testimonials.items.forEach((testimonial) => {
    const testimonialCard = document.createElement("div");
    testimonialCard.className = "testimonial-card";

    const quote = document.createElement("p");
    quote.textContent = testimonial.quote;
    testimonialCard.appendChild(quote);

    const authorDiv = document.createElement("div");
    authorDiv.className = "testimonial-author";

    const img = document.createElement("img");
    img.src = testimonial.author.avatar.src;
    img.alt = testimonial.author.name;
    img.className = "testimonial-avatar";
    authorDiv.appendChild(img);

    const span = document.createElement("span");
    span.textContent = testimonial.author.name;
    authorDiv.appendChild(span);

    testimonialCard.appendChild(authorDiv);
    columnsDiv.appendChild(testimonialCard);
  });

  testimonialsDiv.appendChild(columnsDiv);

  return testimonialsDiv;
}

// CTA section
export function renderCTA(page) {
  const ctaDiv = document.createElement("div");
  ctaDiv.className = "landing-cta";

  const h2 = document.createElement("h2");
  h2.textContent = page.cta.title;
  ctaDiv.appendChild(h2);

  const p = document.createElement("p");
  p.textContent = page.cta.description;
  ctaDiv.appendChild(p);

  // Dynamically create link for each link in array
  page.cta.links.forEach((link) => {
    const a = document.createElement("a");
    a.href = link.to;
    a.target = "_blank";
    a.className = "cta-button";
    a.textContent = link.label;
    ctaDiv.appendChild(a);
  });

  return ctaDiv;
}

 async function renderLandingPage() {
  const page = await fetchYaml("indexx.yml");
  const content = document.getElementById("homepage");
  content.appendChild(renderHeroSection(page));
  content.appendChild(renderFeatureSections(page));
  content.appendChild(renderGeneralFeatures(page));
  content.appendChild(renderTestimonials(page));
  content.appendChild(renderCTA(page));
}
renderLandingPage();
