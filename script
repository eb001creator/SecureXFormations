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

        // Compte à rebours
        function updateCountdown() {
            const countdownElements = document.querySelectorAll('.countdown-timer, .countdown-final');
            
            countdownElements.forEach(element => {
                // Pour l'exemple, on garde la même valeur
                // Dans une vraie application, vous calculeriez le temps restant
                element.textContent = "66:16:37";
            });
        }
        
        // Mettre à jour le compte à rebours toutes les secondes
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
