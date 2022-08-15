export const projects = [];

for (let i = 1; i < 11; i++) {
    projects.push({
        id: i,
        name: `Model ${i}`,
        path: i < 10 ? `../../..//models/0${i}.ifc` : `../../..//models/${i}.ifc`,
        snapshot: "../static/logo-ifcjs.svg",
    });
}
