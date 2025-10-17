const backlogFormEditorAddBtn = document.getElementById("create-backlog-btn");
const backlogContent = document.querySelector(".backlog-content");

// Load existing tasks on page load
document.addEventListener("DOMContentLoaded", loadBacklogTasks);


backlogFormEditorAddBtn.addEventListener("click", () => {
    const newBacklogForm = document.createElement("form");

    // Title
    const backlogTitleContainer = document.createElement("div");
    const backlogTitleLabel = document.createElement("label");
    backlogTitleLabel.setAttribute("for", "backlogTitle");
    backlogTitleLabel.textContent = "Backlog Title";
    const backlogTitleInput = document.createElement("input");
    backlogTitleInput.setAttribute("id", "backlogTitle");
    backlogTitleInput.setAttribute("placeholder", "Enter Backlog Title...");
    backlogTitleInput.setAttribute("type", "text");
    backlogTitleContainer.appendChild(backlogTitleLabel);
    backlogTitleContainer.appendChild(backlogTitleInput);

    // Description
    const backlogDescriptionContainer = document.createElement("div");
    const backlogDescriptionLabel = document.createElement("label");
    backlogDescriptionLabel.setAttribute("for", "backlogDescription");
    backlogDescriptionLabel.textContent = "Description";
    const backlogDescriptionInput = document.createElement("textarea");
    backlogDescriptionInput.setAttribute("id", "backlogDescription");
    backlogDescriptionInput.setAttribute("placeholder", "Enter Backlog Description...");
    backlogDescriptionContainer.appendChild(backlogDescriptionLabel);
    backlogDescriptionContainer.appendChild(backlogDescriptionInput);

    // Button
    const createBacklogButton = document.createElement("button");
    createBacklogButton.setAttribute("type", "submit");
    createBacklogButton.textContent = "Create Backlog";

    // Assemble form
    newBacklogForm.appendChild(backlogTitleContainer);
    newBacklogForm.appendChild(backlogDescriptionContainer);
    newBacklogForm.appendChild(createBacklogButton);

    // Submit handler
    newBacklogForm.addEventListener("submit", (event) => {
        event.preventDefault();

        const title = backlogTitleInput.value.trim();
        const description = backlogDescriptionInput.value.trim();
        const sectionTitle = "Backlogs"; // section name

        if (!title) {
            alert("Please enter a backlog title.");
            return;
        }

        const task = {
            title,
            description,
            createdAt: new Date().toISOString(),
        };

        // Save to localStorage
        saveTaskToLocalStorage(sectionTitle, task);

        // Add to UI
        createBacklogCard(task);

        // Clear form
        newBacklogForm.reset();
    });

    backlogContent.appendChild(newBacklogForm);
});

// Create backlog card in UI
function createBacklogCard(task) {
    const backlogCard = document.createElement("div");
    backlogCard.classList.add("backlog-card");
    backlogCard.innerHTML = `
        <h4>${task.title}</h4>
        <p>${task.description || "No description"}</p>
    `;
    backlogContent.appendChild(backlogCard);
}

// Save task to localStorage grouped by section
function saveTaskToLocalStorage(section, task) {
    const allTasks = JSON.parse(localStorage.getItem("kanbanTasks")) || {};
    if (!allTasks[section]) allTasks[section] = [];
    allTasks[section].push(task);
    localStorage.setItem("kanbanTasks", JSON.stringify(allTasks));
}

// Load backlog tasks from localStorage on page load
function loadBacklogTasks() {
    const allTasks = JSON.parse(localStorage.getItem("kanbanTasks")) || {};
    const backlogTasks = allTasks["Backlogs"] || [];

    backlogTasks.forEach((task) => createBacklogCard(task));
}
