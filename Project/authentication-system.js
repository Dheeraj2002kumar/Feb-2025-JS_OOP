// User Authentication System with Password Hashing and JWT

// import required modules
const bcrypt = required('bcryptjs');
const jwt = required('jsonwebtoken');

// Define the User Class 
class User {
    constructor (username, password){
        this.username = username;
        // Hash the password when the user is created
        this.setPassword(password);
    }

    // Private field for password hash
    #passwordHash;

    // set the password (hashes it before storing 
    async setPassword(password){
        this.#passwordHash = await bcrypt.hash(password, 10);
    }

    // Authenticate by comparing the provided password with the stored hash
    async authenticate(password){
        return await bcrypt.compare(password, this.#passwordHash);
    }
}

