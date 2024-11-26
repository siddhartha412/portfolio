// JavaScript for Burger Menu Toggle
const burger = document.getElementById('burger');
const navLinks = document.querySelector('.nav-links');

// Toggle 'active' class to open/close the menu
burger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

// Function to check if an element is in the viewport
function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

// Function to add the "visible" class when element is in the viewport
function handleScrollAnimations() {
    const sections = document.querySelectorAll('.fade-in-on-scroll');
    sections.forEach(section => {
        if (isInViewport(section)) {
            section.classList.add('visible');
        }
    });
}

// Listen to the scroll event and trigger animations
window.addEventListener('scroll', handleScrollAnimations);

// Run once to add visibility class to elements that are already in view
document.addEventListener('DOMContentLoaded', handleScrollAnimations);

// When DOM content is loaded, display the projects from localStorage
// When DOM content is loaded, display the projects from localStorage
document.addEventListener("DOMContentLoaded", function() {
    const projectGrid = document.getElementById("project-grid");

    // Retrieve the saved projects from localStorage
    const projects = JSON.parse(localStorage.getItem('projects')) || [];

    // Check if there are any projects to display
    if (projects.length > 0) {
        // Loop through the projects and create HTML for each one
        projects.forEach(project => {
            const projectCard = document.createElement("div");
            projectCard.classList.add("project-card");

            projectCard.innerHTML = `
                <img src="${project.banner}" alt="${project.name} Banner" class="project-banner">
                <h3><a href="${project.link}" target="_blank">${project.name}</a></h3>
                <p>${project.description || "No description available."}</p>
                 <a href="${project.link}" target="_blank">
              <img src="github.png" alt="View on GitHub" 
            style="width: 30px; height: auto; margin-top: 1rem; transition: transform 0.3s ease;" 
            class="github-logo">
    </a>
            `;
            const githubLogo = projectCard.querySelector('.github-logo');
            githubLogo.addEventListener('mouseover', function() {
                githubLogo.style.transform = 'scale(1.2)';  // Scale the logo on hover
            });
            
            githubLogo.addEventListener('mouseout', function() {
                githubLogo.style.transform = 'scale(1)';  // Reset to original size when not hovering
            });
            projectGrid.appendChild(projectCard);
        });
    } else {
        // Show a message if no projects are found in localStorage
        projectGrid.innerHTML = `<p><center>No projects found. </center></p>`;
    }
});
