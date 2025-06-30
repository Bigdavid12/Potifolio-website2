document.addEventListener('DOMContentLoaded', () => {
  // 🔹 Hamburger menu toggle  
  const hamburger = document.querySelector('.hamburger');
  const nav = document.querySelector('nav');
  
  if (hamburger) {
    hamburger.addEventListener('click', () => {
      nav.classList.toggle('active');
    });
  }
  
  // 🔹 Typing animation  
  const typingElement = document.getElementById('typing');
  const words = ["Web Developer", "Developer", "Web Designer","Script Writer","E-commerce website developer", "E-commerce store"];
  let wordIndex = 0;
  let letterIndex = 0;
  let currentWord = words[wordIndex];
  let currentLetters = '';
  let isDeleting = false;
  
  function type() {
    if (isDeleting) {
      currentLetters = currentWord.substring(0, letterIndex - 1);
      letterIndex--;
    } else {
      currentLetters = currentWord.substring(0, letterIndex + 1);
      letterIndex++;
    }
    
    typingElement.innerHTML = currentLetters;
    
    let typeSpeed = 200;
    if (isDeleting) typeSpeed /= 2;
    
    if (!isDeleting && letterIndex === currentWord.length) {
      typeSpeed = 2000;
      isDeleting = true;
    } else if (isDeleting && letterIndex === 0) {
      isDeleting = false;
      wordIndex = (wordIndex + 1) % words.length;
      currentWord = words[wordIndex];
      typeSpeed = 500;
    }
    
    setTimeout(type, typeSpeed);
  }
  
  type();
  
  // 🔹 Count-up animation for stats  
  const counters = document.querySelectorAll('.counter');
  const speed = 200;
  
  counters.forEach(counter => {
    const updateCount = () => {
      const target = +counter.getAttribute('data-target');
      const count = +counter.innerText;
      const increment = Math.ceil(target / speed);
      
      if (count < target) {
        counter.innerText = count + increment;
        setTimeout(updateCount, 30);
      } else {
        counter.innerText = target + "+";
      }
    };
    updateCount();
  });
  
  // 🔹 Skill progress bar animation
  const skillSection = document.getElementById('skills');
  const skillFills = document.querySelectorAll('.skill-fill');
  
  if (skillSection) {
    const observer = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          skillFills.forEach(fill => {
            const fullWidth = fill.style.width;
            fill.style.width = "0"; // Reset for animation
            setTimeout(() => {
              fill.style.width = fullWidth;
            }, 100);
          });
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.5 });
    
    observer.observe(skillSection);
  }
const skillSection = document.getElementById("skills");
const skillFills = document.querySelectorAll(".skill-fill");

if (skillSection) {
  const skillObserver = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      document.querySelectorAll('.skill-fill').forEach(fill => {
        const targetWidth = fill.getAttribute('data-fill');
        fill.style.width = targetWidth + '%';
      });
      observer.disconnect();
    }
  });
}, { threshold: 0.5 });

const skillsSection = document.querySelector('#skills');
if (skillsSection) {
  skillObserver.observe(skillsSection);
}}
document.addEventListener("DOMContentLoaded", () => {
  const skillFills = document.querySelectorAll(".skill-fill");

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const fill = entry.target;
        const percent = fill.getAttribute("data-fill");
        fill.style.setProperty('--target-fill', percent + '%');
        fill.style.width = percent + '%';
        observer.unobserve(fill);
      }
    });
  }, { threshold: 0.5 });

  skillFills.forEach(fill => observer.observe(fill));
  document.addEventListener('DOMContentLoaded', () => {
  const cards = document.querySelectorAll('.service-card');
  const obs = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        e.target.classList.add('visible');
        obs.unobserve(e.target);
      }
    });
  }, {threshold: 0.3});

  cards.forEach(c => obs.observe(c));
});