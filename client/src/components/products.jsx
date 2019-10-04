import React, { Component } from "react";
import ReactDOM from "react-dom";

class Products extends Component {
  constructor() {
    super();
    this.state = {
      products: []
    };
    //this api call fetches all my contacts from my datbase
    this.showAllproducts = e => {
      fetch("/api/products")
        .then(res => res.json())
        .then(
          data => {
            console.log(data);
            this.setState({
              products: data
            });
          },
          err => console.log(err)
        );
    };
    //this api call will give you back all products from the products table in the exterior category
    this.exteriorProducts = e => {
      fetch("/api/productfilter/Exterior")
        .then(res => res.json())
        .then(
          data => {
            console.log(data);
            this.setState({
              products: data
            });
          },
          err => console.log(err)
        );
    };

    //this api call will give you back all products from the products table in the Performance category
    this.performanceProducts = e => {
      fetch("/api/productfilter/Performance")
        .then(res => res.json())
        .then(
          data => {
            console.log(data);
            this.setState({
              products: data
            });
          },
          err => console.log(err)
        );
    };
    // this api call will give you back all products from the products table under $300.
    this.productUnder300 = e => {
      fetch("/api/pricefilter/300")
        .then(res => res.json())
        .then(
          data => {
            console.log(data);
            this.setState({
              products: data
            });
          },
          err => console.log(err)
        );
    };
    // this api call will give you back all products from the products table under $600.
    this.productUnder600 = e => {
      fetch("/api/pricefilter/600")
        .then(res => res.json())
        .then(
          data => {
            console.log(data);
            this.setState({
              products: data
            });
          },
          err => console.log(err)
        );
    };
    // this api call will give you back all products from the products table under $1000.
    this.productUnder1000 = e => {
      fetch("/api/pricefilter/1000")
        .then(res => res.json())
        .then(
          data => {
            console.log(data);
            this.setState({
              products: data
            });
          },
          err => console.log(err)
        );
    };
    // this api call will give you back all products from the products table under $3000.
    this.productUnder3000 = e => {
      fetch("/api/pricefilter/3000")
        .then(res => res.json())
        .then(
          data => {
            console.log(data);
            this.setState({
              products: data
            });
          },
          err => console.log(err)
        );
    };
  }
  componentDidMount() {
    fetch("/api/products")
      .then(res => res.json())
      .then(
        data => {
          console.log(data);
          this.setState({
            products: data
          });
        },
        err => console.log(err)
      );
  }

  render() {
    return (
      <div>
        <div className="filter-wrapper">
          <div className="category-buttons">
            <button onClick={this.showAllproducts}>Show All</button>
            <button onClick={this.exteriorProducts}>Exterior</button>
            <button onClick={this.performanceProducts}>Performance</button>
          </div>
          <div className="price-buttons">
            <button onClick={this.productUnder300}>Under 300</button>
            <button onClick={this.productUnder600}>Under 600</button>
            <button onClick={this.productUnder1000}>Under 1000</button>
            <button onClick={this.productUnder3000}>Under 3000</button>
          </div>
        </div>

        <div className="wrapper">
          {this.state.products.map(products => {
            return (
              <div className="productCard">
                <img
                  src={products.product_image}
                  className="productCard-img-top"
                />
                <div className="productCard-body">
                  <section className="product-name">
                    <b>{products.product_name}</b>
                  </section>
                  <section className="category">
                    <b>{products.product_category}</b>
                  </section>
                  <p className="productCard-text">
                    {products.product_description}
                  </p>
                  <section className="price">
                    <b>Price: ${products.price}</b>
                  </section>
                  <a href="" className="pbtn pbtn-primary">
                    Buy
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}
export default Products;
