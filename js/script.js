'use strict';

const karta = document.querySelector('.test');

// for (const meal of document.querySelectorAll('.meal__min')) {
//   const przycisk = meal.querySelector('.meal__min__add');
//   przycisk.addEventListener('click', function () {
//     // meal.style.transition = 'all 5s';
//     // meal.style.height = '800px';
//     // meal.style.width = '800px';
//     // meal.style.position = 'absolute';
//     // meal.style.top = '50%';
//     // meal.style.left = '50%';
//     // meal.style.zIndex = '43';
//     // meal.style.transform = 'translate(-50%, -50%)';
//     meal.classList.add('test3');
//     // meal.insertAdjacentHTML(
//     //   'beforeend',
//     //   '<p>dsadasdoasdkasdasd</p><p>dasfasfasfdfs</p>'
//     // );
//     meal.innerHTML += '<p>dsadasdoasdkasdasd</p><p>dasfasfasfdfs</p>';
//   });
//   const przycisk2 = meal.querySelector('.meal__min__info');
//   przycisk2.addEventListener('click', function () {
//     meal.classList.remove('test3');
//     // karta.innerHTML += '<p>dsadasdoasdkasdasd</p><p>dasfasfasfdfs</p>';
//   });
// }
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
      '<div class="fixed-test"><div class="meal__max"><ion-icon class="meal__max__close" name="close-outline"></ion-icon><div class="meal__max__title"><p>Zapiekanka ziemniaczana z borówkami i cos tam jeszcze innego<ion-icon class="add__meal" name="add-circle"></ion-icon></p></div><div class="meal__max__more"><div class="meal__max__more__person">    <ion-icon name="person-add"></ion-icon><span>1 os.</span>       <ion-icon name="person-remove"></ion-icon>       </div>      <div class="meal__max__more__time">        <ion-icon name="hourglass-outline"></ion-icon> <span>40</span></div><p class="meal__max__more__kcal">400 kcal</p>    </div><img class="meal__max__img" src="img/meal.jpg" alt="" />      <div class="meal__max__ingredients"><p class="ing__title">składniki:</p><p class="ing__el">     kukurydza.........................12 g <br />        pomidory krojone w puszcze ......135 g <br />koncentrat pomidorowy.......1 łyżeczka<br />kurczak...........................70 g<br />       ser gouda.........................22 g<br />       cebula............................35 g<br />          czosnek........................1 ząbek<br />          placek tortilli...............1 sztuka<br />          przyprawy....pieprz, kolendra, papryka słodka, kmin rzymski, sól          <br />        </p>      </div>      <div class="meal__max__todo">        <p class="todo__title">Przygotowanie:</p>        <p class="todo__text">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Exercitationem ipsa cumque pariatur, vitae laudantium ipsum illo,velit nobis itaque illum porro amet, assumenda veritatis nesciunt hic quis culpa nam blanditiis.</p>      </div>    </div>  </div>'
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
