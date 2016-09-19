var React = require('react'),
    ReactDOM = require('react-dom');


// 引用组件
var BgImgChange = require('./bgimgchange');

// React生成Vdom
ReactDOM.render(
    <BgImgChange></BgImgChange>,
    document.getElementById("content")
);
