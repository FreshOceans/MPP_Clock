var TimeWizard = {
  checkTime: function(i) {
    // console.log("== checkTime ==");
    return (i < 10) ? "0" + i : i;
  },
  startTime: function() {
    // console.log("== startTime ==");
    var today = new Date();
    var h = today.getHours();
    var m = today.getMinutes();
    var s = today.getSeconds();
    m = TimeWizard.checkTime(m);
    s = TimeWizard.checkTime(s);
    document.getElementById("realTime").innerHTML = h + ":" + m + ":" + s;
    t = setTimeout(function() {
      TimeWizard.startTime()
    }, 500);
  },
  hexTime: function() {
    console.log("== hexTime ==");
  }
};





TimeWizard.checkTime();
TimeWizard.startTime();
TimeWizard.hexTime();
