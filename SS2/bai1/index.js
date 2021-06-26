import Employee from "./model/entities/Employee.js";
import Staff from "./model/entities/Staff.js";
import Worker from "./model/entities/Worker.js";
import Engineer from "./model/entities/Engineer.js";

const sff1 = new Staff(1, "ttd", 18, "nam", "hn", "check job");
console.log(sff1);
sff1.checkTimeKeeping();
sff1.checkWorkingDay();

const wrk1 = new Worker(2, "ttd", 18, "nam", "hn", 1);
console.log(wrk1);
wrk1.checkTimeKeeping();
wrk1.checkWorkingDay();

const engr1 = new Engineer(3, "ttd", 18, "nam", "hn", "steam");
console.log(engr1);
engr1.checkTimeKeeping();
engr1.checkWorkingDay();
