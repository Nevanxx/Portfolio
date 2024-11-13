// Add event listeners and declare variables
document.addEventListener("DOMContentLoaded", () => {
    const emailButton = document.getElementById('email'); // Email contact card
    const discordButton = document.getElementById('discord'); // Discord contact card
    const githubButton = document.getElementById('github'); // GitHub contact card
    const linkedinButton = document.getElementById('linkedin'); // LinkedIn contact card
    const form = document.querySelector('form'); // Get the form element
    const messageInput = document.getElementById('message'); // Get the message input
    const nameInput = document.getElementById('name'); // Get the name input
    const emailInput = document.getElementById('emailInput'); // Get the email input with the updated ID

    // Contact buttons
    emailButton.addEventListener('click', () => {
        window.open("mailto:shehrozrakhshani@gmail.com", '_blank');
    });

    discordButton.addEventListener('click', () => {
        window.open("https://discord.gg/aS7KeUZHjG", '_blank');
    });

    githubButton.addEventListener('click', () => {
        window.open("https://github.com/Nevanxx", '_blank');
    });

    linkedinButton.addEventListener('click', () => {
        window.open("https://www.linkedin.com/in/shehroz7/", '_blank');
    });

    // Form submission
    form.addEventListener('submit', async (event) => {
        event.preventDefault(); // Prevent default form submission

        const name = nameInput.value; // Get the sender's name
        const email = emailInput.value; // Get the sender's email (now correctly references the input)
        const message = messageInput.value; // Get the message from the input

        const webhookURL = "https://discord.com/api/webhooks/1302348802241466408/SMo75TVxWK_gBsbrjy6Xu2q23-kXfKmQYgK7khnARZ6kc8iw0orp5r7m4u_W4-0xEbe8"; // Replace with your actual Discord webhook URL

        // Create the payload for the Discord webhook
        const payload = {
            content: `**Name:** ${name}\n**Email:** ${email}\n**Message:** ${message}`, // Format the message to include name and email
        };

        try {
            const response = await fetch(webhookURL, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(payload),
            });

            if (response.ok) {
                console.log('Message sent to Discord!');
                messageInput.value = ''; // Clear the message input field
                nameInput.value = ''; // Clear the name input field
                emailInput.value = ''; // Clear the email input field
            } else {
                console.error('Failed to send message:', response.statusText);
            }
        } catch (error) {
            console.error('Error sending message:', error);
        }
    });

    // Dark mode toggle
    const darkModeToggle = document.getElementById('dark-mode-toggle');

    // Check if dark mode preference is stored in local storage
    if (localStorage.getItem('darkMode') === 'enabled') {
        document.body.classList.add('dark-mode');
    }

    // Add transition class for smooth effect
    document.body.classList.add('transition');

    // Toggle dark mode on click
    darkModeToggle.addEventListener('click', () => {
        document.body.classList.toggle('dark-mode'); // Toggle the dark mode class

        // Store preference in local storage
        if (document.body.classList.contains('dark-mode')) {
            localStorage.setItem('darkMode', 'enabled');
        } else {
            localStorage.setItem('darkMode', 'disabled');
        }

        console.log("Dark mode toggled"); // Debugging line
    });
});
