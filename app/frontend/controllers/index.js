import { application } from "./application";
import SignageController from "./signage_controller.js";
import TimerCounterController from "./timer_counter_controller.js";

application.register("signage", SignageController);
application.register("timer-counter",TimerCounterController);

