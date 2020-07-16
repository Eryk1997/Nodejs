var dateTime = require("./dateModule");
var DateTime = require("./dateModule");
var daysTill = require("./daysTill");
var routerModule = require("./routerModule");

//1
//var trigger = new DateTime()
//trigger.showDate()

//2
// var till = new daysTill()
// till.showDaysTill(0)
// till.showDaysTill(1)

//3
var router = new routerModule();
router.get('/about-me',function(req){
    console.log(req.path);
})
