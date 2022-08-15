const projects = [];
for (let i = 1; i < 11; i++) {
    projects.push({
        id: i,
        name: `Model ${i}`,
        path: i < 10 ? `../static/models/0${i}.ifc` : `../static/models/${i}.ifc`,
        snapshot: "../static/logo-ifcjs.svg",
    });
}

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
