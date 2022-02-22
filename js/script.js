'use strict';

const dodawanie = {
  obj1: ['a', 2, 'b'],
  obj2: [2, 3, 4],
};
dodawanie.obj4 = dodawanie.obj1.concat(dodawanie.obj2);
console.log(dodawanie.obj4);
const karta = document.querySelector('.test');

document.querySelectorAll('.meal').forEach(function (meal) {
  const przycisk = meal.querySelector('.meal__add');
  const body = document.querySelector('body');
  przycisk.addEventListener('click', function () {
    // meal.classList.add('test3');
    // meal.insertAdjacentHTML(
    //   'beforeend',
    //   '<p>dsadasdoasdkasdasd</p><p>dasfasfasfdfs</p>'
    // );
    document.querySelector('.test5').style.display = 'block';
    body.insertAdjacentHTML(
      'afterbegin',
      '<div class="meal__max-fixed"><div class="meal__max"><ion-icon class="meal__max__close" name="close-outline"></ion-icon><div class="meal__max__title"><h3>Zapiekanka ziemniaczana z borówkami i cos tam jeszcze innego   <ion-icon class="meal__max__title__add-meal" name="add-circle"></ion-icon></h3></div><div class="meal__max__more"><div class="meal__max__more__person">    <ion-icon name="person-add"></ion-icon><span>1 os.</span>       <ion-icon name="person-remove"></ion-icon>       </div>      <div class="meal__max__more__time">        <ion-icon name="hourglass-outline"></ion-icon> <span>40</span></div><p class="meal__max__more__kcal">400 kcal</p>    </div><img class="meal__max__img" src="img/meal.jpg" alt="" />      <div class="meal__max__ingredients"><p class="ing__title">składniki:</p><p class="ing__el">     kukurydza.........................12 g <br />        pomidory krojone w puszcze ......135 g <br />koncentrat pomidorowy.......1 łyżeczka<br />kurczak...........................70 g<br />       ser gouda.........................22 g<br />       cebula............................35 g<br />          czosnek........................1 ząbek<br />          placek tortilli...............1 sztuka<br />          przyprawy....pieprz, kolendra, papryka słodka, kmin rzymski, sól          <br />        </p>      </div>      <div class="meal__max__todo">        <p class="todo__title">Przygotowanie:</p>        <p class="todo__text">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Exercitationem ipsa cumque pariatur, vitae laudantium ipsum illo,velit nobis itaque illum porro amet, assumenda veritatis nesciunt hic quis culpa nam blanditiis.</p>      </div>    </div>  </div>'
    );
    const przycisk2 = document.querySelector('.meal__max__close');
    przycisk2.addEventListener('click', function () {
      document.querySelector('.fixed-test').remove();
      document.querySelector('.test5').style.display = 'none';
      // karta.innerHTML += '<p>dsadasdoasdkasdasd</p><p>dasfasfasfdfs</p>';
    });
  });
});

// for (const meal of document.querySelectorAll('.meal__min')) {
//   const przycisk2 = meal.querySelector('.meal__min__info');
//   przycisk2.addEventListener('click', function () {
//     meal.classList.remove('test3');
//     // karta.innerHTML += '<p>dsadasdoasdkasdasd</p><p>dasfasfasfdfs</p>';
//   });
// }

// meals.forEach(function (value, key, map) {
//   console.log(key);
//   const meal = document.querySelector(`.${key}__container`);
//   meal.insertAdjacentHTML(
//     'beforeend',
//     `<div class="meal flexCol"><ion-icon class="meal__info"name="information-circle"title="info"></ion-icon><ion-icon class="meal__add" name="add-circle"></ion-icon><div class="meal__more"><div class="meal__max__more__time"><ion-icon name="hourglass-outline"></ion-icon>      <span>${value.time}</span></div><p class="meal__max__more__kcal">${value.kcal} kcal</p></div><img class="meal__img" src="img/meal.jpg" alt="" /><p class="meal__text">${value.title}</p></div>`
//   );
// });

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
          time: `'40`,
          kcal: '400 kcal',
          recipe:
            'Ser wymieszaj z jogurtem. Przypraw (pieprz, słodka papryka, bazylia). Posmaruej pieczywo twarożkiem. Na kanapce połóż pokrojoną rzodkiewkę',
          ingredients: {
            inGrams: new Map([
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
          time: `'40`,
          kcal: '400 kcal',
          recipe:
            'Ser wymieszaj z jogurtem. Przypraw (pieprz, słodka papryka, bazylia). Posmaruej pieczywo twarożkiem. Na kanapce połóż pokrojoną rzodkiewkę',
          ingredients: {
            inGrams: new Map([
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
          time: `'40`,
          kcal: '400 kcal',
          recipe:
            'Ser wymieszaj z jogurtem. Przypraw (pieprz, słodka papryka, bazylia). Posmaruej pieczywo twarożkiem. Na kanapce połóż pokrojoną rzodkiewkę',
          ingredients: {
            inGrams: new Map([
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
          time: `'40`,
          kcal: '400 kcal',
          recipe:
            'Ser wymieszaj z jogurtem. Przypraw (pieprz, słodka papryka, bazylia). Posmaruej pieczywo twarożkiem. Na kanapce połóż pokrojoną rzodkiewkę',
          ingredients: {
            inGrams: new Map([
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
          time: `'40`,
          kcal: '400 kcal',
          recipe:
            'Ser wymieszaj z jogurtem. Przypraw (pieprz, słodka papryka, bazylia). Posmaruej pieczywo twarożkiem. Na kanapce połóż pokrojoną rzodkiewkę',
          ingredients: {
            inGrams: new Map([
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
          time: `'40`,
          kcal: '400 kcal',
          recipe:
            'Ser wymieszaj z jogurtem. Przypraw (pieprz, słodka papryka, bazylia). Posmaruej pieczywo twarożkiem. Na kanapce połóż pokrojoną rzodkiewkę',
          ingredients: {
            inGrams: new Map([
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
          time: `'40`,
          kcal: '400 kcal',
          recipe:
            'Ser wymieszaj z jogurtem. Przypraw (pieprz, słodka papryka, bazylia). Posmaruej pieczywo twarożkiem. Na kanapce połóż pokrojoną rzodkiewkę',
          ingredients: {
            inGrams: new Map([
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
          time: `'40`,
          kcal: '400 kcal',
          recipe:
            'Ser wymieszaj z jogurtem. Przypraw (pieprz, słodka papryka, bazylia). Posmaruej pieczywo twarożkiem. Na kanapce połóż pokrojoną rzodkiewkę',
          ingredients: {
            inGrams: new Map([
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
          time: `'40`,
          kcal: '400 kcal',
          recipe:
            'Ser wymieszaj z jogurtem. Przypraw (pieprz, słodka papryka, bazylia). Posmaruej pieczywo twarożkiem. Na kanapce połóż pokrojoną rzodkiewkę',
          ingredients: {
            inGrams: new Map([
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
          time: `'40`,
          kcal: '400 kcal',
          recipe:
            'Ser wymieszaj z jogurtem. Przypraw (pieprz, słodka papryka, bazylia). Posmaruej pieczywo twarożkiem. Na kanapce połóż pokrojoną rzodkiewkę',
          ingredients: {
            inGrams: new Map([
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
          time: `'40`,
          kcal: '400 kcal',
          recipe:
            'Ser wymieszaj z jogurtem. Przypraw (pieprz, słodka papryka, bazylia). Posmaruej pieczywo twarożkiem. Na kanapce połóż pokrojoną rzodkiewkę',
          ingredients: {
            inGrams: new Map([
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
          time: `'40`,
          kcal: '400 kcal',
          recipe:
            'Ser wymieszaj z jogurtem. Przypraw (pieprz, słodka papryka, bazylia). Posmaruej pieczywo twarożkiem. Na kanapce połóż pokrojoną rzodkiewkę',
          ingredients: {
            inGrams: new Map([
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
          time: `'40`,
          kcal: '400 kcal',
          recipe:
            'Ser wymieszaj z jogurtem. Przypraw (pieprz, słodka papryka, bazylia). Posmaruej pieczywo twarożkiem. Na kanapce połóż pokrojoną rzodkiewkę',
          ingredients: {
            inGrams: new Map([
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
          time: `'40`,
          kcal: '400 kcal',
          recipe:
            'Ser wymieszaj z jogurtem. Przypraw (pieprz, słodka papryka, bazylia). Posmaruej pieczywo twarożkiem. Na kanapce połóż pokrojoną rzodkiewkę',
          ingredients: {
            inGrams: new Map([
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
          time: `'40`,
          kcal: '400 kcal',
          recipe:
            'Ser wymieszaj z jogurtem. Przypraw (pieprz, słodka papryka, bazylia). Posmaruej pieczywo twarożkiem. Na kanapce połóż pokrojoną rzodkiewkę',
          ingredients: {
            inGrams: new Map([
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
          time: `'40`,
          kcal: '400 kcal',
          recipe:
            'Ser wymieszaj z jogurtem. Przypraw (pieprz, słodka papryka, bazylia). Posmaruej pieczywo twarożkiem. Na kanapce połóż pokrojoną rzodkiewkę',
          ingredients: {
            inGrams: new Map([
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
      `<div class="meal flexCol"><ion-icon class="meal__info"name="information-circle"title="info"></ion-icon><ion-icon class="meal__add" name="add-circle"></ion-icon><div class="meal__more"><div class="meal__max__more__time"><ion-icon name="hourglass-outline"></ion-icon>      <span>${value2.time}</span></div><p class="meal__max__more__kcal">${value2.kcal} kcal</p></div><img class="meal__img" src="img/meal.jpg" alt="" /><p class="meal__text">${value2.title}</p></div>`
    );
    //Opening Meal Max Card
    const mealCards = document.querySelector(`.${key}__container .meal`);
    const infoBtn = mealCards.querySelector('.meal__info');
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
      const allIngredients = combinedIngredients(value2.ingredients.nonGrams)
        .concat(combinedIngredients(value2.ingredients.inGrams))
        .join('\n');
      //const valueduplicate = `${value[0] * 2} ${value[1]}`; Przy dodawaniu kolejnych osób

      document.querySelector('.meal__max-bcblack').style.display = 'block';
      body.insertAdjacentHTML(
        'afterbegin',
        `<div class="meal__max-fixed"><div class="meal__max"><ion-icon class="meal__max__close" name="close-outline"></ion-icon><div class="meal__max__title"><h3>${value2.title}<ion-icon class="meal__max__title__add-meal" name="add-circle"></ion-icon></h3></div><div class="meal__max__more"><div class="meal__max__more__person">    <ion-icon name="person-add"></ion-icon><span>1 os.</span>       <ion-icon name="person-remove"></ion-icon></div><div class="meal__max__more__time"> <ion-icon name="hourglass-outline"></ion-icon> <span>${value2.time}</span></div><p class="meal__max__more__kcal">${value2.kcal} kcal</p></div><img class="meal__max__img" src="img/meal.jpg" alt="" /><div class="meal__max__ingredients"><p class="ing__title">składniki:</p><p class="ing__el">${allIngredients}</p>      </div>      <div class="meal__max__todo">        <p class="todo__title">Przygotowanie:</p>        <p class="todo__text">${value2.recipe}</p>      </div>    </div>  </div>`
      );

      const closeBtn = document.querySelector('.meal__max__close');
      closeBtn.addEventListener('click', function () {
        document.querySelector('.meal__max-fixed').remove();
        document.querySelector('.meal__max-bcblack').style.display = 'none';
      });
    });
  });
});
