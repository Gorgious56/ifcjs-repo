import { projects } from "./projects.js";

const project = getCurrentProject();
changeIframeSource(project.link);
changeTitleContent(project.name);

function getCurrentProject() {
    const url = new URL(window.location.href);
    const currentProjectID = url.searchParams.get("id");
    return projects.find((project) => String(project.id) === String(currentProjectID));
}

function changeIframeSource(src, iframeId = "model-viewer-iframe") {
    updateElementByID(iframeId, "src", src);
}

function changeTitleContent(content, query = "h1") {
    updateElementByQuery(query, "textContent", content);
}

function updateElementByQuery(query, propName, propValue) {
    const element = document.querySelector(query);
    element[propName] = propValue;
}

function updateElementByID(id, propName, propValue) {
    const element = document.getElementById(id);
    element[propName] = propValue;
}
