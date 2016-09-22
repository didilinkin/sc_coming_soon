var React = require('react'),
    ReactDOM = require('react-dom');

    var TestSon = React.createClass({
        render: function(){
            return(
                <test>
                    {this.props.userName}
                </test>
            )
        }
    })

    module.exports = TestSon;
