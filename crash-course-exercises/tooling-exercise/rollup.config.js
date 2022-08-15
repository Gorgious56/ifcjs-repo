import resolve from "@rollup/plugin-node-resolve";

export default [
    {
        input: "index.js",
        output: [
            {
                format: "esm",
                file: "bundle.js",
            },
        ],
        plugins: [resolve()],
    },
    {
        input: "./ifc-viewer/model-viewer.js",
        output: [
            {
                format: "esm",
                file: "./ifc-viewer/model-viewer-bundle.js",
            },
        ],
        plugins: [resolve()],
    },
    {
        input: "./ifc-viewer/model-list.js",
        output: [
            {
                format: "esm",
                file: "./ifc-viewer/model-list-bundle.js",
            },
        ],
        plugins: [resolve()],
    },
];
