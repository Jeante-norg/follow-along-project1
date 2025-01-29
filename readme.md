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

## Milestone 4

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

         1. Fetched products from the backend with axios using a get request.
         2. useEffect() is used to load the products.
         3. Used the card component to display the product with its details.

## Milestone 13

         1.  Backend (PUT Route)
         Purpose: Handle the update request for the data.
         Functionality:
         A PUT route is created to allow updates to data in the backend.
         The route expects the updated data in the request body, except for images.
         Upon a successful update, the backend returns a confirmation or the updated data.

         2. Frontend (Page for Auto Filling)
         Purpose: Automatically populate the data for the user to edit.
         Functionality:
         Fetch data from the backend using a GET request using the item's unique ID.
         Populate the input fields with the fetched data, excluding image fields.
         Allow the user to update values in the form and submit the changes.
         Upon form submission, the updated data is sent to the backend using the PUT request.

## Milestone 14

         1. delete Route: in BackEnd :
         A delete route was created in the backend to handle the deletion of products from the database.
         The route accepts the product ID as a parameter and deletes the corresponding product.
         Proper error handling was implemented to ensure the product is deleted successfully or an appropriate error message is returned if the product is not found.

         2. delete Button: in FrontEnd :
         A "Delete" button was added on the product detail or list page to trigger the deletion process.
         The button is associated with a click event handler that sends a request to the backend DELETE route using the product's ID.

         3. UI Update After Deletion:
         After a successful deletion, the UI is updated to reflect the changes, such as removing the product from the displayed list.

## Milestone 15

         1. Navbar Component:
         Home: A link to the homepage of the website.
         My Products: A link to the page listing the user's products.
         Add Product: A link to the page where users can add new products.
         Cart: A link to the user's shopping cart page.

         2. Responsive Navbar:
         The navbar has been made responsive to all screen sizes, ensuring it works seamlessly across mobile, tablet, and desktop devices.
         The layout adapts based on screen width, with a hamburger menu appearing on smaller screens.

## Milestone 16

         1. New Products Page:
         A new page has been created to display the products details when clicked on it.
         Each product is displayed with essential details including Product Name, price, description and category.
         The data for each product is rendered in a loop using .map() to ensure scalability, allowing the addition of more products in the future without changing the component structure.

## Milestone 17

        1. Cart Schema:
        Defines the structure of the cart in the database, including the items and user details.

        2. Cart Routes:
        /get-user-cart-data: Fetches the current user's cart details.

        3. Cart Controller:
        GetProductsForUser: Handles fetching the cart data for the authenticated user.
        addToCart: Handles adding products to the user's cart, ensuring the item is available and the quantity is updated accordingly.

## Milestone 18

## Milestone 19

        1. Cart UI:
        A user interface displaying the cart items.
        Allows users to view cart contents.

        2. Fetching Cart Details:
        Retrieves the current cart details for the user.
        Displays relevant information like item names, quantities and prices.

## Milestone 20

        1. Added UI for Profile Route:
        Implemented a user-friendly interface to display user profile information.
        Designed the profile page to show essential details such as username, email, and avatar.

        2. Created Route for User Data:
        Developed a backend route to fetch and serve user data for the profile page.
        Ensured proper handling of user data retrieval, making it dynamic and ready for display.

## Milestone 21

        Created Page for Address:

        The form allows users to input the following fields:
        City
        Country
        Address Line 1
        Address Line 2
        ZipCode
        Address Type (Home, Work, Billing)

## Milestone 22

        1. Create route and display address:
        Created a route (/add-address) for users to add a new address.
        After filling in address details, users are redirected back to the profile page.
        Display the added address on the profile page.
        Added an option for users to delete addresses from their profile.

## Milestone 23

        1. Added a "Place Order" button in the cart to navigate to the "Select Address" page.
        2. Created a "Select Address" page to display and select delivery addresses.
        3. Built a backend endpoint to fetch user addresses.
        4. Defined a Mongoose schema to store order details.
        5. Implemented functionality to save orders with a "Pending" status.
