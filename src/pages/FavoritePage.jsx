import BreadCrumb from "../components/BreadCrumbs";
import Favorite from "../components/Favorite";
import Product from "../components/Product";

function FavoritePage() {
  return (
    <div>
      <BreadCrumb
        items={[
          { label: "Home", path: "/" },
          { label: "Shop", path: "/ProductPage/1" },
          { label: "Favourite", path: "/favoritePage" },
        ]}
      />

      <Favorite />
      <Product
        headerTitle=""
        headerSubtitle="PRODUCTS RELATED TO ITEMS IN YOUR CART"
        headerDescription=""
        showLoadMore={false}
      />
    </div>
  );
}

export default FavoritePage;
