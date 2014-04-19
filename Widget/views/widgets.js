/*
Defines the View for the Collection
*/


define(['text!templates/widgets.html', 'widgetView'], function (widgetsTemplate, widgetView) {

    var widgetsView = Backbone.View.extend({
        template: _.template($(widgetsTemplate).html()),
        tagName: 'div',
        className: 'row',
        initialize: function () {
            //Let this = current view for all methods & callbacks
            _.bindAll(this);

            //after new widget is added to collection render widget
            this.collection.on("add", this.renderNewWidget);

            //after collection is reset render each widget
            this.collection.on("reset", this.render);

            /*

            //after a existing widget is removed remove the widget
            this.collection.on("remove", this.removeWidget);

            //after something is changed in a widget
            this.collection.on("change", this.trackChange);

            //if an error occured then log that exception
            this.collection.on("error", this.logError);


            */
        },
        events: {
        },
        render: function () {
            this.$el.empty();
            //render enabled widets
            this.collection.forEach(this.renderWidget);
            return this;
        },
        renderWidgets: function (collection, options) {
            //render enabled widets
            _.forEach(this.collection.enabledWidgets(), this.renderWidget, this);
        },
        renderNewWidget: function (widget, widgets, options) {
            var rowContainer = null;
            //contains four widget per row
            var existingItemCount = this.$el.find(">*").length;
            if (existingItemCount != 0 && existingItemCount  % 4 == 0 ) {
                rowContainer = $("<div>").addClass("row");
                this.$el.append(rowContainer);
              }            
            new widgetView({ model: widget }).render().$el.appendTo(this.$el);
        },
        renderWidget: function (widget, index, widgets) {
            var rowContainer = null;
            //contains four widget per row
            if (index % 3 == 0) {
                rowContainer = $("<div>").addClass("row");
                this.$el.append(rowContainer);
            }
            new widgetView({ model: widget, position: index }).render().$el.toggle(widget.isEnabled()).appendTo(this.$el);
        }
    });

    return widgetsView;

});