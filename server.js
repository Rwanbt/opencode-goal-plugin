// Root entrypoint required by OpenCode's local-plugin resolver, which probes
// `<directory>/server` before the package `exports`/`main` fields.
export { default } from "./dist/server.js"
