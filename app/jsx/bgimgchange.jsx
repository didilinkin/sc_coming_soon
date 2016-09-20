var React = require('react'),
    ReactDOM = require('react-dom');

var BgImgChangeComponent = React.createClass({
    render: function(){
        return(
            <div className="bgimg-wrap">
                <bgimgchange id="bgimg-list">
                    <img className="js-imgDisplay" src="./img/coming-soon.png" />
                    <img className="" src="./img/coming-soon-copy-2.png" />
                    <img className="" src="./img/coming-soon-copy-4.png" />
                    <img className="" src="./img/coming-soon-copy-6.png" />
                </bgimgchange>
            </div>
        )
    }
})

module.exports = BgImgChangeComponent;
