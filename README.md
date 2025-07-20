## Smart Goal Planner 💰
A React-based application for managing multiple savings goals with real-time progress tracking, deadline monitoring, and comprehensive financial overview dashboard.

## 📋 Table of Contents
- Overview
- Features
- Technology Stack
- Installation & Setup
- Usage Guide
- API Endpoints
- Data Structure

## 🎯 Overview
The Smart Goal Planner is a comprehensive financial goal management tool designed for users who want to efficiently track multiple savings objectives. Built as part of a fintech solution, it provides intuitive goal creation, progress monitoring, deposit management, and intelligent deadline tracking with visual indicators for overdue and approaching deadlines.

## ✨ Features
#### 🎯 Goal Management
- Create Goals: Add new financial goals with target amounts, categories, and deadlines
- Update Goals: Modify goal details including name, target amount, category, and deadline
- Delete Goals: Remove goals that are no longer needed
- View Goals: Display all goals with comprehensive details
#### 💳 Financial Tracking
- Deposit Management: Make deposits to specific goals with real-time updates
- Progress Visualization: Track saved amounts against target amounts
- Multi-Goal Support: Manage unlimited number of savings goals simultaneously
- Category Organization: Organize goals by categories (Travel, Emergency, Electronics, etc.)
#### 📊 Smart Overview Dashboard
- Total Statistics: View total goals, total saved amount, and completed goals
- Deadline Monitoring: Track remaining days for each goal
#### Intelligent Alerts:
- 🟠 Warning: Goals with ≤30 days remaining (incomplete)
- 🔴 Overdue: Past deadline goals that aren't completed
#### Goal Status Tracking: Visual indicators for goal completion status
- ##### Real-Time Updates
- Persistent Data: All data stored and synced with JSON server
- Live Progress: Instant updates when deposits are made
- Automatic Calculations: Real-time progress and deadline calculations
## Technology Stack
- React 18 - Modern React with Hooks (useState, useEffect)
- CSS - Custom styling with responsive design
- Vite - Fast build tool and development server
- JSON Server - Mock REST API for development
- Local JSON Database - File-based data persistence
## 🚀 Installation & Setup
#### Prerequisites
- Node.js (version 16 or higher)
- npm package manager
- Step-by-Step Installation
- Clone the Repository
-bash
- git clone [your-repository-url]
- cd smart-goal-planner
- Install Dependencies
- bash
- npm install

- Install JSON Server (if not already installed globally)
- bash
- npm install -g json-server
# or install locally
npm install json-server --save-dev
- Create Database File Create a db.json file in the root directory with the sample data structure provided below.
- Start JSON Server (Terminal 1)
- bash
- json-server --watch db.json --port 3000
- Start React Development Server (Terminal 2)
- bash
- npm run dev

Access Application
Frontend: http://localhost:5173 (or your configured port)
JSON Server API: http://localhost:3000
## 💡 Usage Guide
- Creating a New Goal
- Fill the Goal Form:
- Goal Name: Descriptive name (e.g., "Travel Fund - Japan")
- Target Amount: Your savings target in KSH
- Category: Goal type (Travel, Emergency, Electronics, etc.)
- Deadline: Target completion date
- Submit: Click "Add Goal" to create and persist the goal
- Managing Existing Goals
#### Making Deposits
- Click the "Deposit" button on any goal
- Enter the deposit amount in the prompt
- Amount is automatically added to the goal's saved amount
#### Tracking Progress
- View saved amount vs target amount for each goal
- Monitor progress through the goal list display
- Check the overview dashboard for comprehensive statistics
#### Deleting Goals
- Click the "Delete" button on any goal to remove it permanently
#### Understanding the Overview Dashboard
- Statistics Display
- Total Goals: Count of all your savings goals
- Total Saved: Combined amount saved across all goals (KSH)
- Completed Goals: Number of goals that have reached their target
#### Deadline Alerts
- ##### Normal: Goals with >30 days remaining
-🟠 Warning: Goals with ≤30 days remaining (incomplete)
-🔴 Overdue: Goals past their deadline (incomplete)
## 🔌 API Endpoints
The application uses JSON Server to provide a REST API:

Method	Endpoint	Description	Request Body
GET	/goals	Fetch all goals	N/A
POST	/goals	Create new goal	Goal object
PUT	/goals/:id	Update entire goal	Updated goal object
PATCH	/goals/:id	Partial goal update	Partial goal object
DELETE	/goals/:id	Delete goal	N/A
Example API Usage
javascript
// Fetch all goals
GET http://localhost:3000/goals

// Create new goal
POST http://localhost:3000/goals
Content-Type: application/json
{
  "name": "New Car Fund",
  "targetAmount": 25000,
  "savedAmount": 0,
  "category": "Vehicle",
  "deadline": "2025-12-31",
  "createdAt": "2024-07-20T10:30:00.000Z"
}

// Update goal deposit
PUT http://localhost:3000/goals/1
Content-Type: application/json
{
  "id": "1",
  "name": "Travel Fund - Japan",
  "targetAmount": 5000,
  "savedAmount": 3500,  // Updated amount
  "category": "Travel",
  "deadline": "2025-12-31",
  "createdAt": "2024-01-15"
}
## 📊 Data Structure
Goal Object Schema
javascript
{
  "id": "string",           // Unique identifier
  "name": "string",         // Goal name/description
  "targetAmount": number,   // Target savings amount (KSH)
  "savedAmount": number,    // Current saved amount (KSH)
  "category": "string",     // Goal category
  "deadline": "string",     // ISO date string (YYYY-MM-DD)
  "createdAt": "string"     // ISO datetime string
}
Sample db.json Structure
json
{
  "goals": [
    {
      "id": "1",
      "name": "Travel Fund - Japan",
      "targetAmount": 5000,
      "savedAmount": 3200,
      "category": "Travel",
      "deadline": "2025-12-31",
      "createdAt": "2024-01-15"
    },
    {
      "id": "2",
      "name": "Emergency Fund",
      "targetAmount": 10000,
      "savedAmount": 7500,
      "category": "Emergency",
      "deadline": "2026-06-30",
      "createdAt": "2023-05-01"
    }
  ]
}
Supported Categories
Travel - Vacation and travel funds
Emergency - Emergency savings funds
Electronics - Gadgets and tech purchases
Real Estate - House down payments, property investments
Vehicle - Car purchases, maintenance funds
Education - Education and learning expenses
Shopping - General shopping and gifts
Retirement - Long-term retirement savings
Home - Home improvement and renovation

## 📄 License
This project is for Educational purposes. 

## Author
Allan Mwangi


