

function checkBalance(balance, amount) {
  return new Promise((resolve, reject) => {
    console.log("Checking balance...");
    setTimeout(() => {
      if (balance >= amount) {
        resolve("Balance OK");
      } else {
        reject("Insufficient funds");
      }
    }, 1000);
  });
}

function deductAmount(balance, amount) {
  return new Promise((resolve, reject) => {
    console.log("Deducting amount...");
    setTimeout(() => {
      if (amount > 0) {
        resolve(balance - amount);
      } else {
        reject("Invalid amount");
      }
    }, 1000);
  });
}

function confirmTransaction(newBalance) {
  return new Promise((resolve) => {
    console.log("Confirming transaction...");
    setTimeout(() => {
      resolve(`Transaction complete | New Balance: ${newBalance}`);
    }, 1000);
  });
}

let balance = 150;   
let amount = 200;   

checkBalance(balance, amount)
  .then(() => deductAmount(balance, amount))
  .then((newBalance) => confirmTransaction(newBalance))
  .then((message) => console.log(message))
  .catch((error) => console.error(error));