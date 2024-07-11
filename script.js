

document.addEventListener('DOMContentLoaded', function() {
    const nav = document.querySelector('nav');
    if (nav) {
        document.addEventListener('click', function(event) {
            if (!nav.contains(event.target)) {
                const checkbox = document.getElementById('touch');
                if (checkbox) {
                    checkbox.checked = false;
                }
                const navLabel = document.querySelector('nav label');
                if (navLabel) {
                    navLabel.style.backgroundColor = '#333';
                }
            }
        });
    }
});

