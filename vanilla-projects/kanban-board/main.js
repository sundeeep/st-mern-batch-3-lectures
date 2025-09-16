const backlogFormEditorAddBtn = document.getElementById("create-backlog-btn");
const backlogContent = document.querySelector(".backlog-content");

backlogFormEditorAddBtn.addEventListener("click", () => {
    const newBacklogForm = document.createElement("form");

    const backlogTitleContainer = document.createElement("div");
    const backlogTitleLabel = document.createElement("label");
    backlogTitleLabel.setAttribute("for", "backlogTitle");
    const backlogTitleInput = document.createElement("input");
    backlogTitleInput.setAttribute("id", "backlogTitle");
    backlogTitleInput.setAttribute("placeholder", "Enter Backlog Title...");
    backlogTitleInput.setAttribute("type", "text");
    backlogTitleContainer.appendChild(backlogTitleLabel);
    backlogTitleContainer.appendChild(backlogTitleInput);

    const backlogDescriptionContainer = document.createElement("div");
    const backlogDescriptionLabel = document.createElement("label");
    backlogDescriptionLabel.setAttribute("for", "backlogDescription")
    const backlogDescriptionInput = document.createElement("textarea");
    backlogDescriptionInput.setAttribute("id", "backlogDescription");
    backlogDescriptionInput.setAttribute("placeholder", "Enter Backlog Description...");
    backlogDescriptionContainer.appendChild(backlogTitleLabel);
    backlogDescriptionContainer.appendChild(backlogDescriptionInput);

    const createBacklogButton = document.createElement("button");
    createBacklogButton.setAttribute("id", "backlog1")
    createBacklogButton.textContent = "Create Backlog"

    newBacklogForm.appendChild(backlogTitleContainer);
    newBacklogForm.appendChild(backlogDescriptionContainer);
    newBacklogForm.appendChild(createBacklogButton);

    backlogContent.appendChild(newBacklogForm);
})

