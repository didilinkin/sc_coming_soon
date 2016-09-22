var React = require('react'),
    ReactDOM = require('react-dom');

var IconComponent = React.createClass({
    render:function(){
        return(
            <icon>
                <div className="icon__box">
                    {/* 虚拟出来的标签——包住4个标题文字 */}
                    {/* <icontitle>
                        <ul className="icon__ul">
                            <li><p>1234567890</p></li>
                            <li><p>0987654321</p></li>
                            <li><p>1234567890</p></li>
                            <li><p>1234567890</p></li>
                        </ul>
                    </icontitle> */}
                    <box>   {/* 虚拟出来的标签——包住4个i标签 */}
                        <title-icon>    {/* 标题文字 与 icon图标的集合 */}
                            <title-icon__title>     {/* 文字盒子 */}
                                <p>1234567890</p>
                            </title-icon__title>
                            <i__box>
                                <i className="fa fa-qq"></i>
                            </i__box>
                        </title-icon>

                        <title-icon>    {/* 标题文字 与 icon图标的集合 */}
                            <title-icon__title>     {/* 文字盒子 */}
                                <p>1234567890</p>
                            </title-icon__title>
                            <i__box>
                                <i className="fa fa-weixin"></i>
                            </i__box>
                        </title-icon>

                        <title-icon>    {/* 标题文字 与 icon图标的集合 */}
                            <title-icon__title>     {/* 文字盒子 */}
                                <p>1234567890</p>
                            </title-icon__title>
                            <i__box>
                                <i className="fa fa-phone"></i>
                            </i__box>
                        </title-icon>

                        <title-icon>    {/* 标题文字 与 icon图标的集合 */}
                            <title-icon__title>     {/* 文字盒子 */}
                                <p>1234567890</p>
                            </title-icon__title>
                            <i__box>
                                <i className="fa fa-at"></i>
                            </i__box>    
                        </title-icon>
                        {/* 这个内容列表可以考虑使用数组的方法来调用 */}
                    </box>
                </div>
                <div className="icon__flex"></div>
            </icon>
        )
    }
})

module.exports = IconComponent;
