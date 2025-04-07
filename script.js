// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});
// Typewriter Effect
const typewriterText = "I’m a content creator specializing in futuristic visuals and storytelling.";
const typewriterElement = document.createElement('p');
typewriterElement.classList.add('typewriter');
document.querySelector('.home-content').appendChild(typewriterElement);

let i = 0;
function typeWriter() {
    if (i < typewriterText.length) {
        typewriterElement.innerHTML += typewriterText.charAt(i);
        i++;
        setTimeout(typeWriter, 50); // Adjust speed here
    }
}

typeWriter();
// Scroll Animations
const fadeInElements = document.querySelectorAll('.fade-in');

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, { threshold: 0.5 });

fadeInElements.forEach(element => observer.observe(element));
// Neon Cursor
const cursor = document.createElement('div');
cursor.classList.add('cursor');
document.body.appendChild(cursor);

document.addEventListener('mousemove', (e) => {
    cursor.style.left = `${e.pageX}px`;
    cursor.style.top = `${e.pageY}px`;
});

document.addEventListener('mouseenter', () => {
    cursor.style.opacity = '1';
});

document.addEventListener('mouseleave', () => {
    cursor.style.opacity = '0';
});
// Confetti Effect
const confettiCanvas = document.getElementById('confetti-canvas');

function triggerConfetti() {
    confetti({
        particleCount: 150, // Number of confetti particles
        spread: 70, // How far the particles spread
        origin: { y: 0.6 }, // Start from the top-middle of the screen
        colors: ['#00fffc', '#ff00ff', '#ffff00', '#ff6600'], // Neon colors
        shapes: ['circle', 'square'], // Confetti shapes
    });
}

// Trigger confetti when the page loads
window.addEventListener('load', triggerConfetti);

// Optional: Trigger confetti on button click (e.g., for a "Celebrate" button)
document.querySelector('.celebrate-btn')?.addEventListener('click', triggerConfetti);