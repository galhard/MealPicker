'use strict';

//############ MEALS MAP ############
const meals = new Map([
  //######### FIRST MEAL #########
  [
    'firstMeal',
    new Map([
      [
        'meal1',
        {
          title: 'Kanapki z twarożkiem i rzodkiewką 1',
          time: 40,
          kcal: 400,
          recipe:
            'Ser wymieszaj z jogurtem. Przypraw (pieprz, słodka papryka, bazylia). Posmaruej pieczywo twarożkiem. Na kanapce połóż pokrojoną rzodkiewkę',
          ingredients: {
            grams: new Map([
              ['twaróg chudy', [90, 'g']],
              ['jogurt naturalny', [45, 'g']],
              ['rzodkiewka', [45, 'g']],
            ]),
            nonGrams: new Map([['pieczywo pełnoziarniste', [3, 'kromki']]]),
          },
        },
      ],
      [
        'meal2',
        {
          title: 'Kanapki z twarożkiem i rzodkiewką 2',
          time: 40,
          kcal: 400,
          recipe:
            'Ser wymieszaj z jogurtem. Przypraw (pieprz, słodka papryka, bazylia). Posmaruej pieczywo twarożkiem. Na kanapce połóż pokrojoną rzodkiewkę',
          ingredients: {
            grams: new Map([
              ['twaróg chudy', [90, 'g']],
              ['jogurt naturalny', [45, 'g']],
              ['rzodkiewka', [45, 'g']],
            ]),
            nonGrams: new Map([['pieczywo pełnoziarniste', [3, 'kromki']]]),
          },
        },
      ],
      [
        'meal3',
        {
          title: 'Kanapki z twarożkiem i rzodkiewką 3',
          time: 40,
          kcal: 400,
          recipe:
            'Ser wymieszaj z jogurtem. Przypraw (pieprz, słodka papryka, bazylia). Posmaruej pieczywo twarożkiem. Na kanapce połóż pokrojoną rzodkiewkę',
          ingredients: {
            grams: new Map([
              ['twaróg chudy', [90, 'g']],
              ['jogurt naturalny', [45, 'g']],
              ['rzodkiewka', [45, 'g']],
            ]),
            nonGrams: new Map([['pieczywo pełnoziarniste', [3, 'kromki']]]),
          },
        },
      ],
      [
        'meal4',
        {
          title: 'Kanapki z twarożkiem i rzodkiewką 4',
          time: 40,
          kcal: 400,
          recipe:
            'Ser wymieszaj z jogurtem. Przypraw (pieprz, słodka papryka, bazylia). Posmaruej pieczywo twarożkiem. Na kanapce połóż pokrojoną rzodkiewkę',
          ingredients: {
            grams: new Map([
              ['twaróg chudy', [90, 'g']],
              ['jogurt naturalny', [45, 'g']],
              ['rzodkiewka', [45, 'g']],
            ]),
            nonGrams: new Map([['pieczywo pełnoziarniste', [3, 'kromki']]]),
          },
        },
      ],
      [
        'meal5',
        {
          title: 'Kanapki z twarożkiem i rzodkiewką 5',
          time: 40,
          kcal: 400,
          recipe:
            'Ser wymieszaj z jogurtem. Przypraw (pieprz, słodka papryka, bazylia). Posmaruej pieczywo twarożkiem. Na kanapce połóż pokrojoną rzodkiewkę',
          ingredients: {
            grams: new Map([
              ['twaróg chudy', [90, 'g']],
              ['jogurt naturalny', [45, 'g']],
              ['rzodkiewka', [45, 'g']],
            ]),
            nonGrams: new Map([['pieczywo pełnoziarniste', [3, 'kromki']]]),
          },
        },
      ],
    ]),
  ],
  //######### SECOND MEAL #########
  [
    'secondMeal',
    new Map([
      [
        'meal1',
        {
          title: 'Kanapki z twarożkiem i rzodkiewką 1',
          time: 40,
          kcal: 400,
          recipe:
            'Ser wymieszaj z jogurtem. Przypraw (pieprz, słodka papryka, bazylia). Posmaruej pieczywo twarożkiem. Na kanapce połóż pokrojoną rzodkiewkę',
          ingredients: {
            grams: new Map([
              ['twaróg chudy', [90, 'g']],
              ['jogurt naturalny', [45, 'g']],
              ['rzodkiewka', [45, 'g']],
            ]),
            nonGrams: new Map([['pieczywo pełnoziarniste', [3, 'kromki']]]),
          },
        },
      ],
      [
        'meal2',
        {
          title: 'Kanapki z twarożkiem i rzodkiewką 2',
          time: 40,
          kcal: 400,
          recipe:
            'Ser wymieszaj z jogurtem. Przypraw (pieprz, słodka papryka, bazylia). Posmaruej pieczywo twarożkiem. Na kanapce połóż pokrojoną rzodkiewkę',
          ingredients: {
            grams: new Map([
              ['twaróg chudy', [90, 'g']],
              ['jogurt naturalny', [45, 'g']],
              ['rzodkiewka', [45, 'g']],
            ]),
            nonGrams: new Map([['pieczywo pełnoziarniste', [3, 'kromki']]]),
          },
        },
      ],
      [
        'meal3',
        {
          title: 'Kanapki z twarożkiem i rzodkiewką 3',
          time: 40,
          kcal: 400,
          recipe:
            'Ser wymieszaj z jogurtem. Przypraw (pieprz, słodka papryka, bazylia). Posmaruej pieczywo twarożkiem. Na kanapce połóż pokrojoną rzodkiewkę',
          ingredients: {
            grams: new Map([
              ['twaróg chudy', [90, 'g']],
              ['jogurt naturalny', [45, 'g']],
              ['rzodkiewka', [45, 'g']],
            ]),
            nonGrams: new Map([['pieczywo pełnoziarniste', [3, 'kromki']]]),
          },
        },
      ],
      [
        'meal4',
        {
          title: 'Kanapki z twarożkiem i rzodkiewką 4',
          time: 40,
          kcal: 400,
          recipe:
            'Ser wymieszaj z jogurtem. Przypraw (pieprz, słodka papryka, bazylia). Posmaruej pieczywo twarożkiem. Na kanapce połóż pokrojoną rzodkiewkę',
          ingredients: {
            grams: new Map([
              ['twaróg chudy', [90, 'g']],
              ['jogurt naturalny', [45, 'g']],
              ['rzodkiewka', [45, 'g']],
            ]),
            nonGrams: new Map([['pieczywo pełnoziarniste', [3, 'kromki']]]),
          },
        },
      ],
      [
        'meal5',
        {
          title: 'Kanapki z twarożkiem i rzodkiewką 5',
          time: 40,
          kcal: 400,
          recipe:
            'Ser wymieszaj z jogurtem. Przypraw (pieprz, słodka papryka, bazylia). Posmaruej pieczywo twarożkiem. Na kanapce połóż pokrojoną rzodkiewkę',
          ingredients: {
            grams: new Map([
              ['twaróg chudy', [90, 'g']],
              ['jogurt naturalny', [45, 'g']],
              ['rzodkiewka', [45, 'g']],
            ]),
            nonGrams: new Map([['pieczywo pełnoziarniste', [3, 'kromki']]]),
          },
        },
      ],
    ]),
  ],
  //######### THIRD MEAL #########
  [
    'thirdMeal',
    new Map([
      [
        'meal1',
        {
          title: 'Kanapki z twarożkiem i rzodkiewką 1',
          time: 40,
          kcal: 400,
          recipe:
            'Ser wymieszaj z jogurtem. Przypraw (pieprz, słodka papryka, bazylia). Posmaruej pieczywo twarożkiem. Na kanapce połóż pokrojoną rzodkiewkę',
          ingredients: {
            grams: new Map([
              ['twaróg chudy', [90, 'g']],
              ['jogurt naturalny', [45, 'g']],
              ['rzodkiewka', [45, 'g']],
            ]),
            nonGrams: new Map([['pieczywo pełnoziarniste', [3, 'kromki']]]),
          },
        },
      ],
      [
        'meal2',
        {
          title: 'Kanapki z twarożkiem i rzodkiewką 2',
          time: 40,
          kcal: 400,
          recipe:
            'Ser wymieszaj z jogurtem. Przypraw (pieprz, słodka papryka, bazylia). Posmaruej pieczywo twarożkiem. Na kanapce połóż pokrojoną rzodkiewkę',
          ingredients: {
            grams: new Map([
              ['twaróg chudy', [90, 'g']],
              ['jogurt naturalny', [45, 'g']],
              ['rzodkiewka', [45, 'g']],
            ]),
            nonGrams: new Map([['pieczywo pełnoziarniste', [3, 'kromki']]]),
          },
        },
      ],
      [
        'meal3',
        {
          title: 'Kanapki z twarożkiem i rzodkiewką 3',
          time: 40,
          kcal: 400,
          recipe:
            'Ser wymieszaj z jogurtem. Przypraw (pieprz, słodka papryka, bazylia). Posmaruej pieczywo twarożkiem. Na kanapce połóż pokrojoną rzodkiewkę',
          ingredients: {
            grams: new Map([
              ['twaróg chudy', [90, 'g']],
              ['jogurt naturalny', [45, 'g']],
              ['rzodkiewka', [45, 'g']],
            ]),
            nonGrams: new Map([['pieczywo pełnoziarniste', [3, 'kromki']]]),
          },
        },
      ],
      [
        'meal4',
        {
          title: 'Kanapki z twarożkiem i rzodkiewką 4',
          time: 40,
          kcal: 400,
          recipe:
            'Ser wymieszaj z jogurtem. Przypraw (pieprz, słodka papryka, bazylia). Posmaruej pieczywo twarożkiem. Na kanapce połóż pokrojoną rzodkiewkę',
          ingredients: {
            grams: new Map([
              ['twaróg chudy', [90, 'g']],
              ['jogurt naturalny', [45, 'g']],
              ['rzodkiewka', [45, 'g']],
            ]),
            nonGrams: new Map([['pieczywo pełnoziarniste', [3, 'kromki']]]),
          },
        },
      ],
      [
        'meal5',
        {
          title: 'Kanapki z twarożkiem i rzodkiewką 5',
          time: 40,
          kcal: 400,
          recipe:
            'Ser wymieszaj z jogurtem. Przypraw (pieprz, słodka papryka, bazylia). Posmaruej pieczywo twarożkiem. Na kanapce połóż pokrojoną rzodkiewkę',
          ingredients: {
            grams: new Map([
              ['twaróg chudy', [90, 'g']],
              ['jogurt naturalny', [45, 'g']],
              ['rzodkiewka', [45, 'g']],
            ]),
            nonGrams: new Map([['pieczywo pełnoziarniste', [3, 'kromki']]]),
          },
        },
      ],
      [
        'meal6',
        {
          title: 'Kanapki z twarożkiem i rzodkiewką 6',
          time: 40,
          kcal: 400,
          recipe:
            'Ser wymieszaj z jogurtem. Przypraw (pieprz, słodka papryka, bazylia). Posmaruej pieczywo twarożkiem. Na kanapce połóż pokrojoną rzodkiewkę',
          ingredients: {
            grams: new Map([
              ['twaróg chudy', [90, 'g']],
              ['jogurt naturalny', [45, 'g']],
              ['rzodkiewka', [45, 'g']],
            ]),
            nonGrams: new Map([['pieczywo pełnoziarniste', [3, 'kromki']]]),
          },
        },
      ],
    ]),
  ],
]);
meals.forEach(function (value1, key, _) {
  //Value = firstMeal, secondMeal, thirdMeal

  const mealContainer = document.querySelector(`.${key}__container`);
  value1.forEach(function (value2, key2, map) {
    //Value = meal1, meal2, meal3,... = each meals
    mealContainer.insertAdjacentHTML(
      //Add meals to app
      'afterbegin',
      `<div class="meal flexCol">
      <ion-icon class="infoIcon__card-min" name="information-circle" title="info" ></ion-icon> <ion-icon class="addIcon__card-min" name="add-circle"></ion-icon> <div class="meal__info"> <div class="meal__info__time"> <ion-icon class="timeIcon__card-min" name="hourglass-outline"></ion-icon> <span class="meal__info__time__text">${`'${value2.time}`}</span> </div> <p class="meal__info__kcal">${
        value2.kcal
      } kcal</p> </div> <img class="meal__img" src="img/meal.jpg" alt="" /> <p class="meal__name">${
        value2.title
      }</p> </div>`
    );
    //Opening Meal Max Card
    const mealCards = document.querySelector(`.${key}__container .meal`);
    const infoBtn = mealCards.querySelector('.infoIcon__card-min');
    const body = document.querySelector('body');
    infoBtn.addEventListener('click', function () {
      //Combining Ingredients into one string
      function combinedIngredients(ingredientsType) {
        let ing = [];
        ingredientsType.forEach(function (value, keys) {
          const valueSum = `${value[0]} ${value[1]}`;
          let add = keys.padEnd(25, '.') + valueSum.padStart(15, '.');
          ing.push(add);
        });
        return ing;
      }

      let allIngredients = combinedIngredients(value2.ingredients.grams)
        .concat(combinedIngredients(value2.ingredients.nonGrams))
        .join('\n');
      //const valueduplicate = `${value[0] * 2} ${value[1]}`; Przy dodawaniu kolejnych osób

      document.querySelector('.mealMax-bcblack').style.display = 'block';
      body.insertAdjacentHTML(
        'afterbegin',
        `<div class="mealMax-fixed"> <div class="mealMax"> <ion-icon class="closeIcon__card-max" name="close-outline"></ion-icon> <div class="mealMax__title"> <h4> ${
          value2.title
        }<ion-icon class="addIcon__card-max" name="add-circle" ></ion-icon> </h4> </div> <div class="mealMax__info"> <div class="mealMax__info__persons"> <ion-icon class="addPersonIcon__card-max" name="person-add" ></ion-icon ><span class="mealMax__info__persons__number">1</span class="mealMax__info__persons__text"><span>os.</span> <ion-icon class="removePersonIcon__card-max" name="person-remove" ></ion-icon> </div> <div class="mealMax__info__time"> <ion-icon class="timeIcon__card-max" name="hourglass-outline" ></ion-icon> <span class="mealMax__info__time__text">${`'${value2.time}`}</span> </div> <p class="mealMax__info__kcal">${
          value2.kcal
        } kcal</p> </div> <img class="mealMax__img" src="img/meal.jpg" alt="" /> <div class="mealMax__ingredients"> <p class="mealMax__ingredients__title">składniki:</p> <p class="mealMax__ingredients__content">${allIngredients}</p> </div> <div class="mealMax__recipe"> <p class="mealMax__recipe__title">Przygotowanie:</p> <p class="mealMax__recipe__content">${
          value2.recipe
        }</p> </div> </div> </div>`
      );
      //CLosing Card Max
      const closeBtn = document.querySelector('.closeIcon__card-max');
      closeBtn.addEventListener('click', function () {
        document.querySelector('.mealMax-fixed').remove();
        document.querySelector('.mealMax-bcblack').style.display = 'none';
      });
      //Adding/Removing Person & calculating ingredients value
      const addPerson = document.querySelector('.addPersonIcon__card-max');
      const removePerson = document.querySelector(
        '.removePersonIcon__card-max'
      );
      //Persons quantity - needed to multiple ingredients value
      let nrOfPersons = document.querySelector(
        '.mealMax__info__persons__number'
      );
      //Function creating new ingredients string; I will try to shorten this function
      function newIngredientString() {
        let nonGramsIng = [];
        value2.ingredients.nonGrams.forEach(function (value, keys, map) {
          const nonGramsValueNew = value[0] * nrOfPersons.textContent;
          let nonGramsNewString =
            keys.padEnd(25, '.') +
            `${String(nonGramsValueNew)} ${value[1]}`.padStart(15, '.');
          nonGramsIng.push(nonGramsNewString);
          return nonGramsIng;
        });
        let gramsIng = [];
        value2.ingredients.grams.forEach(function (value, keys, map) {
          const gramsValueNew = value[0] * nrOfPersons.textContent;
          let gramsNewString =
            keys.padEnd(25, '.') +
            `${String(gramsValueNew)} ${value[1]}`.padStart(15, '.');
          gramsIng.push(gramsNewString);
          return gramsIng;
        });
        const allIngredientsNew = gramsIng.concat(nonGramsIng).join('\n');
        document.querySelector('.mealMax__ingredients__content').textContent =
          allIngredientsNew;
      }
      //Adding Person & changing ingredients quantity
      addPerson.addEventListener('click', function () {
        nrOfPersons.textContent = nrOfPersons.textContent * 1 + 1;
        nrOfPersons.textContent === '1'
          ? (removePerson.style.display = 'none')
          : (removePerson.style.display = 'block');
        newIngredientString();
      });
      //Removing Person & changing ingredients quantity
      removePerson.addEventListener('click', function () {
        nrOfPersons.textContent = nrOfPersons.textContent * 1 - 1;
        nrOfPersons.textContent === '1'
          ? (removePerson.style.display = 'none')
          : (removePerson.style.display = 'block');
        newIngredientString();
      });
    });
  });
});
// 'meal6',
// {
//   title: 'Kanapki z twarożkiem i rzodkiewką 6',
//   time: 40,
//   kcal: 400,
//   recipe:
//     'Ser wymieszaj z jogurtem. Przypraw (pieprz, słodka papryka, bazylia). Posmaruej pieczywo twarożkiem. Na kanapce połóż pokrojoną rzodkiewkę',
//   ingredients: {
//     grams: new Map([
//       ['twaróg chudy', [90, 'g']],
//       ['jogurt naturalny', [45, 'g']],
//       ['rzodkiewka', [45, 'g']],
//     ]),
//     nonGrams: new Map([['pieczywo pełnoziarniste', [3, 'kromki']]]),
//   },
// },
// LIST

const list = document.querySelector('.list');
//Showing List
const listCounter = document.querySelector('.list__counter');
listCounter.addEventListener('click', function () {
  list.style.display = 'block';
  listClose.style.display = 'block';
});

//Hiding List
const listClose = document.querySelector('.closeIcon__list');
listClose.addEventListener('click', function () {
  list.style.display = 'none';
  listClose.style.display = 'none';
});
//COUNTER

//Number of children in every days of the week
const listDayContainers = document.querySelectorAll('.list__day__container');
let listNrOfChildren = 0;
listDayContainers.forEach(day => {
  const elNumber = day.childElementCount;
  return (listNrOfChildren += elNumber);
});
//Insert number of children to Counter
document.querySelector('.list__counter').textContent = `${listNrOfChildren}/21`;
