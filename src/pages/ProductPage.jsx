import Blog from "../components/Blog";
import BreadCrumb from "../components/BreadCrumbs";
import Companies from "../components/Companies";
import Product from "../components/Product";
import ProductDetail from "../components/ProductDetail";

function ProductPage() {
  return (
    <div>
      {/* <BreadCrumb /> */}
      <BreadCrumb
        items={[
          { label: "Home", path: "/" },
          { label: "Shop", path: "" },
        ]}
      />

      <ProductDetail />
      <Blog />
      <Product
        headerTitle=""
        headerSubtitle="PRODUCTS RELATED TO ITEMS IN YOUR CART"
        headerDescription=""
        showLoadMore={false}
      />
      <Companies />
    </div>
  );
}

export default ProductPage;
