import React from "react";
import { useSelector } from "react-redux";
import CourseItem from "./CourseItem";

export default function CourseList() {
  const { cartItems, quantity, total } = useSelector((store) => store.cart);
  return (
    <>
      {quantity < 1 ? (
        <section className="cart">
          <header>
            <h2>My Shopping Cart</h2>
            <h4>Shopping cart is empty.</h4>
          </header>
        </section>
      ) : (
        <section className="cart">
          <header>
            <h2>My Shopping Cart</h2>
          </header>
          <div>
            {
                cartItems.map((item) => {
                    return <CourseItem key={item.id} {...item}/>
                })
            }
          </div>
          <footer>
            <hr />
            <div>
                <h4>Total Price <span>{total} TL</span></h4>
            </div>
            <button className="cartClearButton">Delete</button>
          </footer>
        </section>
      )}
    </>
  );
}
