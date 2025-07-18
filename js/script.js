document.addEventListener('DOMContentLoaded', function() {
    // Gestion des boutons Commander
    const orderButtons = document.querySelectorAll('.order-btn');
    
    orderButtons.forEach(button => {
        button.addEventListener('click', function(e) {
            e.stopPropagation();
            this.nextElementSibling.classList.toggle('hidden');
        });
    });

    // Fermeture des menus au clic ailleurs
    document.addEventListener('click', () => {
        document.querySelectorAll('.social-choices').forEach(menu => {
            menu.classList.add('hidden');
        });
    });

    // Configuration des liens sociaux
    const socialButtons = document.querySelectorAll('[class$="-btn"]');
    
    socialButtons.forEach(button => {
        button.addEventListener('click', function(e) {
            e.preventDefault();
            const platform = this.className.replace('-btn', '');
            const product = this.getAttribute('data-product');
            
            const message = `Je souhaite commander : ${product}`;
            const encodedMessage = encodeURIComponent(message);
            
            let url;
            switch(platform) {
                case 'whatsapp':
                    url = `https://wa.me/21646311924?text=${encodedMessage}`;
                    break;
                case 'messenger':
                    url = `https://m.me/DesStockTunis?text=${encodedMessage}`;
                    break;
                case 'instagram':
                    url = `https://www.instagram.com/direct/t/553648129/?text=${encodedMessage}`;
                    break;
            }
            
            window.open(url, '_blank');
        });
    });
});
