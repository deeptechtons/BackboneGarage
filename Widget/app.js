requirejs.config({
    //load all required files from the current folder
    baseUrl: ".",
    paths: {
        widgetModel: "model/widget",
        widgetView: "views/widget",
        widgetsView: "views/widgets",
        widgets: "collection/widgets",
        appView: "views/app",
        widgetCreate: "views/create",
        text: "../library/text",
        localStore: "../library/store",
        disabledWidgets:"views/disabledWidget"
    }
});


requirejs(["appView", "widgets", 'widgetCreate', 'widgetsView', 'disabledWidgets'], function (applicationView, widgetCollection, widgetCreateView, widgetsView, disabledWidgetListView) {
    
    var widgets = new widgetCollection();

    new applicationView().render().$el.appendTo("body");

    new disabledWidgetListView({ collection: widgets}).render().$el.appendTo("#DisabledWidgetList");

    new widgetCreateView({ collection: widgets }).render().$el.appendTo("#CreateWidget");

    new widgetsView({ collection: widgets }).render().$el.appendTo("#widgetContainer");

    widgets.fetch();

});