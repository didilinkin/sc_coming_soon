var React = require('react'),
    ReactDOM = require('react-dom');

var BgImgChange = React.createClass({
    render: function(){
        return(
            <bgimgchange>
                <img src="./img/coming-soon.png" />
                <h1>修改虚拟DOM名称</h1>
            </bgimgchange>

        )
    }
})

module.exports = BgImgChange;
