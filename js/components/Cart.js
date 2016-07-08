/**
 * Created by chenm on 2016/7/8.
 */
const React = require("react");
const Ps = require("perfect-scrollbar");
const {product, cartItems} = require("../data");

let CartItem = React.createClass({
    render() {
        let {id, quantity} = this.props.cartitem;

        let tempProduct = product[id];

        let money = "$" + tempProduct['price'] + " " + (quantity == 1 ? "" : ("x " + quantity));

        return (
            <div className="cart-item">
                <div className="cart-item__top-part">
                    <div className="cart-item__image">
                        <img src={tempProduct['imagePath']}/>
                    </div>

                    <div className="cart-item__top-part__middle">
                        <div className="cart-item__title">
                            {id}
                        </div>

                        <div className="cart-item__price">
                            {money}
                        </div>
                    </div>

                    <img className="cart-item__trash" src="img/trash-icon.svg"/>
                </div>


                <div className="cart-item__qty">
                    <QuantityControl item={this.props.cartitem} variant="gray"/>
                </div>
            </div>
        )
    }
});

let QuantityControl = React.createClass({
    render() {
        let {id, quantity} = this.props.item;

        return (
            <div className="adjust-qty">
                <a className="adjust-qty__button">-</a>
                <div className="adjust-qty__number">{quantity}</div>
                <a className="adjust-qty__button">+</a>
            </div>
        )
    }
});

let Cart = React.createClass({
    componentDidMount() {
        let $content = React.findDOMNode(this.refs.content);
        Ps.initialize($content);
    },
    render() {
        let renderCartItems = (cartItems) => {
            var items = [];
            for (var item in cartItems) {
                items.push(<CartItem cartitem={cartItems[item]} key={item+"-cart-item"}/>);
            }
            return items;
        };

        return (
            <div className="cart" ref="content">
                <h3 className="cart__title">Shopping Cart</h3>
                <div className="cart__content" >
                    <h3 className="cart__title cart__title--spacer">Shopping Cart</h3>
                    {renderCartItems(cartItems)}
                </div>
            </div>
        )
    }
});

module.exports = Cart;