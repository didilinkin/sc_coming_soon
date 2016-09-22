var React = require('react'),
    ReactDOM = require('react-dom');


// 引用组件
var IconComponent = require('./testson');

var Test = React.createClass({
    render: function(){
        return(
            <test>
                {this.props.userName}
            </test>
        )
    }
})

module.exports = Test;
