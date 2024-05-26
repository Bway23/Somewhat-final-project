document.addEventListener("DOMContentLoaded", function() {
    const nextButton = document.querySelector(".next-button");

    nextButton.addEventListener("click", function(event) {
        event.preventDefault();
        document.body.classList.add("fade-out");
        
        setTimeout(function() {
            window.location.href = nextButton.href;
        }, 500); 
    });
});
