var React = require('react'),
    ReactDOM = require('react-dom');

// 引用组件
var IconComponent = require('./icon');

var ContentTitleComponent = React.createClass({
    render: function(){
        return(
            <div>
                <contenttitle>{/* 大标题部分 */}
                    <div className="contenttitle__box">
                        <img src="./img/group-3@3x.png" />
                    </div>
                    <div className="contenttitle__flex"></div>{/* Flex占位 */}
                </contenttitle>
                <IconComponent></IconComponent>
                <logo>
                    <div className="logo__flex"></div>{/* flex占位 */}
                    <logo-box>
                        <img src="./img/aoffice-icon@3x.png" />
                    </logo-box>
                    <div className="logo__flex"></div>{/* flex占位 */}
                </logo>
            </div>
        )
    }
})

module.exports = ContentTitleComponent;
