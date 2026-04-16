let tasks: string [] = [];
function addTask(task: string): number{
    tasks.push(task);
    console.log(`Task "${task}" added to the list.`);
    return tasks.length;
}