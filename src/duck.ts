interface Animal {
  eat(food: string): void;
  sleep(hours: number): void;
};

const cat = {
  eat: (food:string) => { console.log(`Eating ${food}`) },
  purr: () => console.log('Purr'),
  sleep: (hours: number) => console.log(`Sleeping for ${hours} hours`),
};

const dog = {
  eat: (food:string) => { console.log(`Eating ${food}`) },
  bark: () => console.log('Woof'),
  sleep: (hours: number) => console.log(`Sleeping for ${hours} hours`),
};

function feedAnimal(animal: Animal) {
  animal.eat('food');
  animal.sleep(8);
}

feedAnimal(cat);
feedAnimal(dog);