function divide(a, b) {
  try {
    if (b === 0) {
      throw new Error("Cannot divide by zero!");
    }
    console.log("Result:", a / b);
  } catch (error) {
    console.log("Error Name:", error.name);
    console.log("Error Message:", error.message);
  } finally {
    console.log("Division operation completed.");
  }
}
divide(10, 0);  
divide(20, 5); 
