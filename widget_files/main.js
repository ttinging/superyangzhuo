var t = document.getElementById("node").getBoundingClientRect().width;
    console.log('main.js loaded!');
    var e = document.getElementById("box")
      , s = document.getElementById("copy");
      var m = document.getElementById("marquee");
      var now = new Date();
      m.innerText =now.getFullYear()+'-'+((now.getMonth()+1)>=10?(now.getMonth()+1):('0'+(now.getMonth()+1)))+'-'+((now.getDate())>=10?now.getDate():('0'+now.getDate()))+' '+((now.getHours())>=10?now.getHours():('0'+now.getHours()))+':'+((now.getMinutes())>=10?now.getMinutes():('0'+now.getMinutes()))+':'+((now.getSeconds()>=10?now.getSeconds():('0'+now.getSeconds())));
     s.innerText = m.innerText;
    var i = 0;
    setInterval(function() {
        i -= 1,
        -i >= t && (i = 10),
        e.style.transform = "translateX(" + i + "px)"
    }, 30)
