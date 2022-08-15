export const projects = [];
for (let i = 1; i < 11; i++) {
    projects.push({
        id: i,
        name: `Model ${i}`,
        path: i < 10 ? `../static/models/0${i}.ifc` : `../static/models/${i}.ifc`,
        snapshot: "../static/logo-ifcjs.svg",
    });
}
