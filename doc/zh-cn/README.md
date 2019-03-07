<p align="center"><img src="../../static/icon.png" /></p>

<p align="center">
    <img src="https://img.shields.io/npm/v/npm.svg" />
    <img src="https://img.shields.io/cocoapods/l/AFNetworking.svg" />
</p>



# vue-easy-loading

> vue-easy-loading 让我们在 `vue` 中使用 `loading` 更加方便快捷. 

![preview](../../static/preview.gif)



# 特点

- 🍳 使用简单 ，仅需一行代码
- 🎫 基于[spinkit](https://github.com/tobiasahlin/SpinKit)，让动画更加的美观
- 🚗 支持自定义，可以用在任何Dom元素上
- 💪 保持更新

# 安装

```shell
npm i -S vue-easy-loading
# or
yarn add vue-easy-loading
```



# 使用

### main.js

```javascript
import Loading from "vue-easy-loading"
Vue.use(Loading);
```

###  组件中

使用`vue`指令的方式:

```html
<div 
    v-load="true"
    load-background="rgba(0, 0, 0, .7)"
    load-type="rotating-plane"
></div>
```


### 支持属性
| Name | Desc | Type | Accepted Values | Default |
|- | :-: | :-: | :-:|  -: |
|load-background | 背景色 | String | css color | HSLA(169, 100%, 38%, .5)|
|load-type | spin类型 | String | <a href="#list">animation list</a> | circle|



<h1 id="list">加载动画的可用类型</h1>

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



# 致谢

- [Vue.js](https://github.com/vuejs/vue)
- [spinkit](https://github.com/tobiasahlin/SpinKit)


## License

vue-easy-loading 使用 [MIT License](./LICENSE).
