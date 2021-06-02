///Vue Instance - an object VueJS provides us with

////Control either the whole / certain part of our instance
new Vue({
  /// String - says which element on the page this is gonna control
  el: "#vue-app", ///Control the div with id = vue-app

  /// Stores the data for this Vue Instance [el] -- Obkect
  data: {
    name: Shawn,
  },
});
