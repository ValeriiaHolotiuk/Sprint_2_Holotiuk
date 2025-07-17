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


// Character counter
const messageInput = document.getElementById("message");
const charCount = document.getElementById("charCount");

messageInput.addEventListener("input", () => {
  charCount.textContent = `${messageInput.value.length} / 300`;
});

// Success popup after submission
const form = document.getElementById("contactForm");
const successMessage = document.getElementById("successMessage");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  const formData = new FormData(form);

  fetch(form.action, {
    method: "POST",
    body: formData,
    headers: {
      Accept: "application/json",
    },
  })
    .then((response) => {
      if (response.ok) {
        successMessage.style.display = "block";
        form.reset();
        charCount.textContent = "0 / 300";
        setTimeout(() => {
          successMessage.style.display = "none";
        }, 3000);
      } else {
        alert("Failed to send. Try again.");
      }
    })
    .catch(() => alert("Error sending message"));
});
