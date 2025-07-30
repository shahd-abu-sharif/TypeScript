# 🧠 TypeScript Generic Repository Pattern

## 🎯 Objective

Design and implement a **type-safe**, **generic** repository pattern in TypeScript to manage static in-memory data.  
This project simulates backend logic using interfaces, generics, inheritance, and async functions.

---

## 📦 What’s Included

This project includes:

- A generic repository interface with CRUD and filter operations
- A base repository class that works with any model having an `id`
- Three model-specific repositories: `User`, `Course`, and `Booking`
- Static sample data to simulate real usage
- A test script that logs the results of each operation

---

## 🧱 Technologies

- TypeScript  
- Node.js  
- In-memory storage (Array-based)

---

## 🧩 Models

Each model has a required `id` and other relevant fields.

- `User`: id, name, email  
- `Course`: id, title, description, instructorId  
- `Booking`: id, userId, courseId, date

---

## 🧠 Features

- ✅ Fetch all items  
- ✅ Fetch one item by ID  
- ✅ Create a new item  
- ✅ Update an existing item  
- ✅ Delete an item by ID  
- ✅ Filter by partial fields ( find by email or userId)

---










