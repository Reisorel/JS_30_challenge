const dogs = [{ name: 'Snickers', age: 2 }, { name: 'hugo', age: 8 }];

function makeGreen() {
  const p = document.querySelector('p');
  p.style.color = '#BADA55';
  p.style.fontSize = '50px';
}

// Regular
console.log("Hello");

// Interpolated
const variable = "donut"
console.log(`I am ${variable}`);
// Styled

console.log('%c I am some great text', 'font-size:50px; background:red; text-shadow: 10px 10px 0 blue')


// warning!

console.warn("Oh no!")

// Error :

console.error("Surement pas!")

// Info

console.info("crocodile eat 3-4 people a year")

// Testing
const p = document.querySelector('p');
console.assert(p.classList.contains('ouch'), 'That is wrong!');

// clearing
console.clear();
// Viewing DOM Elements

console.log(p);
console.dir(p);

console.clear();
// Grouping together

dogs.forEach(dog => {
  console.group(`${dog.name}`);
  console.log(`this is ${dog.name}`);
  console.log(`${dog.name} is ${dog.age} years old`);
  console.log(`${dog.name} is ${dog.age * 7} dog years`);
  console.groupEnd(`${dog.name}`)
});

// counting

console.count("Buddy")
console.count("Buddy")
console.count("Buddy")
console.count("Buddy")
console.count("Buddy")

// timing

console.time('fetching data');
fetch('https://api.github.com/users/wesbos')
  .then(data => data.json())
  .then(data => {
    console.timeEnd('fetching data');
  });


  console.table(dogs);
