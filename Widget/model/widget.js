/*

Defines the Widget model that defines how the widget looks

*/


define(function () {

    var widget = Backbone.Model.extend({
        defaults: function () {
            return {
                title: 'Widget Title',
                content: 'Hi I am widget',
                disabled: false
            };
        },
        validate: function (changedProperties) {
            /*
            changed properties
            [attributes,changes:{id: true}]
            */
            return 0;
            var errorList = [];
            var model = _.extend(changedProperties, this.attributes);
            if (!model.Title) {
                errorList.push({ Title: "Title is required" });
            }
            if (!model.Content) {
                errorList.push({ Content: "Content is required" });
            }
            console.log(arguments, 'Widget Validate Event');
            return errorList;
        },
        disable: function () {
            //disable only when enabled
            if (!this.get("disabled")) {
                this.set({ "disabled": true });
                this.save();
            }
        },
        enable: function () {
            //enable only when disabled
            if (this.get("disabled")) {
                this.set({ "disabled": false });
                this.save();
            }
        },
        isEnabled: function () {
            return !this.get("disabled");
        }
    });
    return widget;
});