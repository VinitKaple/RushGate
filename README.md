# ⚡ RushGate — Real-Time Flash Sale System

## 🚀 Hackathon Project

RushGate is a real-time flash sale infrastructure designed to simulate high-demand product drops similar to Amazon, Flipkart, and sneaker launch platforms.

The system demonstrates how platforms handle thousands of users competing for limited stock while maintaining fairness, performance, and stability.

RushGate implements virtual queues, timed buy windows, stock protection, and real-time activity updates to recreate a realistic flash sale experience.

---

# 📌 Problem Statement

During major product launches (PS5, GPUs, sneakers, etc.), thousands of users attempt to purchase the same item simultaneously.

Without proper infrastructure, platforms face:

- Server crashes
- Overselling of products
- Bots gaining unfair advantages
- Poor user experience

RushGate solves these challenges using a queue-based purchase system.

---

# 🧠 Solution Overview

RushGate introduces a virtual waiting room and controlled purchase windows that ensure fairness and stability during flash sales.

### Core Idea

1. All users enter a virtual queue
2. The system selects users in order
3. Selected users receive a limited purchase window
4. If the user does not buy in time, the slot moves to the next user
5. When stock finishes, the system shows SOLD OUT

---

# ⚡ Key Features

## ⏳ Countdown-Based Product Drops
Each product drop begins with a synchronized countdown timer that prepares users for the sale.

## 👥 Virtual Waiting Room
Instead of allowing everyone to buy simultaneously, users are placed in a controlled queue.

## 🛒 Timed Buy Window
When a user's turn arrives, they receive a short buy window (for example 15 seconds).

If the purchase is not completed in time:

Slot Expired → Next User Activated

## 🔒 Stock Protection
Stock is allocated progressively to prevent overselling.

## ❌ Instant Sold-Out Handling
If stock runs out, users instantly receive a Sold Out notification.

## 📊 Live System Activity
The platform tracks:

- Active users
- Queue length
- Successful purchases
- Remaining stock

## 🧪 Traffic Simulation
RushGate includes tools to simulate heavy traffic during demos.

Example:

Simulate 100 users  
Simulate 500 users  
Simulate 1000 users

---

# 🏗️ System Architecture

React Frontend (Vite)
        │
        │ REST API Requests
        ▼
Node.js + Express Backend
        │
        │ Queue Manager
        ▼
Flash Sale Engine
        │
        │ Stock + Purchase Logic
        ▼
In-Memory Data Store

---

# 🧰 Tech Stack

## Frontend
- React
- Vite
- Modern JavaScript
- Custom Hooks

## Backend
- Node.js
- Express.js
- REST APIs

## Development Tools
- Nodemon
- GitHub
- npm

---

# 📂 Project Structure

RushGate
│
├── client
│   ├── src
│   │   ├── components
│   │   ├── hooks
│   │   ├── pages
│   │   ├── utils
│   │   └── App.jsx
│   │
│   └── vite.config.js
│
├── server
│   ├── controllers
│   ├── routes
│   ├── services
│   └── index.js
│
└── README.md

---

# 🚀 Installation Guide

## 1️⃣ Clone the Repository

git clone https://github.com/VinitKaple/RushGate.git  
cd RushGate

---

# ▶️ Start Backend

cd server  
npm install  
npm run dev  

Backend runs on:

http://localhost:3001

---

# ▶️ Start Frontend

Open another terminal:

cd client  
npm install  
npm run dev  

Frontend runs on:

http://localhost:5173

---

# 🛒 Example Product Drops

RushGate simulates multiple flash-sale scenarios:

- PS5 Drop
- iPhone Drop
- MacBook Drop
- RTX GPU Drop

Each drop demonstrates queue behavior and stock exhaustion.

---

# 📊 Live Metrics

The dashboard tracks important flash sale metrics.

Active Users → Current users participating  
Queue Length → Users waiting in queue  
Orders Secured → Successful purchases  
Remaining Stock → Products left

---

# 🧪 Demo Flow

Countdown Starts  
        ↓  
Sale Opens  
        ↓  
Users Join Queue  
        ↓  
Queue Promotes Users  
        ↓  
Buy Window Opens  
        ↓  
Purchase Successful  
        ↓  
Stock Updates  
        ↓  
Sold Out

---

# 🔮 Future Improvements

RushGate can be expanded with:

Real-Time WebSockets  
Replace polling with Socket.IO for instant updates.

Redis Queue System  
Use Redis for distributed queue management.

Anti-Bot Protection  
Add rate limiting and bot detection.

Payment Integration  
Integrate Razorpay or Stripe.

Horizontal Scaling  
Allow multiple server instances to handle traffic spikes.

---

# 🏆 Hackathon Impact

RushGate demonstrates key engineering concepts:

- traffic spike handling
- queue-based fairness
- limited resource allocation
- high-demand product launches

These techniques are used by companies like:

Amazon  
Flipkart  
Nike  
Shopify

---

# 👨‍💻 Author
Team Dominators

