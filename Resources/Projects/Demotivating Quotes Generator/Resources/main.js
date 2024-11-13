// Define Variables
const newQuote = document.getElementById("new-quote-button");
const instructions = document.getElementById("instructions");
const quote = document.getElementById("quote");
const author = document.getElementById("author");
const instructionsButton = document.getElementById("instructions-button");

// GetQuote function
const getQuote = () => {
    // Define quotes
    const quotes = [
        { quote: "You will never be successful.", author: "Mark Twain" },
        { quote: "Just stop trying.", author: "Winston S. Smith" },
        { quote: "Hard work will get you nowhere.", author: "Walt Disney" },
        { quote: "You will always be stuck in the same situation.", author: "Peter Drucker" },
        { quote: "Dreams are just excuses for laziness.", author: "Albert Einstein" },
{ quote: "The grass is never greener on any side.", author: "Jane Austen" },
{ quote: "It’s not that hard—you’re just not good at it.", author: "Isaac Newton" },
{ quote: "Failure is simply the path you’re meant to take.", author: "Oprah Winfrey" },
{ quote: "There’s always a way to make things worse.", author: "Elon Musk" },
{ quote: "Success is reserved for someone else.", author: "Steve Jobs" },
{ quote: "Strive for mediocrity, it's achievable.", author: "Marie Curie" },
{ quote: "Your best is just never enough.", author: "Confucius" },
{ quote: "Keep going—you’re only digging yourself deeper.", author: "Sun Tzu" },
{ quote: "Good things come to those who wait... indefinitely.", author: "Leonardo da Vinci" },
{ quote: "Even your backup plans are flawed.", author: "Charles Darwin" },
{ quote: "Trying harder just amplifies the disappointment.", author: "Mahatma Gandhi" },
{ quote: "You're exactly where you'll always be.", author: "Sigmund Freud" },
{ quote: "If at first you don’t succeed, just quit.", author: "Henry Ford" },
{ quote: "Lower your expectations; reality will meet them.", author: "Nikola Tesla" },
{ quote: "Every step forward leads to an eventual fall.", author: "Thomas Edison" },
{ quote: "Planning is just preparing for inevitable failure.", author: "Winston Churchill" },
{ quote: "There’s no light at the end of the tunnel.", author: "J.K. Rowling" },
{ quote: "Luck? It's always on someone else's side.", author: "Alexander Graham Bell" },
{ quote: "Ambition is just another road to disillusionment.", author: "Plato" },
    ];

    // Randomly select a quote
    const random = Math.floor(Math.random() * quotes.length);
    quote.innerText = quotes[random].quote;
    author.innerText = quotes[random].author;
};

// Toggle Instructions Function
const toggleInstructions = () => {
    if (instructions.style.display === "none" || instructions.style.display === "") {
        // Show instructions and change button text
        instructions.style.display = "block";
        instructionsButton.textContent = "HIDE INSTRUCTIONS";
    } else {
        // Hide instructions and change button text
        instructions.style.display = "none";
        instructionsButton.textContent = "SHOW INSTRUCTIONS";
    }
};

// Event Listeners
newQuote.addEventListener("click", getQuote);
instructionsButton.addEventListener("click", toggleInstructions);
