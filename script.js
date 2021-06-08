///Vue Instance - an object VueJS provides us with

////Control either the whole / certain part of our instance

console.log("Detected");
new Vue({
  /// String - says which element on the page this is gonna control
  el: "#vue-app", ///Control the div with id = vue-app

  /// Stores the data for this Vue Instance [el] -- Object
  data: {
    name: "Shawn",
    job: "Ninja",
    website: "http://www.youtube.com",
    websiteTag:
      '<a href="http://www.youtube.com"> Another way of Using Data Binding</a>',
  },

  /// Function -- Object
  methods: {
    ///Outputs a greeting - Function
    greet: function (time) {
      return "Good " + time;
    },
  },
});
