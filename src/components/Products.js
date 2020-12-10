import React, { Component } from "react";
import { connect } from "react-redux";
import util from "../util";
import { addToCart } from "../actions/cartActions";
import { fetchProducts } from "../actions/productActions";
class Products extends Component {
  componentDidMount() {
    this.props.fetchProducts();
  }
  render() {
    const productItems = this.props.products.map((product) => (
      <div className="col-md-4" key={product.id}>
        <div className="thumbnail text-center">
          
            <img src={`products/${product.sku}_2.jpg`} alt={product.title} />
            <p>{product.title}</p>
          
          <b>{util.formatCurrency(product.price)}</b>
        
          <button
            className="btn btn-primary"
          >
            <a
            href={`#${product.id}`}
            style={{color:"white"}}
            onClick={(e) => this.props.addToCart(this.props.cartItems, product)}
          >Add to cart</a>
          </button>
        </div>
      </div>
    ));

    return <div className="row">{productItems}</div>;
  }
}
const mapStateToProps = (state) => ({
  products: state.products.filteredItems,
  cartItems: state.cart.items,
});
export default connect(mapStateToProps, { fetchProducts, addToCart })(Products);
