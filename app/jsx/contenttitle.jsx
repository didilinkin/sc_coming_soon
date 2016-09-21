var React = require('react'),
    ReactDOM = require('react-dom');

var ContentTitleComponent = React.createClass({
    render: function(){
        return(
            <ContentTitleComponent className="contentTitle">
                <contentTitle className="contentTitle--h1">COMING</contentTitle>
                <contentTitle className="contentTitle--h1">
                    <em>very soon</em>
                </contentTitle>
            </ContentTitleComponent>
        )
    }
})

module.exports = ContentTitleComponent;
