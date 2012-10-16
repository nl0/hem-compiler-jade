# Jade compiler for hem

Compiles [Jade](https://github.com/visionmedia/jade/) templates for
[hem](https://github.com/maccman/hem).


## Usage

It is currently usable only with [this patch](https://github.com/maccman/hem/pull/47).

1. Install it with `npm install hem-compiler-jade` (and add it to the
   `package.json` if using one).

2. Add `"node_modules/hem-compiler-jade/node_modules/jade/runtime.js"`
   (or simply `"node_modules/jade/runtime.js"` if jade is in your `package.json`)
   to the `libs` section of your `slug.json`.

3. Add `"jade": "hem-compiler-jade"` to the `compilers` section of your
   `slug.json`.

4. ...

5. PROFIT!

Now all the `.jade` files are transparently compiled to js and can be
required like normal modules exposing the only function -- the compiled
template -- which takes context and returns resulting html.

For example, we have `my-template.jade` file:

```javascript
tmpl = require('my-template')
html = tmpl({/*context aka locals*/})
...
```

