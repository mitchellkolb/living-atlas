
<h1 align="center">Living Atlas</h1>

<p align="center">
  <img alt="Github top language" src="https://img.shields.io/github/languages/top/mitchellkolb/living-atlas?color=0078D6">

  <img alt="Github language count" src="https://img.shields.io/github/languages/count/mitchellkolb/living-atlas?color=0078D6">

  <img alt="Repository size" src="https://img.shields.io/github/repo-size/mitchellkolb/living-atlas?color=0078D6">

  <img alt="Github stars" src="https://img.shields.io/github/stars/mitchellkolb/living-atlas?color=0078D6" />
</p>

<p align="center">
<img
    src="https://img.shields.io/badge/Python-3776AB?style=for-the-badge&logo=Python&logoColor=white"
    alt="Website Badge" />
<img
    src="https://img.shields.io/badge/postgresql-4169E1?style=for-the-badge&logo=postgresql&logoColor=white"
    alt="Website Badge" />
<img
    src="https://img.shields.io/badge/javascript-B9A61A?style=for-the-badge&logo=javascript&logoColor=white"
    alt="Website Badge" />
<img
    src="https://img.shields.io/badge/React-46A4BB?style=for-the-badge&logo=React&logoColor=white"
    alt="Website Badge" />
<img
    src="https://img.shields.io/badge/Netlify-00C7B7?style=for-the-badge&logo=netlify&logoColor=white"
    alt="Website Badge" />
<img
    src="https://img.shields.io/badge/google%20cloud%20storage-7B92B4?style=for-the-badge&logo=GoogleCloudStorage&logoColor=white"
    alt="Website Badge" />
<img
    src="https://img.shields.io/badge/mapbox-000000?style=for-the-badge&logo=mapbox&logoColor=white"
    alt="Website Badge" />
<img
    src="https://img.shields.io/badge/Windows-0078D6?style=for-the-badge&logo=Windows 10&logoColor=white"
    alt="Website Badge" />
</p>

This project is intended to showcase the Living Atlas Database and Map teams product that we produced for our 2023 WSU Capstone project. We produced/deployed a full stack web application that collects and displays information relating to the Columbia River Basin.

![Poster](resources/LA-gif-repo.gif)

<details>
<summary style="color:#5087dd">Watch the Full Video Demo Here</summary>

[![Full Video Demo Here](https://img.youtube.com/vi/VidKEY/0.jpg)](https://www.youtube.com/watch?v=VidKEY)

</details>

---


# Table of Contents
- [What I Learned](#what-i-learned-in-this-project)
- [Tools Used / Development Environment](#tools-used--development-environment)
- [Team / Contributors / Teachers](#team--contributors--teachers)
- [CEREO Team](#cereo-team)
- [How to Set Up](#how-to-set-up)
- [Project Overview](#project-overview)
    - [Introduction](#introduction)
    - [Collaboration](#collaboration)
    - [Meetings](#meetings)
    - [Technical Details](#technical-details)
        - [Frontend](#frontend)
        - [Backend](#backend)
        - [Database](#database)
        - [Requirements and Deployment Plan](#requirements-and-deployment-plan)
        - [Files and Structure](#files-and-structure)
    - [Results and Presentation](#results-and-presentation)
    - [Future Work](#future-work)
- [Acknowledgments](#acknowledgments)


---

# What I Learned in this Project
- How to plan, document, develop, and work as a team to complete a common goal, which was to produce a functional website that meets the client's expectations.
- How to create and use APIs with Swagger UI.
- How to use Google Cloud API to store files using buckets.
- Creating DBMS and its corresponding ER diagrams.
- Developing a website with modern security practices like hashing, no client-side logs of hidden items, and account management.
- Writing professional documents related to developing software.




# Tools Used / Development Environment
- React (Frontend)
- Python (Backend)
- PostgreSQL (Database)
- VS Code
- Terminal
- Windows 10

**Living Atlas Specific Services**
- Frontend - [Netlify.com](https://www.netlify.com)
- Backend - [Render.com](https://render.com)
- Database - [elephantSQL](https://www.elephantsql.com)
- File Storage - [Google Cloud Storage](https://cloud.google.com) 
- Map API - [Mapbox](https://www.mapbox.com/)



# Team / Contributors / Teachers
- [Mitchell Kolb](https://github.com/mitchellkolb)
- [Joshua Long](https://github.com/joshmainac)
- [Sierra Svetlik](https://github.com/SierraSv)
- [Flavio Alvarez Penate](https://github.com/f-alvarezpenate)
- [Wyatt Croucher](https://github.com/WyattCroucher3)
- [Phearak Both Bunna](https://github.com/Phearakbothbunna)
- [Professor. Balasubramanian ‘Subu’ Kandaswamy](https://www.subukandaswamy.com/)



# CEREO Team
- Dr. Jan Boll 
- Dr. Julie Padowski
- Dr. Hannah Haemmerli 
- Jacqueline Richey McCabe.




# How to Set Up
These instructions are for a local instance. Open a new terminal and check that the following libraries are installed:
   * python3
   * pip (used for installing required libraries to run the backend)
   * node.js (enables npm commands)

**Running the Frontend:**
   1. Go into the `/client` directory.
   2. Open this directory in a terminal.
   3. Type `npm install` to enable React and all of the node modules used.
   4. Run the command `npm start` to initialize the frontend on port 3000.

**Running the Backend:**
1. Open a new terminal and navigate to the `/backend` directory.
2. Use `pip install -r requirements.txt` to install all of the requirements.
3. Use `uvicorn main:app --reload` to locally host the backend on port 8000 (`--reload` makes the backend restart anytime an update happens to a file; you can choose to leave this part out).
    - If the above command doesn’t work, try running `python .\main.py` instead.
4. To run the docs for the backend and test each individual endpoint, go to [http://localhost:8000/docs](http://localhost:8000/docs) in your browser.

**Connecting the Frontend and Local Backend:**
   1. By default, the frontend should be connected to the hosted backend on Render. This can be checked by looking into the JavaScript file named `api.js` found inside the `/client/src` directory.
   2. Each `baseURL` found in this file will have a comment describing where it is deployed. Comment out all of these hosted `baseURL` statements.
   3. To switch to the local backend, simply uncomment `baseURL: 'http://localhost:8000'`.

To close the application, go back to each terminal and use the command `Ctrl+C` to end the process and free up localhost ports 3000 and 8000. If you forget to do this, it's not the end of the world, but it might not let you delete files in the project without restarting your PC. Also, if you do `npm start` again, it will ask you to open it on port 3001 instead since port 3000 is busy.




# Project Overview
The Living Atlas project is a comprehensive web application designed to address the challenge of scattered and inaccessible environmental data related to the Columbia River Basin. Developed with the aim of creating a centralized repository, the platform facilitates the collection, sharing, and access to a wide variety of environmental data. The application primarily targets stakeholders such as tribal communities, academic institutions, and government agencies. Built using React for the front end and FastAPI for the back end, Living Atlas provides a user-friendly interface for data collection and a robust system for data management. The back end utilizes ElephantSQL to store all application data in the cloud, ensuring scalability and reliability. Additionally, the platform features interactive data visualization through an integrated map-based interface, allowing users to view and analyze data in a geographical context.

Key features of Living Atlas include data collection, data management, data sharing, external data connections, and data visualization. The data collection feature offers a simple interface for uploading environmental data from various sources, with verification processes to ensure accuracy. The data management system supports efficient storage, searchability, sorting, filtering, and analysis of data. The platform promotes collaboration through secure data sharing and integrates external data sources to broaden the range of available information. The interactive map-based visualization tool enhances understanding by presenting data in a spatial context. This project demonstrates a successful collaboration between multiple teams, each focusing on specific aspects such as the database and backend, or the user interface and interactive map. Together, these components create a cohesive application that aims to make environmental data accessible and useful to a wide audience.


## Project Details

### Introduction
In this project, we deployed the Living Atlas. The Living Atlas is a web application aimed at solving the problem of scattered and inaccessible environmental data. Our goal is to provide a central location for collecting, sharing, and accessing environmental data, making it available to a wide range of stakeholders including tribal communities, academic institutions, and possible government agencies. The platform will allow for easy viewing by everyone but will require authentication for uploading data to ensure the validity and accuracy of the information being shared. Additionally, the platform will be able to connect to external sources, further expanding the range of environmental data available on the platform.

### Collaboration
The Living Atlas project was a collaborative effort involving a dedicated development team and our clients from the Center for Environmental Research, Education, and Outreach (CEREO). Our team, composed of Joshua Long, Mitchell Kolb, and Sierra Svetlik, and later the Living Atlas Map team met weekly to discuss progress, address challenges, and plan the next steps. Additionally, we held weekly meetings with our clients, including Dr. Jan Boll, Dr. Julie Padowski, Dr. Hannah Haemmerli, and occasionally principal assistant Jacqueline Richey McCabe, to ensure that our work aligned with their expectations and requirements. These regular interactions facilitated effective communication, timely feedback, and a clear understanding of the project goals, contributing significantly to the project's success. The larger group meetings were where we displayed and demoed the current status of the website as it was being developed. Throughout our two semesters working on this project, we also had bi-weekly meetings with our professor Subu where we went over our progress and goals as a team as well.

### Meetings
The Living Atlas Project was developed collaboratively by two teams: the Living Atlas Database team and the Map team. Initially, the two teams operated fairly independently, holding biweekly meetings with Prof. Subu and weekly meetings with our client, the CEREO team. In the second semester, both development teams formally merged and began working from the same GitHub repository while continuing to maintain weekly meetings with the client.

### Technical Details

#### Frontend
The frontend of the Living Atlas project is built using React, a popular JavaScript library for building user interfaces. The design focuses on creating an intuitive and user-friendly experience for interacting with environmental data.

- **Technologies Used:**
  - React: For building the dynamic user interface.
  - Axios: For making HTTP requests to the backend APIs.
  - React Testing Library and Jest: For testing the frontend components.

- **Key Components:**
  - **Header Component:** Displays the logo, navigation links, search bar, filtering button, and upload button.
  - **Upload Form Component:** Allows users to upload data, including metadata such as name, email, funding, organization, title, link, description, tags, latitude, longitude, and file.
  - **Content Area Component:** Fetches data from the backend and renders it using the Card components.
  - **Card Component:** Displays detailed information about each data point, including interactive features like downloading files.

#### Backend
The backend of the Living Atlas project is developed using FastAPI, a modern web framework for building APIs with Python. It handles the application's data processing and serves as the middleman between the frontend and the database.

- **Technologies Used:**
  - FastAPI: For building the RESTful endpoints.
  - SQLAlchemy: For database interaction and ORM (Object-Relational Mapping).
  - Google Cloud API: For storing and retrieving the files.

- **Key Endpoints:**
  - **Register Account Endpoint:** Handles user registration with necessary validations.
  - **Login Endpoint:** Authenticates users and generates JWT tokens.
  - **Profile Cards Endpoint:** Retrieves all cards uploaded by a specific user.
  - **Upload Card Endpoint:** Allows authenticated users to upload new data points.
  - **Delete Card Endpoint:** Enables users to delete their uploaded data points.
  - **Retrieve All Cards Endpoint:** Fetches the most recent data points for display.
  - **Filter Cards by Custom Tag Endpoint:** Filters data points based on user-defined tags.
  - **Populate Map Point Locations Endpoint:** Supplies the frontend map with the necessary geographical data.

#### Database
The database for the Living Atlas project is managed using PostgreSQL and hosted on ElephantSQL. It stores all the environmental data, user information, and metadata associated with the data points.

- **Technologies Used:**
  - PostgreSQL: For relational database management.
  - ElephantSQL: A cloud-based PostgreSQL service for hosting the database.

- **Schema Design:**
  - **Users Table:** Stores user information, including usernames, hashed passwords, and email addresses.
  - **Categories Table:** Manages data categories for classification purposes.
  - **Cards Table:** Contains details about each data point, including metadata and geographical information.
  - **Files Table:** Stores information about files uploaded with each data point.
  - **Tags Table:** Manages custom tags associated with data points.
  - **CardTags Table:** Links data points to their respective tags for efficient querying.

#### Requirements and Deployment Plan
- **Functional Requirements:**
  - Data collection with a user-friendly interface.
  - Efficient data management, including sorting, filtering, and analysis.
  - Secure data sharing with controlled access.
  - Integration with external data sources.
  - Interactive map-based data visualization.

- **Non-Functional Requirements:**
  - High performance and scalability.
  - Intuitive and accessible user interface.
  - Robust security measures to protect user data.
  - Compatibility with various browsers and devices.
  - Reliable and maintainable codebase.

- **Deployment Plan:**
  - **Staging Environment:** A separate environment that replicates the production setup for testing and validation. Uses Docker for containerization and CI/CD tools like GitHub Actions for automated deployment.
  - **Production Environment:** Deployed on cloud platforms such as Netlify for scalability and reliability. The backend APIs are hosted on a Render.com server. The PostgreSQL database is managed via ElephantSQL with regular backups and monitoring.

#### Files and Structure
- `/client`: This folder contains all the front-end code.
- `/backend`: This folder contains all the code required to run the backend. Additionally, you'll find test code for using Google Cloud services.
- `/database`: This folder contains the ER diagram and table schema for creating a PostgreSQL database locally and some test data to insert into the database to have the front-end and backend work together.

### Results and Presentation
When the project was finished and deployed, our stakeholders/clients said they were very pleased with how their website turned out. During our presentation, where the Living Atlas team and all the other teams showcased their own projects, the Living Atlas received many compliments. Both the Living Atlas Map and Database teams are very proud of the work we produced.

### Future Work
1. **Front-End**
In future work, we plan to enhance the functionality of Living Atlas by enabling user login, which will allow users to securely access and manage their data. We also plan to enable file handling, allowing users to upload and download data files in various formats. In addition, we will enable filtering, which will allow users to sort and search data based on specific criteria. Finally, we plan to integrate a visualization map, which will provide users with an interactive map-based view of the data.

2. **Back-End**
For the future of the backend, we would like to create more card moderation tools/endpoints. This would include the ability to edit already existing cards, have an endpoint to verify admin users, and allow those users to delete any card. Another feature the backend would like to implement is the ability to view/download only files. Currently, files are attached to cards, which require a card to be made, but we could add the feature of a file explorer page where all the files are listed, and the user can download any file they desire.

3. **Database**
For the future of the database, all that will need to be done is to manage the tables as needed, expanding and adding new tables if it is necessary to store more information. The instance used to run the database will also need to be upgraded should a large number of people start using the app.

4. **Misc.**
This website is currently deployed on Netlify.com and has a generic Netlify link. A goal our team could work on in the future is to get a custom domain and pair it with this deployed version of the site.




--- 
# Acknowledgments
This codebase and all supporting materials was made as apart of two courses for my undergrad at WSU for CPTS 421 & 423 - Software Design Project 1 & 2 in the Spring of 2023 and Fall of 2023. This project was originally submitted to a private repository as all WSU assignments are, that has forking disabled. This repository serves as a backup place to showcase this project. The original repo is [linked here.](https://github.com/WSUCapstoneS2023/LivingAtlas1)

