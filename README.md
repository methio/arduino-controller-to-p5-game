# arduino-controller-to-p5-game
A simple P5js game playable with arduino controller
![arduino game](https://github.com/methio/arduino-controller-to-p5-game/blob/main/img/picture1.JPG "game picture 1")

## Technologies used

|Arduino | P5 serial control | P5js | 
|--------|-------------------|------|
|Controller informations sent through Serial communication | enables connectivity between local serial devices and web applications | Receive controller information and use it in game | 

## Arduino 
A TinkerCAD version of the arduino part is available [here](https://www.tinkercad.com/things/h3zB5DnDEJR-glorious-trug-jaban).

#### Wiring 
![arduino wiring](https://github.com/methio/arduino-controller-to-p5-game/blob/main/img/wiring.png "game picture 1")

Bill of material
* 1 arduino uno
* 4 10k ohms resistance
* 4 press buttons 
* a bunch of wires

#### Code 
Arduino code is available in arduino folder.
[click here](https://github.com/methio/arduino-controller-to-p5-game/blob/main/arduino/controller/controller.ino)

## P5 serial control 
A GUI App for running and monitoring of the p5.serialserver.👇
This application runs the p5.serialserver which enables connectivity between local serial devices and web applications via the p5.serialport p5.js library. 
[Download latest P5-serialcontrol version here.](https://github.com/p5-serial/p5.serialcontrol/releases)

Usage 
* Plug the arduino board
* Select the right port (1 on screenshot)
* Open the console (2 on screenshot)
* Activate the console (3 on screenshot)
* *You may need to activate ASCII if you want to test it*
![game picture](https://github.com/methio/arduino-controller-to-p5-game/blob/main/img/screenshot-serialcontrol-UI.png "P5 serial control screenshot")


## P5js 
A version of this project is accessible on P5 web editor [here](https://editor.p5js.org/methio/sketches/cb3hbcKaZ). 

You can also find the project in the [p5js folder](https://github.com/methio/arduino-controller-to-p5-game/blob/main/p5js).

![game picture](https://github.com/methio/arduino-controller-to-p5-game/blob/main/img/ingame.png "P5 game screenshot")

The game will be improved later! 