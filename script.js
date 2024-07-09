var LEVELS = [
  [
		"                                                                                                                              ",
		"                                                                                                                              ",
		"                                                                                                                              ",
		"                                                                                                                              ",
		"         b                                                                                                                    ",
		"        bb                                      !!                                                                            ",
		"  x      b                                      !x                                                                            ",
		"  x      b                                      !x                                                                            ",
		"  x     bbb                                     !x                                                                            ",
		"  x                                             !x                                                                            ",
		"  x       o                          o          !x                                                                            ",
		"  xxxxxxxxxxxxxxwwwxxxxxxxxxxxxxxxxxxxxxxxxxxxxx!x                                                                            ",
		"  x                        x                    !x                                                                       xxxxx",
		"  x           o            x                    !x                                                                       x   x",
		"  xxxxwwwxxxxxxxxxxxxxxxxxxx                    ug                                                                       x   x",
		"  x                        k                    ug                                                                       g   x",
		"  x           o            k         @          ux                                                                       g o x",
		"  xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxpppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppxxxxx",
		"                                                                                                                              ",
		"                                                                                                                              ",
		"                                                                                                                              ",
		"                                                                                                                              ",
		"                                                                                                                              ",
		"                                                                                                                              "
	],
	[
		"                                                                                                                                   ",
		"                                                                                                                                   ",
		"                                                                                                                                   ",
		"                                                                                                                                   ",
		"                                                                                                                                   ",
		"                                                                                                                                   ",
		"                                                                                                                                   ",
		"  x      bbb                                     x                                                                                 ",
		"  x        b                                     x                                                                                 ",
		"  x      bbb                                     x                                                                                 ",
		"  x      b                                       x                                                                                 ",
		"  x      bbb                                     x                                                                                 ",
		"  x                                              x                                                                                 ",
		"  x                                              x                                                                                 ",
		"  x                                              x                                                                                 ",
		"  x                                              x                                                                                p",
		"  x        @                              o      x                                                                                p",
		"  xxxxxxxxxxxxxxxx     xxx     xxxxxxxxxxxxxxxxxxx                                                                                p",
		"                 xuu!!!x x!!!!!x                                                                                                  p",
		"                 xuu!!!x x!!!!!x                                                                                                  p",
		"                 xuu!!!x x!!!!!x                                                                                                  p",
		"                 xggxxxx xxxxxxx                                                                                                  p",
		"                 p                                                                                                               op",
		"                 pppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppp"],
	[
		"                                                                                ",
		"                                                                                ",
		"                                                                                ",
		"                                                                                ",
		"                                                                                ",
		"  x     bbb                                      x                              ",
		"  x       b                                      x                              ",
		"  x     bbb                                      x                              ",
		"  x       b                                      x                              ",
		"  x     bbb                                      x                              ",
		"  x                 o                            x                              ",
		"  xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx      x                              ",
		"  x                                      x      xx                              ",
		"  x                                      x       x                              ",
		"  x                                      x       x                              ",
		"  x                                      xx      x                              ",
		"  x                                             xx                              ",
		"  x        @                              o      x                              ",
		"  xxxxxxxxxxxxxxxx     xxx     xxxxxxxxxxxxxxxxxxx                              ",
		"                 x!!!!!x x!!!!!x                                                ",
		"                 x!!!!!x x!!!!!x                                                ",
		"                 x!!!!!x x!!!!!x                                                ",
		"                 xxxxxxx xxxxxxx                                                ",
		"                                                                                ",
		"                                                                                "],
	[
		"                                                                                ",
		"                                                                                ",
		"                                                                                ",
		"                                                                                ",
		"                                                                                ",
		"  x       b b                                    x                              ",
		"  x       b b                                    x                              ",
		"  x       bbb       o                            x                              ",
		"  x         b                                    x                              ",
		"  x         b                                    x                              ",
		"  x                                              x                              ",
		"  xxxxxxxxxxxxxxx!!!!!!!xxxxppppppppxxxxxxx      x                              ",
		"  x              xxxxxxx                 x      xx                              ",
		"  x                                      x       x                              ",
		"  x                                      x       x                              ",
		"  x                                      xx      x                              ",
		"  x                                             xx                              ",
		"  x        @                              o      x                              ",
		"  xxxxxxxxxxxxxxxx     xxx     xxxxxxxxxxxxxxxxxxx                              ",
		"                 x!!u!!x x!!!!!x                                                ",
		"                 xuuuuux x!!!!!x                                                ",
		"                 xuuuudx x!!!!!x                                                ",
		"                 xxxxxxx xxxxxxx                                                ",
		"                                                                                ",
		"                                                                                "],
	[
		"                                                                                                  ",
		"                                                                                                  ",
		"                                                                                                  ",
		"          bbb                                                                                     ",
		"          b                                                                                       ",
		"          bbb                                                                                     ",
		"            b                                                                                     ",
		"          bbb                                                                                     ",
		"  xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx                                                ",
		"  x!                                            !x                                                ",
		"  x!     o                        o             !x                                                ",
		"  x!xxxxxxxxxxxxxxwwwwxxxyyxxxxxxxxxxxxxxxwwwwxx!x                                                ",
		"  x!                     yy                     !x                                                ",
		"  x!                 o   yy               o     !x                                                ",
		"  x!xxxxxxxwwwwxxxxxxxxxxyyxxwwwwxxxxxxxxxxxxxxx!x                                                ",
		"  x!                                            !x                                                ",
		"  x!         @                                  !x                                                ",
		"  xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx                                                ",
		"                                                                                                  ",
		"                                                                                                  ",
		"                                                                                                  ",
		"                                                                                                  ",
		"                                                                                                  ",
		"                                                                                                  "],
	
	[
		"                                      x!!x                        xxxxxxx                                    x!x  ",
		"                                      x!!x                     xxxx     xxxx                                 x!x  ",
		"                                      x!!xxxxxxxxxx           xx           xx                                x!x  ",
		"                                      xx!!!!!!!!!!xx         xx             xx                               x!x  ",
		"                                       xxxxxxxxxx!!x         x                                               x!x  ",
		"                                                xx!x         x                                              xx!x  ",
		"                                                 x!x         x     o   o                      xxxxxxxxxxxxxxx!!x  ",
		"                                                 xvx         x     x   x                 !!!!!!!!!!!!!!!!!!!!!xx  ",
		"                                                             xx  |   |   |  xx           !xxxxxxxxxxxxxxxxxxxxx   ",
		"                                                              xx!!!!!!!!!!!xx            v                        ",
		"                                                               xxxx!!!!!xxxx                                      ",
		"                                               x     x            xxxxxxx        xxx         xxx                  ",
		"                                               x     x                           x x         x x                  ",
		"                                               x     x                             x         x                    ",
		"      bbb                                      xo    x                             xx        x                    ",
		"      b                                        xx    x                             x         x                    ",
		"      bbb                                      x     x      o  o     x   x         x         x                    ",
		"      b b      xxxxxxx        xxx o xxx        x     x               x   x         x         x                    ",
		"      bbb     xx     xx         x   x          x    ox     xxxxxx    x   x   xxxxxxxxx       x                    ",
		"             xx       xx        x o x          x    xx               x   x   x               x                    ",
		"     @       x         x        x   x          x     x               x   x   x               x                    ",
		"    xxx      x         x        x o x          x     x               x   xxxxx   xxxxxx      x                    ",
		"    x x      x         x       xx   xx         xo    x               x     o     x x         x                    ",
		"!uu!x x!!!!!!x         x!!!!!!xx     xx!!!!!!!!xx    x!!!!!!!!!!     x     =     x x         x                    ",
		"luulx x!!!!!!x         x!!!!!xx       xxxxxxxxxx     x!!!!!!!xx!     xxxxxxxxxxxxx xx  o o  xx                    ",
		"luulx x!!!!!!x         x!!!!!x                      xx!!!!!!xx !                    xx     xx                     ",
		"luulx xllllllx         xl!!!!x                     xx!!!!!!xx  !                     xxxxxxx                      ",
		"luuug guuuuuug         gdl!!!xx       xxxxxxxxxxxxxx!!!!!!xx   !                                                  ",
		"luuug guuuuuug         gdl!!!!xxxxxxxxx!!!!!!!!!!!!!!!!!!xx    !                                                  ",
		"llllxpxllllllxpppppppppxl!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!xx     !                                                  "
	],
	[
		"                                                                                                              ",
		"                                                                                                              ",
		"                                                                                                              ",
		"                                                                                                              ",
		"                                                                                                              ",
		"                                                                                                              ",
		"                                        o                                                                     ",
		"                                        x                                                                     ",
		"                                        x                                                                     ",
		"                                        x                                                                     ",
		"                                        x                                                                     ",
		"                                       xxx                                                                    ",
		"                                       x g                 !!!        !!!  xxx                                ",
		"                                       x g                 !x!        !x!                                     ",
		"                                     xxx gxx                x          x                                      ",
		"                                      x   x                 x          x       xxx                            ",
		"                                      x   x                 x          x      x!!!x                           ",
		"                                      x   x                 xxxxxxxxxxxx       xxx                            ",
		"                                     xx   xx      x   x      x                                                ",
		"                                      x   xxxxxxxxx   xxxxxxxx              x x                               ",
		"                                      x   x           x                    x!!!x                              ",
		"                                      x   x           x                     xxx                               ",
		"                                     xx   xx          x             o                                         ",
		"                                      x   x= = = =    x            xxx                                        ",
		"                                      x   x           x           x!!!x                                       ",
		"                                      x   x    = = = =x            xxx       xxx                              ",
		"                                     xx   xx          x     o               x!!!x                             ",
		"                                      x   x           x     x                xxv        xxx                   ",
		"                              o   o   xudux           x              x                 x!!!x                  ",
		"                             xxx xxx xxxuxxx          x!!!!!!!!!!!!!!x                  xvx                   ",
		"                             x xxx x x xxx x          x!!!!!!!!!!!!!!x                                        ",
		"                             x             x   xxxxxxxxxxxxxxxxxxxxxxx                                        ",
		"                             xx           xx                                         xxx                      ",
		"  xxx                         x     x     x                                         x!!!x                xxx  ",
		"  x x                         x    xxx    x                                          xxx                 x x  ",
		"  x                           x    xxx    xxxxxxx                        xxxxx                             x  ",
		"  x      bbb                  xo          x                              x   x                             x  ",
		"  x        b                  xx          x                              x x x                             x  ",
		"  x        b                              x       |xxxx|    |xxxx|     xxx xxx                             x  ",
		"  x        b       xxx                    x                              x         xxx                     x  ",
		"  x        b      xxxxx       xx          x                             xxx       x!!!x          x         x  ",
		"  x               oxxxo       x    xxx    x       o    o    o    o      x x        xxx          xxx        x  ",
		"  x                xxx        xxxxxxxxxxxxx  x    x    x    x    x     xx xx                    xxx        x  ",
		"  x      @          x         x           x!!x    x!!!!x    x!!!!x    xx   xx                    x         x  ",
		"  xxxxxxxxxxxxxxxxxxxxxxxxxxxxx           xxxxxxxxxxxxxxxxxxxxxxxxxxxxx     xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx  ",
		"                                                                                                              ",
		"                                                                                                              "
	],
	[
		"                                                                                                  xxx x       ",
		"                                                                                                      x       ",
		"                                                                                                  xxxxx       ",
		"                                                                                                  x           ",
		"                                                                                                  x xxx       ",
		"                                                                                                  x x x       ",
		"                                                                                                  xxx x       ",
		"                   xxx                                                                                x       ",
		"       !     !                                                xxxxx xxxxx xxxxx xxxxx xxxxx xxxxx xxxxx       ",
		"       x  o  x                                                x   x x   x x   x x   x x   x x   x x           ",
		"       x=    x            x                                   xxx x xxx x xxx x xxx x xxx x xxx x xxxxx       ",
		"       x  o  x                                                  x x   x x   x x   x x   x x   x x     x       ",
		"       !     !                                               xxxx xxxxx xxxxx xxxxx xxxxx xxxxx xxxxxxx       ",
		"                          o                                                                                   ",
		"                         xxx                              xx                                                  ",
		"                                                                                                              ",
		"                                                                                                              ",
		"                                                      xx                                                      ",
		"                   xxx         xxx                                                                            ",
		"                                                                                                              ",
		"      bbb                                                                       x      x                      ",
		"      b b                                                 xx     xx                                           ",
		"      bbb    xxx         xxx         xxx                                 x                  x                 ",
		"      b b                                                                                                     ",
		"      bbb                                                        ||                                           ",
		"  xxxxxxxxxxx       o           o                                                                             ",
		"  x         x   xxxxxxxxx   xxxxxxxxx   xx                                                x                   ",
		"  x         x   x       x   x       x   x                 ||                  x     x                         ",
		"  x  @      xxxxx       xxxxx       xxxxx                                o                                    ",
		"  xxxxxxx                                     xxxxx       xx     xx     xxx                                   ",
		"        x           o=          o=            x   x                     xxx                                   ",
		"        xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx   x!!!!!!!!!!!!!!!!!!!!!xxxd!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!",
		"                                                  xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx",
		"                                                                                                              "
]
];




function Vector(x, y) {
  this.x = x;
  this.y = y;
}

Vector.prototype.plus = function (other) {
  return new Vector(this.x + other.x, this.y + other.y);
};

Vector.prototype.times = function (scale) {
  return new Vector(this.x * scale, this.y * scale);
};

var actorchars = {
  "@": Player,
  "o": Coin,
	 "m": Fakecoin,
	 "u": Fakelava,
	 "q": Lavawall,
  "=": Lava,
  "|": Lava,
  "!": Lava,
  "v": Lava,
  "g": Ghost,
	 "h": Wall,
	 "b": whiteGhost,
  "i": Invis,
  "A": Platform,
  "B": Platform,
  "C": Platform,
  "D": Platform,
  "1": Button,
  "2": Button,
  "3": Button,
  "4": Button,
  "d": Door,
	 "&": Player2 // Add this line
};


function Door(pos) {
  this.pos = pos;
  this.size = new Vector(1, 1);
	 this.repeatPos = pos;
}
Door.prototype.type = "Door";
Door.prototype.act = function (step) {
};


function block(pos) {
  this.pos = pos;
  this.size = new Vector(1, 0.3);
}
block.prototype.type = "block";
block.prototype.act = function (step) {
};

function block2(pos) {
  this.pos = pos;
  this.size = new Vector(1, 0.3);
}
block2.prototype.type = "block2";
block2.prototype.act = function (step) {
};

function block3(pos) {
  this.pos = pos;
  this.size = new Vector(1, 0.3);
}
block3.prototype.type = "block3";
block3.prototype.act = function (step) {
};

function block4(pos) {
  this.pos = pos;
  this.size = new Vector(1, 0.3);
}
block4.prototype.type = "block4";
block4.prototype.act = function (step) {
};

function Player(pos) {
  this.pos = pos.plus(new Vector(0, -0.4));
  this.size = new Vector(0.85, 0.85);
  this.speed = new Vector(0, 0);
}
Player.prototype.type = "player";

function Lava(pos, ch) {
  this.pos = pos;
  this.size = new Vector(1, 1);
	 if (ch === "!")  this.speed = new Vector(0, 0);
  else if (ch === "=") this.speed = new Vector(2, 0);
  else if (ch === "|") this.speed = new Vector(0, 2);
	 else if (ch === ":") this.speed = new Vector(0, 0);
	 else if (ch === "/") this.speed = new Vector(0, 0);
  else if (ch === "v") { this.speed = new Vector(0, 3);
		
    this.repeatPos = pos;
  }
}
Lava.prototype.type = "lava";

function Coin(pos) {
  this.basePos = this.pos = pos;
  this.size = new Vector(0.6, 0.6);
  this.wobble = Math.random() * Math.PI * 2;
}
Coin.prototype.type = "coin";

function Ghost(pos) {
  this.pos = pos;
  this.size = new Vector(0.75, 0.75);
}
Ghost.prototype.type = "ghost";
Ghost.prototype.act = function (step) {
  // Add behavior if necessary
};

function whiteGhost(pos) {
  this.pos = pos;
  this.size = new Vector(0.7, 0.7);
}
whiteGhost.prototype.type = "whiteghost";
whiteGhost.prototype.act = function (step) {
  // Add behavior if necessary
};

function Lavawall(pos) {
	 this.basePos = this.pos = pos;
  this.size = new Vector(0.7, 0.7);
  this.wobble = Math.random() * Math.PI * 2;
}
Lavawall.prototype.type = "Lavawall";
Lavawall.prototype.act = function (step) {
};

function Wall(pos) {
	 this.basePos = this.pos = pos;
  this.size = new Vector(0.6, 0.6);
}
Wall.prototype.type = "Wall";
Wall.prototype.act = function (step) {
};








function Invis(pos) {
	 this.basePos = this.pos = pos;
  this.size = new Vector(0.6, 0.6);
}
Invis.prototype.type = "Invis";
Invis.prototype.act = function (step) {
};

function Platform(pos) {
  this.pos = pos;
  this.size = new Vector(5.6, 1.6); // Adjust size as needed
  this.speed = new Vector(0, 0);
  this.direction = new Vector(0, 0); // Placeholder for movement direction
  this.moveSteps = 0; // Counter for movement steps
}

Platform.prototype.type = "platform";

Platform.prototype.act = function(step, level) {
  if (this.moveSteps > 0) {
    var newPos = this.pos.plus(this.speed.times(step));
    // Check collision with the player
    var player = level.player;
    if (newPos.x < player.pos.x + player.size.x &&
        newPos.x + this.size.x > player.pos.x &&
        newPos.y < player.pos.y + player.size.y &&
        newPos.y + this.size.y > player.pos.y) {
      // Handle collision response
      var playerBottom = player.pos.y + player.size.y;
      var platformTop = newPos.y;
      var playerTop = player.pos.y;
      var platformBottom = newPos.y + this.size.y;

      // Player on top of platform
      if (playerBottom > platformTop && playerTop < platformTop) {
        player.pos.y = platformTop - player.size.y;
        if (this.speed.y < 0) player.speed.y = this.speed.y; // Match platform vertical speed
      }
      // Player below platform
      else if (playerTop < platformBottom && playerBottom > platformBottom) {
        player.pos.y = platformBottom;
        if (this.speed.y > 0) player.speed.y = this.speed.y; // Match platform vertical speed
      }
      // Player collides from sides
      else {
        if (player.pos.x > this.pos.x) {
          player.pos.x = this.pos.x + this.size.x;
        } else {
          player.pos.x = this.pos.x - player.size.x;
        }
        player.speed.x = 0;
      }
    }
    this.pos = newPos;
    this.moveSteps -= step;
  }
};


function Button(pos) {
  this.pos = pos;
  this.size = new Vector(1, 1);
  this.pressed = false;
  this.used = false; // Track if the button has been used
}

Button.prototype.type = "button";

Button.prototype.act = function(step, level) {
  // Check if the button is already used
  if (this.used) return;

  // Add any necessary behavior for the button itself
  if (this.pressed) {
    this.used = true; // Mark the button as used
    this.size = this.size.times(0.5); // Halve the size of the button
    this.activatePlatforms(level);
  }
};



function Level(plan) {
  this.width = plan[0].length;
  this.height = plan.length;
  this.grid = [];
  this.actors = [];

  for (var y = 0; y < this.height; y++) {
    var line = plan[y],
      gridLine = [];
    for (var x = 0; x < this.width; x++) {
      var ch = line[x],
        fieldType = null;
      var Actor = actorchars[ch];
      if (Actor) this.actors.push(new Actor(new Vector(x, y), ch));
      else if (ch === "x") fieldType = "wall";
					 else if (ch === "A") fieldType = "platform";
      else if (ch === "!") fieldType = "lava";
					 else if (ch === "/") fieldType = "lava-slope-down";
					 else if (ch === ":") fieldType = "lava-slope-up";
      else if (ch === "|") fieldType = "lava";
      else if (ch === "=") fieldType = "lava";
      else if (ch === "g") fieldType = "ghost";
					 else if (ch === "b") fieldType = "whiteghost";
				 	else if (ch === "m") fieldType = "Fakecoin";
					 else if (ch === "u") fieldType = "Fakelava";
      else if (ch === "p") fieldType = "Invis";
					 else if (ch === "l") fieldType = "lavawall";
					 else if (ch === "w") fieldType = "block";
					 else if (ch === "y") fieldType = "block2";
					 else if (ch === "k") fieldType = "block3";
					 else if (ch === "j") fieldType = "block4";
      else if (ch === "v") {
        fieldType = "lava";
        console.log(fieldType);
      }
      gridLine.push(fieldType);
    }
    this.grid.push(gridLine);
  }
  this.player = this.actors.filter(function (actor) {
    return actor.type === "player" || actor.type === "player2";
  })[0];
  this.status = this.finishDelay = null;
}

Level.prototype.isFinished = function () {
  return this.status != null && this.finishDelay < 0;
};

function element(name, className) {
  var elem = document.createElement(name);
  if (className) elem.className = className;
  return elem;
}

function DOMDisplay(parent, level) {
  this.wrap = parent.appendChild(element("div", "game"));
  this.level = level;

  this.wrap.appendChild(this.drawBackground());
  this.actorLayer = null;
  this.drawFrame();
}

var scale = 16;

DOMDisplay.prototype.drawBackground = function () {
  var table = element("table", "background");
  table.style.width = this.level.width * scale + "px";
  table.style.height = this.level.height * scale + "px";
  this.level.grid.forEach(function (row) {
    var rowElement = table.appendChild(element("tr"));
    rowElement.style.height = scale + "px";
    row.forEach(function (type) {
      rowElement.appendChild(element("td", type));
    });
  });
  return table;
};


DOMDisplay.prototype.centerPlayer = function() {
  let scale = this.scale;
  let player = this.level.player;
  let width = this.wrap.clientWidth;
  let height = this.wrap.clientHeight;
  
  // Calculate the center of the player
  let centerX = player.pos.x * scale + player.size.x * scale / 2;
  let centerY = player.pos.y * scale + player.size.y * scale / 2;
  
  // Scroll the display to center the player
  this.wrap.scrollLeft = centerX - width / 2;
  this.wrap.scrollTop = centerY - height / 2;
};



var arrowCodes = { 37: "left", 38: "up", 39: "right", 87: "w", 65: "a", 68: "d", 82: "r", 188: ",", 190: "." }; 




function trackKeys(codes) {
  var pressed = Object.create(null);
  function handler(event) {
    if (codes.hasOwnProperty(event.keyCode)) {
      var down = event.type == "keydown";
      pressed[codes[event.keyCode]] = down;
      event.preventDefault();
    }
  }
  addEventListener("keydown", handler);
  addEventListener("keyup", handler);
  return pressed;
}

var arrows = trackKeys(arrowCodes);




DOMDisplay.prototype.drawActors = function() {
  var wrap = element("div");
  this.level.actors.forEach(function(actor) {
    var rect = wrap.appendChild(element("div", "actor " + actor.type));
    rect.style.width = actor.size.x * scale + "px";
    rect.style.height = actor.size.y * scale + "px";
    rect.style.left = actor.pos.x * scale + "px";
    rect.style.top = actor.pos.y * scale + "px";
  });
  return wrap;
};


DOMDisplay.prototype.drawFrame = function () {
  if (this.actorLayer) this.wrap.removeChild(this.actorLayer);
  this.actorLayer = this.wrap.appendChild(this.drawActors());
  this.wrap.className = "game " + (this.level.status || "");
  this.scrollPlayerIntoView();
};

DOMDisplay.prototype.scrollPlayerIntoView = function () {
  var width = this.wrap.clientWidth;
  var height = this.wrap.clientHeight;
  var margin = width / 3;

  var left = this.wrap.scrollLeft,
    right = left + width;
  var top = this.wrap.scrollTop,
    bottom = top + height;

  var player = this.level.player;
  var center = player.pos.plus(player.size.times(0.5)).times(scale);
  if (center.x < left + margin) this.wrap.scrollLeft = center.x - margin;
  else if (center.x > right - margin)
    this.wrap.scrollLeft = center.x + margin - width;
  if (center.y < top + margin) this.wrap.scrollTop = center.y - margin;
  else if (center.y > bottom - margin)
    this.wrap.scrollTop = center.y + margin - height;
};



DOMDisplay.prototype.clear = function () {
  this.wrap.parentNode.removeChild(this.wrap);
};

Level.prototype.obstacleAt = function(pos, size) {
  var xStart = Math.floor(pos.x);
  var xEnd = Math.ceil(pos.x + size.x);
  var yStart = Math.floor(pos.y);
  var yEnd = Math.ceil(pos.y + size.y);

  if (xStart < 0 || xEnd > this.width || yStart < 0) return "wall";
  if (yEnd > this.height) return "lava";

  for (var y = yStart; y < yEnd; y++) {
    for (var x = xStart; x < xEnd; x++) {
      var fieldType = this.grid[y][x];
      if (fieldType) {
        if (fieldType === "block") {
          if (this.player && size.y - pos.y > this.player.size.y - this.player.pos.y) {
            continue;
										}
								}
								if (fieldType === "block2") {
          if (this.player && size.y + pos.y > this.player.size.y + this.player.pos.y) {
            continue;
										}
								}
								if (fieldType === "block3") {
          if (this.player && size.x - pos.x > this.player.size.x - this.player.pos.x) {
            continue;
										}
								}
								if (fieldType === "block4") {
          if (this.player && size.x + pos.x > this.player.size.x + this.player.pos.x) {
            continue;
          }
        } else if (fieldType === "invis") {
          continue;
        }
        return fieldType;
      }
    }
  }
};






Level.prototype.actorAt = function (actor) {
  for (var i = 0; i < this.actors.length; i++) {
    var other = this.actors[i];
    if (
      other != actor &&
      actor.pos.x + actor.size.x > other.pos.x &&
      actor.pos.x < other.pos.x + other.size.x &&
      actor.pos.y + actor.size.y > other.pos.y &&
      actor.pos.y < other.pos.y + other.size.y
    )
      return other;
  }
};

var maxStep = 0.05;

Level.prototype.animate = function (step, keys) {
  if (this.status != null) this.finishDelay -= step;

  while (step > 0) {
    var thisStep = Math.min(step, maxStep);
    this.actors.forEach(function (actor) {
      actor.act(thisStep, this, keys);
    }, this);
    step -= thisStep;
  }
};


Lava.prototype.act = function (step, level) {
  var newPos = this.pos.plus(this.speed.times(step));
  if (!level.obstacleAt(newPos, this.size)) this.pos = newPos;
  else if (this.repeatPos) this.pos = this.repeatPos;
  else this.speed = this.speed.times(-1);
};

var wobbleSpeed = 8,
  wobbleDist = 0.07;

Coin.prototype.act = function (step) {
  this.wobble += step * wobbleSpeed;
  var wobblePos = Math.sin(this.wobble) * wobbleDist;
  this.pos = this.basePos.plus(new Vector(0, wobblePos));
};



var playerXSpeed = 10;

Player.prototype.moveX = function (step, level, keys) {
  this.speed.x = 0;
  if (keys.left) this.speed.x -= playerXSpeed;
  if (keys.right) this.speed.x += playerXSpeed;

  var motion = new Vector(this.speed.x * step, 0);
  var newPos = this.pos.plus(motion);
  var obstacle = level.obstacleAt(newPos, this.size);
  if (obstacle) level.playerTouched(obstacle);
  else this.pos = newPos;
};

var gravity = 30;
var jumpSpeed = 17;

Player.prototype.moveY = function(step, level, keys) {
  this.speed.y += step * gravity;
  var motion = new Vector(0, this.speed.y * step);
  var newPos = this.pos.plus(motion);
  var obstacle = level.obstacleAt(newPos, this.size);

  // Check if standing on a platform
  var standingOnPlatform = false;
  var platform = level.actorAt(this);
  if (platform && platform.type === "platform" &&
      newPos.y <= this.pos.y && this.speed.y > 0) {
    // Check if player is on top of the platform
    if (newPos.x + this.size.x > platform.pos.x &&
        newPos.x < platform.pos.x + platform.size.x) {
      standingOnPlatform = true;
    }
  }

  if (obstacle) {
    level.playerTouched(obstacle);
    if (keys.up && this.speed.y > 0) {
      this.speed.y = -jumpSpeed;
    } else {
      this.speed.y = 0;
    }
  } else if (standingOnPlatform && keys.up) {
    // Jump off the platform
    this.pos = newPos;
    this.speed.y = -jumpSpeed;
  } else {
    this.pos = newPos;
  }
};



Player.prototype.act = function (step, level, keys) {
  this.moveX(step, level, keys);
  this.moveY(step, level, keys);
	 

  var otherActor = level.actorAt(this);
  if (otherActor) level.playerTouched(otherActor.type, otherActor);

  if (level.status == "lost") {
    // Remove the dying animation by commenting out or deleting the lines below
    // this.pos.y += step;
    // this.size.y -= step;
  }

  if (keys.r) {
    this.kill(level); // Kill the player and reload the level
		}
};
  




Player.prototype.kill = function(level) {
  level.status = "lost";
  level.finishDelay = 0.1;
};





Level.prototype.playerTouched = function(type, actor) {
  if (type === "lava" && this.status === null) {
    this.status = "lost";
    this.finishDelay = 0.1;
  } else if (type === "coin") {
    this.actors = this.actors.filter(function(other) {
      return other !== actor;
    });
    if (!this.actors.some(function(actor) {
      return actor.type === "coin";
    })) {
      this.status = "won";
      this.finishDelay = 1;
    }
  } else if (type === "button") {
    if (!actor.used) {
      actor.pressed = true;
      actor.used = true; // Mark the button as used
      actor.size = actor.size.times(1); // Halve the size of the button
      this.activatePlatforms(); // Activate platforms
    }
  } else if (type === "platform") {
    // Handle collision logic with platforms here
    // Example: Moving the player accordingly
    var player = this.player;
    if (actor.pos.y + actor.size.y < player.pos.y + player.size.y) {
      player.pos = player.pos.plus(new Vector(0, -0.05));
      player.speed.y = -jumpSpeed;
    } else if (actor.pos.y > player.pos.y) {
      player.pos = player.pos.plus(new Vector(0, 0.05));
      player.speed.y = jumpSpeed;
    } else if (actor.pos.x > player.pos.x) {
      player.pos = player.pos.plus(new Vector(0.05, 0));
    } else {
      player.pos = player.pos.plus(new Vector(-0.05, 0));
    }
  } else if (type === "Door") {  // Add this block
    this.status = "won";
    this.finishDelay = 0.2;
  }
};



Level.prototype.activatePlatforms = function() {
  this.actors.forEach(function(actor) {
    if (actor.type === "platform" && actor.speed.x === 0 && actor.speed.y === 0) {
      actor.speed = new Vector(0, -6); // Start by moving up
      actor.moveSteps = 6; // Move 2 units
      setTimeout(function() {
        actor.speed = new Vector(-3, 0); // Then move left
        actor.moveSteps = 1;
        setTimeout(function() {
          actor.speed = new Vector(0, 1); // Finally move down
          actor.moveSteps = 2;
									 setTimeout(function() {
            actor.speed = new Vector(0, 0); // Then move left
            actor.moveSteps = 1000000;
        }, 1000); // Adjust delay as needed
      }, 1000); // Adjust delay as needed
    },1000);
  }});
};







function runAnimation(frameFunc) {
  var lastTime = null;
  function frame(time) {
    var stop = false;
    if (lastTime != null) {
      var timeStep = Math.min(time - lastTime, 100) / 1000;
      stop = frameFunc(timeStep) === false;
    }
    lastTime = time;
    if (!stop) requestAnimationFrame(frame);
  }
  requestAnimationFrame(frame);
}

var arrows = trackKeys(arrowCodes);

function runLevel(level, Display, andThen) {
  var display = new Display(document.body, level);
  runAnimation(function (step) {
    level.animate(step, arrows);
    display.drawFrame(step);
    if (level.isFinished()) {
      display.clear();
      if (andThen) andThen(level.status);
      return false;
    }
  });
}

function runGame(plans, Display) {
  function startLevel(n) {
    runLevel(new Level(plans[n]), Display, function (status) {
      if (status == "lost") startLevel(n);
      else if (n < plans.length - 1) startLevel(n + 1);
      else alert("You win!");
    });
  }
  startLevel(0);
}

runGame(LEVELS, DOMDisplay);



function Fakecoin(pos) {
  this.basePos = this.pos = pos;
  this.size = new Vector(0.6, 0.6);
  this.wobble = Math.random() * Math.PI * 2;
}
Fakecoin.prototype.type = "Fakecoin";

Fakecoin.prototype.act = function (step) {
  this.wobble += step * wobbleSpeed;
  var wobblePos = Math.sin(this.wobble) * wobbleDist;
  this.pos = this.basePos.plus(new Vector(0, wobblePos));
};

function Fakelava(pos) {
  this.pos = pos;
  this.size = new Vector(1, 1);
  this.speed = new Vector(0, 0); // You can define movement if needed
}
Fakelava.prototype.type = "Fakelava";

Fakelava.prototype.act = function (step) {
  // Add behavior if necessary
};

function Player2(pos) {
  this.pos = pos.plus(new Vector(0, -0.4));
  this.size = new Vector(0.95, 0.95);
  this.speed = new Vector(0, 0);
}
Player2.prototype.type = "player2";

Player2.prototype.moveX = function (step, level, keys) {
  this.speed.x = 0;
  if (keys.a) this.speed.x -= playerXSpeed;
  if (keys.d) this.speed.x += playerXSpeed;

  var motion = new Vector(this.speed.x * step, 0);
  var newPos = this.pos.plus(motion);
  var obstacle = level.obstacleAt(newPos, this.size);
  if (obstacle) level.playerTouched(obstacle);
  else this.pos = newPos;
};

Player2.prototype.moveY = function(step, level, keys) {
  this.speed.y += step * gravity;
  var motion = new Vector(0, this.speed.y * step);
  var newPos = this.pos.plus(motion);
  var obstacle = level.obstacleAt(newPos, this.size);

  // Check if standing on a platform
  var standingOnPlatform = false;
  var platform = level.actorAt(this);
  if (platform && platform.type === "platform" &&
      newPos.y <= this.pos.y && this.speed.y > 0) {
    // Check if player is on top of the platform
    if (newPos.x + this.size.x > platform.pos.x &&
        newPos.x < platform.pos.x + platform.size.x) {
      standingOnPlatform = true;
    }
  }

  if (obstacle) {
    level.playerTouched(obstacle);
    if (keys.w && this.speed.y > 0) {
      this.speed.y = -jumpSpeed;
    } else {
      this.speed.y = 0;
    }
  } else if (standingOnPlatform && keys.w) {
    // Jump off the platform
    this.pos = newPos;
    this.speed.y = -jumpSpeed;
  } else {
    this.pos = newPos;
  }
};

Player2.prototype.act = function (step, level, keys) {
  this.moveX(step, level, keys);
  this.moveY(step, level, keys);

  var otherActor = level.actorAt(this);
  if (otherActor) level.playerTouched(otherActor.type, otherActor);

  if (level.status == "lost") {
    // Remove the dying animation by commenting out or deleting the lines below
    // this.pos.y += step;
    // this.size.y -= step;
  }
};


