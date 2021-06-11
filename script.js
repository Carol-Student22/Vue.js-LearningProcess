new Vue({
  el: "#vue-app",
  data: {
    age: 25,
    x: 0,
    y: 0,
  }, ///End of data
  methods: {
    add: function (inc) {
      //this.age++;
      this.age += inc;
    },
    subtract: function (dec) {
      //this.age--;
      this.age -= dec;
    },
    updateXY: function (event) {
      //console.log(event);
      this.x = event.offsetX;
      this.y = event.offsetY;
    },
  }, //End of methods
});
