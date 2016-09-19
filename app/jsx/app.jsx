var React = require('react'),
    ReactDOM = require('react-dom');


// 引用组件
var TEST = require('./test');

// React生成Vdom
ReactDOM.render(
    <TEST></TEST>,
    document.getElementById("content")
);
