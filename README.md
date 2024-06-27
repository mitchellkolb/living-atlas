
<h1 align="center">Living Atlas</h1>

<p align="center">
  <img alt="Github top language" src="https://img.shields.io/github/languages/top/mitchellkolb/living-atlas?color=56BEB8">

  <img alt="Github language count" src="https://img.shields.io/github/languages/count/mitchellkolb/living-atlas?color=56BEB8">

  <img alt="Repository size" src="https://img.shields.io/github/repo-size/mitchellkolb/living-atlas?color=56BEB8">

  <img alt="Github stars" src="https://img.shields.io/github/stars/mitchellkolb/living-atlas?color=56BEB8" />
</p>

<p align="center">
<img
    src="https://img.shields.io/badge/Python-3776AB?style=for-the-badge&logo=Python&logoColor=white"
    alt="Website Badge" />
<img
    src="https://img.shields.io/badge/React-0088CC?style=for-the-badge&logo=React&logoColor=white"
    alt="Website Badge" />
<img
    src="https://img.shields.io/badge/Windows-0078D6?style=for-the-badge&logo=Windows 10&logoColor=white"
    alt="Website Badge" />
</p>

This project is intended to showcase the Living Atlas Database and Map teams product that we produced for our 2023 WSU Capstone project. We produced/deployed a full stack web application that collects and displays information relating to the Columbia River Basin.

![project image](resources/image1.png)

<details>
<summary style="color:#5087dd">Watch the Full Video Demo Here</summary>

[![Full Video Demo Here](https://img.youtube.com/vi/VidKEY/0.jpg)](https://www.youtube.com/watch?v=VidKEY)

</details>

---


# Table of Contents
- [What I Learned](#what-i-learned-in-this-project)
- [Tools Used / Development Environment](#tools-used--development-environment)
- [Team / Contributors / Teachers](#team--contributors--teachers)
- [How to Set Up](#how-to-set-up)
- [Project Overview](#project-overview)
- [References](#references)
- [Acknowledgments](#acknowledgments)

---

# What I Learned in this Project
- How to plan, document, develop and work as a team to complete a common goal.



# Tools Used / Development Environment
- React (Frontend)
- Python (Backend)
- PostgreSQL (Database)
- VS Code
- Terminal
- Windows 10





# Team / Contributors / Teachers
- [Mitchell Kolb](https://github.com/mitchellkolb)
- [Joshua Long](https://github.com/joshmainac)
- [Sierra Svetlik](https://github.com/SierraSv)
- [Flavio Alvarez Penate](https://github.com/f-alvarezpenate)
- [Wyatt Croucher](https://github.com/WyattCroucher3)
- [Phearak Both Bunna](https://github.com/Phearakbothbunna)
- Professor. Balasubramanian ‘Subu’ Kandaswamy





# How to Set Up
This project was implemented on our local machine and then deployed on Netlify when the project was launched.
- Clone this repository 
- Open terminal at the codebase `~.../living-atlas`
- Make sure you have these installed
    - Python3
    - Node.js
    - npm
- Create a virtual environment
    - `python -m venv myenv`
    - On Windows `myenv/Scripts/activate`
    - On macOS and Linux `source myenv/bin/activate`
- Managing the virtual environment
    - When you want to leave use `deactivate`
    - Make sure to upgrade pip `python -m pip install --upgrade pip`
- Install packages from requirements.txt before running the Living Atlas
    - `pip install -r requirements.txt`
- Have a postgreSQL database active either locally or through a service provider. During development we used ElephantSQL which allowed use to remotely query the database without having to manage any databases between team members.

### To Run the Living Atlas
- In 1st terminal navigate to the /LivingAtlas1/client folder 
    - Use `npm start`
- In 2nd terminal navigate to the /LivingAtlas1/backend folder
    - Use `uvicorn main:app --reload`



# Project Overview
The Living Atlas project is a comprehensive web application designed to address the challenge of scattered and inaccessible environmental data related to the Columbia River Basin. Developed with the aim of creating a centralized repository, the platform facilitates the collection, sharing, and access of a wide variety of environmental data. The application primarily targets stakeholders such as tribal communities, academic institutions, and government agencies. Built using React for the front end and FastAPI for the back end, Living Atlas provides a user-friendly interface for data collection and a robust system for data management. The back end utilizes ElephantSQL to store all application data in the cloud, ensuring scalability and reliability. Additionally, the platform features interactive data visualization through an integrated map-based interface, allowing users to view and analyze data in a geographical context.

Key features of Living Atlas include data collection, data management, data sharing, external data connections, and data visualization. The data collection feature offers a simple interface for uploading environmental data from various sources, with verification processes to ensure accuracy. The data management system supports efficient storage, searchability, sorting, filtering, and analysis of data. The platform promotes collaboration through secure data sharing and integrates external data sources to broaden the range of available information. The interactive map-based visualization tool enhances understanding by presenting data in a spatial context. This project demonstrates a successful collaboration between multiple teams, each focusing on specific aspects such as the database and backend, or the user interface and interactive map. Together, these components create a cohesive application that aims to make environmental data accessible and useful to a wide audience.



## Project Details

### Introduction
In this project, we deployed the Living Atlas. The Living Atlas is a web application aimed at solving the problem of scattered andinaccessible environmental data. Our goal is to provide a central location for collecting, sharing, and accessing environmental data, making it available to a wide range of stakeholders including tribal communities, academic institutions, and government agencies. The platform will allow for easy viewing by everyone but will require authentication for uploading data to ensure the validity and accuracy of the information being shared. Additionally, the platform will be able to connect to external sources, further expanding the range of environmental data available on the platform. 


### Literature Review
In this we drew inspiration from various sources, including video tutorials online for 


### Technical Plan
The project employs a 


### Implementation Details

#### Files and Structure
- `game.py`: Contains the racing game environment and controls the car's movement.
> [!NOTE]
> These files were 


### Implementation
In this project

#### Results and Observations
During development,
<p float="left">
  <img src="resources/image1.png" alt="First Try" width="300" />
  <img src="resources/image2.png" alt="Final Try" width="307" />
</p>

#### Future Work
1. **Front-End**
In future work, we plan to enhance the functionality of Living Atlas by enabling user login, which will allow users to securely access and manage their data. We also plan to enable file handling, which will allow users to upload and download data files in a variety of formats. In addition, we will enable filtering, which will enable users to sort and search data based on specific criteria. Finally, we plan to integrate a visualization map, which will provide users with an interactive map-based view of the data.
2. **Back-End**
For the future of the back end, we would want to create more card moderation tools/endpoints. This would include the ability to edit already existing cards and have an endpoint to verify admin users and to have those users be able to delete any card. Another feature the backend would like to implement is the ability to view/download only files. Currently files are attached to cards which require a card to be made but we could add the feature of a file explorer page where all the files are listed, and the user can download any file they desire.
3. **Database**
For the future of the database, all that will need to be done will be to manage the tables as needed, expanding and adding new tables if it is necessary to store more information. The instance used to run the database will also need to be upgraded should a large number of people start using the app.
4. **Misc.**
This website is currently deployed on Netlify.com and it has a generic netlify link. A goal our team could work on in the future could be to get a custom domain and pair it with this deployed version of the site.


## References



--- 
# Acknowledgments
This codebase and all supporting materials was made as apart of two courses for my undergrad at WSU for CPTS 421 & 423 - Software Design Project 1 & 2 in the Spring of 2023 and Fall of 2023. This project was originally submitted to a private repository as all WSU assignments are, that has forking disabled. This repository serves as a backup place to showcase this project. The original repo is [linked here.](https://github.com/WSUCapstoneS2023/LivingAtlas1)

