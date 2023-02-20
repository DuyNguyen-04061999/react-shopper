import { PATH } from "@/config";
import currency from "@/utils/currency";
import React from "react";
import { useDispatch } from "react-redux";
import { generatePath, Link } from "react-router-dom";
import { onCloseDrawer } from "@/stores/drawerReducer";

const ProductCart = ({ images, real_price, price, name, link, slug }) => {
  const dispatch = useDispatch();
  const detailLink = generatePath(PATH.productDetail, {
    slug,
  });
  return (
    <div className="row align-items-center position-relative mb-5 product-cart-item pt-4">
      <div className="col-4 col-md-3 img-cate">
        {/* Image */}
        <img className="img-fluid" src={images[0].large_url} alt="cate" />
      </div>
      <div className="col position-static">
        {/* Text */}
        <p className="mb-0 font-weight-bold">
          <Link
            className="stretched-link text-body text-cate"
            to={`${detailLink}`}
            onClick={() => dispatch(onCloseDrawer({ name: "search" }))}
          >
            {name}
          </Link>{" "}
          <br />
          <span className="text-muted">{currency(real_price || price)}</span>
        </p>
      </div>
    </div>
  );
};

export default ProductCart;
