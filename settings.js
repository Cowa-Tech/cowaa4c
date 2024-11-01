document.addEventListener('DOMContentLoaded', function() {
    const themeSelect = document.getElementById('theme_preference');
    
    themeSelect.addEventListener('change', function() {
        document.body.className = '';
        document.body.classList.add(this.value + '-theme');
        localStorage.setItem('theme', this.value);
    });

    // Apply the saved theme on page load
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
        document.body.classList.add(savedTheme + '-theme');
        themeSelect.value = savedTheme;
    }
});