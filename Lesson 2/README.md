## 📚 Lesson Context: Getting Started with Express.js

This code is part of **Lesson 2** in our Backend Web Development module. In this lesson, we solved the "amnesia" problem of static frontend sites by taking our first steps into server-side programming. 

### Key Concepts Covered:
* **The "Brain" and "Engine":** Understanding how Node.js powers our backend engine, while Express.js gives us the tools to easily build the brain.
* **Modern JavaScript:** Configuring Node.js to use ES Modules (`import`/`export`) so our backend code matches the modern React syntax we already know.
* **Initialization:** Setting up a new project environment using `npm init -y` and managing dependencies.
* **Server Basics:** Initializing an Express app, defining a port, and making the server listen for traffic.
* **Routing (Sneak Peek):** Writing our very first rule to respond with "Hello World!" when a user visits the root URL (`/`).

## 🛠️ Tech Stack
* **Runtime:** [Node.js](https://nodejs.org/)
* **Framework:** [Express.js](https://expressjs.com/) (The "E" in MERN)
* **Architecture:** ES Modules

## 🚀 How to Run this Project Locally

Want to fire up the server on your own machine? Follow these steps:

### Prerequisites
Make sure you have [Node.js](https://nodejs.org/) installed on your computer.

### Installation Steps

1. Navigate into the project folder:

    ```bash
    cd Lesson2/My_First_Server
    ```
2. Install the required dependencies:
(This reads the package.json file and downloads Express into the node_modules folder)

    ```Bash
    npm install
    ```

3. Start the server:
    ```Bash
    node server.js
    ```
4. Test it out:
    > Open your browser and visit http://localhost:3000. You should see the message: "Hello, world!"