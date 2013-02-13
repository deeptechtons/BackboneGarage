//Build Command
//node r.js -o build.js
({
    baseUrl: ".",
    //paths to modules
    paths: {
        widgetModel: "model/widget",
        widgetView: "views/widget",
        widgetsView: "views/widgets",
        widgets: "collection/widgets",
        appView: "views/app",
        widgetCreate: "views/create",
        text: "../library/text",
        localStore: "../library/store",
        disabledWidgets: "views/disabledWidget"
    },
    //load text plugin and local storage dynamically
    excludeShallow:["text","localStore"],
    //name of optimized file
    name: "app",
    //single file build
    out:"app-build.js",
    /*
    //deploy to release folder`
    dir: "release",
    */
    //make sure html files are excluded
    inlineText:false,
    //remove the build directory and then deploy
    keepBuildDir: false
})