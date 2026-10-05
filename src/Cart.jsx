import { useEffect, useState } from "react";
import "./Cart.css";

function Cart() {

  // Load cart directly when the page starts
  const [cart, setCart] = useState(() => {
    return JSON.parse(localStorage.getItem("cart")) || [];
  });

  // Save cart whenever it changes
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  // Increase quantity
  const increaseQuantity = (id) => {
    setCart(
      cart.map((item) =>
        item.id === id
          ? {
              ...item,
              quantity: item.quantity + 1,
            }
          : item
      )
    );
  };

  // Decrease quantity
 const decreaseQuantity = (id) => {
  setCart(
    cart.map((item) =>
      item.id === id && item.quantity > 1
        ? {
            ...item,
            quantity: item.quantity - 1,
          }
        : item
    )
  );
};

  // Remove product
  const removeProduct = (id) => {
    setCart(
      cart.filter((item) => item.id !== id)
    );
  };

  // Calculate total
  const total = cart.reduce(
    (sum, item) =>
      sum + item.price * item.quantity,
    0
  );

  return (
    <div className="cart-page">

      {/* Header */}

      <div className="cart-header">

        <p>SHOPPING CART</p>

        <h1>Your Cart</h1>

        <span>
          Review your selected products
        </span>

      </div>

      {/* Empty Cart */}

      {cart.length === 0 ? (

        <div className="empty-cart">

          <div className="empty-icon">
            🛒
          </div>

          <h2>
            Your cart is empty
          </h2>

          <p>
            You haven't added any products yet.
          </p>

          <button
            onClick={() => {
              window.location.href =
                "/products";
            }}
          >
            Continue Shopping →
          </button>

        </div>

      ) : (

        /* Cart With Products */

        <div className="cart-container">

          {/* Products */}

          <div className="cart-items">

            {cart.map((item) => (

              <div
                className="cart-item"
                key={item.id}
              >

                <img
                  src={item.image}
                  alt={item.name}
                />

                <div className="cart-item-info">

                  <span>
                    {item.category}
                  </span>

                  <h3>
                    {item.name}
                  </h3>

                  <p className="cart-price">
                    ₹
                    {item.price.toLocaleString(
                      "en-IN"
                    )}
                  </p>

                  {/* Quantity */}

                  <div className="quantity">

                    <button
                      onClick={() =>
                        decreaseQuantity(
                          item.id
                        )
                      }
                    >
                      −
                    </button>

                    <strong>
                      {item.quantity}
                    </strong>

                    <button
                      onClick={() =>
                        increaseQuantity(
                          item.id
                        )
                      }
                    >
                      +
                    </button>

                  </div>

                </div>

                {/* Remove */}

                <button
                  className="remove-btn"
                  onClick={() =>
                    removeProduct(item.id)
                  }
                >
                  🗑️
                </button>

              </div>

            ))}

          </div>

          {/* Order Summary */}

          <div className="cart-summary">

            <h2>
              Order Summary
            </h2>

            <div className="summary-row">

              <span>
                Products
              </span>

              <strong>
                {cart.length}
              </strong>

            </div>

            <div className="summary-row">

              <span>
                Subtotal
              </span>

              <strong>
                ₹
                {total.toLocaleString(
                  "en-IN"
                )}
              </strong>

            </div>

            <div className="summary-row">

              <span>
                Delivery
              </span>

              <strong className="free">
                FREE
              </strong>

            </div>

            <hr />

            <div className="total-row">

              <span>
                Total
              </span>

              <strong>
                ₹
                {total.toLocaleString(
                  "en-IN"
                )}
              </strong>

            </div>

            <button className="checkout-btn">
              Proceed to Checkout →
            </button>

            <button
              className="continue-btn"
              onClick={() => {
                window.location.href =
                  "/products";
              }}
            >
              Continue Shopping
            </button>

          </div>

        </div>

      )}

    </div>
  );
}

export default Cart;