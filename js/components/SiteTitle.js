/**
 * Created by chenm on 2016/7/8.
 */
const React = require("react");
let SiteTitle = React.createClass({
    render() {
        return (
            <div className="title">
                <h2>Buy Me Shoes</h2>
                <img className="title__heart" src="img/heart.svg" />
            </div>
        );
    }
});

module.exports = SiteTitle;