INSTALLATION:
-------------

Create a new project using the npm package manager.<br>
Then install the Slix<br>

```bash
npm install https://github.com/M4MIND/Slix.git
```  
    
QUICK START:
------------

Create new file in your project `index.js` and add in this code:

> If your use ES6 

```javascript
import {Slix} from 'slix';
let server = new Slix();
server.run();
```   
    
> If your use ES5

```javascript
let {Slix} = require('slix');
let server = new Slix();
server.run();
```

Then add new folders `views`, `static`, `controllers`

+ `views` - The folder in which the templates are stored
+ `controllers` - The folder in which the controllers are stored
+ `static` - Folder in which various files are stored

CREATE CONTROLLERS:
-------------------

In folder `controllers` create files `IndexController.js` and `PageNotFoundController.js`<br>
then add in files this code:

> IndexController.js (Example code in ES6)

```javascript
import {AbstractController, Response} from "slix"

export default class IndexController extends AbstractController {
	mount() {
		this.GET('/', this.index);
	}

	index = async (request) => {
		return new Response('Index controller')
	}
}
```

> PageNotFoundController.js (Example code in ES6)

```javascript
import {AbstractController, Response} from "slix"

export default class PageNotFoundController extends AbstractController {
	mount() {
		this.ALL('*', this.index);
	}

	index = async (request) => {
		return new Response('Error 404')
	}
}
```

RENDERING TEMPLATES:
--------------------
> This framework use `Twig template engine` [Twig](https://twig.symfony.com/)

Create file `index.twig` in folder `views` and add this code in method controller:

> IndexController.js
```javascript
index = async (request) => {
    return await this.App.render('index', {
        title: 'Index'
    })
}
```

ROUTING:
--------

In controllers that inherit from AbstractController, there is a `mount` method that performs controller mounting

```javascript
this.GET('/', this.index); // Mounts a handler to listen for a GET request.
this.POST('/', this.index); // Mounts a handler to listen for a POST request.
this.PUT('/', this.index); // Mounts a handler to listen for a PUT request.
this.DELETE('/', this.index); // Mounts a handler to listen for a DELETE request.
this.HEAD('/', this.index); // Mounts a handler to listen for a HEAD request.
this.OPTIONS('/', this.index); // Mounts a handler to listen for a OPTIONS request.
this.CONNECT('/', this.index); // Mounts a handler to listen for a CONNECT` request.
this.TRACE('/', this.index); // Mounts a handler to listen for a TRACE request.

this.ALL('/', this.index); // Mounts a handler to listen for a ALL request.
```
