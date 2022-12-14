class Clock {
  constructor() {
    // 1. Create a Date object.
    let currentDate = new Date();
    // 2. Store the hours, minutes, and seconds.
    this.seconds = currentDate.getSeconds();
    this.minutes = currentDate.getMinutes();
    this.hours = currentDate.getHours();
    // 3. Call printTime.
    this.printTime();
    // // 4. Schedule the tick at 1 second intervals.
    setInterval(this._tick.bind(this), 1000);
  }

  printTime() {
    // Format the time in HH:MM:SS
    let formattedTime =
      String(this.hours).padStart(2, 0) +
      ":" +
      String(this.minutes).padStart(2, 0) +
      ":" +
      String(this.seconds).padStart(2, 0);
    // Use console.log to print it.
    console.log(formattedTime);
  }

  _tick() {
    // 1. Increment the time by one second.
    this.seconds += 1;

    if (this.seconds > 59) {
      this.minutes += 1;
      this.seconds = 0;
    }

    if (this.minutes > 59) {
      this.hours += 1;
      this.minutes = 0;
    }
    // 2. Call printTime.
    this.printTime();
  }
}

let clock = new Clock();
