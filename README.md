# Rayeva AI Systems Assignment

## Module Implemented
AI Auto-Category & Tag Generator

## Objective
Automatically classify sustainable products, generate SEO tags, suggest sustainability filters, and store structured JSON output in MongoDB.

## Tech Stack
- Node.js
- Express.js
- MongoDB Atlas
- Mongoose

## Architecture Overview

The project follows clean architecture:

Routes Layer → Handles API endpoints  
Controller Layer → Contains business logic  
Service Layer → Contains AI logic (separated)  
Model Layer → Defines database schema  

AI logic is separated from business logic to maintain scalability and clean structure.

## API Endpoint

POST http://localhost:5000/api/add-product

### Request Body Example

{
  "name": "Reusable Bamboo Coffee Cup",
  "description": "Eco friendly cup made from organic bamboo fiber, plastic free and biodegradable",
  "material": "Bamboo Fiber"
}

### Features Implemented

- Structured JSON output
- Category and sub-category assignment
- SEO tag generation
- Sustainability filter suggestion
- MongoDB storage
- AI request and response logging
- Error handling
- Environment-based configuration (.env)

## Setup Instructions

1. Clone the repository
2. Run: npm install
3. Add .env file with:
   PORT=5000
   MONGO_URI=your_mongodb_connection_string
4. Run: node server.js
5. Test using Thunder Client



## Module 2: AI B2B Proposal Generator

This module generates a sustainable product proposal based on company industry and budget.

Features:
- Suggests sustainable product mix
- Allocates budget intelligently
- Provides cost breakdown
- Generates impact positioning summary
- Stores proposal in MongoDB
- Logs AI request and response



## Module 3 – Impact Reporting Generator

This module calculates sustainability impact for orders.

Features:
- Calculates plastic saved
- Estimates carbon emissions avoided
- Provides sustainability impact summary
- Stores report in MongoDB




## Module 4 – WhatsApp Support Bot (Architecture)

This module automates customer support via WhatsApp.

Features:
- Order status responses
- Return policy handling
- Refund escalation
- Conversation logging

In production, Twilio WhatsApp API would connect customer messages to the backend.