var TimeWizard = {
  initialize: function() {
    TimeWizard.updateTime()
  },

  updateTime: function() {
    // console.log("== updateTime ==");
    var today = new Date();
    // ===== Real Clock =====
    var h = today.getHours();
    if (h > 12) {
      h = "0" + (h - 12);
    };
    var m = today.getMinutes();
    var s = today.getSeconds();
    m = TimeWizard.checkTime(m);
    s = TimeWizard.checkTime(s);
    // ===== Hex Clock ======
    var hH = TimeWizard.hexTime(h);
    var mH = TimeWizard.hexTime(m);
    var sH = TimeWizard.hexTime(s);
    mH = TimeWizard.checkTime(mH);
    sH = TimeWizard.checkTime(sH);
    hH = TimeWizard.checkTime(hH);
    // ===== Clocks Display =====
    document.getElementById("realClock").innerHTML = h + ":" + m + ":" + s;
    document.getElementById("hexClock").innerHTML = hH + ":" + mH + ":" + sH;
    // ====== Background Change ======
    document.getElementById("Clocks-Container").style.backgroundColor = 'rgb(' + hH + ',' + mH + ',' + sH + ')';

    t = setTimeout(function() {
      TimeWizard.updateTime()
    }, 1000);
  },
  // ====== Real Time to Hexadecimal Time =======
  hexTime: function(num) {
    // console.log("== hexTime ==");
    hexString = num.toString(16);
    // console.log("hexString:", hexString);
    return hexString;
  },
  // ======  CheckTime ======
  checkTime: function(i) {
    // console.log("== checkTime ==");
    return (i.length < 2 ) ? "0" + i : i;
  }

};
TimeWizard.initialize();
