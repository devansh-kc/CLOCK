function currentTime() {
  let date = new Date();
  let hour = date.getHours();
  let min = date.getMinutes();
  let sec = date.getSeconds();
  let session = "PM";
  /* This code block is checking if the value of the `hour` variable is equal to 0. If it is, then it
sets the value of `hour` to 12. This is done to handle the case where the hour is 12:00 AM, which is
traditionally represented as 12:00 instead of 00:00. */
  if (hour == 0) {
    hour = 12;
  }
  if (hour > 12) {
    hour = hour - 12;
    session = "PM";
  }
  /* This is a ternary operator that checks if the value of `hour` is less than 10. If it is, then it
adds a "0" before the hour value, otherwise it returns the original hour value. This is used to
ensure that the hour value is always displayed with two digits, such as "09" instead of just "9". */
  hour = hour < 10 ? "0" + hour : hour;
  min = min < 10 ? "0" + min : min;
  sec = sec < 10 ? "0" + sec : sec;

  let time = `${hour} : ${min}: ${sec}  ${session}`;
  document.getElementById("time").innerHTML = time;
  /* `setTimeout` is a built-in JavaScript function that allows you to execute a function after a
specified amount of time has passed. In this case, the `setTimeout` function is used to call the
`currentTime` function after a delay of 1000 milliseconds (1 second). The return value of
`setTimeout` is assigned to the variable `t`, which can be used to cancel the timeout using the
`clearTimeout` function if needed. */
  let t = setTimeout(function () {
    currentTime();
  }, 1000);
}
currentTime();
