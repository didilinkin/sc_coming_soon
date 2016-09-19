var React = require('react'),
    ReactDOM = require('react-dom');

var TEST = React.createClass({
    render: function(){
        return(
            <div>
                <img src="./img/coming-soon.png" />
                <h1>最后一次监听</h1>
            </div>

        )
    }
})

module.exports = TEST;
