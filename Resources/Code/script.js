// Define Variables
const projects = document.getElementById("projectsOption");
const skills = document.getElementById("skillsOption");
const contact = document.getElementById("contactOption");

// Create the scroll-to-top button
const scrollTopBtn = document.createElement("button");
scrollTopBtn.id = "scrollTopBtn";
scrollTopBtn.innerHTML = "&#8593;"; // Set the content of the button (up arrow)
scrollTopBtn.style.display = "none"; // Initially hidden

// Style the button 
scrollTopBtn.style.position = "fixed";
scrollTopBtn.style.bottom = "20px";
scrollTopBtn.style.right = "20px";
scrollTopBtn.style.backgroundColor = "#fff";
scrollTopBtn.style.color = "black";
scrollTopBtn.style.border = "none";
scrollTopBtn.style.borderRadius = "50%";
scrollTopBtn.style.width = "50px";
scrollTopBtn.style.height = "50px";
scrollTopBtn.style.fontSize = "24px";
scrollTopBtn.style.cursor = "pointer";
scrollTopBtn.style.boxShadow = "0 4px 8px rgba(0, 0, 0, 0.3)";
scrollTopBtn.style.zIndex = "1000";

// Add the button to the page
document.body.appendChild(scrollTopBtn);

// Add event listeners to the navbar buttons
const headerHeight = 60; // Adjust this value based on your header height

projects.addEventListener("click", () => {
    const projectsHeading = document.getElementById("projectsHeading");
    if (projectsHeading) { 
        const topPosition = projectsHeading.getBoundingClientRect().top + window.scrollY - headerHeight;
        window.scrollTo({
            top: topPosition,
            behavior: "smooth"
        });
    } else {
        console.error("Element with ID 'projectsHeading' not found.");
    }
});


skills.addEventListener("click", () => {
  const skillsHeading = document.getElementById("skillsHeading");
  if (skillsHeading) { 
    skillsHeading.scrollIntoView({
      behavior: "smooth",
      block: "start"
    });
  } else {
    console.error("Element with ID 'skillsHeading' not found.");
  }
});

contact.addEventListener("click", () => {
  window.open("./Resources/Code/contactsPage/contact.html", "_blank");
});

// Show the scroll-to-top button when you scroll down 100px from the top
window.addEventListener("scroll", function() {
  if (window.scrollY > 100) {
    scrollTopBtn.style.display = "block";
  } else {
    scrollTopBtn.style.display = "none";
  }
});

// Scroll to the top when the button is clicked
scrollTopBtn.addEventListener("click", function() {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
});

// add event listeners for project card buttons with their ids and a url
const projectCards = document.querySelectorAll('.project-card');
projectCards.forEach(card => {
  card.addEventListener('click', () => {
    const url = card.getAttribute('data-url');
    window.open(url, '_blank');
  });
});


// Change colors of elements with specified classes and IDs
function changeColors(selectors, backgroundColor, textColor) {
  selectors.forEach(selector => {
      const elements = document.querySelectorAll(selector);
      elements.forEach(element => {
          element.style.backgroundColor = backgroundColor;
          element.style.color = textColor;
      });
  });
}

// Dark mode toggle
let darkmode = localStorage.getItem('darkmode');
const themeSwitch = document.getElementById('theme-switch');

// List of selectors (classes and IDs) to change
const selectorsToChange = [
  '.projects',
  '.skills',
  '.contact',
  '.project-card',
  '.skill-card',
  '.project-name',
  '.skill-name',
  '.project-description',
  '.skill-description',
  '.socials',
  '#projectsOption',
  '#skillsOption',
  '#contactOption',
  '#footer',
  '#intro',
  '#introHeading',
  '#introParagraph',
  '#projectsHeading',
  '#skillsHeading',
  '#discord',
  '#github',
  '#email',
];

// Enable dark mode styles
const enableDarkmode = () => {
  document.body.classList.add('darkmode');
  changeColors(selectorsToChange, '#070b1d', '#ffffff'); // Dark mode colors
  localStorage.setItem('darkmode', 'active');
};

// Disable dark mode styles
const disableDarkmode = () => {
  document.body.classList.remove('darkmode');
  changeColors(selectorsToChange, '#ffffff', '#121212'); // Light mode colors
  localStorage.setItem('darkmode', null);
};

// Check local storage for dark mode preference
if (darkmode === "active") enableDarkmode();

// Add event listener for theme switch button
themeSwitch.addEventListener("click", () => {
  darkmode = localStorage.getItem('darkmode');
  darkmode !== "active" ? enableDarkmode() : disableDarkmode();
});

// Add event listeners for contact buttons
const discordButton = document.getElementById('discord');
const githubButton = document.getElementById('github');
const emailButton = document.getElementById('email');

discordButton.addEventListener('click', () => {
  window.open("https://discord.gg/aS7KeUZHjG", '_blank');
});

githubButton.addEventListener('click', () => {
  window.open("https://github.com/Nevanxx", '_blank');
});

emailButton.addEventListener('click', () => {
  window.open("mailto:shehrozrakhshani@gmail.com", '_blank');
});

// Hide the first 2 items when scrolling on mobile

// Get navbar items by ID
const item1 = document.getElementById('projectsOption');
const item2 = document.getElementById('skillsOption');
const item3 = document.getElementById('contactOption');

// Function to check if the screen size is mobile
function isMobile() {
  return window.innerWidth <= 768; // Mobile screen width (adjustable)
}

// Set up scroll event listener
window.addEventListener('scroll', function() {
  if (isMobile()) { // Only trigger for mobile screens
    if (window.scrollY > 70) {  // Adjust scroll value as needed
      // Hide the first two items, keeping the bottom one visible
      item1.classList.add('hide');
      item2.classList.add('hide');
    } else {
      // Show the first two items again when scrolling back to top
      item1.classList.remove('hide');
      item2.classList.remove('hide');
    }
  }
});

