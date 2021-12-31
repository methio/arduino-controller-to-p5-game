// Buttons pins
const int B_LEFT = 2;
const int B_BOTTOM = 3;
const int B_TOP = 4;
const int B_RIGHT = 5;
int* Pins[4] = {&B_LEFT, &B_BOTTOM, &B_TOP, &B_RIGHT};

// Buttons states
int bLState = 0;
int bBState = 0;
int bTState = 0;
int bRState = 0;
int States[4] = {bLState, bBState, bTState, bRState};

void setup()
{
  // setup all buttons
  for (int i = 0; i <= sizeof(Pins); i++) {
    pinMode(Pins[i], INPUT);
  }

  // initialize serial communication
  Serial.begin(9600);
}

void loop()
{

  bLState = digitalRead(B_LEFT);
  delay(20);
  if (bLState == 1) {Serial.println(" left");}
  bBState = digitalRead(B_BOTTOM);
  delay(20);
  if (bBState == 1) {Serial.println(" down");}
  bTState = digitalRead(B_TOP);
  delay(20);
  if (bTState == 1) {Serial.println(" up");}
  bRState = digitalRead(B_RIGHT);
  delay(20);
  if (bRState == 1) {Serial.println(" right");}
}
