const fs = require('fs')
const inquirer = require('inquirer');

inquirer.prompt ([  {
    message: "What is your project title?",
    type: "input",
    name: "Project Name",
},
{
    message: "Please enter a brief description of your project.",
    type: "input",
    name: "Project Description",
},
{
    message: "What are the steps needed to install your apllication?",
    type: "input",
    name: "Project Install Intructions",
},
{
    message: "What is your GitHub Username?",
    type: "input",
    name: "GitHub Link",
},
{
    message: "What is your e-mail address?",
    type: "input",
    name: "User Email",
},
{
    message: "Please include contribution notes for your application.",
    type: "input",
    name: "Project Contribution",
},
{
    message: "Please include any usage information for your aplication.",
    type: "input",
    name: "Project Usage",
},
{
    message: "Please include any test instructions for your application.",
    type: "input",
    name: "Project Test",
},
{
    message: "Please choose your license from the options provided.",
    type: "list",
    name: "Project License",
    choices: ['IBM','MIT','MOZILLA','APACHE']
},
]).then ((ans) => {
    console.log(ans);
    fs.writeFile("./README.MD",JSON.stringify(ans, null,1),function(err){
        if (err) console.log ("error",err)

    })
})
