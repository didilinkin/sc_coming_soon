var React = require('react'),
    ReactDOM = require('react-dom');


// 引用组件
var TEST = require('./bgimgchange');

// React生成Vdom
ReactDOM.render(
    <TEST></TEST>,
    document.getElementById("content")
);
