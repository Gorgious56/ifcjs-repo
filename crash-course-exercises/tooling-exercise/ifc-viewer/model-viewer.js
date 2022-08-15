import { projects } from "./projects.js";
import { Color } from "../node_modules/three";
import { IfcViewerAPI } from "../node_modules/web-ifc-viewer";

const project = getCurrentProject();
updateElementByQuery("h1", "textContent", project.name);

const container = document.getElementById("model-viewer-iframe");
container.width = "100%"
container.height = "100%"
const viewer = new IfcViewerAPI({ container, backgroundColor: new Color(0xffffff) });
viewer.grid.setGrid();
viewer.axes.setAxes();

loadIfc(project.path);

function getCurrentProject() {
    const url = new URL(window.location.href);
    const currentProjectID = url.searchParams.get("id");
    return projects.find((project) => String(project.id) === String(currentProjectID));
}

function updateElementByQuery(query, propName, propValue) {
    const element = document.querySelector(query);
    element[propName] = propValue;
}

async function loadIfc(url) {
    await viewer.IFC.setWasmPath("../../../");
    const model = await viewer.IFC.loadIfcUrl(url);
    viewer.shadowDropper.renderShadow(model.modelID);
}
