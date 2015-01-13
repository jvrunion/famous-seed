/*globals define*/
define(function(require, exports, module) {
    var Engine = require('famous/core/Engine');
    var View = require('famous/core/View');

    /*
     * @name seedView
     * @constructor
     * @description
     */

    function seedView() {
        // create the main context
        var seedContext = Engine.createContext();

        seedContext.setPerspective(1000);
    }

    seedView.prototype = Object.create(View.prototype);
    seedView.prototype.constructor = seedView;

    seedView.DEFAULT_OPTIONS = {
    };

    module.exports = seedView;
});
