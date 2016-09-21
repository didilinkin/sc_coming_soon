var React = require('react'),
    ReactDOM = require('react-dom');

var IconComponent = React.createClass({
    render:function(){
        return(
            <icon>
                <i className="fa fa-qq"></i>
                <i className="fa fa-weixin"></i>
                <i className="fa phone"></i>
                <i className="fa fa-at"></i>
            </icon>
        )
    }
})

module.exports = IconComponent;
