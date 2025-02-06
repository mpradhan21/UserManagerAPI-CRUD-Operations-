🚀 User Management CRUD Operation using Node.js and Express.js

📝This project is a simple User Management System built using Node.js and Express.js, offering complete backend functionalities for performing CRUD (Create, Read, Update, Delete) operations on user data. It uses an in-memory data store 🗂️ to store user details temporarily.

🎯 Objective:

To develop a lightweight and efficient backend API for managing user information.

✨ Key Features:

🔹 Create User: Add a new user with attributes like name and age – POST /users.

🔹 Read Users: Fetch all users or a specific user by their ID – GET /users.

🔹 Update User: Modify existing user details by ID – PUT /users/:id.

🔹 Delete User: Remove a specific user by ID – DELETE /users/:id.

📊 Endpoints Overview:

🌐 HTTP Method   	🛣️ Endpoint  	📋 Description

  POST             /users	        ➕ Create a new user
  
  GET	             /users	        📄 Retrieve all users
  
  GET            	 /users/:id	   🔍 Retrieve a user by ID
  
  PUT	             /users/:id	   ✏️ Update a user by ID
  
  DELETE	         /users/:id	   ❌ Delete a user by ID

💻 Technology Stack:

⚙️ Backend Framework: Node.js with Express.js

🛠️ Middleware: body-parser for JSON request parsing

🗃️ Data Storage: In-memory JavaScript array (temporary storage)

🔍 Development Tool: Postman for API testing



📦 Run npm install to install dependencies

▶️ Start the server with node server.js

🌐 Access the API at http://localhost:$postnumber

🎯 Testing with Thunder Client:

Use Thunder Client (a lightweight HTTP client extension for VS Code) to test the API endpoints effortlessly!


✅ Advantages of the Project:

✔️ Easy to set up and understand for beginners.

✔️ Demonstrates essential backend development concepts like routing and request handling.

✔️ Lightweight and suitable for small projects or testing.

⚠️ Limitations:

🚫 Data Persistence: Data is lost when the server restarts as it uses an in-memory array.

🚫 Scalability: Not suitable for large-scale user data.

🚫 Security: Lacks input validation and user authentication.

💡 Enhancement Suggestions:

✅ Database Integration: Connect the API to MongoDB or MySQL for persistent storage.

✅ Input Validation: Use libraries like express-validator to validate user input.

✅ Authentication: Implement JWT for user authentication.

✅ Error Handling: Add robust error-handling mechanisms.





