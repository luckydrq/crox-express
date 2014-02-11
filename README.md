crox-express
============

A shim for [`crox`](https://github.com/thx/crox) template engine combined in [`express`](https://github.com/visionmedia/express) web framework

### Installation

Of course you should have [express](https://github.com/visionmedia/express) installed. Then just install ```crox-express``` shim:

```npm install crox-express```

or

if you have [cnpm](https://github.com/cnpm/cnpm), install via ```cnpm```:

```cnpm install crox-express```

*Attention: you don't have to install ```crox``` since it is already wrapped in ```crox-express```!*

### Usage

Quick start:

```
var app = express();
require('crox-express')(app);

app.set('view engine', 'crox');
...
app.listen(3000);
```
