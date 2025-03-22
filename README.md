PlanIt - Event Management System
Project Overview
PlanIt is a React.js-based Event Management System designed to simplify event planning, organization, and user engagement. With an intuitive interface, this platform empowers event organizers to create, manage, and share events efficiently, fostering community interaction and engagement.

Key Features:
Super Admin Portal with CRUD operations for event management.
Two methods for event creation: Direct Form Entry and CSV Upload.
Explore Events Page with categorized events and detailed views.
User Authentication & Authorization for secure access.
WhatsApp Sharing for event invites, enhancing user engagement.
Event Templates for generating and sharing easy invitations.
Gallery & Profile Sections, including a Contact Us page.
Technologies Used
PlanIt leverages modern technologies to ensure a seamless user experience:

Frontend: React.js, Bootstrap, HTML, CSS, JavaScript
Libraries & Tools:
React Router DOM for navigation
ReactStrap & Bootstrap for UI components
PapaParse for CSV parsing
EmailJS for email communication
Data Storage: Lightweight, file-based storage
Project Structure
├── src/
│   ├── components/
│   ├── styles/
│   ├── assets/
│   ├── data/
│   ├── App.js
│   ├── index.js
│   ├── reportWebVitals.js
│   ├── setupTests.js
├── public/
│   ├── index.html
│   ├── favicon.ico
How to Run the Project
To run PlanIt on your local machine, follow these steps:

Clone the Repository
CopyReplit
git clone https://github.com/your-username/PlanIt.git
cd PlanIt
Install Dependencies
CopyReplit
npm install
Start the Application
CopyReplit
npm start
The app will run at http://localhost:3000/.

Features & Functionality
Home Page
Contains About Us, Login, and Register options.
Create Events Page (Super Admin Portal)
Execute CRUD operations for managing events.
Two options for event creation:
Direct Form Entry - Manual input of event details.
CSV Upload - Bulk event upload using PapaParse.
Newly added events populate the Upcoming Events Section.
Explore Events Page
Displays events categorized by theme.
Each event is represented using responsive Bootstrap Cards, with clickable elements for detail views and registration.
Event Details & Registration
Users can view event details, register, and share events via WhatsApp.
Event Invitation Templates
Users can generate shareable invitations by filling out required data in a simple form.
Gallery & Profile Section
Includes a Contact Us page and User Profile pages to manage personal information.
