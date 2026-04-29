// ======================
// MENU
// ======================
const menuBtn = document.getElementById("menuBtn");
const closeBtn = document.getElementById("closeBtn");
const sideMenu = document.getElementById("sideMenu");

menuBtn.addEventListener("click", () => {
  sideMenu.classList.add("active");
});

closeBtn.addEventListener("click", () => {
  sideMenu.classList.remove("active");
});

document.querySelectorAll(".side-menu a").forEach(link => {
  link.addEventListener("click", () => {
    sideMenu.classList.remove("active");
  });
});


// ======================
// SCROLL REVEAL (MEJORADO)
// ======================
const revealSections = document.querySelectorAll(".reveal");

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
    }
  });
}, {
  threshold: 0.18
});

revealSections.forEach(section => {
  observer.observe(section);
});


// ======================
// MODAL DE PRODUCTO (PRO)
// ======================
const modal = document.getElementById("productModal");
const modalImg = document.getElementById("modalImg");
const modalTitle = document.getElementById("modalTitle");
const modalDesc = document.getElementById("modalDesc");
const closeModal = document.getElementById("closeModal");

if (modal) {
  document.querySelectorAll(".product-card").forEach(card => {
    card.addEventListener("click", () => {
      const img = card.querySelector("img").src;
      const title = card.querySelector("h3").innerText;

      modalImg.src = img;
      modalTitle.innerText = title;

      const descriptions = {
        "NAD+": "Optimización celular y energía metabólica avanzada.",
        "HGH": "Soporte en recuperación y rendimiento físico.",
        "TB-500": "Recuperación muscular y movilidad funcional.",
        "BPC-157": "Reparación tisular y protocolos avanzados.",
        "Retatrutide": "Investigación metabólica avanzada.",
        "Creatina": "Fuerza, potencia y rendimiento.",
        "Pre-entreno": "Energía y enfoque inmediato.",
        "BCAA": "Recuperación muscular.",
        "Glutamina": "Soporte post-entreno.",
        "Colágeno": "Articulaciones y bienestar."
      };

      modalDesc.innerText = descriptions[title] || "Información del producto.";

      modal.classList.add("active");
    });
  });

  closeModal.addEventListener("click", () => {
    modal.classList.remove("active");
  });

  // cerrar al hacer click fuera
  modal.addEventListener("click", (e) => {
    if (e.target === modal) {
      modal.classList.remove("active");
    }
  });
}


// ======================
// HOVER 3D (ULTRA PRO)
// ======================
document.querySelectorAll(".product-card").forEach(card => {
  card.addEventListener("mousemove", e => {
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    card.style.transform = `
      perspective(900px)
      rotateX(${-(y - rect.height/2)/12}deg)
      rotateY(${(x - rect.width/2)/12}deg)
      scale(1.03)
    `;
  });

  card.addEventListener("mouseleave", () => {
    card.style.transform = "rotateX(0) rotateY(0) scale(1)";
  });
});


// ======================
// PARALLAX HERO
// ======================
const hero = document.querySelector(".hero");

window.addEventListener("scroll", () => {
  if (hero) {
    hero.style.backgroundPositionY = window.scrollY * 0.25 + "px";
  }
});
