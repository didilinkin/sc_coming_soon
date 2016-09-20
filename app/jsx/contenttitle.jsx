var React = require('react'),
    ReactDOM = require('react-dom');

var ContentTitleComponent = React.createClass({
    render: function(){
        return(
            <ContentTitleComponent className="coming-soon__contentTitle">
                <coming-soon--h1 className="coming-soon--h1">COMING</coming-soon--h1>
                <coming-soon--h1 className="coming-soon--h1">
                    <em>very soon</em>
                </coming-soon--h1>
            </ContentTitleComponent>
        )
    }
})

module.exports = ContentTitleComponent;
