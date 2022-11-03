const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function addNumbers(sum, numsLeft, completionCallback) {
  if (numsLeft > 0) {
    rl.question("Provide a number:", (response) => {
      let number = parseInt(response);
      sum += number;
      numsLeft--;
      console.log(sum);
      addNumbers(sum, numsLeft, completionCallback);
    });
  } else {
    completionCallback(sum);
  }
}
addNumbers(0, 3, (sum) => console.log(`Total Sum: ${sum}`));
