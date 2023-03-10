const routeResponseMap = {
    "/about" : "<h1>Learn More About Us</h1>",
    "/hello" : "<h1>Say hello by emailing us here</h1>"
    // "/error" : "<h1>Sorry, the page you are looking for is not here.</h1>"
};

const port = 3000;
const http = require("http");
const httpStatus = require("http-status-codes");
const app = http.createServer((req, res) => {
    res.writeHead(200, {
        "content-type" : "text/html"
    });
    if(routeResponseMap[req.url])
    {
        setTimeout(() => res.end(routeResponseMap[req.url]),1000);
        // res.end(routeResponseMapm[req.url]);
    }   else {
        res.writeHead(404,{'content-type' : 'text/html'});
        res.end("<h1> Sorry, the page you are looking for is not here </h1>");
    }
});
app.listen(port);
console.log("the server has started and is listening on port number :",port);
