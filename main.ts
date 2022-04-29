let speler: game.LedSprite;
let tegenligger0: game.LedSprite;
let tegenligger1: game.LedSprite;
let tegenligger2: game.LedSprite;
let tegenligger3: game.LedSprite;
let tegenligger4: game.LedSprite;

let score = 0;
let spelBezig = false;
let wachtTijd = 0;

//functie initialiseer
function initialiseer() {
  speler = game.createSprite(2, 4);
  score = 0;
  spelBezig = true;
  wachtTijd = 500;
}

// hoofdprogramma
basic.forever(function () {
  initialiseer();
  while (spelBezig) {
    basic.pause(1000);
    wachtTijd -= 5;
  }
  game.setScore(score);
  game.gameOver();
});

// beweeg naar links
input.onButtonPressed(Button.A, function () {
  if (speler.get(LedSpriteProperty.X) > 0) {
    speler.change(LedSpriteProperty.X, -1);
  }
});

//beweeg naar rechts
input.onButtonPressed(Button.B, function () {
  if (speler.get(LedSpriteProperty.X) < 4) {
    speler.change(LedSpriteProperty.X, 1);
  }
});

// Code tegenligger0
basic.forever(function () {
  basic.pause(100);
  tegenligger0 = game.createSprite(0, 0);
  basic.pause(Math.randomRange(0, 5000));
  while (spelBezig == true) {
    if (tegenligger0.get(LedSpriteProperty.Y) == 4) {
      if (speler.isTouching(tegenligger0)) {
        spelBezig = false;
      } else {
        score += 1;
        tegenligger0.set(LedSpriteProperty.Y, 0);
        basic.pause(Math.randomRange(0, 5000));
      }
    } else {
      tegenligger0.change(LedSpriteProperty.Y, 1);
      basic.pause(wachtTijd);
    }
  }
});

// Code tegenligger1
basic.forever(function () {
  basic.pause(100);
  tegenligger1 = game.createSprite(1, 0);
  basic.pause(Math.randomRange(0, 5000));
  while (spelBezig == true) {
    if (tegenligger1.get(LedSpriteProperty.Y) == 4) {
      if (speler.isTouching(tegenligger1)) {
        spelBezig = false;
      } else {
        score += 1;
        tegenligger1.set(LedSpriteProperty.Y, 0);
        basic.pause(Math.randomRange(0, 5000));
      }
    } else {
      tegenligger1.change(LedSpriteProperty.Y, 1);
      basic.pause(wachtTijd);
    }
  }
});

// Code tegenligger2
basic.forever(function () {
  basic.pause(100);
  tegenligger2 = game.createSprite(2, 0);
  basic.pause(Math.randomRange(0, 5000));
  while (spelBezig == true) {
    if (tegenligger2.get(LedSpriteProperty.Y) == 4) {
      if (speler.isTouching(tegenligger2)) {
        spelBezig = false;
      } else {
        score += 1;
        tegenligger2.set(LedSpriteProperty.Y, 0);
        basic.pause(Math.randomRange(0, 5000));
      }
    } else {
      tegenligger2.change(LedSpriteProperty.Y, 1);
      basic.pause(wachtTijd);
    }
  }
});

// Code tegenligger3
basic.forever(function () {
  basic.pause(100);
  tegenligger3 = game.createSprite(3, 0);
  basic.pause(Math.randomRange(0, 5000));
  while (spelBezig == true) {
    if (tegenligger3.get(LedSpriteProperty.Y) == 4) {
      if (speler.isTouching(tegenligger3)) {
        spelBezig = false;
      } else {
        score += 1;
        tegenligger3.set(LedSpriteProperty.Y, 0);
        basic.pause(Math.randomRange(0, 5000));
      }
    } else {
      tegenligger3.change(LedSpriteProperty.Y, 1);
      basic.pause(wachtTijd);
    }
  }
});

// Code tegenligger4
basic.forever(function () {
  basic.pause(100);
  tegenligger4 = game.createSprite(4, 0);
  basic.pause(Math.randomRange(0, 5000));
  while (spelBezig == true) {
    if (tegenligger4.get(LedSpriteProperty.Y) == 4) {
      if (speler.isTouching(tegenligger4)) {
        spelBezig = false;
      } else {
        score += 1;
        tegenligger4.set(LedSpriteProperty.Y, 0);
        basic.pause(Math.randomRange(0, 5000));
      }
    } else {
      tegenligger4.change(LedSpriteProperty.Y, 1);
      basic.pause(wachtTijd);
    }
  }
});
