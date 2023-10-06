const pages = document.querySelectorAll('.page');
const totalPages = pages.length;

document.addEventListener('wheel', function(event) {
    // Calculate the current scroll position
    const scrollPosition = window.scrollY;
    // Calculate the height of the entire document
    const documentHeight = document.documentElement.scrollHeight - window.innerHeight;

    // Check if scrolling is at the top or bottom of the document
    if (scrollPosition === 0 || scrollPosition === documentHeight) {
        // Add a rubber band effect by scrolling past and snapping back
        setTimeout(function() {
            window.scrollTo({
                top: scrollPosition === 0 ? 1 : documentHeight - 1,
                behavior: 'ease-out'
            });
        }, 100); // Adjust the duration of the rubber band effect if needed
    }
});
