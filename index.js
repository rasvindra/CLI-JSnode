const fs = require('fs')
const inquirer = require('inquirer');
const generateMarkdown = require('./Utils/generatemarkdown');

function init(){
inquirer.prompt ([  
    {
    message: "What is your project title?",
    type: "input",
    name: "prjName",
},
{
    message: "Please enter a brief description of your project.",
    type: "input",
    name: "prjDesc",
},
{
    message: "What are the steps needed to install your apllication?",
    type: "input",
    name: "prjInstall",
},
{
    message: "What is your GitHub Username?",
    type: "input",
    name: "gitLink",
},
{
    message: "What is your e-mail address?",
    type: "input",
    name: "userEmail",
},
{
    message: "Please include contribution notes for your application.",
    type: "input",
    name: "prjCont",
},
{
    message: "Please include any usage information for your aplication.",
    type: "input",
    name: "prjUsage",
},
{
    message: "Please include any test information for your application.",
    type: "input",
    name: "prjTest",
},
{
    message: "Please choose your license from the options provided.",
    type: "list",
    name: "prjLicense",
    choices: ['IBM','MIT','MOZILLA','APACHE','ISC']
},
]).then ((ans) => {
    const working = generateMarkdown(ans)
    fs.writeFile('README.md',working,function(err){
        if (err) console.log ("error",err)
    }
)
})
}


init()
