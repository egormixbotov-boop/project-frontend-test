// Мобильное меню
const navToggle = document.getElementById('navToggle');
const navMenu = document.getElementById('navMenu');

if (navToggle) {
    navToggle.addEventListener('click', () => {
        navMenu.classList.toggle('active');
        
        // Анимация кнопки
        const spans = navToggle.querySelectorAll('span');
        if (navMenu.classList.contains('active')) {
            spans[0].style.transform = 'rotate(45deg) translate(5px, 5px)';
            spans[1].style.opacity = '0';
            spans[2].style.transform = 'rotate(-45deg) translate(7px, -6px)';
        } else {
            spans[0].style.transform = 'none';
            spans[1].style.opacity = '1';
            spans[2].style.transform = 'none';
        }
    });
}

// Закрытие меню при клике на ссылку
const navLinks = document.querySelectorAll('.nav-link');
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
        const spans = navToggle.querySelectorAll('span');
        spans[0].style.transform = 'none';
        spans[1].style.opacity = '1';
        spans[2].style.transform = 'none';
    });
});

// Плавная прокрутка для якорных ссылок и кнопок
document.querySelectorAll('a[href^="#"], button').forEach(element => {
    const href = element.getAttribute('href');
    if (href && href.startsWith('#')) {
        element.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(href);
            if (target) {
                const navHeight = document.querySelector('.navbar').offsetHeight + 40;
                const targetPosition = target.offsetTop - navHeight;
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    }
});

// Изменение навигации при скролле
const navbar = document.querySelector('.navbar');
let lastScroll = 0;

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    
    if (currentScroll > 100) {
        navbar.style.boxShadow = '0 8px 32px 0 rgba(168, 85, 247, 0.3)';
        navbar.style.top = '10px';
    } else {
        navbar.style.boxShadow = '0 8px 32px 0 rgba(31, 38, 135, 0.37)';
        navbar.style.top = '20px';
    }
    
    lastScroll = currentScroll;
});


// Анимация появления элементов при загрузке
window.addEventListener('load', () => {
    const robotFigure = document.querySelector('.robot-figure');
    const heroContent = document.querySelector('.hero-content');
    
    if (robotFigure) {
        robotFigure.style.opacity = '0';
        robotFigure.style.transform = 'translateX(-50px)';
        robotFigure.style.transition = 'opacity 1s ease, transform 1s ease';
        
        setTimeout(() => {
            robotFigure.style.opacity = '1';
            robotFigure.style.transform = 'translateX(0)';
        }, 200);
    }
    
    if (heroContent) {
        heroContent.style.opacity = '0';
        heroContent.style.transform = 'translateX(50px)';
        heroContent.style.transition = 'opacity 1s ease, transform 1s ease';
        
        setTimeout(() => {
            heroContent.style.opacity = '1';
            heroContent.style.transform = 'translateX(0)';
        }, 400);
    }
});

// Аккордеон для карточек услуг
function initServiceCards() {
    const cards = document.querySelectorAll('.service-card');
    if (!cards.length) return;

    cards.forEach(card => {
        const content = card.querySelector('.service-content');
        if (!content) {
            return;
        }

        card.addEventListener('click', (e) => {
            // не реагируем на клики по ссылкам/кнопкам внутри карточки
            if (e.target.closest('a') || e.target.closest('button')) {
                return;
            }

            const isExpanded = card.classList.contains('expanded');

            document.querySelectorAll('.service-card.expanded').forEach(openCard => {
                openCard.classList.remove('expanded');
            });

            if (!isExpanded) {
                card.classList.add('expanded');
                card.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
            }
        });
    });

    // закрываем карточки при клике вне
    document.addEventListener('click', (e) => {
        if (!e.target.closest('.service-card')) {
            document.querySelectorAll('.service-card.expanded').forEach(openCard => {
                openCard.classList.remove('expanded');
            });
        }
    });
}

window.addEventListener('DOMContentLoaded', initServiceCards);

// Анимация схем на роботе
const circuits = document.querySelectorAll('.robot-circuit');
circuits.forEach((circuit, index) => {
    circuit.style.opacity = '0';
    circuit.style.transition = `opacity 0.8s ease ${index * 0.2}s`;
    
    setTimeout(() => {
        circuit.style.opacity = '1';
    }, 1000 + (index * 200));
});

