# Event Planning Website

Welcome to the **VibeNest** repository! This website is designed to help users plan, organize, and manage events, such as weddings, parties, conferences, and more.

## Table of Contents

- [Project Overview](#project-overview)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Installation](#installation)
- [Usage](#usage)
- [Contact](#contact)

# Project Overview

The Event Planning Website is an online platform that allows users to create, manage, and share events. With features like guest list management,and task tracking, it streamlines the process of organizing any event.

This project is designed with scalability and user experience in mind, offering a responsive interface and seamless navigation across different devices.

# Features

- **Event Creation:** Create and customize event pages with descriptions, images, and schedules.
- **Guest Management:** Add and manage guests, track RSVPs, and send invitations.
- **Task List:** Keep track of event-related tasks and mark them as completed.
- **Mobile Friendly:** Fully responsive design for mobile and tablet devices.
- **Social Sharing:** Share event pages via social media or email.

# Tech Stack

- **Frontend:** HTML, CSS, JavaScript , bootstrap 
- **Backend:** JavaScript, Ballerina
- **Database:** MYSQL

# Installation

To get started with the project locally:

### Steps

1. **Clone the repository**:

    ```bash
    git clone https://github.com/your-username/event-planning-website.git
    ```

2. **Navigate to the project directory**:

    ```bash
    cd event-planning-website
    ```

3. **Set up the database**:

   Open your MySQL command-line or a database management tool (e.g., phpMyAdmin) and run the following commands to create the database and tables.

    ```sql
    -- Create the database
    CREATE DATABASE baltest;

    -- Use the newly created database
    USE baltest;

    -- Create the users table
    CREATE TABLE users (
        user_id INT PRIMARY KEY AUTO_INCREMENT,
        first_name VARCHAR(50),
        last_name VARCHAR(50),
        email VARCHAR(100) UNIQUE,
        birth_date DATE,
        contact  VARCHAR(12),
        password INT
    );

    -- Create the posts table
    CREATE TABLE posts (
        post_id INT PRIMARY KEY AUTO_INCREMENT,
        title VARCHAR(30),
        description VARCHAR(50),
        user_id INT,
        image_path VARCHAR(100),
        category  VARCHAR(10),
        contact  VARCHAR(12),
        FOREIGN KEY (user_id) REFERENCES users(user_id)
    );
    ```

4. **Set up environment variables**:

   Create a `.env` file in the root directory of the project and configure the following:

    ```bash
    DB_HOST=your-mysql-host
    DB_PORT=your-mysql-port
    DB_USER=your-mysql-username
    DB_PASSWORD=your-mysql-password
    DB_NAME=baltest
    JWT_SECRET=your-jwt-secret
    EMAIL_API_KEY=your-email-api-key
    ```

5. **Install dependencies** (if required):

   Ballerina dependencies can be managed using the `Ballerina.toml` file. If the project has external dependencies, you can pull them with:

    ```bash
    bal build
    ```

6. **Run the application**:

    Start the Ballerina application by running the following command:

    ```bash
    bal run
    ```

7. **Access the website**:

    Once the server is running, open your browser and visit:

    ```
    http://localhost:8080
    ```

# Usage

- **Create an account** to start planning your event.
- **Log in** and create your first event.
- Share your event page with friends and family.

# Contact

If you have any questions or need further assistance, feel free to reach out:

- **Name** - eshanharshanag@gmail.com
- GitHub: https://github.com/Eshhar121
