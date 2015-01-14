/*globals define*/
define(function(require, exports, module) {
    var View = require('famous/core/View');
    var Surface = require('famous/core/Surface');
    var Transform = require('famous/core/Transform');
    var StateModifier = require('famous/modifiers/StateModifier');

    /*
     * @name HeaderView
     * @constructor
     * @description
     */

    function HeaderView() {
        View.apply(this, arguments);
    }

    HeaderView.prototype = Object.create(View.prototype);
    HeaderView.prototype.constructor = HeaderView;

    HeaderView.DEFAULT_OPTIONS = {
    };

    module.exports = HeaderView;
});
