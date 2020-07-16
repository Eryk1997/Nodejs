var routerModule = function(){}

routerModule.prototype = {
    routes: [],

    get: function(url,callback){
        if(!url || !callback) console.error("Url or callback must be given")
        if(typeof url !==   "string") console.error("Type url must be a string")
        if(typeof callback !== "function") console.error("typeof callback must be a function")

        this.routes.forEach(route => {
            if(route.url === url) console.error('the url ' + route.url + "already exists")
        })

        const route = {
            url,
            callback
        }
        this.routes.push(route)
    },
    
}

module.exports = routerModule