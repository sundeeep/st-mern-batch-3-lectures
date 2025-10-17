const backlogFormEditorAddBtn = document.getElementById("create-backlog-btn");
const backlogContent = document.querySelector(".backlog-content");

// Load existing tasks on page load
document.addEventListener("DOMContentLoaded", loadBacklogTasks);

backlogFormEditorAddBtn.addEventListener("click", () => {
  // Prevent multiple forms
  if (backlogContent.querySelector(".backlog-form")) return;

  const newBacklogForm = document.createElement("form");
  newBacklogForm.className = "backlog-form";

  // Title
  const backlogTitleContainer = document.createElement("div");
  const backlogTitleLabel = document.createElement("label");
  backlogTitleLabel.setAttribute("for", "backlogTitle");
  backlogTitleLabel.textContent = "Backlog Title";
  const backlogTitleInput = document.createElement("input");
  backlogTitleInput.setAttribute("id", "backlogTitle");
  backlogTitleInput.setAttribute("placeholder", "Enter Backlog Title...");
  backlogTitleInput.setAttribute("type", "text");
  backlogTitleInput.required = true;
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

  // Actions
  const actions = document.createElement("div");
  const createBacklogButton = document.createElement("button");
  createBacklogButton.setAttribute("type", "submit");
  createBacklogButton.textContent = "Create Backlog";
  const cancelBtn = document.createElement("button");
  cancelBtn.type = "button";
  cancelBtn.textContent = "Cancel";
  actions.appendChild(createBacklogButton);
  actions.appendChild(cancelBtn);

  // Assemble form
  newBacklogForm.appendChild(backlogTitleContainer);
  newBacklogForm.appendChild(backlogDescriptionContainer);
  newBacklogForm.appendChild(actions);

  // Disable add button while form is open
  backlogFormEditorAddBtn.disabled = true;

  // Submit handler: replace form with backlog card
  newBacklogForm.addEventListener("submit", (event) => {
    event.preventDefault();

    const title = backlogTitleInput.value.trim();
    const description = backlogDescriptionInput.value.trim();
    const sectionTitle = "Backlogs";

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

    // Create card element
    const cardEl = createBacklogCard(task);

    // Replace the form with the card
    newBacklogForm.replaceWith(cardEl);

    // Re-enable the add button
    backlogFormEditorAddBtn.disabled = false;
  });

  // Cancel handler
  cancelBtn.addEventListener("click", () => {
    newBacklogForm.remove();
    backlogFormEditorAddBtn.disabled = false;
  });

  backlogContent.appendChild(newBacklogForm);
  backlogTitleInput.focus();
});

// Create backlog card element (returns element; does NOT append)
function createBacklogCard(task) {
  const backlogCard = document.createElement("div");
  backlogCard.classList.add("backlog-card");
  backlogCard.innerHTML = `
    <h4>${task.title}</h4>
    <p>${task.description || "No description"}</p>
  `;
  return backlogCard;
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
  backlogTasks.forEach((task) =>
    backlogContent.appendChild(createBacklogCard(task))
  );
}