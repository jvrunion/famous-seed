/*globals define*/
define(function(require, exports, module) {
    var View = require('famous/core/View');
    var Surface = require('famous/core/Surface');
    var Transform = require('famous/core/Transform');
    var StateModifier = require('famous/modifiers/StateModifier');

    /*
     * @name FooterView
     * @constructor
     * @description
     */

    function FooterView() {
        View.apply(this, arguments);
    }

    FooterView.prototype = Object.create(View.prototype);
    FooterView.prototype.constructor = FooterView;

    FooterView.DEFAULT_OPTIONS = {
    };

    module.exports = FooterView;
});
