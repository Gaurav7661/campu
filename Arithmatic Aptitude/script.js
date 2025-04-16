// Arithmetic Page Interactions
document.addEventListener("DOMContentLoaded", function() {
    // Add visual feedback when clicking topics
    const cards = document.querySelectorAll('.topic-card');
    
    cards.forEach(card => {
        // Visual feedback on click
        card.addEventListener('click', function(e) {
            // Ignore if clicking directly on button
            if (e.target.tagName === 'BUTTON') return;
            
            this.style.transform = 'scale(0.98)';
            setTimeout(() => {
                this.style.transform = 'translateY(-5px)';
            }, 150);
        });
        
        // Hover effects
        card.addEventListener('mouseenter', () => {
            card.style.transform = 'translateY(-5px)';
            card.style.boxShadow = '0 10px 25px rgba(0, 0, 0, 0.3)';
        });
        
        card.addEventListener('mouseleave', () => {
            if (!card.style.transform.includes('scale')) {
                card.style.transform = '';
                card.style.boxShadow = '';
            }
        });
    });
    
    // Track topic clicks for analytics
    document.querySelectorAll('.btn-primary').forEach(btn => {
        btn.addEventListener('click', function(e) {
            e.stopPropagation();
            const topic = this.closest('.topic-card').querySelector('h3').textContent;
            console.log(`Starting practice for: ${topic}`);
            // Add your actual navigation logic here
        });
    });
});