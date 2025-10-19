<script>
    // Menu mobile - s'exécute UNIQUEMENT sur mobile
    const mobileMenu = document.querySelector('.mobile-menu');
    const navMenu = document.querySelector('nav ul');
    const menuOverlay = document.createElement('div');
    menuOverlay.className = 'menu-overlay';

    // Fonction pour vérifier si on est sur mobile
    function isMobile() {
        return window.innerWidth <= 768;
    }

    // Fonction pour ouvrir/fermer le menu
    function toggleMenu() {
        if (!isMobile()) return; // Ne rien faire sur desktop
        
        navMenu.classList.toggle('active');
        mobileMenu.classList.toggle('active');
        menuOverlay.classList.toggle('active');
        document.body.style.overflow = navMenu.classList.contains('active') ? 'hidden' : '';
    }

    // Initialisation conditionnelle
    function initMobileMenu() {
        if (isMobile()) {
            // Ajouter l'overlay seulement sur mobile
            if (!document.body.contains(menuOverlay)) {
                document.body.appendChild(menuOverlay);
            }
            
            // Ajouter les événements
            mobileMenu.addEventListener('click', toggleMenu);
            menuOverlay.addEventListener('click', toggleMenu);
            
            // Fermer le menu quand on clique sur un lien
            document.querySelectorAll('nav ul li a').forEach(link => {
                link.addEventListener('click', () => {
                    toggleMenu();
                });
            });
        } else {
            // Sur desktop, supprimer l'overlay et les événements
            if (document.body.contains(menuOverlay)) {
                document.body.removeChild(menuOverlay);
            }
            
            // Réinitialiser le menu
            navMenu.classList.remove('active');
            mobileMenu.classList.remove('active');
            document.body.style.overflow = '';
        }
    }

    // Événements
    window.addEventListener('resize', initMobileMenu);
    document.addEventListener('DOMContentLoaded', initMobileMenu);

    // Réinitialiser au chargement
    initMobileMenu();

    // COMPTE À REBOURS FONCTIONNEL
    function updateCountdown() {
        // Date de fin de l'offre (3 jours à partir de maintenant)
        const endDate = new Date();
        endDate.setDate(endDate.getDate() + 3); // 3 jours
        endDate.setHours(23, 59, 59, 999); // Fin de journée

        const now = new Date().getTime();
        const distance = endDate - now;

        if (distance < 0) {
            // L'offre est terminée
            document.querySelectorAll('.countdown-timer, .countdown-final').forEach(element => {
                element.textContent = "00:00:00";
            });
            return;
        }

        // Calculer jours, heures, minutes, secondes
        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        // Formater avec 2 chiffres
        const formatTime = (time) => time.toString().padStart(2, '0');
        
        const countdownString = `${formatTime(days)}:${formatTime(hours)}:${formatTime(minutes)}:${formatTime(seconds)}`;

        // Mettre à jour tous les éléments de compte à rebours
        document.querySelectorAll('.countdown-timer, .countdown-final').forEach(element => {
            element.textContent = countdownString;
        });
    }

    // Démarrer le compte à rebours immédiatement et toutes les secondes
    updateCountdown();
    setInterval(updateCountdown, 1000);

    // Animation au défilement
    window.addEventListener('scroll', function() {
        const elements = document.querySelectorAll('.benefit-item, .pack-card, .testimonial-card');
        
        elements.forEach(element => {
            const position = element.getBoundingClientRect().top;
            const screenPosition = window.innerHeight / 1.2;
            
            if(position < screenPosition) {
                element.style.opacity = "1";
                element.style.transform = "translateY(0)";
            }
        });
    });
    
    // Initialiser les animations
    document.querySelectorAll('.benefit-item, .pack-card, .testimonial-card').forEach(element => {
        element.style.opacity = "0";
        element.style.transform = "translateY(20px)";
        element.style.transition = "opacity 0.5s ease, transform 0.5s ease";
    });
    
    // Déclencher l'animation au chargement
    window.dispatchEvent(new Event('scroll'));
</script>
