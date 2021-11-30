const sentence = "hello there from lighthouse labs \n";
let delay = 0;
const increment  = 400;

for (const char of sentence) {
  setTimeout(() => {
    process.stdout.write(char);
  }, delay);
  delay += increment;
};