


define(['text!templates/create.html', 'widgetModel'], function (createTemplate, widget) {

    var createWidgetView = Backbone.View.extend({
        template: createTemplate,
        tagName: "div",
        className: "well",
        initialize: function () {
            _.bindAll(this);
        },
        render: function () {
            this.$el.html(this.template);
            return this;
        },
        events: {
            'click #btnCreateWidget': 'addWidget'
        },
        addWidget: function () {
            var instance = new widget();
            instance.set({
                title: this.$el.find('#txtWidgetName').val(),
                content: this.$el.find('#txtWidgetContent').val(),
                disabled:false
            });
            this.collection.addWidget(instance);
        }
    });

    return createWidgetView;

});