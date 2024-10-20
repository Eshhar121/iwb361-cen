# Event Planning Website

Welcome to the **VibeNest** repository! This website is designed to help users plan, organize, and manage events, such as weddings, parties, conferences, and more.

## Table of Contents

- [Project Overview](#project-overview)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Installation](#installation)
- [Usage](#usage)
- [Contributing](#contributing)
- [License](#license)
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

1. **Clone the repository**:

    ```bash
    git clone https://github.com/your-username/event-planning-website.git
    ```

2. **Navigate to the project directory**:

    ```bash
    cd event-planning-website
    ```

3. **Set up environment variables**:

    Create a `.env` file in the root directory of the project and configure the following:

    ```bash
    DB_HOST=your-mongodb-uri
    JWT_SECRET=your-jwt-secret
    EMAIL_API_KEY=your-email-api-key
    ```

4. **Install dependencies**:

   Ballerina dependencies can be managed using the `Ballerina.toml` file. If the project has external dependencies, you can pull them with:

    ```bash
    bal build
    ```

5. **Run the application**:

    Start the Ballerina application by running the following command:

    ```bash
    bal run
    ```

6. **Access the website**:

    Once the server is running, open your browser and visit:

    ```
    http://localhost:8080
    ```

# Usage

- **Create an account** to start planning your event.
- **Log in** and create your first event.
- Manage guests, tasks, and budgets through the intuitive dashboard.
- Share your event page with friends and family.

# Contributing

We welcome contributions! If you'd like to contribute to this project, please follow these steps:

1. Fork the repository.
2. Create a new branch (`git checkout -b feature-name`).
3. Make your changes.
4. Commit your changes (`git commit -m 'Add feature'`).
5. Push to the branch (`git push origin feature-name`).
6. Open a pull request.

For larger changes, please open an issue first to discuss your ideas.

# License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for more details.

# Contact

If you have any questions or need further assistance, feel free to reach out:

- **Name** - eshanharshanag@gmail.com
- GitHub: https://github.com/Eshhar121
