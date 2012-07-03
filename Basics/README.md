## **Backbone Application Basics** ##

----------


**What you should learn here?**

This is not to teach you basics of backbonejs but how you should use it to costruct apps with it.You should observe how the interaction occurs between the core of backbone.js (Model, Collection, View and Router). Examples are fairly simple hence you shall not be intrigued by it's vastness.


**Whats in this example?**

Simply put this example tracks changes in mouse position and displays it


**Who is this model?**

Position variable holds the model source. It contains **x** and **y** attributes that are **zeroed** out by default

**What does the view do?**

Subscribes to the models attribute change and re-renders itself using html template