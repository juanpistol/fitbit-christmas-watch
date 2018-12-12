import clock from "clock";
import { HeartRateSensor } from "heart-rate";
import { today } from "user-activity";
import document from "document";
import { preferences } from "user-settings";
import * as util from "../common/utils";

// Update the clock every minute
clock.granularity = "minutes";

// Get a handle on the <text> element03+.
const _time = document.getElementById("time");
const _amPm = document.getElementById("amPm");
const _date = document.getElementById("date");

const _heart = document.getElementById("heart");
_heart.text = '--';
const _steps = document.getElementById("steps");
_steps.text = '--'

// Update the <text> element every tick with the current time
clock.ontick = (evt) => {
  let todayDate = evt.date;
  let hours = todayDate.getHours();
  let amPm = hours >= 12 ? "pm" : "am";    

  if (preferences.clockDisplay === "12h") {
    // 12h format
    hours = hours % 12 || 12;
  } else {
    // 24h format
    hours = util.zeroPad(hours);
  }
  let mins = util.zeroPad(todayDate.getMinutes());
  
  _time.text = `${hours}:${mins}`;  
  _amPm.text = amPm.toUpperCase();
  
  _date.text = util.formatDate(new Date());
  
  console.log(today);
  if(typeof today.local != 'undefined')
    _steps.text = today.local.steps || '0';
}

let hrm = new HeartRateSensor({ frequency: 1 });
hrm.onreading = () => {
  _heart.text = hrm.heartRate;
};
hrm.start();


