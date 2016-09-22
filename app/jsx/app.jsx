var React = require('react'),
    ReactDOM = require('react-dom');


// 引用组件
var BgImgChangeComponent = require('./bgimgchange');
var ContentTitleComponent = require('./contenttitle');
var Test = require('./test');

// 数组对象(顶级)
var listArr = [
    {userName:"leo"},
    {userName:"bob"},
    {userName:"lee"}
]

// 集合组件内容
var ContentComponent = React.createClass({
    // getInitialState : function() {
    //     return {data: {comments:[]}};
    // },
    getInitialState :function(){
        return {
            // data: {comments:[]}
            listArr:this.props.listArr
        };
    },
    render:function(){
        return(
            <div>
                <BgImgChangeComponent></BgImgChangeComponent>
                <ContentTitleComponent></ContentTitleComponent>
                <test listArr = {this.props.listArr}>
                    {
                        this.props.listArr.map(function(item,index){
                            return <Test key={index} {...item} />
                        }.bind(this))
                    }
                </test>
            </div>
        )
    }
});
// React生成Vdom
ReactDOM.render(
    <ContentComponent listArr = {listArr}/>,
    document.getElementById("content")
);
