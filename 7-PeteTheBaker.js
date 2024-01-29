/**
 * 29 Jan 2024
 * Kata Training
 * 5 kyu: Pete, The Baker
 *
 * Write a function cakes(), which takes the recipe (object) and the available ingredients
 * (also an object) and returns the maximum number of cakes Pete can bake (integer).
 * For simplicity there are no units for the amounts (e.g. 1 lb of flour or 200 g
 * of sugar are simply 1 or 200). Ingredients that are not present in the
 * objects, can be considered as 0.
 */

/**
 *
 * CODE EXPLANATION:
 *
 */

function cakes(recipe, available) {
  if (Object.keys(recipe).length > Object.keys(available).length) {
    return 0;
  } else {
    let result = {};

    const arrAvailable = Object.keys(available).map((key) => ({
      name: key,
      value: available[key],
    }));

    arrAvailable.forEach((el) => {
      if (recipe[el.name] !== undefined) {
        result = {
          ...result,
          [el.name]: Math.floor(el.value / recipe[el.name]),
        };
      }
    });

    const resultValue = Object.values(result);
    return resultValue.reduce((acc, curr) => Math.min(acc, curr));
  }
}

function solution2(recipe, available) {
  return Math.min(
    ...Object.keys(recipe).map((e) => {
      return available[e] / recipe[e] >> 0;
    })
  );
}

console.log(
  cakes(
    { flour: 500, sugar: 200, eggs: 1 },
    { flour: 1200, sugar: 1200, eggs: 5, milk: 200 }
  )
);

console.log(
  solution2(
    { apples: 3, flour: 300, sugar: 150, milk: 100, oil: 100 },
    { sugar: 500, flour: 2000, milk: 2000 }
  )
);
