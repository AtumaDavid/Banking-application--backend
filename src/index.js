const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

console.log("Welcome To My Banking App");
console.log("\n1. Create new Account");
console.log("2. Deposit Money");
console.log("3. Withdraw Money");
console.log("4. Check Balance");
console.log("5. Transfer Money");
console.log("6. Exit");

const inputs = async () => {
  return new Promise((resolve, reject) => {
    rl.question("\nEnter your choice: ", (ch) => {
      resolve(ch);
    });
  });
};

const start = async () => {
  while (true) {
    const choice = await inputs();
    if (choice === "1") {
      console.log("Create Account");
    } else if (choice === "2") {
      console.log("Please Deposit");
    } else if (choice === "3") {
      console.log("Withdraw");
    } else if (choice === "4") {
      console.log("Check Balance");
    } else if (choice === "5") {
      console.log("Transfer");
    } else if (choice === "6") {
      console.log("Bye");
      rl.close();
      break; // Exit the loop when the user chooses '6'
    } else {
      console.log("Invalid choice. Please select a valid option.");
    }
  }

  process.exit();
};

start();
