#! /usr/bin/env node

//To do list
import chalk from "chalk";
import inquirer from "inquirer";

let ToDoList=["First Task", "Second Task","Third Task"];

async function askQuestion() {
    
    await inquirer.prompt([
        {
            type: "list",
            name: "select",
            message: chalk.bold.bgBlueBright("Do you want to add or remove from To Do list? "),
            choices: ["Add", "Remove"]
        }   

    ]).then(async (answers) => {
        if(answers.select=="Remove")
        {
            if(ToDoList.length!=0)
            {
            await inquirer.prompt([{
                type: "list",
                name: "ToDoList",
                message: chalk.greenBright("Kindly select the task which has been completed: "),
                choices: ToDoList
            }]).then((answers)=>{
                for(let i =0; i<ToDoList.length;i++)
                {
                    if(ToDoList[i]===answers.ToDoList)
                    {
                        ToDoList.splice(i,1);
                    }
                }
                });
            }
                else 
                {
                    console.log(chalk.bold.redBright("To do list is empty"));
                }
            }

        else if(answers.select=="Add")
        {
            await inquirer.prompt([{
                type: "input",
                name: "AddTask",
                message: chalk.greenBright("Kindly enter the task: ")
            }]).then((answers)=>{
                    ToDoList.push(answers.AddTask);
            });
        }
        else
        {
            console.log("Will never come here");
        }
    }
    
    )
}


async function continueChoice() {
    do {
        await askQuestion();
        var choice = await inquirer.prompt(
            {
                type: "input",
                name: "qa",
                message: chalk.bgGrey("Do you want to continue? Press Y or y for Yes")
            })
            console.log(ToDoList);
        }

 while (choice.qa == 'yes'|| choice.qa == 'Yes'||choice.qa == 'YES'||choice.qa == 'y'||choice.qa == 'Y');
}
continueChoice(); 
