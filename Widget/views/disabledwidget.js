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
            this.$el.attr({ title: "click to enable widget " + this.model.get("title") }).toggle(!this.model.isEnabled());
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
            this.collection.on("change:disabled", this.renderChanged);
            this.collection.on("reset", this.render);
            this.collection.on("add", this.render);
        },
        render: function () {
            this.$el.empty();
            this.collection.forEach(function (widget) {
                this.$el.append(new disabledWidgetView({ model: widget }).render().el);
            },this);
            return this;
        },
        renderChanged: function (model, newValue, changeset) {

        }
    });

    return disabledWidgetListView;

});