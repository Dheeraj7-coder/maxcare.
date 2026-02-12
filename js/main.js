// toggle btn part
const toggleBtn = document.getElementById("menuToggle");
const mobileMenu = document.getElementById("mobileMenu");

toggleBtn.addEventListener("click", () => {
  mobileMenu.classList.toggle("hidden");
});

// sliding banner part
document.addEventListener("DOMContentLoaded", function () {
  const banner = document.getElementById("banner");

  const images = [
    "images/banner-1.png",
    "images/banner-2.png",
    "images/banner-3.png"
  ];

  let index = 0;

  // set first image
  banner.style.backgroundImage = `url('${images[index]}')`;

  setInterval(function () {
    index = (index + 1) % images.length;
    banner.style.backgroundImage = `url('${images[index]}')`;
  }, 4000);
});

// banner txt effect
const headings = [
  "Maximum Care For Patient Health Issues and Wellbeing",
  "Total Care for Better Health and Lasting Wellbeing",
  "Personalized Care for Optimal Health and Wellness",
];

const headingEl = document.getElementById("bannerHeading");
let textIndex = 0;

setInterval(() => {
  // slide up
  headingEl.style.transform = "translateY(-2%)";

  setTimeout(() => {
    // change text
    textIndex = (textIndex + 1) % headings.length;
    headingEl.textContent = headings[textIndex];

    // reset position
    headingEl.style.transform = "translateY(2%)";

    // slide in
    setTimeout(() => {
      headingEl.style.transform = "translateY(0)";
    }, 100);
  }, 1000);
}, 4000);

// faq part
const faqHeaders = document.querySelectorAll(".faq-header");

faqHeaders.forEach((header) => {
  header.addEventListener("click", () => {
    const content = header.nextElementSibling;
    const icon = header.querySelector("i");

    content.classList.toggle("hidden");
    icon.classList.toggle("rotate-90");
  });
});

// swiper

var swiper = new Swiper(".mySwiper", {
  slidesPerView: 3,
  spaceBetween: 30,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    0: {
      slidesPerView: 1.2,
    },
    576: {
      slidesPerView: 1.5,
    },
    768: {
      slidesPerView: 2,
    },
    992: {
      slidesPerView: 3,
    },
  },
});

// cases

const buttons = document.querySelectorAll(".filter-btn");
const items = document.querySelectorAll(".gallery-item");

buttons.forEach((btn) => {
  btn.addEventListener("click", () => {
    buttons.forEach((b) => b.classList.remove("active"));
    btn.classList.add("active");

    const filter = btn.dataset.filter;

    items.forEach((item) => {
      if (filter === "all" || item.classList.contains(filter)) {
        item.style.display = "block";
      } else {
        item.style.display = "none";
      }
    });
  });
});

// gotop
document.addEventListener("DOMContentLoaded", function () {

  const goTop = document.getElementById("goTop");

  window.addEventListener("scroll", function () {
    if (window.scrollY > 300) {
      goTop.classList.remove("hidden");
    } else {
      goTop.classList.add("hidden");
    }
  });

  goTop.addEventListener("click", function () {
    // console.log("hoyeche")
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  });

});


//   form validation
const form = document.getElementById("appointmentForm");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  let valid = true;

  const fields = [
    { id: "name", type: "text" },
    { id: "email", type: "email" },
    { id: "treatment", type: "select" },
    { id: "doctor", type: "select" },
    { id: "phone", type: "phone" },
    { id: "date", type: "date" },
  ];

  fields.forEach((field) => {
    const input = document.getElementById(field.id);
    const error = input.nextElementSibling;

    input.classList.remove("error");
    error.classList.add("hidden");

    if (!input.value.trim()) {
      showError(input, error);
      valid = false;
    }

    if (field.type === "email") {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(input.value)) {
        showError(input, error);
        valid = false;
      }
    }

    if (field.type === "phone") {
      if (input.value.replace(/\D/g, "").length < 10) {
        showError(input, error);
        valid = false;
      }
    }
  });

  if (valid) {
    alert("Appointment booked successfully!");
    form.reset();
  }
});

function showError(input, error) {
  input.classList.add("error");
  error.classList.remove("hidden");
}



// document.getElementById("goBook").onclick = function () {
//   location.hash = "book";
// };