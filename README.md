

![](./static/icon.png)

![](https://img.shields.io/npm/v/npm.svg) ![](https://img.shields.io/cocoapods/l/AFNetworking.svg)



# vue-easy-loading

> vue-easy-loading makes the loading animation <code>easier</code> and more <code>beautiful</code>. 

![preview](./static/preview.gif)



# Features

- ✔️ easy to use, Just two line of code.
- ✔️ more beautiful, with help of [spinkit](https://github.com/tobiasahlin/SpinKit).
- ✔️ Higher customization, use it on every HTML DOM.
- ✔️ Long time support.

# Install

```javascript
npm i -S vue-easy-loading
```



# Easy to use

### main.js

```javascript
import Loading from "vue-easy-loading"
Vue.use(Loading);
```

###  your component

use it by vue-directive:

```javascript
<div 
    v-load="true"
    load-background="rgba(0, 0, 0, .7)"
    load-type="rotating-plane"
></div>
```


### Options
| Name | Desc | Type | Accepted Values | Default |
|- | :-: | :-: | :-:|  -: |
|load-background | set cover background | String | css color | HSLA(169, 100%, 38%, .5)|
|load-type | set loading animation | String | <a href="#list">animation list</a> | circle|



<h1 id="list">Kind of animation</h1>

- rotating-plane
- double-bounce
- wave
- wandering-cubes
- spinner
- chasing-dots
- three-bounce
- circle
- cube-grid
- fading-circle
- folding-cube



# Credits

- [Vue.js](https://github.com/vuejs/vue)
- [spinkit](https://github.com/tobiasahlin/SpinKit)
