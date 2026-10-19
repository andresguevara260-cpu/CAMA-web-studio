// Personaliza estos datos antes de publicar tu web.
const CONFIG = {
  email: "hola@camaweb.studio",
  // Añade tu WhatsApp en formato internacional, solo números. Ejemplo: "521234567890"
  whatsapp: ""
};

document.getElementById("year").textContent = new Date().getFullYear();

// Menú móvil accesible
const menuToggle = document.querySelector(".menu-toggle");
const nav = document.querySelector(".nav");
menuToggle.addEventListener("click", () => {
  const isOpen = nav.classList.toggle("open");
  menuToggle.setAttribute("aria-expanded", String(isOpen));
  menuToggle.setAttribute("aria-label", isOpen ? "Cerrar menú" : "Abrir menú");
});
nav.querySelectorAll("a").forEach(link => {
  link.addEventListener("click", () => {
    nav.classList.remove("open");
    menuToggle.setAttribute("aria-expanded", "false");
    menuToggle.setAttribute("aria-label", "Abrir menú");
  });
});

// El formulario prepara un correo: no requiere servidor ni guarda datos.
const form = document.getElementById("contact-form");
const status = document.getElementById("form-status");
const emailLink = document.getElementById("email-link");
emailLink.href = `mailto:${CONFIG.email}`;
emailLink.textContent = CONFIG.email;

form.addEventListener("submit", (event) => {
  event.preventDefault();
  if (!form.reportValidity()) return;

  const data = new FormData(form);
  const subject = `Consulta web — ${data.get("name")}`;
  const body = [
    `Hola CAMA web studio,`,
    ``,
    `Mi nombre: ${data.get("name")}`,
    `Mi correo: ${data.get("email")}`,
    `Servicio: ${data.get("service")}`,
    ``,
    `Sobre mi proyecto:`,
    `${data.get("message")}`,
    ``,
    `Enviado desde la web de CAMA web studio.`
  ].join("\n");

  if (CONFIG.whatsapp.trim()) {
    const message = encodeURIComponent(`${subject}\n\n${body}`);
    window.open(`https://wa.me/${CONFIG.whatsapp.trim()}?text=${message}`, "_blank", "noopener,noreferrer");
    status.textContent = "Abrimos WhatsApp con tu mensaje preparado. Si no se abrió, revisa el bloqueador de ventanas emergentes.";
  } else {
    const mailto = `mailto:${CONFIG.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.location.href = mailto;
    status.textContent = `Se ha preparado un correo para ${CONFIG.email}. Si no se abrió tu aplicación de correo, copia los datos y escríbenos directamente.`;
  }
});
