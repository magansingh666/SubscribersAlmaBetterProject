### This demo project implements following 3 APIs for getting subscribers information
1. /subscribers
2. /subscribers/names
3. /subscribers/{id}


GET
[http://localhost:3000/subscribers](http://localhost:3000/subscribers) Response with an array of subscribers(an Object)

GET
[http://localhost:3000/subscribers/names](http://localhost:3000/subscribers/names) Response with an array of subscribers(an
Object with only two fields name and subscribedChannel)

GET
[http://localhost:3000/subscribers/:id](http://localhost:3000/subscribers/:id) Response with a subscriber*(an object)* with given id. If there is some error in id then response with status code 400 and Error message.
