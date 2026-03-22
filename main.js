// Cursor Blur Effect
const cursorBlur = document.getElementById('cursor-blur');
document.addEventListener('mousemove', (e) => {
    cursorBlur.style.left = e.clientX + 'px';
    cursorBlur.style.top = e.clientY + 'px';
});

// Navbar Scroll Effect
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// Chart.js Skills Visualization
const ctx = document.getElementById('skillsChart').getContext('2d');
new Chart(ctx, {
    type: 'radar',
    data: {
        labels: ['Python', 'SQL', 'Tableau', 'Data Analysis', 'Web Scraping', 'Excel', 'Problem Solving'],
        datasets: [{
            label: 'Skill Proficiency',
            data: [90, 85, 80, 88, 75, 85, 95],
            backgroundColor: 'rgba(255, 133, 162, 0.2)',
            borderColor: '#FF85A2',
            pointBackgroundColor: '#FF85A2',
            pointBorderColor: '#fff',
            pointHoverBackgroundColor: '#fff',
            pointHoverBorderColor: '#FF85A2'
        }]
    },
    options: {
        scales: {
            r: {
                angleLines: { color: 'rgba(255, 133, 162, 0.1)' },
                grid: { color: 'rgba(255, 133, 162, 0.1)' },
                pointLabels: { color: '#636E72', font: { size: 14, family: 'Inter' } },
                ticks: { display: false },
                suggestedMin: 0,
                suggestedMax: 100
            }
        },
        plugins: {
            legend: { display: false }
        }
    }
});

// Intersection Observer for Reveal Animations
const observerOptions = {
    threshold: 0.1
};

const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('fade-up');
            revealObserver.unobserve(entry.target);
        }
    });
}, observerOptions);

document.querySelectorAll('section, .stat-card, .project-card, .skill-category').forEach(el => {
    el.style.opacity = '0';
    revealObserver.observe(el);
});

// Smooth Scroll for Nav Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});
