/**
 * Created by chenm on 2016/7/8.
 */
// App 组件
const React = require("react");
let App = require("./components/App");

window.onload = () => {
    // 使用 App 组件替换 `#root` 的 innerHTML。
    React.render(<App/>, document.querySelector("#root"));
};