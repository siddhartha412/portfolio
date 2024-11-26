// Add Project Function
function addProject() {
    const projectName = prompt("Enter project name:");
    const projectLink = prompt("Enter project GitHub link:");
    const projectDescription = prompt("Enter project description:");
    const projectBanner = prompt("Enter project banner image URL:");

    if (projectName && projectLink && projectDescription && projectBanner) {
        // Create the new project object
        const newProject = {
            id: new Date().getTime(),  // Unique ID using timestamp
            name: projectName,
            link: projectLink,
            description: projectDescription,
            banner: projectBanner
        };

        console.log("New Project:", newProject);  // Log to check the object

        // Retrieve current projects from localStorage
        let projects = JSON.parse(localStorage.getItem('projects')) || [];
        projects.push(newProject);  // Add the new project to the list

        // Save updated projects array back to localStorage
        localStorage.setItem('projects', JSON.stringify(projects));

        console.log("Projects saved to localStorage:", projects);  // Log the updated projects

        // Reload the page to display the new project
        window.location.reload();
    } else {
        alert("All fields are required!");
    }
}

// Function to display saved projects
function displayProjects() {
    const projectList = document.getElementById("project-list");
    const projects = JSON.parse(localStorage.getItem('projects')) || [];

    // Clear the project list before rendering
    projectList.innerHTML = "";

    // If there are projects, display them
    if (projects.length > 0) {
        projects.forEach(project => {
            const projectCard = document.createElement("div");
            projectCard.classList.add("project-card");

            projectCard.innerHTML = `
                <h3>${project.name}</h3>
                <img src="${project.banner}" alt="${project.name} Banner">
                <p>${project.description}</p>
                <a href="${project.link}" target="_blank">View on </a>
                <button onclick="editProject(${project.id})">Edit</button>
                <button onclick="deleteProject(${project.id})">Delete</button>
            `;

            projectList.appendChild(projectCard);
        });
    } else {
        projectList.innerHTML = `<p>No projects found. Please add some projects.</p>`;
    }
}

// Function to edit an existing project
function editProject(projectId) {
    const projects = JSON.parse(localStorage.getItem('projects')) || [];
    const project = projects.find(p => p.id === projectId);

    if (project) {
        const newName = prompt("Edit project name:", project.name);
        const newLink = prompt("Edit GitHub link:", project.link);
        const newDescription = prompt("Edit description:", project.description);
        const newBanner = prompt("Edit banner image URL:", project.banner);

        if (newName && newLink && newDescription && newBanner) {
            project.name = newName;
            project.link = newLink;
            project.description = newDescription;
            project.banner = newBanner;

            // Save the updated projects back to localStorage
            localStorage.setItem('projects', JSON.stringify(projects));

            // Reload the page to reflect changes
            window.location.reload();
        }
    }
}

// Function to delete a project
function deleteProject(projectId) {
    let projects = JSON.parse(localStorage.getItem('projects')) || [];

    // Filter out the project to delete
    projects = projects.filter(project => project.id !== projectId);

    // Save the updated projects back to localStorage
    localStorage.setItem('projects', JSON.stringify(projects));

    // Reload the page to reflect changes
    window.location.reload();
}

// Add event listener to the "Add New Project" button
document.getElementById("add-project-btn").addEventListener("click", addProject);

// Display the existing projects on page load
window.addEventListener("DOMContentLoaded", displayProjects);
