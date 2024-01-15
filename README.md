<h1>BMI Calculator Project</h1>
  This project is a BMI (Body Mass Index) calculator web application built using Node.js, Express, and MongoDB. It provides a user interface for calculating BMI and maintains a history of BMI calculations.
<h2>Setup</h2>

  1) Install Node.js dependencies:
  npm install
  
  2) Create a .env file in the project root and add the following MongoDB connection string:

    MONGODB_URI=mongodb+srv://<username>:<password>@<cluster-address>/<database-name>?retryWrites=true&w=majority
    
    Replace <username>, <password>, <cluster-address>, and <database-name> with your MongoDB Atlas credentials.
  
  3) Start the application:
  npm start
  4) Access the BMI calculator at http://localhost:3000.
<h2>Features</h2>
  Calculate BMI by providing weight, height, age, gender, and units (metric or imperial). For example 1.82 m and 78 kg inputs.
  View BMI interpretation based on age, gender, and BMI value.
  Maintain a history of BMI calculations.
  Navigate between the home page and the BMI history page using the navigation bar.
<h2>Additional Information</h2>
  The BMI interpretation logic is implemented in controllers/bmiController.js.
  The MongoDB schema for storing BMI records is defined in models/BMIRecord.js.
  The web pages are created using HTML and styled with Bootstrap.
  Error handling is implemented both on the frontend and backend.
<h2>Credits</h2>
  This BMI Calculator project is developed by Batyr Raiymbek as part of the SE-2202 course.
