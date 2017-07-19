(function () {
'use strict';

const initialState = {
  screen: `welcome`,
  lives: 3,
  timer: 120,
  currentQuestion: 0,
  questions: 10,
  score: 0,
  percentage: 0,
  statistics: [
    {time: 40, score: 10},
    {time: 80, score: 9},
    {time: 44, score: 10},
    {time: 30, score: 8},
    {time: 50, score: 0}
  ],
};
let state = {};
const setState = (newState) => {
  state = newState;
};
const getState = () => state;

const getRandomScreenName = () => {
  return Math.random() > 0.5 ? `question-artist` : `question-genre`;
};

const getUniqueItemsFromArray = function (size, array) {
  const arrayTemp = [...array];
  const newArray = [];
  while (newArray.length < size) {
    const randomItem = arrayTemp.splice(Math.floor(Math.random() * (arrayTemp.length - 1)), 1)[0];
    newArray.push(randomItem);
  }
  return newArray;
};

const computePercentage = ({time, score, statistics}) => {
  const myStats = {time, score};
  const numOfLusers = statistics.reduce((qurrentnumOfLusers, currentResult) => {
    if (myStats.score > currentResult.score || myStats.score === currentResult.score && myStats.time < currentResult.time) {
      return qurrentnumOfLusers + 1;
    } else {
      return qurrentnumOfLusers;
    }
  }, 0);
  return Math.trunc(100 * numOfLusers / statistics.length);
};

const getRandomItem = (array) => {
  const newArray = array.slice();
  return newArray[Math.floor(Math.random() * (newArray.length - 1))];
};

const tracks = [
  {
    id: 1,
    genre: `Регги`,
    filePath: `http://gamersss.esy.es/artem/audio/Silent Partner-True_Love.mp3`,
    imgPath: `img/music-cover.jpg`,
    artist: `Silent Partner`,
  },
  {
    id: 2,
    genre: `Регги`,
    filePath: `http://gamersss.esy.es/artem/audio/Bob Marley–Buffalo Soldier.mp3`,
    imgPath: `img/music-cover.jpg`,
    artist: `Bob Marley`,
  },
  {
    id: 3,
    genre: `Регги`,
    filePath: `http://gamersss.esy.es/artem/audio/Alai Oli–Радуга.mp3`,
    imgPath: `img/music-cover.jpg`,
    artist: `Alai Oli`,
  },
  {
    id: 4,
    genre: `Регги`,
    filePath: `http://gamersss.esy.es/artem/audio/5'nizza–Моя Барселона.mp3`,
    imgPath: `img/music-cover.jpg`,
    artist: `5'nizza`,
  },
  {
    id: 5,
    genre: `Реп`,
    filePath: `http://gamersss.esy.es/artem/audio/Atl-архитектор.mp3`,
    imgPath: `img/music-cover.jpg`,
    artist: `Atl`,
  },
  {
    id: 6,
    genre: `Реп`,
    filePath: `http://gamersss.esy.es/artem/audio/Каста-корабельная.mp3`,
    imgPath: `img/music-cover.jpg`,
    artist: `Каста`,
  },
  {
    id: 7,
    genre: `Реп`,
    filePath: `http://gamersss.esy.es/artem/audio/Баста - я сморю на небо.mp3`,
    imgPath: `img/music-cover.jpg`,
    artist: `Баста`,
  },
  {
    id: 8,
    genre: `Реп`,
    filePath: `http://gamersss.esy.es/artem/audio/25-17 - Виражи.mp3`,
    imgPath: `img/music-cover.jpg`,
    artist: `25/17`,
  },
  {
    id: 9,
    genre: `Рок`,
    filePath: `http://gamersss.esy.es/artem/audio/Ляпис Трубецкой - Евпатория.mp3`,
    imgPath: `img/music-cover.jpg`,
    artist: `Ляпис Трубецкой`,
  },
  {
    id: 10,
    genre: `Рок`,
    filePath: `http://gamersss.esy.es/artem/audio/Би2-мой ро н ролл.mp3`,
    imgPath: `img/music-cover.jpg`,
    artist: `Би2 и Юлия Чечерина`,
  },
  {
    id: 11,
    genre: `Рок`,
    filePath: `http://gamersss.esy.es/artem/audio/ДДТ - Просвистела.mp3`,
    imgPath: `img/music-cover.jpg`,
    artist: `ДДТ`,
  },
  {
    id: 12,
    genre: `Рок`,
    filePath: `http://gamersss.esy.es/artem/audio/Ария - Беспечный Ангел.mp3`,
    imgPath: `img/music-cover.jpg`,
    artist: `Ария`,
  },
  {
    id: 13,
    genre: `Поп`,
    filePath: `http://gamersss.esy.es/artem/audio/Иван Дорн - Целовать другого.mp3`,
    imgPath: `img/music-cover.jpg`,
    artist: `Иван Дорн`,
  },
  {
    id: 14,
    genre: `Поп`,
    filePath: `http://gamersss.esy.es/artem/audio/Монатик - кружит.mp3`,
    imgPath: `img/music-cover.jpg`,
    artist: `Монатик`,
  },
  {
    id: 15,
    genre: `Поп`,
    filePath: `http://gamersss.esy.es/artem/audio/IOWA - бьет бит.mp3`,
    imgPath: `img/music-cover.jpg`,
    artist: `IOWA`,
  },
  {
    id: 16,
    genre: `Поп`,
    filePath: `http://gamersss.esy.es/artem/audio/JamesBrown–Sex Mashine.mp3`,
    imgPath: `img/music-cover.jpg`,
    artist: `James Brown`,
  },
  {
    id: 17,
    genre: `Авторская песня`,
    filePath: `http://gamersss.esy.es/artem/audio/Владимир Высоцкий–Утренняя гимнастика.mp3`,
    imgPath: `img/music-cover.jpg`,
    artist: `Владимир Высоцкий`,
  },
  {
    id: 18,
    genre: `Авторская песня`,
    filePath: `http://gamersss.esy.es/artem/audio/Булат Окуджава - пиратская.mp3`,
    imgPath: `img/music-cover.jpg`,
    artist: `Булат Окуджава`,
  },
  {
    id: 19,
    genre: `Авторская песня`,
    filePath: `http://gamersss.esy.es/artem/audio/Олег Митяев - Изгиб Гитары Желтой.mp3`,
    imgPath: `img/music-cover.jpg`,
    artist: `Олег Митяев`,
  },
  {
    id: 20,
    genre: `Авторская песня`,
    filePath: `http://gamersss.esy.es/artem/audio/Игорь Растеряев–Георгиевская лента.mp3`,
    imgPath: `img/music-cover.jpg`,
    artist: `Игорь Растеряев`,
  },
];

function resetGame(state) {
  return Object.assign({}, state);
}

function nextQuestion(state) {
  const newScreen = getRandomScreenName();
  let screenData;
  const songs = getUniqueItemsFromArray(
    (newScreen === `question-artist` ? 3 : 4),
      tracks
  );
  const trueSong = getRandomItem(songs);
  screenData = {
    songs,
    trueSong,
  };

  return Object.assign({}, state, {
    currentQuestion: state.currentQuestion + 1,
    screen: newScreen,
    screenData,
  });
}

function onQuestionAnswered(state, isAnswerCorrect) {
  const {currentQuestion, questions, timer, lives} = state;

  const isFinalQuestion = currentQuestion === questions;
  const newScore = state.score + (isAnswerCorrect ? 1 : 0);
  const newLives = isAnswerCorrect ? lives : lives - 1;

  if (newLives < 0 || timer <= 0) {

    return Object.assign({}, state, {
      lives: newLives,
      score: newScore,
      currentQuestion: currentQuestion + 1,
      screen: `result-fail`,
    });
  }

  if (isFinalQuestion) {
    return Object.assign({}, state, {
      lives: newLives,
      score: newScore,
      currentQuestion: currentQuestion + 1,
      screen: `result-success`,
      screenData: {
        percentage: computePercentage({
          time: state.secondsPassed,
          score: newScore,
          statistics: state.statistics,
        }),
      },
    });
  }

  return Object.assign({}, nextQuestion(state), {
    lives: newLives,
    score: newScore,
  });
}

const animate = {
  getAnimation: (step, stepDuration, steps) => ({
    step, stepDuration, steps
  }),

  animate: (animation, callback, callbackEnd) => {
    const interval = setInterval(() => {
      const nextStep = animation.step + 1;
      if (nextStep <= animation.steps) {
        animation = animate.getAnimation(nextStep, animation.stepDuration, animation.steps);
        callback(animation);
      } else {
        stopFn();
        if (typeof callbackEnd === `function`) {
          callbackEnd();
        }
      }
    }, animation.stepDuration);

    const stopFn = () => clearInterval(interval);

    return stopFn;
  }
};

const formatTime = (total, passed) => {
  const minutesLeft = Math.floor((total - passed) / 60 / 1000);
  const secondsLeft = (total - passed - minutesLeft * 60 * 1000) / 1000;

  return {
    minutes: minutesLeft,
    seconds: secondsLeft
  };
};

// Окружность уменьшается за счет штриховки. Фактически, обводка состоит
// из одного длинного штриха, а пропуск за счет расстояния до следующего
// штриха. Задача правильной заливки состоит в том, чтобы правильно
// задать расстояние до следующего штриха.
//
// Из радиуса можно рассчитать длину окружности. При известной длине окружности,
// количестве шагов и номере текущего шага в анимации можно понять, на сколько
// нужно уменьшать длину окружности на текущем шаге. Для этого надо вычесть
// из нее длину одного шага умноженную на номер текущего шага.
//
// Длина окружности = 2πR
// Длина шага = Длина окружности / Количество шагов
// Пропуск = Длина шага * Номер шага
const redrawCircle = (circle, radius, animation) => {
  const length = 2 * Math.PI * radius;
  const stepLength = length / animation.steps;
  const lengthToClear = stepLength * animation.step;

  circle.setAttributeNS(null, `r`, radius.toString());
  circle.setAttributeNS(null, `stroke-dasharray`, length.toString());
  circle.setAttributeNS(null, `stroke-dashoffset`, lengthToClear.toString());

  return circle;
};


const addLeadingZero = (val) => val < 10 ? `0${val}` : val;

const redrawTimer = (timer, animation) => {
  const total = animation.stepDuration * animation.steps;
  const passed = animation.stepDuration * animation.step;
  const timeLeft = formatTime(total, passed);

  timer.querySelector(`.timer-value-mins`).textContent = addLeadingZero(timeLeft.minutes);
  timer.querySelector(`.timer-value-secs`).textContent = addLeadingZero(timeLeft.seconds);

  return timer;
};

const updateSecondsLeft = (animation) => {
  const state = getState();
  setState(Object.assign({}, state, {
    secondsPassed: animation.step
  }));
};

const initializeCountdown = (step, stepDuration, steps) => {
  const element = document.querySelector(`.timer-line`);
  const radius = parseInt(element.getAttributeNS(null, `r`), 10);
  const timer = document.querySelector(`.timer-value`);

  return animate.animate(animate.getAnimation(step, stepDuration, steps), (animation) => {
    redrawCircle(element, radius, animation);
    redrawTimer(timer, animation);
    updateSecondsLeft(animation);
  }, () => timer.classList.add(`timer-value--finished`));
};

function getElementFromTemplate(template) {
  const element = document.createElement(`div`);
  const fragment = document.createDocumentFragment();
  element.innerHTML = template;
  fragment.appendChild(element.firstChild);
  return fragment;
}

const template = `<section class="main">
  <section class="main main--welcome">
    <section class="logo" title="Угадай мелодию"><h1>Угадай мелодию</h1></section>
    <button class="main-play">Начать игру</button>
    <h2 class="title main-title">Правила игры</h2>
    <p class="text main-text">
      Правила просты&nbsp;— за&nbsp;2 минуты дать
      максимальное количество правильных ответов.<br>
      Удачи!
    </p>
  </section>
</section>`;
var screenWelcome = ({onPlayClick}) => {
  const screenWelcome = getElementFromTemplate(template);

  const playButton = screenWelcome.querySelector(`.main-play`);

  playButton.addEventListener(`click`, onPlayClick);

  return screenWelcome;
};

const updateState = (element, player) => {
  element.querySelector(`.player-status`).style.width =
      `${parseInt(player.currentTime * 100 / player.duration, 10)}%`;
};


const syncState = (player, element) => {
  element.classList.toggle(`player--is-playing`, !player.paused);
};


const switchState = (state, player, element) => {
  if (player.paused) {
    player.play();
    state.stopAnimation = animate.animate(
        animate.getAnimation(player.currentTime, 1000, player.duration),
        (animation) => updateState(element, player));
  } else {
    player.pause();
    state.stopAnimation();
    state.stopAnimation = null;
  }

  syncState(player, element);
};


const destroyPlayer = (element, state) => {
  const player = element.querySelector(`audio`);
  const button = element.querySelector(`button`);

  if (state.stopAnimation) {
    state.stopAnimation();
  }

  player.src = null;
  button.onclick = null;
  element.innerHTML = ``;
  state = null;

  return true;
};


const initializePlayer = (element, file, autoplay = true, controllable = true) => {
  let state = {};

  const content = document.querySelector(`template`)
    .content
    .querySelector(`.player`)
    .cloneNode(true);
  const player = content.querySelector(`audio`);
  const button = content.querySelector(`.player-control`);

  player.onloadeddata = () => {
    if (controllable) {
      button.onclick = () => switchState(state, player, content);
    }

    if (autoplay) {
      switchState(state, player, content);
    }
  };

  player.src = file;
  element.appendChild(content);
  element.classList.toggle(`player--no-controls`, !controllable);

  return () => destroyPlayer(element, state);
};

const templateAnswer = (answer) => `<div class="main-answer-wrapper">
    <input class="main-answer-r" type="radio" id="${answer.id}" name="answer" value="${answer.genre}" />
    <label class="main-answer" for="${answer.id}">
      <img class="main-answer-preview" src="${answer.imgPath}">
      ${answer.artist}
    </label>
  </div>`;

const checkAnswer = function (element, trueSong) {
  const answerID = +element.id;
  const currentID = trueSong.id;

  if (answerID === currentID) {
    return true;
  } else {
    return false;
  }
};

var screenLevelArtist = ({songs, trueSong, answerCallback}) => {
  const templateMain = `<section class="main main--level main--level-artist">
  <div class="main-wrap">
    <h2 class="title main-title">Кто исполняет эту песню?</h2>
    <div class="player-wrapper"></div>
    <form class="main-list">
      ${songs.map((answer) => templateAnswer(answer)).join(``)}
    </form>
  </div>
</section>`;

  const screenLevelArtist = getElementFromTemplate(templateMain);
  const answerCollection = screenLevelArtist.querySelectorAll(`.main-answer-r`);
  const playerWrapper = screenLevelArtist.querySelector(`.player-wrapper`);

  initializePlayer(playerWrapper, trueSong.filePath, true);

  const onAnswerClick = function (event) {
    const answer = checkAnswer(event.target, trueSong);
    answerCallback(answer);
  };

  for (const answer of answerCollection) {
    answer.addEventListener(`change`, onAnswerClick);
  }

  return screenLevelArtist;
};

var screenLevelGenre = ({songs, trueSong, answerCallback}) => {

  const templateAnswer = (answer) => `
    <div class="genre-answer">
    <div class="player-wrapper" data-track="${answer.filePath}"></div>
    <input type="checkbox" name="answer" value="${answer.genre}" id="${answer.id}">
    <label class="genre-answer-check" for="${answer.id}"></label>
  </div>`;


  const templateMain = `<section class="main">
    <section class="main main--level main--level-genre">
      <h2 class="title">Выберите ${trueSong.genre} треки</h2>
      <form class="genre">
        ${songs.map((answer) => templateAnswer(answer)).join(``)}
        <button type="button" class="genre-answer-send" disabled>Ответить</button>
      </form>
    </section>
  </section>`;

  const screenLevelGenre = getElementFromTemplate(templateMain);

  const playerWrappers = screenLevelGenre.querySelectorAll(`.player-wrapper`);
  const checkboxes = screenLevelGenre.querySelectorAll(`input[name="answer"]`);
  const answerSend = screenLevelGenre.querySelector(`.genre-answer-send`);

  playerWrappers.forEach((wrapper) => initializePlayer(wrapper, wrapper.dataset.track, false));
  let trueChecks = 0;
  checkboxes.forEach(function (checkbox) {
    checkbox.addEventListener(`change`, function () {
      trueChecks += (checkbox.checked ? 1 : -1);
      if (trueChecks === 0) {
        answerSend.setAttribute(`disabled`, ``);
      } else {
        answerSend.removeAttribute(`disabled`);
      }
    });
  });

  const checkAnswer = () => {
    for (let i = 0; i < checkboxes.length; i++) {
      const answerGenre = checkboxes[i].value;
      const trueGenre = trueSong.genre;

      if ((checkboxes[i].checked && answerGenre !== trueGenre) || (!checkboxes[i].checked && answerGenre === trueGenre)) {
        return false;
      }
    }
    return true;
  };

  const onAnswerClick = function (event) {
    answerCallback(checkAnswer());
  };

  answerSend.addEventListener(`click`, onAnswerClick);

  return screenLevelGenre;
};

var screenLevelSuccess = ({totalScore, percentage, onClickReplay}) => {
  const template = `<section class="main main--result main--result-success">
    <section class="logo" title="Угадай мелодию"><h1>Угадай мелодию</h1></section>
    <h2 class="title">Вы настоящий меломан!</h2>
    <div class="main-stat">За&nbsp;2&nbsp;минуты<br>вы&nbsp;отгадали ${totalScore}&nbsp;мелодии</div>
    <span class="main-comparison">Это&nbsp;лучше чем у&nbsp;${percentage}%&nbsp;игроков</span>
    <span role="button" tabindex="0" class="main-replay">Сыграть ещё раз</span>
  </section>`;

  const screenResultSuccess = getElementFromTemplate(template);

  const replayButton = screenResultSuccess.querySelector(`.main-replay`);

  replayButton.addEventListener(`click`, onClickReplay);

  return screenResultSuccess;
};

const template$1 = `<section class="main">
  <section class="main main--result">
    <section class="logo" title="Угадай мелодию"><h1>Угадай мелодию</h1></section>
    <h2 class="title">Вы проиграли</h2>
    <div class="main-stat">Ничего, вам повезет в следующий раз</div>
    <span role="button" tabindex="0" class="main-replay">Сыграть ещё раз</span>
  </section>
</section>`;
var screenLevelFail = ({onClickReplay}) => {
  const screenResultFail = getElementFromTemplate(template$1);

  const replayButton = screenResultFail.querySelector(`.main-replay`);

  replayButton.addEventListener(`click`, onClickReplay);

  return screenResultFail;
};

const convertTime = (time) => {
  return {
    min: (`0` + Math.trunc(time / 60)).substr(-2, 2),
    sec: (`0` + time % 60).substr(-2, 2),
  };
};

var screenTimer = (timer) => {

  const templateTimer = (time) => `<div class="timer">
  <svg xmlns="http://www.w3.org/2000/svg" class="timer" viewBox="0 0 780 780">
      <circle
        cx="390" cy="390" r="370"
        class="timer-line"
        style="filter: url(.#blur); transform: rotate(-90deg) scaleY(-1); transform-origin: center"></circle>
      <div class="timer-value" xmlns="http://www.w3.org/1999/xhtml">
        <span class="timer-value-mins">${time.min}</span><!--
        --><span class="timer-value-dots">:</span><!--
        --><span class="timer-value-secs">${time.sec}</span>
      </div>
    </svg>
  </div>
  `;

  const screenCircle = getElementFromTemplate(templateTimer(convertTime(timer)));

  return screenCircle;
};

const clearTimer = () => {
  const app = document.querySelector(`.app`);
  const timer = app.querySelector(`.timer`);
  const timerTemplate = document.createElement(`section`);
  timerTemplate.classList.add(`timer`);
  app.replaceChild(timerTemplate, timer);
};

const app = document.querySelector(`.app`);
let currentScreen;
let timer;

const renderScreen = function (template) {
  currentScreen = app.querySelector(`.main`);
  app.replaceChild(template, currentScreen);
};

const renderTimer = function (template) {
  timer = app.querySelector(`.timer`);
  app.replaceChild(template, timer);
};

function renderState() {
  debugger
  const state = getState();
  switch (state.screen) {

    case `welcome`:
      return renderScreen(screenWelcome({
        onPlayClick: () => {
          setState(nextQuestion(getState()));
          renderState();
          renderTimer(screenTimer(state.timer));
          initializeCountdown(0, 1000, state.timer);
        }
      }));

    case `question-artist`:
      return renderScreen(screenLevelArtist({
        songs: state.screenData.songs,
        trueSong: state.screenData.trueSong,
        answerCallback: (isAnswerCorrect) => {
          setState(onQuestionAnswered(getState(), isAnswerCorrect));
          renderState();
        }
      }));

    case `question-genre`:
      return renderScreen(screenLevelGenre({
        songs: state.screenData.songs,
        trueSong: state.screenData.trueSong,
        answerCallback: (isAnswerCorrect) => {
          setState(onQuestionAnswered(getState(), isAnswerCorrect));
          renderState();
        }
      }));

    case `result-success`:
      clearTimer();
      return renderScreen(screenLevelSuccess({
        totalScore: state.score,
        percentage: state.screenData.percentage,
        onClickReplay: () => {
          setState(resetGame(getState()));
          renderState();
        }
      }));

    case `result-fail`:
      clearTimer();
      return renderScreen(screenLevelFail({
        onClickReplay: () => {
          setState(resetGame(getState()));
          renderState();
        }
      }));
  }
  return null;
}

setState(resetGame(initialState));
renderState();

}());

//# sourceMappingURL=main.js.map
