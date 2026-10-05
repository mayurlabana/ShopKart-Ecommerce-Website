import "./App.css";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";

function App() {

  const navigate = useNavigate();

  // =====================================================
  // SEARCH
  // =====================================================

  const [searchText, setSearchText] = useState("");

  const handleSearch = () => {

    const searchValue = searchText.trim();

    if (searchValue === "") {
      navigate("/products");
      return;
    }

    navigate(
      `/products?search=${encodeURIComponent(searchValue)}`
    );
  };


  // =====================================================
  // LOGIN
  // =====================================================

  const [showLogin, setShowLogin] = useState(false);

  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");


  const handleLogin = (e) => {

    e.preventDefault();

    if (!loginEmail || !loginPassword) {

      alert("Please enter email and password.");

      return;
    }

    const savedUser =
      JSON.parse(localStorage.getItem("user"));

    if (!savedUser) {

      alert(
        "No account found. Please register first."
      );

      return;
    }

    if (
      loginEmail !== savedUser.email ||
      loginPassword !== savedUser.password
    ) {

      alert(
        "Incorrect email or password."
      );

      return;
    }

    alert(
      `Welcome back, ${savedUser.name}!`
    );

    setShowLogin(false);

    setLoginEmail("");
    setLoginPassword("");
  };


  // =====================================================
  // REGISTER
  // =====================================================

  const [showRegister, setShowRegister] =
    useState(false);

  const [registerName, setRegisterName] =
    useState("");

  const [registerEmail, setRegisterEmail] =
    useState("");

  const [registerMobile, setRegisterMobile] =
    useState("");

  const [registerPassword, setRegisterPassword] =
    useState("");

  const [confirmPassword, setConfirmPassword] =
    useState("");


  const handleRegister = (e) => {

    e.preventDefault();


    // Check all fields

    if (
      !registerName ||
      !registerEmail ||
      !registerMobile ||
      !registerPassword ||
      !confirmPassword
    ) {

      alert(
        "Please fill all the fields."
      );

      return;
    }


    // Check password

    if (
      registerPassword !==
      confirmPassword
    ) {

      alert(
        "Passwords do not match."
      );

      return;
    }


    // Check mobile

    if (
      registerMobile.length !== 10
    ) {

      alert(
        "Please enter a valid 10-digit mobile number."
      );

      return;
    }


    // Save user

    const user = {

      name: registerName,

      email: registerEmail,

      mobile: registerMobile,

      password: registerPassword,

    };


    localStorage.setItem(
      "user",
      JSON.stringify(user)
    );


    alert(
      "Registration successful! Please login."
    );


    // Close register

    setShowRegister(false);


    // Open login

    setShowLogin(true);


    // Clear registration fields

    setRegisterName("");
    setRegisterEmail("");
    setRegisterMobile("");
    setRegisterPassword("");
    setConfirmPassword("");
  };


  // =====================================================
  // ADD TO CART
  // =====================================================

  const addToCart = (product) => {

    const existingCart =
      JSON.parse(
        localStorage.getItem("cart")
      ) || [];


    const existingProduct =
      existingCart.find(
        (item) =>
          item.id === product.id
      );


    let updatedCart;


    if (existingProduct) {

      updatedCart =
        existingCart.map(
          (item) =>
            item.id === product.id
              ? {
                  ...item,
                  quantity:
                    item.quantity + 1,
                }
              : item
        );

    } else {

      updatedCart = [

        ...existingCart,

        {
          ...product,
          quantity: 1,
        },

      ];

    }


    localStorage.setItem(
      "cart",
      JSON.stringify(updatedCart)
    );


    alert(
      `${product.name} added to cart!`
    );
  };


  // =====================================================
  // CATEGORIES
  // =====================================================

  const categories = [

    {
      icon: "📱",
      name: "Electronics",
      description:
        "Latest gadgets & devices",
    },

    {
      icon: "👕",
      name: "Fashion",
      description:
        "Trendy clothes & styles",
    },

    {
      icon: "👟",
      name: "Shoes",
      description:
        "Comfortable & stylish",
    },

    {
      icon: "🏠",
      name: "Home",
      description:
        "Everything for your home",
    },

    {
      icon: "💄",
      name: "Beauty",
      description:
        "Beauty & personal care",
    },

    {
      icon: "🎮",
      name: "Gaming",
      description:
        "Games & accessories",
    },

  ];


  // =====================================================
  // PRODUCTS
  // =====================================================

  const products = [

    {
      id: 1,
      name: "Wireless Headphones",
      category: "Electronics",
      price: 2499,
      oldPrice: "₹3,999",
      rating: "4.8",
      image:
        "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=800&q=80",
    },

    {
      id: 2,
      name: "Smart Watch",
      category: "Electronics",
      price: 3999,
      oldPrice: "₹5,999",
      rating: "4.7",
      image:
        "https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=800&q=80",
    },

    {
      id: 3,
      name: "Running Shoes",
      category: "Shoes",
      price: 2999,
      oldPrice: "₹4,499",
      rating: "4.9",
      image:
        "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=800&q=80",
    },

    {
      id: 4,
      name: "Premium Backpack",
      category: "Fashion",
      price: 1799,
      oldPrice: "₹2,499",
      rating: "4.6",
      image:
        "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&w=800&q=80",
    },

  ];


  // =====================================================
  // HOME PAGE
  // =====================================================

  return (

    <div className="app">


      {/* =================================================
          NAVBAR
      ================================================= */}

      <nav className="navbar">


        {/* LOGO */}

        <div className="logo">
          🛍️ <span>ShopKart</span>
        </div>


        {/* NAVIGATION */}

        <div className="nav-links">

          <a href="#home">
            Home
          </a>

          <a href="#categories">
            Categories
          </a>

          <Link to="/products">
            Products
          </Link>

          <a href="#offers">
            Offers
          </a>

        </div>


        {/* NAV ACTIONS */}

        <div className="nav-actions">


          {/* SEARCH */}

          <div className="search-box">

            <input
              type="text"
              placeholder="Search products..."
              value={searchText}
              onChange={(e) =>
                setSearchText(
                  e.target.value
                )
              }
              onKeyDown={(e) => {

                if (e.key === "Enter") {
                  handleSearch();
                }

              }}
            />

            <button
              onClick={handleSearch}
              title="Search"
            >
              🔍
            </button>

          </div>


          {/* WISHLIST */}

          <button
            className="icon-btn"
            title="Wishlist"
            onClick={() =>
              alert(
                "Wishlist feature will be added soon!"
              )
            }
          >
            ♡
          </button>


          {/* CART */}

          <Link
            to="/cart"
            className="icon-btn cart-link"
            title="Shopping Cart"
          >
            🛒
          </Link>


          {/* LOGIN */}

          <button
            className="login-btn"
            onClick={() =>
              setShowLogin(true)
            }
          >
            Login
          </button>

        </div>

      </nav>



      {/* =================================================
          HERO
      ================================================= */}

      <section
        className="hero"
        id="home"
      >

        <div className="hero-content">

          <p className="small-title">
            WELCOME TO SHOPKART
          </p>

          <h1>

            Everything You Need,

            <br />

            <span>
              All in One Place
            </span>

          </h1>

          <p className="hero-description">

            Discover amazing products at the best
            prices. Shop easily, safely and quickly.

          </p>


          <div className="hero-buttons">

            <Link
              to="/products"
              className="shop-btn"
            >
              Shop Now →
            </Link>

            <a
              href="#categories"
              className="explore-btn"
            >
              Explore Categories
            </a>

          </div>


          <div className="hero-features">

            <div>

              <strong>
                10K+
              </strong>

              <span>
                Products
              </span>

            </div>


            <div>

              <strong>
                50K+
              </strong>

              <span>
                Happy Customers
              </span>

            </div>


            <div>

              <strong>
                4.8/5
              </strong>

              <span>
                Customer Rating
              </span>

            </div>

          </div>

        </div>


        <div className="hero-image">

          <div className="hero-circle"></div>

          <img
            src="https://images.unsplash.com/photo-1607082349566-187342175e2f?auto=format&fit=crop&w=1000&q=80"
            alt="Shopping"
          />

        </div>

      </section>



      {/* =================================================
          CATEGORIES
      ================================================= */}

      <section
        className="categories"
        id="categories"
      >

        <div className="section-heading">

          <p>
            EXPLORE
          </p>

          <h2>
            Shop by Category
          </h2>

          <span>
            Explore our popular categories
          </span>

        </div>


        <div className="category-container">

          {categories.map(
            (category, index) => (

              <div
                className="category-card"
                key={index}
              >

                <div className="category-icon">
                  {category.icon}
                </div>

                <h3>
                  {category.name}
                </h3>

                <p>
                  {category.description}
                </p>

                <Link to="/products">

                  <button>
                    Explore →
                  </button>

                </Link>

              </div>

            )
          )}

        </div>

      </section>



      {/* =================================================
          FEATURED PRODUCTS
      ================================================= */}

      <section
        className="products"
        id="products"
      >

        <div className="section-heading">

          <p>
            OUR COLLECTION
          </p>

          <h2>
            Featured Products
          </h2>

          <span>
            Popular products selected just for you
          </span>

        </div>


        <div className="product-container">

          {products.map(
            (product) => (

              <div
                className="product-card"
                key={product.id}
              >

                <div className="product-image">

                  <img
                    src={product.image}
                    alt={product.name}
                  />

                  <button
                    className="wishlist"
                  >
                    ♡
                  </button>

                  <span className="discount">
                    SALE
                  </span>

                </div>


                <div className="product-info">

                  <div className="rating">
                    ⭐ {product.rating}
                  </div>

                  <h3>
                    {product.name}
                  </h3>


                  <div className="price">

                    <strong>
                      ₹
                      {product.price.toLocaleString(
                        "en-IN"
                      )}
                    </strong>

                    <del>
                      {product.oldPrice}
                    </del>

                  </div>


                  <button
                    className="cart-btn"
                    onClick={() =>
                      addToCart(product)
                    }
                  >
                    🛒 Add to Cart
                  </button>

                </div>

              </div>

            )
          )}

        </div>


        <Link
          to="/products"
          className="view-products"
        >
          View All Products →
        </Link>

      </section>



      {/* =================================================
          OFFER
      ================================================= */}

      <section
        className="offer-section"
        id="offers"
      >

        <div className="offer-content">

          <p>
            LIMITED TIME OFFER
          </p>

          <h2>

            Get Up To

            <span>
              50% OFF
            </span>

          </h2>

          <p className="offer-text">

            Grab amazing deals on selected products.
            Don't miss this opportunity!

          </p>

          <Link
            to="/products"
            className="offer-btn"
          >
            Shop Offers →
          </Link>

        </div>

      </section>



      {/* =================================================
          FOOTER
      ================================================= */}

      <footer className="footer">


        <div className="footer-column">

          <h2>
            🛍️ ShopKart
          </h2>

          <p>
            Your one-stop destination for
            everything you love.
          </p>

        </div>


        <div className="footer-column">

          <h3>
            Quick Links
          </h3>

          <a href="#home">
            Home
          </a>

          <a href="#categories">
            Categories
          </a>

          <a href="#products">
            Products
          </a>

          <a href="#offers">
            Offers
          </a>

        </div>


        <div className="footer-column">

          <h3>
            Customer Service
          </h3>

          <a href="#">
            Contact Us
          </a>

          <a href="#">
            Shipping
          </a>

          <a href="#">
            Returns
          </a>

          <a href="#">
            FAQ
          </a>

        </div>


        <div className="footer-column">

          <h3>
            Follow Us
          </h3>

          <div className="social-icons">

            <span>📘</span>
            <span>📸</span>
            <span>🐦</span>
            <span>▶️</span>

          </div>

        </div>

      </footer>


      <div className="copyright">

        © 2026 ShopKart. All Rights Reserved.

      </div>



      {/* =================================================
          LOGIN POPUP
      ================================================= */}

      {showLogin && (

        <div
          style={{
            position: "fixed",
            inset: 0,
            background:
              "rgba(0,0,0,0.65)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            zIndex: 9999,
          }}
        >

          <div
            style={{
              width: "400px",
              maxWidth: "90%",
              background: "#fff",
              borderRadius: "20px",
              padding: "35px",
              position: "relative",
              boxShadow:
                "0 20px 60px rgba(0,0,0,0.3)",
            }}
          >


            {/* CLOSE */}

            <button
              onClick={() =>
                setShowLogin(false)
              }
              style={{
                position: "absolute",
                top: "15px",
                right: "18px",
                border: "none",
                background: "none",
                fontSize: "25px",
                cursor: "pointer",
              }}
            >
              ✕
            </button>


            <div
              style={{
                textAlign: "center",
              }}
            >

              <div
                style={{
                  fontSize: "45px",
                  marginBottom: "10px",
                }}
              >
                🛍️
              </div>


              <h2
                style={{
                  margin:
                    "0 0 8px",
                  color: "#111",
                }}
              >
                Welcome Back
              </h2>


              <p
                style={{
                  color: "#666",
                  marginBottom:
                    "25px",
                }}
              >
                Login to your ShopKart account
              </p>


              <form
                onSubmit={handleLogin}
              >


                {/* EMAIL */}

                <input
                  type="email"
                  placeholder="Email address"
                  value={loginEmail}
                  onChange={(e) =>
                    setLoginEmail(
                      e.target.value
                    )
                  }
                  style={{
                    width: "100%",
                    padding: "14px",
                    marginBottom: "15px",
                    border:
                      "1px solid #ddd",
                    borderRadius: "10px",
                    fontSize: "15px",
                    boxSizing:
                      "border-box",
                    color: "#111",
                  }}
                />


                {/* PASSWORD */}

                <input
                  type="password"
                  placeholder="Password"
                  value={loginPassword}
                  onChange={(e) =>
                    setLoginPassword(
                      e.target.value
                    )
                  }
                  style={{
                    width: "100%",
                    padding: "14px",
                    marginBottom: "20px",
                    border:
                      "1px solid #ddd",
                    borderRadius: "10px",
                    fontSize: "15px",
                    boxSizing:
                      "border-box",
                    color: "#111",
                  }}
                />


                {/* LOGIN */}

                <button
                  type="submit"
                  style={{
                    width: "100%",
                    padding: "14px",
                    border: "none",
                    borderRadius: "10px",
                    background: "#111",
                    color: "#fff",
                    fontSize: "16px",
                    fontWeight: "700",
                    cursor: "pointer",
                  }}
                >
                  Login
                </button>

              </form>


              {/* REGISTER */}

              <p
                style={{
                  marginTop: "20px",
                  color: "#777",
                  fontSize: "14px",
                }}
              >

                Don't have an account?{" "}

                <span
                  style={{
                    color: "#e63946",
                    fontWeight: "700",
                    cursor: "pointer",
                  }}
                  onClick={() => {

                    setShowLogin(false);

                    setShowRegister(true);

                  }}
                >
                  Register
                </span>

              </p>

            </div>

          </div>

        </div>

      )}



      {/* =================================================
          REGISTER POPUP
      ================================================= */}

      {showRegister && (

        <div
          style={{
            position: "fixed",
            inset: 0,
            background:
              "rgba(0,0,0,0.65)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            zIndex: 10000,
            overflowY: "auto",
            padding: "20px",
          }}
        >

          <div
            style={{
              width: "430px",
              maxWidth: "95%",
              background: "#fff",
              borderRadius: "20px",
              padding: "35px",
              position: "relative",
              boxShadow:
                "0 20px 60px rgba(0,0,0,0.3)",
            }}
          >


            {/* CLOSE */}

            <button
              onClick={() =>
                setShowRegister(false)
              }
              style={{
                position: "absolute",
                top: "15px",
                right: "18px",
                border: "none",
                background: "none",
                fontSize: "25px",
                cursor: "pointer",
              }}
            >
              ✕
            </button>


            <div
              style={{
                textAlign: "center",
              }}
            >

              <div
                style={{
                  fontSize: "45px",
                  marginBottom: "5px",
                }}
              >
                🛍️
              </div>


              <h2
                style={{
                  margin:
                    "0 0 8px",
                  color: "#111",
                }}
              >
                Create Account
              </h2>


              <p
                style={{
                  color: "#666",
                  marginBottom: "22px",
                }}
              >
                Join ShopKart today
              </p>


              <form
                onSubmit={
                  handleRegister
                }
              >


                {/* NAME */}

                <input
                  type="text"
                  placeholder="Full Name"
                  value={registerName}
                  onChange={(e) =>
                    setRegisterName(
                      e.target.value
                    )
                  }
                  style={{
                    width: "100%",
                    padding: "13px",
                    marginBottom: "12px",
                    border:
                      "1px solid #ddd",
                    borderRadius: "10px",
                    fontSize: "15px",
                    boxSizing:
                      "border-box",
                    color: "#111",
                  }}
                />


                {/* EMAIL */}

                <input
                  type="email"
                  placeholder="Email Address"
                  value={registerEmail}
                  onChange={(e) =>
                    setRegisterEmail(
                      e.target.value
                    )
                  }
                  style={{
                    width: "100%",
                    padding: "13px",
                    marginBottom: "12px",
                    border:
                      "1px solid #ddd",
                    borderRadius: "10px",
                    fontSize: "15px",
                    boxSizing:
                      "border-box",
                    color: "#111",
                  }}
                />


                {/* MOBILE */}

                <input
                  type="tel"
                  placeholder="Mobile Number"
                  value={registerMobile}
                  onChange={(e) =>
                    setRegisterMobile(
                      e.target.value.replace(
                        /\D/g,
                        ""
                      )
                    )
                  }
                  maxLength="10"
                  style={{
                    width: "100%",
                    padding: "13px",
                    marginBottom: "12px",
                    border:
                      "1px solid #ddd",
                    borderRadius: "10px",
                    fontSize: "15px",
                    boxSizing:
                      "border-box",
                    color: "#111",
                  }}
                />


                {/* PASSWORD */}

                <input
                  type="password"
                  placeholder="Password"
                  value={registerPassword}
                  onChange={(e) =>
                    setRegisterPassword(
                      e.target.value
                    )
                  }
                  style={{
                    width: "100%",
                    padding: "13px",
                    marginBottom: "12px",
                    border:
                      "1px solid #ddd",
                    borderRadius: "10px",
                    fontSize: "15px",
                    boxSizing:
                      "border-box",
                    color: "#111",
                  }}
                />


                {/* CONFIRM PASSWORD */}

                <input
                  type="password"
                  placeholder="Confirm Password"
                  value={confirmPassword}
                  onChange={(e) =>
                    setConfirmPassword(
                      e.target.value
                    )
                  }
                  style={{
                    width: "100%",
                    padding: "13px",
                    marginBottom: "18px",
                    border:
                      "1px solid #ddd",
                    borderRadius: "10px",
                    fontSize: "15px",
                    boxSizing:
                      "border-box",
                    color: "#111",
                  }}
                />


                {/* CREATE ACCOUNT */}

                <button
                  type="submit"
                  style={{
                    width: "100%",
                    padding: "14px",
                    border: "none",
                    borderRadius: "10px",
                    background: "#111",
                    color: "#fff",
                    fontSize: "16px",
                    fontWeight: "700",
                    cursor: "pointer",
                  }}
                >
                  Create Account
                </button>


              </form>


              {/* BACK TO LOGIN */}

              <p
                style={{
                  marginTop: "18px",
                  color: "#777",
                  fontSize: "14px",
                }}
              >

                Already have an account?{" "}

                <span
                  style={{
                    color: "#e63946",
                    fontWeight: "700",
                    cursor: "pointer",
                  }}
                  onClick={() => {

                    setShowRegister(false);

                    setShowLogin(true);

                  }}
                >
                  Login
                </span>

              </p>

            </div>

          </div>

        </div>

      )}

    </div>
  );
}

export default App;