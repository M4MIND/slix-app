Installation
------------

```bash
$ npm i -g slix-cli
```

Quick Start
-----------

The quickest way to get started with Slix is to utilize the executable Slix(1) to generate an application as shown below:

Create the app:

```bash
$ slix -n [name-project]
```

Install dependencies:<br>
Go to the application directory and run the command
```bash
$ npm install
```

Start your  app at http://localhost:3000/:
```bash
$ npm start
```


Command Line Options:
---------------------

This generator can also be further configured with the following command line flags.

```
Options:
  -V, --version              output the version number
  -n, --name [Name project]  Name project (default: "slix-project")
  -c, --css [engine]         Add stylesheet [engine] support (less) (defaults to plain css) (default: "less")
  -v, --view [engine]        Add view [engine] support (twig) (defaults to twig) (default: "twig")
  -h, --help                 output usage information
```