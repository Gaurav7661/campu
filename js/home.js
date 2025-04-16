// Learning Tabs Functionality
document.addEventListener("DOMContentLoaded", function() {
    // Learning Tabs
    const learningTabBtns = document.querySelectorAll('.learning-tab-btn');
    const learningTabContents = document.querySelectorAll('.learning-tab-content');
    
    learningTabBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            // Remove active class from all buttons and contents
            learningTabBtns.forEach(btn => {
                btn.classList.remove('active');
                const indicator = btn.querySelector('.tab-indicator');
                if (indicator) indicator.style.opacity = '0';
            });
            
            learningTabContents.forEach(content => content.classList.remove('active'));
            
            // Add active class to clicked button
            btn.classList.add('active');
            const activeIndicator = btn.querySelector('.tab-indicator');
            if (activeIndicator) activeIndicator.style.opacity = '1';
            
            // Show corresponding content
            const tabId = btn.getAttribute('data-tab');
            document.getElementById(tabId).classList.add('active');
        });
    });

    // Exam Tabs
    const examTabBtns = document.querySelectorAll('.exam-tab-btn');
    const examTabContents = document.querySelectorAll('.exam-tab-content');
    
    examTabBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            // Remove active class from all buttons and contents
            examTabBtns.forEach(btn => btn.classList.remove('active'));
            examTabContents.forEach(content => content.classList.remove('active'));
            
            // Add active class to clicked button
            btn.classList.add('active');
            
            // Show corresponding content
            const tabId = btn.getAttribute('data-tab');
            document.getElementById(tabId).classList.add('active');
        });
    });

    // Add hover effects to all cards
    const cards = document.querySelectorAll('.subject-card, .test-card, .course-card, .exam-card, .feature-card');
    cards.forEach(card => {
        card.addEventListener('mouseenter', () => {
            card.style.transform = 'translateY(-5px)';
            card.style.boxShadow = '0 10px 25px rgba(0, 0, 0, 0.2)';
        });
        
        card.addEventListener('mouseleave', () => {
            card.style.transform = '';
            card.style.boxShadow = '';
        });
    });
});