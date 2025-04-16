const messageInput = document.getElementById('message');
const charCount = document.getElementById('charCount');
const form = document.getElementById('contactForm');

messageInput.addEventListener('input', () => {
  charCount.textContent = `${messageInput.value.length} / 300`;
});

const popup = document.createElement('div');
popup.className = 'skill-popup';
document.body.appendChild(popup);



const skills = document.querySelectorAll('.skill-circle');

skills.forEach(skill => {
  skill.addEventListener('mouseenter', () => {
    popup.textContent = skill.getAttribute('data-tooltip');
    popup.style.opacity = '1';
    popup.style.transform = 'translateY(0)';
  });

  skill.addEventListener('mousemove', (e) => {
    popup.style.top = `${e.pageY - 50}px`;
    popup.style.left = `${e.pageX + 20}px`;
  });

  skill.addEventListener('mouseleave', () => {
    popup.style.opacity = '0';
    popup.style.transform = 'translateY(10px)';
  });
});



const text = "Web Developer, UI/UX designer";
const typeTarget = document.querySelector(".typewriter");

let i = 0;
function typeWriterEffect() {
  if (i < text.length) {
    typeTarget.textContent += text.charAt(i);
    i++;
    setTimeout(typeWriterEffect, 70); 
  }
}
window.addEventListener('load', typeWriterEffect);




const scrollBtn = document.getElementById("scrollToTopBtn");

window.addEventListener("scroll", () => {
  scrollBtn.style.display = window.scrollY > 400 ? "block" : "none";
});

scrollBtn.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});


