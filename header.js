var apple = new Image(150,50);
apple.src = "project/apple.png";
var appleRollOver = new Image(150,50);
appleRollOver.src = "project/appleRoll.png";

var home = new Image(150,50);
home.src = "project/home.png";
var homeRollOver = new Image(150,50);
homeRollOver.src = "project/homeRoll.png";

var early = new Image(150,50);
early.src = "project/early.png";
var earlyRollOver = new Image(150,50);
earlyRollOver.src = "project/earlyRoll.png";

var next = new Image(150,50);
next.src = "project/next.png";
var nextRollOver = new Image(150,50);
nextRollOver.src = "project/nextRoll.png";

var i = new Image(150,50);
i.src = "project/i.png";
var iRollOver = new Image(150,50);
iRollOver.src = "project/iRoll.png";

var products = new Image(150,50);
products.src = "project/products.png";
var productsRollOver = new Image(150,50);
productsRollOver.src = "project/productsRoll.png";

var references = new Image(150,50);
references.src = "project/references.png";
var referencesRollOver = new Image(150,50);
referencesRollOver.src = "project/referencesRoll.png";

function hiLite(imgDocID, imgObjName) {
document.images[imgDocID].src = eval(imgObjName + ".src");
 return true;
}

