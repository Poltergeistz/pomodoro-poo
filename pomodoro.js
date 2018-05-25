    function Pomodoro() {
        let secondes = 59;
        let minutes = 24;
        let longBreak = 15;
        let shortBreak = 5;
        let coundown;
        this.start = function () {
            interval = setInterval(function () { 
                document.getElementById(".count").innerHTML = "" + secondes--; 
                if (secondes > 59){
                    secondes = 0;   
                }
            },
             1000);
        }

        this.done = function () {
            clearInterval(countdown)
            document.getElementById(".count").innerHTML = "Pomodoro terminé!";
        }

        this.timeleft = function () {
            counter--
            if (minutes == 0)
                done();
            else {
                document.getElementById(".count").innerHTML = countdown;
            }
        }
    }


var pomodoro = new Pomodoro

pomodoro.start()

