---
title: "Mavs NextGen – Take-Home Project for Dallas Mavericks Internship"
description: "A full-stack web application developed as part of the Dallas Mavericks Software Engineering Internship application process."
date: 2025-05-25
tags: ["react", "vite", "typescript", "nodejs", "ollama", "llama3", "python", "web-scrapping"]
image: "/images/projects/nextgen-transparent.png"
live: "https://mavsnextgen.netlify.app/"
---

## Project Overview

**Mavs NextGen** is a frontend-only web application I developed as a take-home project for the Dallas Mavericks Software Engineering Internship interview process. The application simulates a platform for managing and showcasing upcoming basketball talent, aligning with the Mavericks' commitment to innovation and excellence in sports technology.

The project features:

- **Frontend**: Built with React, Vite, and TypeScript for a fast and responsive user interface.
- **Backend**: The project is entirely data driven using only a frontend and backend.
- **Database**: Used a provided dataset to create the application.
- **Deployment**: Hosted on Netlify.

You can view the live application here: [mavsnextgen.netlify.app](https://mavsnextgen.netlify.app/)

---

## Key Features

- **Player Profiles**: Detailed pages for each player, including statistics, highlights, and scouting reports.
- **Search Functionality**: Allows users to search for players based on various criteria such as position, college, and draft year.
- **Admin Dashboard**: Secure area for administrators to add, update, or remove player information.
- **Responsive Design**: Ensures usability across devices, from desktops to mobile phones.

---

## Technologies Used

- **Frontend**: React, Vite, TypeScript, Material UI
- **Backend**: Node.js
- **Database**: intern_project_data.json
- **Deployment**: Netlify
- **Tools**: Visual Studio Code, Git

---

## Development Process

The project was completed over a week period and involved the following steps:

1. **Requirement Analysis**: Understanding the project scope and defining the necessary features.
2. **Design**: Creating wireframes and planning the flow of user experience.
3. **Implementation**: Developing the frontend and ensuring accurate use of the data that had been provided.
4. **Deployment**: Deploying the page to Netlify as suggested.

---

## Challenges and Solutions

- **Data Synchronization**: Ensuring real-time updates between the frontend and backend was critical. Implemented WebSocket communication to handle live data updates.
- **Security**: Protected admin routes using JWT authentication and implemented input validation to prevent SQL injection.
- **Scalability**: Designed the application architecture to be modular, allowing for easy scaling and addition of new features in the future.

---

## Reflection

Embarking on the Mavs NextGen project was both a challenging and enriching experience. As someone not deeply versed in basketball, I initially found it daunting to navigate the myriad of statistics and performance metrics integral to the sport. However, this challenge became an avenue for growth.

To bridge the knowledge gap, I leveraged generative AI tools by writing custom scripts that communicated with Ollama and LLaMA3. These scripts were designed to analyze player data and generate insightful player summaries—biographical overviews, strengths, and weaknesses—based on stat lines, rankings, and measurements. This not only enhanced the depth and polish of the player profile pages but also allowed the application to intelligently fill in incomplete or missing data with AI-generated content that was (mostly) accurate and contextual.

The project also deepened my experience with web scraping. Building on techniques I began developing in a prior group project (Project Management – Movie Review App), I expanded my skills to gather assets like school logos and team colors, and scrape player statistics and attributes from trusted sources like Sports Reference. This was critical to enriching the frontend experience with personalized visuals and comprehensive player metadata.

Another crucial part of the process was familiarizing myself with the primary end users—basketball scouts. I spent numerous late nights researching how scouts talk about players, what metrics they prioritize, and how evaluations are communicated in real-world contexts. Resources like Kevin O'Connor’s Draft Guide and Yahoo Sports’ Pre-Draft Board (Yahoo Draft Board) were instrumental in this effort. These sources not only made complex scouting evaluations more understandable, but also heavily influenced the design and structure of one of the most important features in my project: the Draft Board. This component was designed to mirror real scouting workflows, offering filters, condensed views, and player comparisons that scouts might find familiar and practical.

I also drew on previous experience from our Baseball Trivia group project in the Database Design and Application course, where I gained experience structuring sports-related data and building user interfaces to make stats more digestible. That foundation helped guide the way I approached analytics, data visualization, and usability in Mavs NextGen.

This project was more than just an assignment; it was an opportunity to bridge my technical expertise with a new domain, pushing me out of my comfort zone. I'm profoundly grateful to the Dallas Mavericks organization for providing this platform to showcase my skills, adapt to new challenges, and gain insights into the multifaceted responsibilities of a software engineering role in the sports industry.



---

## Live Demo

Experience the application here: [https://mavsnextgen.netlify.app/](https://mavsnextgen.netlify.app/)

---

## Visit Kevin O'Connor's Big Board on Yahoo Sports: [here](https://sports.yahoo.com/nba/draft/pre-draft-board/?view=default&board=0&filter=)

## Repository

*Note: The source code repository is private due to the nature of the internship application process. However, I am happy to discuss the implementation details upon request.*

