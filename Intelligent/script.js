// Icons Initialize
lucide.createIcons();

// Hero Carousel logic
const slides = document.querySelectorAll('.slide');
let slideIndex = 0;

function rotateSlides() {
    slides[slideIndex].classList.remove('active');
    slideIndex = (slideIndex + 1) % slides.length;
    slides[slideIndex].classList.add('active');
}
setInterval(rotateSlides, 5000);

// WHATSAPP REDIRECT LOGIC
const myWhatsAppNumber = "919919756777"; // <--- APNA NUMBER YAHAN DALO

// Form Submit to WhatsApp
document.getElementById('admissionForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const parent = document.getElementById('parentName').value;
    const sClass = document.getElementById('studentClass').value;
    const phone = document.getElementById('mobile').value;
    
    const text = `*New Admission Inquiry*%0A------------------%0A*Parent Name:* ${parent}%0A*Class:* ${sClass}%0A*Mobile:* ${phone}`;
    
    window.open(`https://wa.me/${09919756777}?text=${text}`, '_blank');
});

// Update Floating Button with same number
document.getElementById('waFloating').href = `https://wa.me/${09919756777}`;

// Simple Scroll Reveal Effect
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if(entry.isIntersecting) {
            entry.target.style.opacity = 1;
            entry.target.style.transform = "translateY(0)";
        }
    });
}, { threshold: 0.1 });

document.querySelectorAll('section').forEach(section => {
    section.style.opacity = 0;
    section.style.transform = "translateY(40px)";
    section.style.transition = "all 0.8s ease-out";
    observer.observe(section);
});