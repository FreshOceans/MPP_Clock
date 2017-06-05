var TimeWizard = {
  checkTime: function(i) {
    console.log("== checkTime ==");
    if (i < 10) {
      i = "0" + i;
    }
    return i;
  },
  startTime: function() {
    var today = new Date();
    var h = today.getHours();
    var m = today.getMinutes();
    var s = today.getSeconds();
    // add a zero in front of numbers<10
    m = TimeWizard.checkTime(m);
    s = TimeWizard.checkTime(s);
    document.getElementById("realTime").innerHTML = h + ":" + m + ":" + s;
    t = setTimeout(function() {
      TimeWizard.startTime()
    }, 500);
  }

};

TimeWizard.checkTime();
TimeWizard.startTime();
