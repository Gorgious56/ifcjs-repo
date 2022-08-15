import { projects } from "./projects.js";

const container = document.querySelector(".model-list");
for (let project of projects) {
    addNewCardToContainer(container, project);
}

function addNewCardToContainer(container, project) {
    const newcard = createCard(project);
    container.appendChild(newcard);
}

function createCard(project) {
    const card = document.createElement("a");
    card.href = "./model-viewer.html";
    const url = new URL(card.href);
    url.searchParams.set("id", project.id);
    card.href = url;
    card.classList.add("model-list-item");

    const text = document.createElement("div");
    text.textContent = project.name;
    card.appendChild(text);

    const img = document.createElement("img");
    const path = project.snapshot;
    img.src = path;
    img.alt = `Model ${project.id} Snapshot`;
    img.classList.add("model-list-item-snapshot");
    card.appendChild(img);

    return card;
}
