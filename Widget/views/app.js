/*

Defines the Application view that Initializes the Place Holders

*/


define(["text!templates/app.html"], function (applicationTemplate) {

    var applicationView = Backbone.View.extend({
        template: $(applicationTemplate).html(),
        tagName: 'div',
        className: 'container',
        initialize: function () {
        },
        render: function () {
            this.$el.html(this.template);
            return this;
        },
        events: {

        }
    });

    return applicationView;

});