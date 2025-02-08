// Smooth Scrolling for Navigation
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth",
    });
  });
});

// Dynamic Projects Rendering
const projects = [
 
];

const projectContainer = document.querySelector(".row.g-4");

if (projectContainer) {
  projects.forEach(project => {
    const projectCard = document.createElement("div");
    projectCard.className = "col-md-4";
    projectCard.innerHTML = `
      <div class="card bg-dark border-0">
        <img src="${project.image}" class="card-img-top rounded-3" alt="${project.title}">
        <div class="card-body">
          <h5 class="card-title">${project.title}</h5>
          <div class="card-footer text-center mt-auto">
            <a href="${project.link}" class="btn btn-primary btn-shadow">View Project</a>
          </div>
        </div>
      </div>`;
    projectContainer.appendChild(projectCard);
  });
}

// Contact Form Validation
const form = document.querySelector("form");
if (form) {
  form.addEventListener("submit", (event) => {
    const email = document.querySelector('input[type="email"]').value.trim();
    const name = document.querySelector('input[type="text"]').value.trim();
    const message = document.querySelector('textarea').value.trim();

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!name) {
      alert("Please enter your name.");
      event.preventDefault();
    } else if (!email || !emailRegex.test(email)) {
      alert("Please enter a valid email address.");
      event.preventDefault();
    } else if (!message) {
      alert("Please enter your message.");
      event.preventDefault();
    }
  });
}

// Highlight Active Navigation Link
window.addEventListener("scroll", () => {
  const sections = document.querySelectorAll("section");
  const navLinks = document.querySelectorAll("nav a");

  let currentSection = "";

  sections.forEach(section => {
    const sectionTop = section.offsetTop;
    if (window.scrollY >= sectionTop - 50) {
      currentSection = section.getAttribute("id");
    }
  });

  navLinks.forEach(link => {
    link.classList.remove("active");
    if (link.getAttribute("href").substring(1) === currentSection) {
      link.classList.add("active");
    }
  });
});

// Back to Top Button
const backToTopBtn = document.createElement("button");
backToTopBtn.innerText = "↑";
backToTopBtn.className = "back-to-top";
document.body.appendChild(backToTopBtn);

backToTopBtn.style.cssText = `
  position: fixed;
  bottom: 20px;
  right: 20px;
  display: none;
  background: #007bff;
  color: white;
  border: none;
  border-radius: 50%;
  padding: 10px 15px;
  cursor: pointer;
`;

window.addEventListener("scroll", () => {
  backToTopBtn.style.display = window.scrollY > 300 ? "block" : "none";
});

backToTopBtn.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

// Read More for Services
document.querySelectorAll(".read-more-btn").forEach(button => {
  button.addEventListener("click", function (event) {
    event.preventDefault();
    const serviceCard = this.closest(".service-card");
    const moreContent = serviceCard.querySelector(".service-more-content");
    moreContent.style.display = "block";
    this.style.display = "none";
  });
});

// Read More for About Section
document.getElementById("read-more-btn").addEventListener("click", function() {
  const moreText = document.getElementById("more-text");
  moreText.style.display = "block";
  this.style.display = "none";
});
