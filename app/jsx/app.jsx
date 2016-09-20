var React = require('react'),
    ReactDOM = require('react-dom');


// 引用组件
var BgImgChangeComponent = require('./bgimgchange');

// React生成Vdom
ReactDOM.render(
    <BgImgChangeComponent></BgImgChangeComponent>,
    document.getElementById("content")
);
