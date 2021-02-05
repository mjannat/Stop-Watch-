var w =  {
    etime: null,
    erst: null,
    ego: null,
    estp:null,
    init: function(){
        w.etime = document.getElementById("pre-time");
        w.erst = document.getElementById("rst");
        w.ego = document.getElementById("str");
        w.estp = document.getElementById("stp");

        w.erst.addEventListener("click",w.reset);
        w.erst.disabled = false;
        w.ego.addEventListener("click",w.start);
        w.ego.disabled = false;
        w.estp.addEventListener("click",w.stop);
        w.est.disabled = false;
    },
    timer: null,
    now: 0,
    tick: function(){
        w.now++;
        var remain = w.now;
        var hours = Math.floor(remain /3600)
        remain -= hours * 3600;
        var mins = Math.floor(remain/60)
        remain -= mins * 60;
        var secs = remain;

    if(hours < 10){
        hours = "0" + hours;
    }
    if(mins < 10){
        mins = "0" + mins;
    }
    if(secs < 10){
        secs = "0" + secs;
    }
    w.etime.innerHTML = hours + ":" + mins + ":" + secs;
    },
    start : function(){
        w.timer = setInterval(w.tick, 1000);
        w.ego.removeEventListener("click",w.start);
        w.ego.addEventListener("click",w.stop);
    },
    stop : function(){
        clearInterval(w.timer);
        w.timer = null;
        w.estp.removeEventListener("click",w.stop);
        w.estp.addEventListener("click",w.start);
    },
    reset : function(){
        if (w.timer != null){
            w.stop();
        }
        w.now = -1;
        w.tick();
    }
};
    window.addEventListener("load",w.init);