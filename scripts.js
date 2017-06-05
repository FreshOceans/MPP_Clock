var TimeWizard = {
  initialize: function() {
    TimeWizard.updateTime()
  },
  updateTime: function() {
    // console.log("== startTime ==");
    var today = new Date();
    var h = today.getHours();
    var m = today.getMinutes();
    var s = today.getSeconds();
    m = TimeWizard.checkTime(m);
    s = TimeWizard.checkTime(s);
    var hH = TimeWizard.hexTime(h);
    var mH = TimeWizard.hexTime(m);
    var sH = TimeWizard.hexTime(s);
    mH = TimeWizard.checkTime(mH);
    sH = TimeWizard.checkTime(sH);
    hH = TimeWizard.checkTime(hH);
    document.getElementById("realClock").innerHTML = h + ":" + m + ":" + s;
    document.getElementById("hexClock").innerHTML = hH + ":" + mH + ":" + sH;
    t = setTimeout(function() {
      TimeWizard.updateTime()
    }, 1000);
  },
  hexTime: function(num) {
    // console.log("== hexTime ==");
    hexString = num.toString(16);
    // console.log("hexString:", hexString);
    return hexString;
  },
  checkTime: function(i) {
    // console.log("== checkTime ==");
    return (i < 10) ? "0" + i : i;
  }
  // changeColors: function() {
  //   var currentTime = new Date().getSeconds();
  //   colors: ["#3E69F6", "#0FDB38", "#CB3025"];
  //   if (7 <= currentTime && currentTime < 20) {
  //       if (document.body) {
  //           document.body.background = "http://itsnotch.com/tumblr/images/daytime_bg.jpg";
  //       }
  //   }
  //   else {
  //       if (document.body) {
  //           document.body.background = "http://itsnotch.com/tumblr/images/nighttime_bg.jpg";
  //       }
  //   }
  // }

};
TimeWizard.initialize();

// TimeWizard.changeColors();
