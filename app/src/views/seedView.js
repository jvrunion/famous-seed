/*globals define*/
define(function(require, exports, module) {
    var View = require('famous/core/View');
    var Surface = require('famous/core/Surface');
    var Transform = require('famous/core/Transform');
    var StateModifier = require('famous/modifiers/StateModifier');

    /*
     * @name seedView
     * @constructor
     * @description
     */

    function seedView() {
        View.apply(this, arguments);
    }

    seedView.prototype = Object.create(View.prototype);
    seedView.prototype.constructor = seedView;

    seedView.DEFAULT_OPTIONS = {
    };

    module.exports = seedView;
});
