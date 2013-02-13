
/*

Defines the widgets collection that holds all the widgets
    
*/


define(['widgetModel', 'localStore'], function (widget) {

    var widgets = Backbone.Collection.extend({
        //widget collection is linked to the model widget
        model: widget,
        //defines a local storage location to save the entries
        localStorage: new Backbone.LocalStorage("Widgets"),
        //always keep the collection sorted by title
        comparator: function (widgetInstance) {
            return widgetInstance.get("title");
        },
        addWidget: function (widgetProperties) {
            /*
            model ( based on the fn that invokes this )
            */
            this.create(widgetProperties);
        },
        enabledWidgets: function () {
            return this.filter(function (model) {
                return model.isEnabled();
            });
        },
        disabledWidgets: function () {
            var disabledWidgets = this.filter(function (model) {
                return !model.isEnabled();
            });
            return disabledWidgets;
        }
    });

    //Every widget model will now have a collection property ( since a collection is defined for the model )

    return widgets;


});