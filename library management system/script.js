// Wait for the DOM to load
document.addEventListener("DOMContentLoaded", function () {
    // Show an alert when the catalog page loads
    if (window.location.pathname.includes("catalog.html")) {
        alert("Welcome to the Book Catalog! Click on a book to learn more.");
    }

    // Add click event to all book titles
    const books = document.querySelectorAll(".book h3");
    books.forEach(book => {
        book.addEventListener("click", function () {
            alert(`You clicked on "${this.innerText}"`);
        });
    });
});
