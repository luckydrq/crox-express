crox-express
============

`crox` template shim for `express` web framework

```
var app = express();
require('crox-express')(app);

app.set('view engine', 'crox');
...
app.listen(3000);
```
