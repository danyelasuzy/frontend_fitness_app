🌟 Welcome to the PathBuddy App!

The PathBuddy App is designed to encourage users to get moving and lead healthier, more active lifestyles. 🏃‍♂️🚶‍♀️
With PathBuddy, you can track your progress, visualise your achievements, and stay motivated to meet your fitness goals! 💪


🛠️ Our Process

We adopted a modular approach, splitting the project into frontend and backend repositories. This ensures that edits to the codebase are straightforward and maintainable.

Here’s our original Figma design: https://www.figma.com/design/ljfKmAzIri14fPM2iFofv2/PathBuddy?node-id=0-1&p=f&t=S1AwaUMuMgQtirGN-0

🛠️ Our Development Philosophy

    • Modularity: Each component is self-contained, handling its own data fetching, logic, and styles.
    • Reusability: Shared elements like buttons and modals are used throughout the app for a cohesive look and feel.
    • Scalability: The app’s structure makes it easy to add features, such as achievements or social components, in the future.
    
In summary, PathBuddy’s design emphasizes simplicity, scalability, and user engagement. Each piece — whether a progress bar, avatar modal, or challenge tracker—plays a role in creating a smooth and motivating experience for users.

✨ What We've Created So Far:

✅ Motivational Routes

    A selection of routes for users to follow, helping them visualise how far they've walked by comparing it to real-world distances.

✅ User Account System

    Users can:
        Create an account.
        Log in and personalize their profile with an avatar (stored in local storage).

✅ Challenge Features

    Users can:
        Select a challenge.
        Track their progress via a manual input system.
        View their progress on an interactive map layout and challenge progress bar.

✅ Technology Stack

    Frontend: Built with React.js using a mobile-first, responsive design approach.
    Backend: Developed with Node.js and Express, with MongoDB as the database.
    Deployment: Hosted on Heroku for accessibility and ease of use.


🚧 Goals We Didn't Achieve 

While we've accomplished a lot, there are a few features that remain unfinished:

❌ Tracking System with Map API

    Initially, we planned to integrate a map API for automated progress tracking, but due to time and budget constraints, we pivoted to a manual input system.

❌ Progress Saving

    Currently, the user's progress is not fully saved in the database. Progress tracking works only while the user remains on the challenge page, and this functionality will need further development.

❌ Social Features

    We envisioned allowing users to:
        Connect with friends.
        Compare progress.
        Compete on a leaderboard.
        Unfortunately, we couldn’t complete this within the timeframe.

❌ Achievement Badges

    A system to reward users with badges (e.g., for completing their first route) is designed but not yet implemented.

🔄 What's Next?

We're proud of what we've built so far, but we recognise that there's room for growth. Here's what still needs completing for PathBuddy:

    🗺️ Automated Progress Tracking using a map API.
    👯 Social Features to connect and compete with friends.
    🏅 Achievement Badges to reward milestones and keep users engaged.

Thank you for checking out PathBuddy! Your feedback and suggestions are always welcome. Let's keep moving! 🚶‍♀️🌍✨

🔍 Looking for more technical details? 💻✨ Check them out below! 📖👨‍💻

✨ How PathBuddy Works

Frontend (The repository can be found here: https://github.com/danyelasuzy/frontend_fitness_app): 
Maintainers: Paulina & Lucy

✅ Component-Based Design

    The app is divided into reusable components, each responsible for a specific feature or functionality.
    Examples include:
        ProgressContainer: Fetches and displays the user’s challenge progress.
        AvatarDisplay: Allows users to personalize their profile with avatars.
    This modular design ensures that each component can function independently, making the app easier to develop and maintain.

✅ Dynamic Data Flow

    Components communicate through props to share data and trigger updates where necessary.
    State Management: React’s useState hook handles local component state, while useEffect is used to fetch or update data dynamically (e.g., progress or avatar information).

✅ Backend Integration

    The app communicates with a backend server via REST APIs to:
        Fetch user progress.
        Update avatars and other user-specific information.
    Static assets, such as avatar images, are stored in the /public folder, ensuring quick and reliable access.

✅ Responsive UI

    The app adapts dynamically to user actions:
        When data is fetched or updated (e.g., user progress), the UI re-renders to display the latest information.
        Modals (e.g., for avatar selection) enhance the experience without disrupting navigation.
    Components like buttons and modals are reused across the app, maintaining visual consistency and reducing redundancy.

✅ User-Centric Features

    User data (e.g., avatars, authentication tokens) is stored locally using localStorage, ensuring the app is fast and responsive, even across sessions.
    Interactive components like progress bars and achievement placeholders motivate users to stay engaged and track their progress.

✅ Page Navigation

    React Router powers seamless transitions between pages. For example:
        The Welcome Page combines personalized user info (e.g., avatar, progress) with quick links to challenges, leaderboards, and more.
        Buttons navigate users to different parts of the app, such as selecting a challenge or checking progress.

Backend (The repository can be found here: https://github.com/danyelasuzy/backend_fitness_app):
Maintainer: Daniela 

🛠️ PathBuddy Backend Architecture

The PathBuddy backend is built using Node.js, Express, and MongoDB, following a modular, scalable structure to ensure efficiency and maintainability. Here’s how everything fits together:

✅ Models 📊

    Define Mongoose schemas to structure the database.
    Each model represents a key entity (e.g., User, Challenge, Achievement, Leaderboard).
    Relationships between models are managed using MongoDB references (e.g., achievements are linked to users).

✅ Controllers ⚙️

    Contain the core business logic for handling API requests.
    Each function performs actions like user registration, login, fetching progress, or creating achievements.
    Uses async/await for efficient database interactions.

✅ Routes 🚀

    Define API endpoints that connect the frontend to backend logic.
    Each major feature (Users, Challenges, Achievements, Leaderboards) has a dedicated set of routes.
    Example: The Achievement routes allow users to create achievements (/create) and fetch achievements (/user/:userId).

✅ Database Integration 🗄️

    Data is stored in MongoDB, a flexible NoSQL database.
    Mongoose ensures data validation and handles relationships between models.

✅ Assets 🖼️

    A collection of images used for challenge cards.
    Each challenge is linked to an image path stored in the database. (This approach is under review for optimisation.)

✅ Security & Authentication 🔒

    User authentication is managed with JWT (JSON Web Tokens).
    Requests requiring sensitive data (e.g., user progress) include an authorisation token for security.

✅ Seamless Frontend Integration 🔗

    The backend serves as the bridge between the React.js frontend and the MongoDB database.
    The frontend makes API calls to interact with user data, challenges, and achievements.
    Example: When a user updates their avatar, the frontend sends a request to the backend to store the change.

This modular structure keeps the backend organised, scalable, and easy to maintain, ensuring a smooth and efficient user experience! 🚀💡



