var React = require('react'),
    ReactDOM = require('react-dom');


// 引用组件
var BgImgChangeComponent = require('./bgimgchange');
var ContentTitleComponent = require('./contenttitle');


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
                {/* <test listArr = {this.props.listArr}>
                    {
                        this.props.listArr.map(function(item,index){
                            return <Test key={index} {...item} />
                        }.bind(this))
                    }
                </test> */}
            </div>
        )
    }
});
// React生成Vdom
ReactDOM.render(
    <ContentComponent/>,
    document.getElementById("content")
);

window.onload = function () {
    // 获取真实DOM对象
    var content = document.getElementById('content');
    var list = document.getElementById('bgimg-list');
    var tagImg = document.getElementById('bgimg-list').getElementsByTagName('img');
    var index = 1;
    var timer;

    // 图片上下切换效果
    function changeImg(){
        for (var i = 0; i < tagImg.length; i++){
            if (tagImg[i].className == "js-imgDisplay") {
                tagImg[i].className = "";
            }
        }
        // //图片从0开始，故index需要-1
        tagImg[index - 1].className = "js-imgDisplay";

        //由于上边定时器的作用，index会一直递增下去，我们只有3个小圆点，所以需要做出判断
        index += 1;
        if (index > 4) {
            index = 1
        }
    }

    // 动画开始
    function play() {
        //重复执行的定时器
        timer = setInterval(function () {
            // 执行 更改图片
            changeImg()
        }, 3000)
    }

    play();
}
