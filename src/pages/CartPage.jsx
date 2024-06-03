import BreadCrumb from "../components/BreadCrumbs";
import Cart from "../components/Cart";
import Product from "../components/Product";


function CartPage() {
  return (
    <div>
      <BreadCrumb
        items={[
          { label: "Home", path: "/" },
          { label: "Shop", path: "ProductPage/1" },
          { label: "Cart", path: "/CartPage" },
        ]}
      />

      <Cart />
      <Product
        headerTitle=""
        headerSubtitle="PRODUCTS RELATED TO ITEMS IN YOUR CART"
        headerDescription=""
        showLoadMore={false}
      />
    </div>
  );
}

export default CartPage;

