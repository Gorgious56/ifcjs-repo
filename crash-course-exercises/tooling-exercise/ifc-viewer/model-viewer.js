import { projects } from "./projects.js";
import { Color } from "../node_modules/three";
import { IfcViewerAPI } from "../node_modules/web-ifc-viewer";

const project = getCurrentProject();
document.querySelector("h1").textContent = project.name;

const container = document.getElementById("model-viewer-iframe");
const viewer = new IfcViewerAPI({ container, backgroundColor: new Color(0xffffff) });
viewer.grid.setGrid();
viewer.axes.setAxes();

loadIfc(project.path);

function getCurrentProject() {
    const url = new URL(window.location.href);
    const currentProjectID = url.searchParams.get("id");
    return projects.find((project) => String(project.id) === String(currentProjectID));
}

async function loadIfc(url) {
    await viewer.IFC.setWasmPath("../../../");
    const model = await viewer.IFC.loadIfcUrl(url);
    viewer.shadowDropper.renderShadow(model.modelID);
}
