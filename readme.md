# E-commerce Application

---

## Milestone 1 : Project Overview

the website will contain the following things :

         1. Authentication : login, logout, signup.
         2. Products page : Displays all products.
         3. Orders page : Shows orders of each user.
         4. Payment Gateway

## Milestone 2 : Setting up Developer environment

Frontend and Backend were set up as a task during this assignement :

         1. Frontend was set up using React app and Tailwind CSS was configured for styling.
         2. A Node.js server was set up for the backend. 
         3. Required dependencies including Cors (for cross-origin requests), ExpressJs (for building webservers and API) & 
             Mongoose (for schema-based data modeling) were installed.
         4. Nodemon was installed as a developer dependency.
         5. A login page was created as a functional component marking the first client-side user interface created for the project. 
         Tailwind CSS was used to style the page. 
         6. A structured folder hierarchy was created for the frontend and backend sides of the project making it organised.

## Milestone 3: Backend Setup and MongoDB Integration

This milestone focuses on setting up the backend of the application, organizing the codebase effectively, connecting to MongoDB for data management, and ensuring the server handles API requests efficiently with basic error handling.

         1. Setting Up the Node.js Server.
         2. Configured the server to handle API requests in index.js
         3. Added a MongoDB connection file in /config/db.js
         4. Updated .env file with database connection details.
         5. Basic error handling implemented for smoother development.
         6. Backend folder structure created.
         7. Connected application to MongoDB for database operations.

## Milestone 4: 

         1. User Model: Defined schema for consistent user data storage.
         2. Controllers: Handled user registration, login, and data fetching.
         3. File Uploads: Used Multer for uploading files like images.
         
## Milestone 5: Creating the Signup page

         1. Signup Page: Created user registration page with input fields.
         2. Validation Object: Used RegEx for validating user inputs.
         3. React-Router: Enabled seamless navigation between app pages.

## Milestone 6: User Email Verification with JWT

         1. Generate a JWT Token: Token created with user details and expiration time.
         2. Create a Verification Link: Token appended as query parameter to verification URL.
         3. Configure Nodemailer: Nodemailer set up to send verification link via email.
         4. Verify Token and Activate User: Backend route validates token and activates user account.

## Milestone 7

         Created two routes signup and login
         
         For Signup:
         
         Take the data sent by the user
         const {name, email, password} = req.body
         check if user is already present in the DB
         if Yes-> return saying user is already present, Direct Login
         
         If No->
         Hash the password (Bcrypt.js, argon2.js)
         Create a user and store the name, email, password in DB
         For Login:
         
         Take the data sent const {email, password} = req.body
         check if the user entry is present in DB also compare the password.
         
         If Yes-> create a token and send that as cookies
         If No-> return saying Signup first

## Milestone 8

         Overview: Displayed products using dummy data on the Home page.
         
         1. Created a reusable card component for products.
         2. Integrated the component with dummy product data.

## Milestone 9 

         Overview: Created a form for capturing product details.
         
         1. Designed and implemented the product entry form.
         2. Configured form to send data through a network call.

## Milestone 10

         1. Product Schema: Defined schema for product data in MongoDB.
         2. Write Endpoint: Created API endpoint to save product data.
         3. Cloudinary Integration: Configured image storage with Cloudinary.
         4. Multer Setup: Implemented file uploads with Multer middleware.

## Milestone 11

         1. GET Endpoint: Created to fetch data from the database.
         2. Data Retrieval: Fetched data directly from the MongoDB collection.
         3. Client Response: Sent retrieved data to the client in JSON format.
         4. Validation: Ensured data is properly fetched and sent without errors.

## Milestone 12

        
        
         
