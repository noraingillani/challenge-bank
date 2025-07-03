const changeTextButton = document.getElementById('changeText');
const textParagraph = document.getElementById('text');

changeTextButton.addEventListener('click', function() {
    textParagraph.textContent = "The text has been changed!";
    textParagraph.style.color = "green";
    textParagraph.style.fontSize = "20px";
    textParagraph.style.fontWeight = "bold";
});

const alertButton = document.getElementById('myButton');

alertButton.addEventListener('click', function() {
    alert('Hello! You clicked the button!');
});

const contactForm = document.getElementById('contactForm');

contactForm.addEventListener('submit', function(event) {
    event.preventDefault();
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;

    // Display a confirmation alert
    alert(`Thank you, ${name}! Your email (${email}) has been received.`);
});


