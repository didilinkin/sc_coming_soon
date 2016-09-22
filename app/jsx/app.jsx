var React = require('react'),
    ReactDOM = require('react-dom');


// 引用组件
var BgImgChangeComponent = require('./bgimgchange');
var ContentTitleComponent = require('./contenttitle');

// 数组对象(顶级)
var listArr = [
    {userName:"leo"},
    {userName:"bob"},
    {userName:"lee"}
]

// 集合组件内容
var ContentComponent = React.createClass({
    getInitialState:function(){
        return{

        }
    },
    render:function(){
        console.log();
        return(
            <div>
                <BgImgChangeComponent></BgImgChangeComponent>
                <ContentTitleComponent></ContentTitleComponent>
            </div>
        )
    }
});
// React生成Vdom
ReactDOM.render(
    <ContentComponent />,
    document.getElementById("content")
);
