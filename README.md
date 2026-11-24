# Task Automation Dashboard

A Node.js command-line prototype for reviewing tasks stored in a local JSON file. It counts tasks and displays pending high-priority items in a console table.

## Run

From the repository root with Node.js installed:

```sh
node src/dashboard.js
```

The script reads data/tasks.json, an array of task objects with priority and status fields.

## Scope

This is a snapshot report, not a live dashboard or workflow execution engine. Interactive controls and historical reporting are possible future enhancements.

MIT license.
