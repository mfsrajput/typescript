#! /usr/bin/env node
import inquirer from "inquirer";
let todosList = [];
let condition = true;
// Task list
// 1. Add Task ------------DOne
// 2. Delete Task----------Done
// 3. Update Task----------DOne
// 4. View Task------------Done
// 5. Exit-----------------Done
// while (condition) {
// let addTask = await inquirer.prompt([{
//     name: "todo",
//     type: "input",
//     message: "What you want to add in your Todos?"
// },
// {
//     name: "addMore",
//     type: "confirm",
//     message: "Do you want to add more Todos?",
//     default: "false"
// }
// ]);
// todos.push(addTask.todo);
// condition = addTask.addMore;
// console.log(todos);
// }
let main = async () => {
    while (condition) {
        let option = await inquirer.prompt([{
                name: "choice",
                type: "list",
                message: "Select an option you want to do!! :",
                choices: ["Add Task", "Delete Task", "Update Task", "View Todos-List", "Exit"]
            }]);
        if (option.choice === "Add Task") {
            await addTask();
        }
        else if (option.choice === "Delete Task") {
            await deleteTask();
        }
        else if (option.choice === "Update Task") {
            await updateTask();
        }
        else if (option.choice === "View Todos-List") {
            await viewTask();
        }
        else if (option.choice === "Exit") {
            condition = false;
        }
    }
};
// Function to add task in Todo-List
let addTask = async () => {
    let newTask = await inquirer.prompt([{
            name: "task",
            type: "input",
            message: "Enter your new task in Todos-List! :"
        }]);
    todosList.push(newTask.task);
    console.log(`\n ${newTask.task} task added successfully in your Todo-List`);
};
// Function to view all Todo-List Task
let viewTask = async () => {
    console.log("\n Your Todo List :\n");
    todosList.forEach((task, index) => {
        console.log(`${index + 1}: ${task}`);
    });
};
// Function to delete Todo-List Task
let deleteTask = async () => {
    await viewTask();
    let taskindex = await inquirer.prompt([
        {
            name: "index",
            type: "number",
            message: "Enter the `index no` of task you want to delete :"
        }
    ]);
    let deleteTask = todosList.splice(taskindex.index - 1, 1);
    console.log(`\n ${deleteTask} task deleted successfully from your Todo-List`);
};
// Function to update Todo-List Task
let updateTask = async () => {
    await viewTask();
    let updateIndex = await inquirer.prompt([
        {
            name: "index",
            type: "number",
            message: "Enter the `index no` of task you want to update :"
        },
        { name: "newTask",
            type: "input",
            message: "Now enter the new task here :" }
    ]);
    todosList[updateIndex.index - 1] = updateIndex.newTask;
    console.log(`\n Task at index no.${updateIndex.index}update successfully [For updated list check view todo-list :]`);
};
main();
