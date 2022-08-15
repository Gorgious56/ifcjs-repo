export const projects = [];
for (let i = 1; i < 6; i++) {
    projects.push({
        id: i,
        name: `Model ${i}`,
        link: `https://ifcjs.github.io/ifcjs-crash-course/sample-apps/0${i}/`,
        snapshot: `./static/snapshots/snapshot0${i}.png`,
    });
}
