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
      [
        'meal6',
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
        'meal7',
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
        'meal8',
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
        'meal9',
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
        'meal10',
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
      <ion-icon class="infoIcon__card-min" name="information-circle" title="info" ></ion-icon> <div class="meal__info"> <div class="meal__info__time"> <ion-icon class="timeIcon__card-min" name="hourglass-outline"></ion-icon> <span class="meal__info__time__text">${`'${value2.time}`}</span> </div> <p class="meal__info__kcal">${
        value2.kcal
      } kcal</p> </div> <img class="meal__img" src="img/meal.webp" alt="" /> <p class="meal__name">${
        value2.title
      }</p> </div>`
    );

    //#Opening Meal Max Card
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

      document.querySelector('.mealMax-bcblack').style.display = 'block';
      body.insertAdjacentHTML(
        'afterbegin',
        `<div class="mealMax-fixed"> <div class="mealMax"> <ion-icon class="closeIcon__card-max" name="close-outline"></ion-icon> <div class="mealMax__title"> <h4> ${
          value2.title
        }<ion-icon class="addIcon__card-max" name="add-circle" ></ion-icon> </h4> </div> <div class="mealMax__info"> <div class="mealMax__info__persons"> <ion-icon class="addPersonIcon__card-max" name="person-add" ></ion-icon ><span class="mealMax__info__persons__number">1</span class="mealMax__info__persons__text"><span>os.</span> <ion-icon class="removePersonIcon__card-max" name="person-remove" ></ion-icon> </div> <div class="mealMax__info__time"> <ion-icon class="timeIcon__card-max" name="hourglass-outline" ></ion-icon> <span class="mealMax__info__time__text">${`'${value2.time}`}</span> </div> <p class="mealMax__info__kcal">${
          value2.kcal
        } kcal</p> </div> <img class="mealMax__img" src="img/meal.webp" alt="" /> <div class="mealMax__ingredients"> <p class="mealMax__ingredients__title">składniki:</p> <p class="mealMax__ingredients__content">${allIngredients}</p> </div> <div class="mealMax__recipe"> <p class="mealMax__recipe__title">Przygotowanie:</p> <p class="mealMax__recipe__content">${
          value2.recipe
        }</p> </div> <div class="meal-added"><p>meal added to the list</p></div></div> </div>`
      );

      //##Closing Card Max
      const closeBtn = document.querySelector('.closeIcon__card-max');
      function closeMealMaxCard(btn) {
        btn.addEventListener('click', function () {
          document.querySelector('.mealMax-fixed').remove();
          document.querySelector('.mealMax-bcblack').style.display = 'none';
        });
      }
      closeMealMaxCard(closeBtn);
      //##Adding/Removing Person & calculating ingredients value
      const addPerson = document.querySelector('.addPersonIcon__card-max');
      const removePerson = document.querySelector(
        '.removePersonIcon__card-max'
      );
      //###Persons quantity - needed to multiple ingredients value
      let nrOfPersons = document.querySelector(
        '.mealMax__info__persons__number'
      );
      //###Function creating new ingredients string; I will try to shorten this function
      let printIngredients = ''; //added because below function alone don't work in print section, so I add this variable to store value for meal in print section
      let nonGramsIngPrint = []; //needed to make ingredients shop list
      let gramsIngPrint = []; //needed to make ingredients shop list
      function newIngredientString() {
        let nonGramsIng = [];
        let nonGramsIngObj = [];
        value2.ingredients.nonGrams.forEach(function (value, keys, map) {
          const nonGramsValueNew = value[0] * nrOfPersons.textContent;
          let nonGramsNewString =
            keys.padEnd(25, '.') +
            `${String(nonGramsValueNew)} ${value[1]}`.padStart(15, '.');
          nonGramsIng.push(nonGramsNewString);
          nonGramsIngObj.push({ keys, nonGramsValueNew });
        });
        nonGramsIngPrint = nonGramsIngObj;

        let gramsIng = [];
        let gramsIngObj = [];
        value2.ingredients.grams.forEach(function (value, keys, map) {
          const gramsValueNew = value[0] * nrOfPersons.textContent;
          let gramsNewString =
            keys.padEnd(25, '.') +
            `${String(gramsValueNew)} ${value[1]}`.padStart(15, '.');
          gramsIng.push(gramsNewString);
          gramsIngObj.push({ keys, gramsValueNew });
        });
        gramsIngPrint = gramsIngObj;

        const allIngredientsNew = gramsIng.concat(nonGramsIng).join('\n');
        document.querySelector('.mealMax__ingredients__content').textContent =
          allIngredientsNew;
        printIngredients = allIngredientsNew;
      }
      //###Adding Person & changing ingredients quantity
      addPerson.addEventListener('click', function () {
        nrOfPersons.textContent = nrOfPersons.textContent * 1 + 1;
        nrOfPersons.textContent === '1'
          ? (removePerson.style.display = 'none')
          : (removePerson.style.display = 'block');
        newIngredientString();
        console.log(nrOfPersons.textContent);
      });
      //###Removing Person & changing ingredients quantity
      removePerson.addEventListener('click', function () {
        nrOfPersons.textContent = nrOfPersons.textContent * 1 - 1;
        nrOfPersons.textContent === '1'
          ? (removePerson.style.display = 'none')
          : (removePerson.style.display = 'block');
        newIngredientString();
      });

      const addMealMaxToList = document.querySelector('.addIcon__card-max');
      const listFirstMealEl = document.querySelectorAll('.firstMeal');
      const listSecondMealEl = document.querySelectorAll('.secondMeal');
      const listThirdMealEl = document.querySelectorAll('.thirdMeal');
      const listCounterCurrent = document.querySelector('.list__counter__curr');
      const printFirstMeals = document.querySelectorAll(
        '.print__meals__day__firstMeal'
      );
      const printSecondMeals = document.querySelectorAll(
        '.print__meals__day__secondMeal'
      );
      const printThirdMeals = document.querySelectorAll(
        '.print__meals__day__thirdMeal'
      );
      let shopListMap = new Map();
      const listAddMeal = function (mealType) {
        addMealMaxToList.addEventListener('click', function () {
          //Information about adding meal to the List
          const mealAddedInfo = document.querySelector('.meal-added');
          mealAddedInfo.style.display = 'block';
          setTimeout(() => {
            mealAddedInfo.style.display = 'none';
          }, 1000);
          //Creating array containing all empty (without text content) elements of a given type (firstMeal, secondMeal or thirdMeal)
          const emptyMeal = [];
          for (const meal of mealType) {
            if (meal.textContent === '') {
              emptyMeal.push(meal);
            }
          }
          //Checking if created array is empty; preventing from error of adding more than 7 meals of a given type
          if (emptyMeal.length < 1) {
            alert('You selected maximum number of meal this type');
          } else {
            //ADD Meal Title to List, Del Icon Visible, Channging Picked Meals Number in Counter
            //3 STEPS below is better than changing emptyMeal[0] textContent, this prevents from later bugs with counter update
            const listMealSpan = document.createElement('span'); //1.1 STEP
            listMealSpan.classList.add('listMealSpan'); //1.2
            listMealSpan.textContent = value2.title; //2nd STEP
            emptyMeal[0].appendChild(listMealSpan); //3rd STEP; here emptyMeal stop being empty
            emptyMeal[0].parentNode.insertAdjacentHTML(
              'beforeend',
              '<ion-icon class="removeIcon__list" name="close"></ion-icon>'
            );
            emptyMeal[0].nextElementSibling.style.display = 'block'; //showing removing icon that can be used to remove meal from list
            listCounterCurrent.textContent =
              Number(listCounterCurrent.textContent) + 1; //updating counter each time meal is added
          }
          //ADD MEAL TO PRINT SECTION
          //#Insert Recipe to Print section
          let printMealType;
          if (key === 'firstMeal') {
            printMealType = printFirstMeals;
          } else if (key === 'secondMeal') {
            printMealType = printSecondMeals;
          } else if (key === 'thirdMeal') {
            printMealType = printThirdMeals;
          }
          const printEmptyMeal = [];

          printMealType.forEach(value => {
            if (value.firstElementChild === null) {
              printEmptyMeal.push(value);
            }
          });
          newIngredientString();
          // ADD Ingredients to shop list. For now only works adding, if you remove meals from list ingredients, in shop list, not changing
          let shopListArr = nonGramsIngPrint.concat(gramsIngPrint);
          shopListArr.forEach(v => {
            if (shopListMap.has(v.keys)) {
              const keyValue = shopListMap.get(v.keys);
              shopListMap.set(
                v.keys,
                v.nonGramsValueNew
                  ? [keyValue[0] + v.nonGramsValueNew, 'pieces']
                  : [keyValue[0] + v.gramsValueNew, 'g']
              );
            } else {
              shopListMap.set(
                v.keys,
                v.nonGramsValueNew
                  ? [v.nonGramsValueNew, 'pieces']
                  : [v.gramsValueNew, 'g']
              );
            }
            console.log(shopListMap);
          });
          let shopListStringArr = [];
          shopListMap.forEach((value, key) => {
            const string = `${key} - ${value[0]} ${value[1]}`;
            shopListStringArr.push(string);
          });
          const shopListString = shopListStringArr.join('<br>');
          console.log(shopListString);
          document.querySelector(
            '.print__meals__shop-list'
          ).innerHTML = `<p>${shopListString}</p>`;
          printEmptyMeal[0]?.insertAdjacentHTML(
            'beforeend',
            `<div class="mealMax"> <div class="mealMax__title"> <h4> ${
              value2.title
            } </h4> </div> <div class="mealMax__info"> <div class="mealMax__info__persons"><span class="mealMax__info__persons__number">${
              nrOfPersons.textContent
            }</span class="mealMax__info__persons__text"><span>os.</span></div> <div class="mealMax__info__time"> <ion-icon class="timeIcon__card-max" name="hourglass-outline" ></ion-icon> <span class="mealMax__info__time__text">${`'${value2.time}`}</span> </div> <p class="mealMax__info__kcal">${
              value2.kcal
            } kcal</p> </div> <div class="mealMax__ingredients"> <p class="mealMax__ingredients__title">składniki:</p> <p class="mealMax__ingredients__content">${printIngredients}</p> </div> <div class="mealMax__recipe"> <p class="mealMax__recipe__title">Przygotowanie:</p> <p class="mealMax__recipe__content">${
              value2.recipe
            }</p> </div> </div> </div>`
          );
          console.log(printIngredients);
          // }

          //LIST
          //When CLICK on the name of a meal in the list, the Meal Max Card of that particular meal is shown, including changing the amount of ingredients
          const nonEmptyMeal = emptyMeal[0]?.firstElementChild;
          //I may not created this variable but it helps me to better understand what's going on
          nonEmptyMeal?.addEventListener('click', function () {
            document.querySelector('.mealMax-bcblack').style.display = 'block';
            body.insertAdjacentHTML(
              'afterbegin',
              `<div class="mealMax-fixed"> <div class="mealMax"> <ion-icon class="closeIcon__card-max" name="close-outline"></ion-icon> <div class="mealMax__title"> <h4> ${
                value2.title
              } </h4> </div> <div class="mealMax__info"> <div class="mealMax__info__persons"><span class="mealMax__info__persons__number">${
                nrOfPersons.textContent
              }</span class="mealMax__info__persons__text"><span>os.</span></div> <div class="mealMax__info__time"> <ion-icon class="timeIcon__card-max" name="hourglass-outline" ></ion-icon> <span class="mealMax__info__time__text">${`'${value2.time}`}</span> </div> <p class="mealMax__info__kcal">${
                value2.kcal
              } kcal</p> </div> <img class="mealMax__img" src="img/meal.jpg" alt="" /> <div class="mealMax__ingredients"> <p class="mealMax__ingredients__title">składniki:</p> <p class="mealMax__ingredients__content">${allIngredients}</p> </div> <div class="mealMax__recipe"> <p class="mealMax__recipe__title">Przygotowanie:</p> <p class="mealMax__recipe__content">${
                value2.recipe
              }</p> </div> </div> </div>`
            );

            newIngredientString(); //Function which change ingredients text
            //Close Meal Max Card
            //Creating variable needed to use in function created earlier. I can't use 'closeBtn' because different Btn was created in this scope.
            const closeBtnListMealMaxCard = document.querySelector(
              '.closeIcon__card-max'
            ); //Creating variable needed to use in function created earlier. I can't use 'closeBtn' because different Btn was created in this scope.
            closeMealMaxCard(closeBtnListMealMaxCard); //Function closing Meal Max Card which was created in this scope
          });
          //Removing meal from list
          const listRemoveIcons =
            document.querySelectorAll('.removeIcon__list');
          const printRemove = document.querySelectorAll(
            '.printRemove .mealMax'
          );
          //all existing meals from Print Section are added to array to have the same index number as meals from List
          let printRemoveArr = [];
          printRemove.forEach(print => {
            if (print.parentNode.hasChildNodes()) printRemoveArr.push(print);
          });

          listRemoveIcons.forEach((icon, index) => {
            icon.addEventListener('click', function () {
              //Removing meals from print section
              printRemoveArr[index]?.remove();
              console.log(printRemoveArr[index]);
              //Removing elements from list
              icon.parentNode?.querySelector('.listMealSpan').remove();
              icon.remove();
              //Updating Counter
              const listMealSpan = document.querySelectorAll('.listMealSpan');
              let listMealSpanArrLength;
              listMealSpan.forEach((value, key, array) => {
                listMealSpanArrLength = array.length;
              });
              listMealSpanArrLength >= 1
                ? (listCounterCurrent.textContent = listMealSpanArrLength)
                : (listCounterCurrent.textContent = 0);
            });
          });
        });
      };

      if (key === 'firstMeal') {
        listAddMeal(listFirstMealEl);
      } else if (key === 'secondMeal') {
        listAddMeal(listSecondMealEl);
      } else if (key === 'thirdMeal') {
        listAddMeal(listThirdMealEl);
      }
    });
  });
});
//Addin Blur to all meals except one we want to pick
const allInfoBtns = document.querySelectorAll('.infoIcon__card-min');
allInfoBtns.forEach(btn => {
  btn.addEventListener('mouseover', function () {
    btn
      .closest('.more')
      .querySelectorAll('.meal')
      .forEach(meal => {
        meal.style.filter = 'blur(5px)';
      });

    btn.closest('.meal').style.filter = 'none';
  });
  btn.addEventListener('mouseout', function () {
    btn
      .closest('.more')
      .querySelectorAll('.meal')
      .forEach(meal => {
        meal.style.filter = 'none';
      });
  });
});

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
//Print Print Section
document
  .querySelector('.printIcon__list')
  .addEventListener('click', function () {
    const printArea = document.querySelector('.print__meals');
    const listContainer = document.querySelector('.list__container');
    printArea.style.display = 'flex';
    listContainer.style.display = 'none';
    window.print();
    printArea.style.display = 'none';
    listContainer.style.display = 'block';
  });

//Adding footer Copyright info with actual date
const footerDate = new Date();
console.log(footerDate);
document.querySelector(
  '.footer'
).lastElementChild.textContent = `Copyright © ${new Date().getFullYear()} All Rights Reserved`;

//MORE MEALS
//it's worki but code needs improvements;)
//function making every meals with nr >5 invisible
const invisibleMeals = (el, index) => {
  if (index > 4) {
    el.style.display = 'none';
  }
};
//making every meals with nr >5 invisible
document.querySelectorAll('.meal__section').forEach(section => {
  section.querySelectorAll('.meal').forEach(invisibleMeals);
});
//All meals in current section become visible
const moreMeals = document.querySelectorAll('.more-meals');
moreMeals.forEach(moreMeal => {
  const moreMealsContainer = moreMeal.parentElement.querySelector('.more');

  moreMeal.addEventListener('click', function () {
    moreMealsContainer.style.flexWrap = 'wrap';
    moreMealsContainer
      .querySelectorAll('.meal')
      .forEach(meal => (meal.style.display = 'block'));
    moreMeal.parentElement.classList.remove('background-img--less');
    moreMeal.style.display = 'none';
    moreMeal.parentElement
      .querySelector('.less-meals')
      .classList.remove('hide');
    moreMeal.parentElement.scrollIntoView();
  });
});
//All meals, except meals with nr <5, in current section become INvisible
const lessMeals = document.querySelectorAll('.less-meals');
lessMeals.forEach(lessMeal => {
  const lessMealsContainer = lessMeal.parentElement.querySelector('.more');
  lessMeal.addEventListener('click', function () {
    lessMealsContainer.style.flexWrap = 'nowrap';
    lessMealsContainer.querySelectorAll('.meal').forEach(invisibleMeals);
    lessMeal.parentElement.classList.add('background-img--less');
    lessMeal.classList.add('hide');
    lessMeal.parentElement.querySelector('.more-meals').style.display = 'flex';
    lessMeal.parentElement.scrollIntoView();
  });
});
//Dynamically changing number of meals in current section
document.querySelectorAll('.more-meals--nr').forEach(number => {
  number.textContent = `${
    number.closest('section').querySelector('.more').querySelectorAll('.meal')
      .length
  }`;
});
