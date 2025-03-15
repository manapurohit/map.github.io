// Cursor follower
document.addEventListener('DOMContentLoaded', () => {
    // const cursor = document.querySelector('.cursor-follower');
    
    // if (!cursor) return; // Check if cursor element exists
    
    document.addEventListener('mousemove', (e) => {
        // Use pageX and pageY instead of clientX and clientY to account for scrolling
        cursor.style.left = e.pageX + 'px';
        cursor.style.top = e.pageY + 'px';
    });
    
    
    document.addEventListener('mousedown', () => {
        cursor.style.transform = 'translate(-50%, -50%) scale(0.8)';
        cursor.style.backgroundColor = 'rgba(0, 102, 204, 0.4)';
    });
    
    document.addEventListener('mouseup', () => {
        cursor.style.transform = 'translate(-50%, -50%) scale(1)';
        cursor.style.backgroundColor = 'rgba(0, 102, 204, 0.2)';
    });
});
document.addEventListener('DOMContentLoaded', function() {
    var coll = document.getElementsByClassName("collapsible");
    var i;

    for (i = 0; i < coll.length; i++) {
        coll[i].addEventListener("click", function() {
            this.classList.toggle("active");
            var content = this.nextElementSibling;
            if (content.style.maxHeight) {
                content.style.maxHeight = null;
            } else {
                content.style.maxHeight = content.scrollHeight + "px";
            }
        });
    }
});
document.addEventListener('DOMContentLoaded', function() {
    const detailButtons = document.querySelectorAll('.btn.secondary');
    
    detailButtons.forEach(button => {
        button.addEventListener('click', function() {
            // Find the closest parent project card
            const projectCard = this.closest('.project-card');
            
            // Find the hidden content (you'll need to add this element)
            const hiddenContent = projectCard.querySelector('.hidden-details');
            
            // Toggle visibility
            if (hiddenContent.style.maxHeight) {
                hiddenContent.style.maxHeight = null;
                this.textContent = "View Details";
            } else {
                hiddenContent.style.maxHeight = hiddenContent.scrollHeight + "px";
                this.textContent = "Hide Details";
            }
        });
    });
});

// JavaScript for mobile menu functionality
document.addEventListener('DOMContentLoaded', function() {
    const hamburgerBtn = document.querySelector('.hamburger-btn');
    const mobileMenu = document.querySelector('.mobile-menu');
    
    hamburgerBtn.addEventListener('click', function() {
        console.log('Menu toggled');
        mobileMenu.classList.toggle('active');
    });
});


