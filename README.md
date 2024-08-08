### **Name:** GUDISELA VASANTH KUMAR
### **Company:** CODTECH IT SOLUTIONS
### **Intern ID:** CT6CC1056
### **Domain:** CLOUD COMPUTING
### **Duration:** JULY 5th to AUGUST 20th 2024
### **Mentor:** Neela Santhosh kumar


## Overview of the Project
### Project: Setting Up A Continuous Integration/Continuous Deployment (CI/CD) Pipeline On AZURE
**Project Overview**

Setting up a CI/CD pipeline on Azure involves several steps to automate the build, test, and deployment processes for a web application. This guide outlines the process using Azure DevOps and Azure App Service.

### Prerequisites
**Azure Subscription:** Ensure you have an active Azure subscription.

**Azure DevOps Account**: Create an account on Azure DevOps.

**Code Repository:** Store your web application code in a repository (e.g., Azure Repos, GitHub).

**Step-by-Step Guide**

**Step 1:** Create a Project in Azure DevOps

Sign In: Go to Azure DevOps and sign in.

**Create a New Project:**

Click on New Project.

Enter the project name, description, and visibility (public or private).

Click Create.

**Step 2:** Set Up Your Code Repository

Navigate to Repos: Go to the created project and navigate to Repos.

Clone or Push Code: Clone the repository to your local machine or push your existing code to this repository.

**Step 3:** Create a Build Pipeline

**Navigate to Pipelines:**

Go to Pipelines > Pipelines.

Click on New Pipeline.

**Select Repository:**

Choose the repository where your code is stored (e.g., Azure Repos Git, GitHub).

Authenticate if required.

**Configure Pipeline:**

Select a pipeline template (basic or specific to your tech stack).

Customize the azure-pipelines.yml file to define your build process.

**Save and Run Pipeline:** Save the pipeline and run it to see if it builds successfully.

**Step 4:** Create a Release Pipeline
Navigate to Releases:

Go to Pipelines > Releases. 

Click on New pipeline.

**Select Template:** Start with an empty job or select a suitable template.

**Add Artifacts:**

Link the build pipeline artifact to the release pipeline.

Choose the latest version of the artifact.

**Define Stages:**

Add stages (e.g., Development, Staging, Production).

For each stage, add deployment tasks

**Save and Create Release:** Save the release pipeline and create a new release to deploy your application.

**Step 5:** Set Up Continuous Deployment Triggers

**Enable Continuous Deployment:**

In the release pipeline, click on the lightning bolt icon on the artifact.

Enable the continuous deployment trigger.

Configure filters or conditions as needed.

**Step 6:** Monitor and Manage Your Pipelines

**Monitor Pipelines:**

Keep an eye on your build and release pipelines.

Review logs and results to ensure smooth operation.

**Adjust and Improve:**

Make adjustments to the pipeline definitions as necessary.

Incorporate additional steps like linting, code quality checks, or integration tests as your project evolves.

## Key Azure Services Used

**Azure DevOps:** For source code management, build, and release pipelines.

**Azure Repos:** To store and manage the source code.

**Azure Pipelines:** To build, test, and deploy the application automatically.

**Azure App Service:** For hosting the web application.

**Web Apps:** Allows you to deploy and run web applications and APIs.

**Continuous Deployment:** Integration with Azure DevOps for automated deployment.


## Conclusion
you can establish a robust CI/CD pipeline that automates the development, testing, and deployment of your web applications. This setup leverages the powerful integration capabilities of GitHub for source control and continuous integration, coupled with the scalable deployment options provided by AWS Elastic Beanstalk. As a result, you can achieve faster release cycles, improved code quality, and increased confidence in your deployments, ensuring that your applications are always running smoothly and efficiently.




