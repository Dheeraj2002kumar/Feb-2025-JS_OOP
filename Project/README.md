
---

# 🛡️ **User Authentication System**

This is a simple **User Authentication System** built using **JavaScript**, **OOP (Object-Oriented Programming)** principles, and libraries like **bcryptjs** for password hashing and **jsonwebtoken (JWT)** for token generation. The system supports user registration, login, and token-based authentication.

## ⚙️ **Features**

- 🔐 **User Registration**: Register a new user with a username and password.
- 🔑 **Password Hashing**: Passwords are securely hashed using **bcryptjs** before being stored in memory.
- ✅ **User Authentication**: Log in by verifying the username and password.
- 🪙 **JWT Token Generation**: Upon successful login, a **JWT token** is generated for secure access.
- 🔒 **Token Verification**: Validates the JWT token to ensure the user is authenticated.
- 💾 **In-memory Data Storage**: User data is stored temporarily in-memory.

## 📝 **How It Works**

This system consists of three core parts:

1. **User Class**:
   - Responsible for creating users and handling their password security.
   - Passwords are hashed using **bcryptjs** when a user is created.
   - It includes an `authenticate` method to verify user login credentials by comparing the password with the hashed one.

2. **AuthSystem Class**:
   - Manages user registration and login.
   - It uses the **User** class for user data management.
   - After a successful login, it generates a **JWT token** that can be used for future authentication.

3. **JWT (JSON Web Token)**:
   - Used for securely transmitting information between the client and server.
   - After successful login, a JWT token is generated with the user’s **username** and **secret key**.

---


## 🛠️ **Project Structure**

Here’s a brief overview of the file structure:

```
user-authentication-system/
│
├── authentication-system.js        # Main file that runs the authentication system
├── User.js                         # Defines the User class for password management & authentication
├── AuthSystem.js                   # Manages user registration, login, and token handling
├── package.json                    # Project metadata and dependencies
├── node_modules/                   # Folder containing all installed dependencies
└── README.md                       # Documentation of the project (this file)
```

---
