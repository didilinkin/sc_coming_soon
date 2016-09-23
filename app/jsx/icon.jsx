var React = require('react'),
    ReactDOM = require('react-dom');

function cleanClass(){
    var qqId = document.getElementById("qqId")
    var weixinId = document.getElementById("weixinId")
    var phoneId = document.getElementById("phoneId")
    var atId = document.getElementById("atId")
    qqId.className="";
    weixinId.className="";
    phoneId.className="";
    atId.className="";
}

// 计时器清理程序
function timeClean(){
    var _self = this;
    window.setTimeout(function(){
        cleanClass();
    },5000);
}

var IconComponent = React.createClass({
    render:function(){
        return(
            <icon>
                <div className="icon__box">
                    {/* 虚拟出来的标签——包住4个标题文字 */}
                    <box onmouseout={this.mouseOut} >   {/* 虚拟出来的标签——包住4个i标签  鼠标移除执行清除事件*/}
                        <title-icon id="qq">    {/* 标题文字 与 icon图标的集合 */}
                            <title-icon__title id="qqId" className="">     {/* 文字盒子 */}
                                <p>1234567890</p>
                            </title-icon__title>
                            <i__box>
                                <i className="fa fa-qq"></i>
                            </i__box>
                        </title-icon>

                        <title-icon id="weixin">    {/* 标题文字 与 icon图标的集合 */}
                            <title-icon__title id="weixinId" className="">     {/* 文字盒子 */}
                                <p>1234567890</p>
                            </title-icon__title>
                            <i__box>
                                <i className="fa fa-weixin"></i>
                            </i__box>
                        </title-icon>

                        <title-icon id="phone">    {/* 标题文字 与 icon图标的集合 */}
                            <title-icon__title id="phoneId" className="">     {/* 文字盒子 */}
                                <p>1234567890</p>
                            </title-icon__title>
                            <i__box>
                                <i className="fa fa-phone"></i>
                            </i__box>
                        </title-icon>

                        <title-icon id="at">    {/* 标题文字 与 icon图标的集合 */}
                            <title-icon__title id="atId" className="">     {/* 文字盒子 */}
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
    },
    qqClick:function(){
        var qqId = document.getElementById("qqId")
        cleanClass();
        qqId.className = "display";
    },
    weixinClick:function(){
        var weixinId = document.getElementById("weixinId")
        cleanClass();
        weixinId.className = "display";
    },
    phoneClick:function(){
        var phoneId = document.getElementById("phoneId")
        cleanClass();
        phoneId.className = "display"
    },
    atClick:function(){
        var atId = document.getElementById("atId")
        cleanClass();
        atId.className = "display";
    }
})

module.exports = IconComponent;
