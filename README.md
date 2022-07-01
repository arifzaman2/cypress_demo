# Cypress Demo

This is a boilerplate Cypress.js project, which can be used for web application test automation projects. To learn more about Cypress, please check their [documentation](https://docs.cypress.io/)

# Getting Started

  - Clone the repository
  - Run ```npm install```

# Project Structure

Cypress Template project structure is very similar to a scratch Cypress project. However, there are some changes:

- ```cypress/reports``` is the directory where the reports are going to be saved. In this case, the report will be shown in an HTML format after the report generation command is executed.
- ```cypress.config.js``` contains some key options:
    - ```trashAssetsBeforeRuns``` is set to ```false``` so that Cypress does not delete previously saved screenshots before the next run
    - ```video``` is set to ```false```. Remove this if your project needs videos of the test runs
    - ```defaultCommandTimeout``` is set to 15000 ms. Remove this if it's irrelevant
    - ```reporter``` is set to ```cypress-multi-reporters``` as it enables you to integrate multiple types of reports.
    - ```reporterOptions``` contains options for *mochawesome reports*. You can modify this option if your projects needs a different reporter.
    - ```retries``` is set to 2, which means Cypress will run a test case upto 2 times if the test case has failed.
    - ```e2e``` contains a custom plugin which enables Cypress to modify screenshot name and location for failed cases. Remove it if it's not necessary for your project
- In ```package.json``` file, the following commands are added under ```scripts```
    - ```"clean:reports``` will clear the reports folder and create another empty folder where future reports will be stored. 
    - ```"test"``` will run two commands, first it will run ```clean:reports``` to run the above mentioned bash command, and ```npx cypress run``` will run the Cypress test in headless mode 
    - ```merge-reports``` command will merge all the JSON files created for each specs
    - ```copy-reports``` command will copy the mochawesome HTML file from the *mochawesome-report* folder to *cypress/report* directory. *(You can modify this command according to the requirements of your test automation project)* 
    - ```remove``` command will remove redundant folders and files after ```copy-reports``` command is executed. *(You can modify this command according to the requirements of your test automation project)*
    - ```generate-report``` will run ```merge-reports```, ```copy reports``` and ```remove``` sequentially.

- ```DockerFile``` and ```docker-compose.yml``` is used for running the project in Docker. Steps for running in Docker is provided in separate section

# Run Cypress  

## Local Build

If you want to visually see Cypress execute your test automation code, run
```sh
$ npm run uitest
```
If you want to run Cypess in a headless mode, and check the results in Mochawesome reports, run
```sh
$ npm test
$ npm run generate-report
```
## Docker 

In order to execute Cypress in Docker, simply run

```sh
$ docker-compose up
```
**Note:** Your Docker files and setups maybe different according to the structure of your specific test automation project. Please contact your system engineers if modifications are required.