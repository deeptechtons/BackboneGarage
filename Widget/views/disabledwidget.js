/*
    Defines the View for the disabled widget list
*/


define(function () {

    var disabledWidgetView = Backbone.View.extend({
        tagName: "li",
        initialize: function () {
            _.bindAll(this);
            this.model.on("change:disabled", this.hideWidget);
        },
        events: {
            "click": "enableWidget"
        },
        render: function () {
            this.$el.attr({title:"click to enable widget "+this.model.get("title")});
            this.$el.html(this.model.get("title"));
            return this;
        },
        hideWidget: function () {
            if (this.model.isEnabled())
                this.$el.fadeOut();
            else
                this.$el.fadeIn();
        },
        enableWidget: function () {
            this.model.enable();
        }
    });


    var disabledWidgetListView = Backbone.View.extend({
        tagName: "ul",
        id: "disabledWidgets",
        className: "unstyled",
        initialize: function () {
            _.bindAll(this);
            this.collection.on("change:disabled", this.render);
            this.collection.on("reset", this.render);
            this.collection.on("add", this.render);
        },
        render: function () {
            this.$el.empty();
            var disabledWidgets = this.collection.disabledWidgets();
            _.forEach(disabledWidgets, function (widget) {
                this.$el.append(new disabledWidgetView({ model: widget }).render().el);
            }, this);
            return this;
        }
    });

    return disabledWidgetListView;

});