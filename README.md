# 📝 Node.js Note-Taking App

A lightweight and efficient command-line Note-Taking App built with Node.js. This project helps users easily create, read, update, and delete (CRUD) notes, all stored persistently using the local file system.

---

## 🚀 Features

- 📒 Add new notes with a title and body
- 🔍 View all saved notes
- 🗑️ Delete notes by title
- 📝 Update existing notes
- 💾 Persistent storage using `fs` module
- 🧼 Clean and user-friendly CLI interface

---

## 🛠️ Technologies Used

- **Node.js** – Server-side JavaScript runtime
- **File System (`fs`)** – For reading/writing local data
- **Yargs** – To handle CLI arguments and commands

---

## 📂 Project Structure

note-taking-app/
│
├── app.js # Entry point
├── notes.js # Logic for handling notes
├── package.json # Project metadata and scripts
└── notes.json # Storage file for notes (auto-generated)

## 📦 Installation

1. Clone the repository:
   bash
   git clone https://github.com/Ajeet-kumar-07/note-taking-app.git
   cd note-taking-app

## Install Dependencies 
npm install 


## ▶️ Usage
    Add a Note 
    node app.js add --title="Note Title" --body="Note Body"

## List All Notes 
    node app.js list 

## Read a Note 
    node app.js read --title = "Note Title" 

## Delete a Note 
node app.js remove --title = "Note Titlle"


## 📚 Key Concepts Learned
Building CLI apps using Node.js

CRUD operations using the local filesystem

Modular code structure with custom utility files

Using yargs for argument parsing

Data persistence using JSON file manipulation

