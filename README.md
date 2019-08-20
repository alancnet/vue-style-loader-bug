# vue-style-loader bug

## Steps to reproduce

1. `npm install`
2. `npm start`
3. Visit [http://localhost:8081](http://localhost:8081) in your browser.
4. You should see "Hello World" in red.
5. Open `src/app.vue`
6. Replace `color: red;` with `color: blue;` and save.
7. Notice the color in the browser does not change.

## How to fix

1. Open `webpack.config.js`
2. Replace `loader: 'vue-style-loader',` with `loader: '@alancnet/vue-style-loader',`
3. Repeat steps 1-6 above.
4. Notice the color changes.

### or

1. Open `webpack.config.js`
2. Replace `const shadowMode = true` with `const shadowMode = false`
3. Repeat steps 1-6 above.
4. Notice the color changes.
