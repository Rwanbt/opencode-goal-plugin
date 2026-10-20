// Root TUI entrypoint required by OpenCode's local-plugin resolver, which
// probes `<directory>/tui` instead of resolving the package `./tui` export.
export { default } from "./src/tui.ts"
