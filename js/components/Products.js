/**
 * Created by chenm on 2016/7/8.
 */
const React = require("react");
const {product, cartItems} = require("../data");

let Product = React.createClass({
    render() {
        let {name, price, imagePath} = this.props.product;

        return (
            <div className="product">
                <div className="product__display">
                    <div className="product__img-wrapper">
                        <img className="product__img" src={imagePath}/>
                    </div>

                    <a className="product__add">
                        <img className="product__add__icon" src="img/cart-icon.svg"/>
                    </a>

                    <div className="product__price">
                        {price}
                    </div>
                </div>

                <div className="product__description">
                    <div className="product__name">
                        {name}
                    </div>

                    <img className="product__heart" src="img/heart.svg"/>
                </div>
            </div>
        )
    }
});

let Products = React.createClass({
    render() {


        let renderProduct = (product) => {
            var array = [];
            for (var x in product) {
                array.push(<Product product={product[x]} key={x}/>);
            }
            return array;
        };

        return (
            <div className="products">
                {renderProduct(product)}
            </div>
        )
    }
});

module.exports = Products;