function greet(name) {
    // Print greeting to the console
    console.log(`Hello, ${name}!`);
  }
  
  if (require.main === module) {
    greet("World");
  }
  