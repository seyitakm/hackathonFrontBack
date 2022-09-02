import React from "react";
import Cart from "../components/Cart";

const CartPage = () => {
  return (
    <div style={{ marginTop: "2%" }}>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <h1
          style={{
            color: "black",
            marginBottom: "5%",
            // fontFamily: "impact",
            fontSize: "4vw",
            fontFamily: "Georgia, 'Times New Roman', Times, serif",
            fontWeight: "400",
          }}
        >
          Мои Записи
        </h1>
      </div>
      <Cart />
    </div>
  );
};
export default CartPage;
