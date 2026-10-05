🛒 ShopKart — E-Commerce Website
ShopKart is a modern E-Commerce Website built with React.js and Vite.
The project is designed to provide a simple and user-friendly online shopping experience.
Users can browse products, search and filter products, sort products, add products to a shopping cart, change quantities, remove products, and view the total cart amount. The project also includes a basic login and registration interface using browser Local Storage.
Project status: Frontend development is in progress. Some advanced features such as backend, database, real payment integration, order tracking, and admin management are planned for future development.

📌 Table of Contents

- Project Overview
- Main Features
- Technologies Used
- Project Structure
- How the Application Works
- Installation and Setup
- Available Pages
- Cart System
- Login and Registration
- Data Storage
- Important Notes
- Troubleshooting
- Future Enhancements
- Project Purpose
- Author

📖 Project Overview

ShopKart is a frontend E-Commerce application created to demonstrate how a modern online shopping website can be developed using React.

The application provides:

1. A home page with navigation and featured products.
2. A product listing page.
3. Product search and filtering.
4. Product sorting.
5. Add-to-cart functionality.
6. A shopping cart with quantity management.
7. Basic login and registration interfaces.
8. Browser Local Storage for maintaining cart and user information.

The project is structured so that a backend and database can be added later.
✨ Main Features
🏠 Home Page
The home page provides:
- ShopKart branding
- Navigation bar
- Search box
- Product/category sections
- Featured products
- Add to Cart buttons
- Cart navigation
- Login/Register interface

🔍 Product Search
Users can search for products by entering a product name.
Example:
Wireless Headphones
The search can be used to find matching products on the Products page.

📂 Product Categories
Products are organized into categories such as:
- Electronics
- Shoes
- Fashion
- Gaming
- Beauty
- Home

🔃 Product Sorting
Products can be sorted according to:
- Price: Low to High
- Price: High to Low
- Rating

⭐ Product Ratings
Products display rating information to help users compare products.

🛒 Shopping Cart
Users can:
- Add products to the cart
- Increase product quantity
- Decrease product quantity
- Remove products
- View product prices
- View the total amount
- Continue shopping
The quantity cannot be reduced below 1.

👤 Login
The project includes a login interface where a user can enter:
- Email
- Password
The current frontend version uses browser Local Storage for the basic user login flow.

📝 Registration
The registration interface includes fields such as:
- Full Name
- Email
- Mobile Number
- Password
- Confirm Password
The current frontend version stores basic registered-user information in browser Local 
Storage.

🛠️ Technologies Used

Technology	Purpose
React.js	Building the user interface
Vite	Development server and project build tool
JavaScript	Application logic
HTML5	Page structure
CSS3	Styling and responsive design
React Router	Navigation between pages
Local Storage	Storing cart and basic user data


📁 Project Structure
frontend/
│
├── public/
│   ├── favicon.svg
│   └── icons.svg
│
├── src/
│   ├── assets/
│   │   ├── hero.png
│   │   ├── react.svg
│   │   └── vite.svg
│   │
│   ├── App.jsx
│   ├── App.css
│   ├── Products.jsx
│   ├── Products.css
│   ├── Cart.jsx
│   ├── Cart.css
│   ├── main.jsx
│   └── index.css
│
├── .gitignore
├── eslint.config.js
├── index.html
├── package.json
├── package-lock.json
├── README.md
└── vite.config.js

Important folders
src/
Contains the main React application code.
public/
Contains public/static files used by the application.
src/assets/
Contains project assets such as images.

🔄 How the Application Works
The basic shopping flow is:
             ┌──────────────┐
             │  Home Page   │
             └──────┬───────┘
                    │
                    ▼
             ┌──────────────┐
             │   Products   │
             └──────┬───────┘
                    │
          ┌─────────┼─────────┐
          ▼         ▼         ▼
       Search     Filter    Sort
          │         │         │
          └─────────┼─────────┘
                    ▼
             ┌──────────────┐
             │ Add to Cart  │
             └──────┬───────┘
                    │
                    ▼
             ┌──────────────┐
             │     Cart     │
             └──────┬───────┘
                    │
             ┌──────┴──────┐
             ▼             ▼
       Change Quantity   Remove
             │
             ▼
        Order Summary

🌐 Available Pages
Home
URL:
/
The Home page is the main landing page of ShopKart.
Products
URL:
/products
The Products page displays products with search, category filtering, and sorting.
Cart
URL:
/cart
The Cart page displays products added by the user and provides quantity controls and total calculation.

🛒 Cart System
The cart is stored in the browser using Local Storage.
The application uses a Local Storage key:
cart
When a product is added, it is saved in the browser.

Example structure:
[
  {
    "id": 1,
    "name": "Wireless Headphones",
    "price": 2499,
    "quantity": 1
  }
]

The actual stored object can contain additional product information such as category, rating, and image.

Cart Operations
Add Product
Product → Add to Cart → Local Storage
Increase Quantity
Cart → + → Quantity increases
Decrease Quantity
Cart → - → Quantity decreases
The quantity remains at a minimum of 1.
Remove Product
Cart → Remove → Product removed

🔐 Login and Registration

The current frontend version provides a basic login and registration system.
Registration Flow
Register
   ↓
Enter User Details
   ↓
Validate Information
   ↓
Save Basic User Data
   ↓
Local Storage
Login Flow
Login
   ↓
Enter Email & Password
   ↓
Check Stored User
   ↓
Login Interface
Security note: This is a frontend demonstration. Local Storage authentication should not be considered secure authentication for a real production application.


💾 Data Storage

The current project uses Browser Local Storage for frontend-only data.
Currently used for:
cart
user
Local Storage allows data to remain available after refreshing the page in the same browser.
Important
Local Storage is not a replacement for a real database.
For a production E-Commerce application, the project should use a backend with proper authentication and a database.

🚀 Installation and Setup

Requirements
Before running the project, install:
- Node.js
- npm
- A modern web browser
- VS Code or another code editor (optional)

Step 1 — Open the project
Open the project folder:
C:\E-Commerce-Website\frontend

Step 2 — Open Terminal
Open PowerShell or the VS Code terminal inside the frontend folder.
You should see:
PS C:\E-Commerce-Website\frontend>

Step 3 — Install dependencies
Run:
npm install
This installs the packages listed in package.json.

Step 4 — Start the development server
Run:
npm run dev
You should see something similar to:
VITE v8.3.2 ready

➜ Local: http://localhost:5173/

Step 5 — Open the website
Open:
http://localhost:5173/
in your browser.

⛔ How to Stop the Project

When the Vite server is running, press:
Ctrl + C
If PowerShell asks:
Terminate batch job (Y/N)?
type:
Y
and press Enter.
🔧 Useful Commands
Install dependencies
npm install
Start development server
npm run dev
Build the project
npm run build
Preview the production build
npm run preview
Check the installed Node.js version
node --version
Check the npm version
npm --version

⚠️ Important Notes

node_modules
The node_modules folder is normally not uploaded to GitHub.
It can be recreated by running:
npm install
after downloading/cloning the project.
Environment Variables
If environment variables are added in the future, do not upload passwords, API keys, database passwords, or other private credentials to GitHub.
Current Project Type
The current project is primarily a frontend React application.
Backend and database integration are planned enhancements.

🐛 Troubleshooting

Problem: npm is not recognized
Make sure Node.js is installed.
Then close and reopen PowerShell.
Check:
node --version
and:
npm --version
Problem: git is not recognized
Git is not required to run the React project.
Git is only needed if you want to use Git commands to manage/upload the project.
The project can also be uploaded to GitHub through the GitHub website.
Problem: Port 5173 is already in use
Stop the existing Vite server using:
Ctrl + C
Then run:
npm run dev
Problem: Website is blank
Check the terminal for errors.
Also open the browser developer tools:
F12 → Console
Look for red error messages.

🔮 Future Enhancements

The following features can be added in future versions:
👤 User Features
- User profile
- Logout
- Forgot password
- Address management
- User order history
- Order tracking
- Notifications
❤️ Shopping Features
- Fully functional wishlist
- Product details page
- Product reviews
- Customer ratings
- Coupons
- Better product filtering
- Product availability/inventory
💳 Checkout
- Checkout page
- Delivery address
- Payment method selection
- Online payment integration
- Order confirmation
- Invoice generation

🗄️ Backend and Database

A backend can be added using technologies such as:
Backend API
     ↓
Database
     ↓
Users
Products
Categories
Cart
Wishlist
Orders
Order Items
Payments
Reviews
Addresses
Coupons
Inventory

🛠️ Admin Panel

A future Admin Dashboard can provide:
- Admin login
- Dashboard
- User management
- Product management
- Category management
- Order management
- Inventory management
- Payment management
- Review management
- Coupon management

📊 Planned Database Structure

For the future backend version, the application can use tables such as:
Users
Products
Categories
Cart
Wishlist
Orders
Order_Items
Payments
Reviews
Addresses
Coupons
Inventory
This will allow ShopKart to move from a frontend demonstration to a complete full-stack E-Commerce application.

🎯 Project Purpose

The main purpose of ShopKart is to demonstrate:
- React component development
- Frontend routing
- Product listing
- Search and filtering
- Sorting
- Shopping cart management
- Local Storage
- User interface design
- E-Commerce application structure
The project can also be used as an academic/project demonstration.

📚 Learning Outcomes

By working on this project, the developer can learn:
- How React applications are structured
- How components communicate with each other
- How React Router works
- How state is managed using React hooks
- How browser Local Storage works
- How to create product filtering
- How to create a shopping cart
- How to build reusable UI components
- How to organize a frontend project
- How to prepare a project for GitHub

👨‍💻 Author

ShopKart — E-Commerce Website
Developed as an academic/project application using:
React.js + Vite + JavaScript + HTML5 + CSS3

📄 License

This project is intended for educational and academic purposes.
If the project is later distributed publicly, an appropriate open-source license can be added to the repository.

⭐ Project Status

Frontend
████████████████████░░░░░░  In Progress

Backend
░░░░░░░░░░░░░░░░░░░░░░░░░░  Planned

Database
░░░░░░░░░░░░░░░░░░░░░░░░░░  Planned

Admin Panel
░░░░░░░░░░░░░░░░░░░░░░░░░░  Planned
ShopKart is continuously being improved with additional E-Commerce features.
