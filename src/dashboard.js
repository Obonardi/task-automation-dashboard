const fs = require('fs');
const path = require('path');

function runDashboard() {
    console.log("--- Task Automation Dashboard ---");
    const filePath = path.join(__dirname, '../data/tasks.json');

    if (fs.existsSync(filePath)) {
        const data = fs.readFileSync(filePath, 'utf8');
        const tasks = JSON.parse(data);

        // Filter: Find all pending high-priority tasks
        const urgentTasks = tasks.filter(t => t.priority === 'high' && t.status === 'pending');

        console.log(`Total tasks found: ${tasks.length}`);
        console.log(`Urgent tasks to address: ${urgentTasks.length}`);
        console.table(urgentTasks);
    } else {
        console.log("Error: Data file not found.");
    }
}

runDashboard();