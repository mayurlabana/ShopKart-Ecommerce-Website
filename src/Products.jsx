import { useState } from "react";
import { useSearchParams } from "react-router-dom";
import "./Products.css";

function Products() {

  // ================= SEARCH FROM HOME PAGE =================

  const [searchParams] = useSearchParams();

  const homeSearch =
    searchParams.get("search") || "";


  // ================= PRODUCTS =================

  const products = [
    {
      id: 1,
      name: "Wireless Headphones",
      category: "Electronics",
      price: 2499,
      rating: 4.8,
      image:
        "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=800&q=80",
    },

    {
      id: 2,
      name: "Smart Watch",
      category: "Electronics",
      price: 3999,
      rating: 4.7,
      image:
        "https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=800&q=80",
    },

    {
      id: 3,
      name: "Running Shoes",
      category: "Shoes",
      price: 2999,
      rating: 4.9,
      image:
        "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=800&q=80",
    },

    {
      id: 4,
      name: "Premium Backpack",
      category: "Fashion",
      price: 1799,
      rating: 4.6,
      image:
        "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&w=800&q=80",
    },

    {
      id: 5,
      name: "Sunglasses",
      category: "Fashion",
      price: 1299,
      rating: 4.5,
      image:
        "https://images.unsplash.com/photo-1511499767150-a48a237f0083?auto=format&fit=crop&w=800&q=80",
    },

    {
      id: 6,
      name: "Gaming Controller",
      category: "Gaming",
      price: 2499,
      rating: 4.8,
      image:
        "https://images.unsplash.com/photo-1600080972464-8e5f35f63d08?auto=format&fit=crop&w=800&q=80",
    },

    {
      id: 7,
      name: "Perfume",
      category: "Beauty",
      price: 1999,
      rating: 4.6,
      image:
        "https://images.unsplash.com/photo-1541643600914-78b084683601?auto=format&fit=crop&w=800&q=80",
    },

    {
      id: 8,
      name: "Home Lamp",
      category: "Home",
      price: 1499,
      rating: 4.4,
      image:
        "https://images.unsplash.com/photo-1507473885765-e6ed057f782c?auto=format&fit=crop&w=800&q=80",
    },
  ];


  // ================= STATES =================

  const [search, setSearch] = useState(homeSearch);

  const [category, setCategory] =
    useState("All");

  const [sort, setSort] =
    useState("default");


  // ================= ADD TO CART =================

  const addToCart = (product) => {

    const existingCart =
      JSON.parse(localStorage.getItem("cart")) || [];

    const existingProduct =
      existingCart.find(
        (item) => item.id === product.id
      );

    let updatedCart;


    if (existingProduct) {

      updatedCart =
        existingCart.map((item) =>
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


  // ================= FILTER PRODUCTS =================

  let filteredProducts =
    products.filter((product) => {

      const matchesSearch =
        product.name
          .toLowerCase()
          .includes(
            search.toLowerCase()
          );


      const matchesCategory =
        category === "All" ||
        product.category === category;


      return (
        matchesSearch &&
        matchesCategory
      );

    });


  // ================= SORT =================

  if (sort === "low") {

    filteredProducts.sort(
      (a, b) =>
        a.price - b.price
    );

  }


  if (sort === "high") {

    filteredProducts.sort(
      (a, b) =>
        b.price - a.price
    );

  }


  if (sort === "rating") {

    filteredProducts.sort(
      (a, b) =>
        b.rating - a.rating
    );

  }


  // ================= PAGE =================

  return (

    <section className="products-page">


      {/* ================= HEADER ================= */}

      <div className="products-header">

        <div>

          <p>
            OUR COLLECTION
          </p>

          <h1>
            All Products
          </h1>

          <span>
            Find the perfect products for you
          </span>

        </div>

      </div>



      {/* ================= FILTERS ================= */}

      <div className="filters">


        {/* SEARCH */}

        <input
          type="text"
          placeholder="🔍 Search products..."
          value={search}
          onChange={(e) =>
            setSearch(e.target.value)
          }
        />


        {/* CATEGORY */}

        <select
          value={category}
          onChange={(e) =>
            setCategory(e.target.value)
          }
        >

          <option value="All">
            All Categories
          </option>

          <option value="Electronics">
            Electronics
          </option>

          <option value="Fashion">
            Fashion
          </option>

          <option value="Shoes">
            Shoes
          </option>

          <option value="Home">
            Home
          </option>

          <option value="Beauty">
            Beauty
          </option>

          <option value="Gaming">
            Gaming
          </option>

        </select>


        {/* SORT */}

        <select
          value={sort}
          onChange={(e) =>
            setSort(e.target.value)
          }
        >

          <option value="default">
            Sort Products
          </option>

          <option value="low">
            Price: Low to High
          </option>

          <option value="high">
            Price: High to Low
          </option>

          <option value="rating">
            Highest Rated
          </option>

        </select>

      </div>



      {/* ================= PRODUCTS ================= */}

      <div className="products-grid">


        {filteredProducts.map(
          (product) => (

            <div
              className="product-item"
              key={product.id}
            >


              {/* PRODUCT IMAGE */}

              <div className="product-img">

                <img
                  src={product.image}
                  alt={product.name}
                />


                <button className="heart">
                  ♡
                </button>

              </div>



              {/* PRODUCT DETAILS */}

              <div className="product-details">


                <span
                  className="product-category"
                >
                  {product.category}
                </span>


                <h3>
                  {product.name}
                </h3>


                <div className="rating">
                  ⭐ {product.rating}
                </div>


                <div className="product-price">

                  ₹
                  {product.price.toLocaleString(
                    "en-IN"
                  )}

                </div>


                {/* ADD TO CART */}

                <button
                  className="add-cart"
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



      {/* ================= NO PRODUCTS ================= */}

      {filteredProducts.length === 0 && (

        <div className="no-products">

          <h2>
            No products found
          </h2>

          <p>
            Try another search or category.
          </p>

        </div>

      )}


    </section>

  );
}

export default Products;