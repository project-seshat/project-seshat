// Currently a singleton class because setInterval() seems to require a global variable. (Ok because we only need one at a time.)
class Stopwatch {
    constructor(running, selector) {
        this.time = 0;
        this.running = running;
        this.selector = selector;
        this.unit = "ms";
        setInterval(function(){ 
            if (window.stopwatch.running)
                window.stopwatch.time += 1;
            $(selector).text("" + window.stopwatch.time + window.stopwatch.unit);
        }, 500); 
    }
    start() {
        this.running = true;
    }
    stop() {
        this.running = false;
    }
    reset() {
        this.time = 0;
    }

};

window.stopwatch = new Stopwatch(true, "#countup-time");