var React = require('react'),
    ReactDOM = require('react-dom');

var IconComponent = React.createClass({
    render:function(){
        return(
            <icon>
                <div className="icon__box">
                    <icontitle>     {/* 虚拟出来的标签——包住4个标题文字 */}
                        <ul className="icon__ul">
                            <li><p>1234567890</p></li>
                            <li><p>0987654321</p></li>
                            <li><p>1234567890</p></li>
                            <li><p>1234567890</p></li>
                        </ul>
                    </icontitle>
                    <box>   {/* 虚拟出来的标签——包住4个i标签 */}
                        <i className="fa fa-qq"></i>
                        <i className="fa fa-weixin"></i>
                        <i className="fa fa-phone"></i>
                        <i className="fa fa-at"></i>
                    </box>
                </div>
                <div className="icon__flex"></div>
            </icon>
        )
    }
})

module.exports = IconComponent;
