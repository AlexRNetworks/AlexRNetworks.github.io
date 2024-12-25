// JavaScript to handle tab switching
document.querySelectorAll('.tab-link').forEach(link => {
    link.addEventListener('click', () => {
        // Remove active class from all content sections
        document.querySelectorAll('.main-content').forEach(content => {
            content.classList.remove('active');
        });

        // Add active class to the clicked tab's content
        const tab = link.getAttribute('data-tab');
        document.getElementById(tab).classList.add('active');
    });
});

// Function to redirect to the search proxy
function redirectToSearch() {
    window.open("https://www.iamway.2kool4u.net/", "_blank");
}