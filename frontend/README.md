CRM System Frontend Documentation
Table of Contents

1.   Introduction
2.   Project Structure
3.   Environment Setup
4.   Components Overview
5.   Redux Store Structure
6.   API Integration
7.   Routing
8.   Styling
9.   Testing
10.  Deployment

Introduction

This documentation outlines the structure and implementation details of the frontend for the CRM system, built using React and TypeScript. The application interacts with a backend API to manage users, contacts, and customers, providing a user-friendly interface for CRM functionalities.

Project Structure

/frontend
│
├── public/                # Public assets (index.html, favicon, etc.)
│
├── src/
│   ├── api/              # Axios API setup
│   │   └── crmApi.js     # Axios configuration
│   │
│   ├── components/       # Reusable components
│   │   ├── Navbar.js      # Navigation bar component
│   │   ├── Sidebar.js     # Sidebar component
│   │   ├── Dashboard.js    # Dashboard component
│   │   └── ...           # Other shared components
│   │
│   ├── features/         # Feature-specific logic
│   │   ├── contacts/      # Contact management features
│   │   ├── customers/     # Customer management features
│   │   ├── dashboard/     # Dashboard features
│   │   └── user/          # User authentication features
│   │
│   ├── hooks/            # Custom React hooks
│   │   └── useFetchData.js # Hook for data fetching
│   │
│   ├── layouts/          # Layout components
│   │   ├── AuthLayout.js  # Layout for authentication pages
│   │   ├── MainLayout.js  # Main layout for authenticated pages
│   │   └── ...           # Additional layouts
│   │
│   ├── pages/            # Main application pages
│   │   ├── Login.js       # Login page
│   │   ├── Register.js    # Registration page
│   │   ├── Dashboard.js    # Main dashboard
│   │   ├── Contacts.js     # Contacts management page
│   │   └── Customers.js    # Customers management page
│   │
│   ├── config/           # Configuration files
│   │   ├── store.js       # Redux store setup
│   │   └── router.js      # Router configuration
│   │
│   ├── services/         # Business logic and services
│   │   └── authService.js  # Authentication service
│   │
│   ├── styles/           # Global and component-specific styles
│   │   └── globals.css    # Global styles
│   │
│   ├── utils/            # Utility functions
│   │   ├── localStorageUtil.js # Local storage utilities
│   │   ├── authUtils.js   # Authentication utilities
│   │   └── ...           # Other utility functions
│   │
│   └── App.js            # Main application component
│
└── package.json           # Project dependencies and scripts


## OTHER FEATURES WILL BE ADDED SOON 