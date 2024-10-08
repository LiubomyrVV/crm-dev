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
│   │   └── crmApi.ts     # Axios configuration
│   │
│   ├── components/       # Reusable components
│   │   ├── Navbar.tsx     # Navigation bar component
│   │   ├── Sidebar.tsx    # Sidebar component
│   │   ├── Dashboard.tsx   # Dashboard component
│   │   └── ...           # Other shared components
│   │
│   ├── features/         # Feature-specific logic
│   │   ├── contacts/      # Contact management features
│   │   ├── customers/     # Customer management features
│   │   ├── dashboard/     # Dashboard features
│   │   └── user/          # User authentication features
│   │
│   ├── hooks/            # Custom React hooks
│   │   └── useFetchData.ts # Hook for data fetching
│   │
│   ├── layouts/          # Layout components
│   │   ├── AuthLayout.tsx # Layout for authentication pages
│   │   ├── MainLayout.tsx # Main layout for authenticated pages
│   │   └── ...           # Additional layouts
│   │
│   ├── pages/            # Main application pages
│   │   ├── Login.tsx      # Login page
│   │   ├── Register.tsx   # Registration page
│   │   ├── Dashboard.tsx   # Main dashboard
│   │   ├── Contacts.tsx    # Contacts management page
│   │   └── Customers.tsx   # Customers management page
│   │
│   ├── router/           # Application routing
│   │   └── index.tsx      # Router configuration
│   │
│   ├── services/         # Business logic and services
│   │   └── authService.ts  # Authentication service
│   │
│   ├── store/            # Redux store configuration
│   │   ├── index.ts       # Store setup
│   │   └── slices/        # Redux slices
│   │
│   ├── styles/           # Global and component-specific styles
│   │   └── globals.css    # Global styles
│   │
│   ├── utils/            # Utility functions
│   │   ├── localStorageUtil.ts # Local storage utilities
│   │   ├── authUtils.ts   # Authentication utilities
│   │   └── ...           # Other utility functions
│   │
│   └── App.tsx           # Main application component
│
└── package.json           # Project dependencies and scripts

## OTHER FEATURES WILL BE ADDED SOON 