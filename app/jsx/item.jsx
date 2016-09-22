var React = require('react'),
    ReactDOM = require('react-dom');

var ItemComponent = React.createClass({
    render:function(){
        return(
            <iconp>
                <p>{this.props.pContent}</p>
            </iconp>
        )
    }
})

module.exports = ItemComponent;
