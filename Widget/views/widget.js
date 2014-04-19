/*
Defines the View for the widget
*/


define(['text!templates/widget.html'], function (widgetTemplate) {

    var widgetView = Backbone.View.extend({
        template: widgetTemplate,
        tagName: 'div',
        className: 'span3',
        initialize: function () {
            //Let this = current view for all methods & callbacks
            _.bindAll(this);

            //hide ui when model is disabled
            this.model.on("change:disabled", this.toggleWidget);

            //subscribe to model destroy
            this.model.on("remove", this.removeWidget);
        },
        events: {
            'click .icon-remove': 'disableWidget'
        },
        render: function () {
            this.$el.empty();
            this.$el.html(_.template(this.template, this.model.toJSON()));
            return this;
        },
        disableWidget: function () {
            this.model.disable();            
        },
        toggleWidget: function () {
            if (this.model.isEnabled())
                this.$el.fadeIn();
            else
                this.$el.fadeOut();
        },
        removeWidget: function () {
            this.undeletegateEvents();
            this.$el.empty().remove();
        }
    });

    return widgetView;

});