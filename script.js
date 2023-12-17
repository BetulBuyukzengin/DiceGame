'use strict';
const score0El = document.getElementById('score--0');
const score1El = document.getElementById('score--1');
const current0El = document.getElementById('current--0');
const current1El = document.getElementById('current--1');
const diceEl = document.querySelector('.dice');
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');
const player0El = document.querySelector('.player--0');
const player1El = document.querySelector('.player--1');

let scores, currentScore, activePlayer, playing;

//starting code
const init = function () {
  //ilk puanlar , 0.indisteki 1.player 1.indisteki 2.player

  scores = [0, 0];
  currentScore = 0;
  activePlayer = 0;
  playing = true;

  score0El.textContent = 0;
  score1El.textContent = 0;
  current0El.textContent = 0;
  current1El.textContent = 0;

  diceEl.classList.add('hidden');

  player0El.classList.remove('player--winner');
  player1El.classList.remove('player--winner');
  player0El.classList.add('player--active');
  player1El.classList.remove('player--active');
};
init();

const switchPlayer = function () {
  //Switch to next player
  document.getElementById(`current--${activePlayer}`).textContent = 0;
  currentScore = 0;
  activePlayer = activePlayer === 0 ? 1 : 0;
  player0El.classList.toggle('player--active');
  player1El.classList.toggle('player--active');
};

btnRoll.addEventListener('click', function () {
  if (playing) {
    //1- random zar atılacak
    const dice = Math.trunc(Math.random() * 6) + 1;
    console.log(dice);

    //2- zarlar gösterilecek
    diceEl.classList.remove('hidden');

    //resmin sayıya denk gelmesi için
    diceEl.src = `./img/dice-${dice}.png`;

    //3- 1 in atılıp atılmadığı kontrol edilir
    if (dice !== 1) {
      //zarı mevcut skora ekle
      currentScore += dice;
      document.getElementById(`current--${activePlayer}`).textContent =
        currentScore;
      //current0El.textContent=currentScore;
    } else {
      switchPlayer();
    }
  }
});

btnHold.addEventListener('click', function () {
  if (playing) {
    //1- random zar atılacak
    //1-mevcut skoru aktif oyuncunun skoruna ekle
    scores[activePlayer] += currentScore;
    //scores[1]=scores[1]+currentScore;
    document.getElementById(`score--${activePlayer}`).textContent =
      scores[activePlayer];
    //2- skor>=100 ise oyunu bitir
    if (scores[activePlayer] >= 100) {
      playing = false;
      diceEl.classList.add('hidden');
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.add(`player--winner`);
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.remove('player--active');
    } else {
      //değilse diğer oyuncuya geç
      switchPlayer();
    }
  }
});

btnNew.addEventListener('click', init);
