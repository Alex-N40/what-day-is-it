var weekday = new Date().toLocaleString("en-US", { weekday: "long" });
//var weekday = "Saturday";
// Your code here
// console.log("Today is " + weekday + ".");
if (weekday === "Monday") {
  console.log("Let's get this week started!");
} else if (weekday === "Tuesday") {
  console.log("Worky work!");
} else if (weekday === "Wednesday") {
  console.log("Worky work work!");
} else if (weekday === "Thursday") {
  console.log("Worky worky work work!");
} else if (weekday === "Friday") {
  console.log("Weekend's almost here!");
} else {
  console.log("WEEKEND, YAYYYY!!!");
}

/* Result in console on Thursday:
Worky worky work work!
