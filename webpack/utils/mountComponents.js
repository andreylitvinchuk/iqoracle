var React = require('react');
var ReactDOM = require('react-dom');
var $ = require('jquery');

var components = require('../components');


$(function () {
  $('[data-react-class]').each(function(index, element){
    var $el = $(element);

    var className = $el.attr('data-react-class');
    var props = $el.attr('data-react-props');

    props = props ? JSON.parse(props) : {};

    var component = components[className];

    ReactDOM.render(React.createElement(component, props), element)
  })
})

