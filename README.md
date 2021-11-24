  [![github](https://img.shields.io/badge/pwjGitHub-%E5%B9%B2-brightgreen)](https://github.com/PWJ1900/-vuex-vue2/tree/master/project) 
  [https://img.shields.io/badge/vue2-%E6%97%A9-green](https://cn.vuejs.org/index.html)
### 这次突然想自己写一下vuex分分类，在之前的开发项目中，遇到过多种vuex的用法，但也是充分发挥js语法特点才可以充分使用吧。不能仅仅局限于其原生调用和拓展表达式的方法，更多的是结构化的使用，其中type的设置与使用对于大量公共数据是尤为必要的
### 虽然用过了很多vuex，也相对较熟练，但对于vuex的各种用法我觉得值得探讨一下，我想分别基于vue2和vue3，总的一般用法和拆分用法的不同场景
#### 这里是vue2
一、一般用法<br>
	1、npm install vuex --save<br>
	2、新建store下的index.js并写入语句<br>
```
import Vue from 'vue'
import Vuex from 'vuex'
 
Vue.use(Vuex)
 
export default new Vuex.Store({
  state: {
    name:"你好"
  },
  mutations: {
 
  },
  actions: {
 
  }
});
```
<br>
3、在main.js中加入import store from '../store'，并在app应用store
<br>

二、拆分用法
当项目所需vuex资源较少时可以使用一般方法，但是当资源所需较多，而需要vuex结构化，则需要第二种拆分模块化的方法
第二种模块化方法也有多种形式使用，有将state，mutations，actions，getters这几个属性单独分开调用的，也有将这几个属性放在一起分开，然后用modules在new Store引入，具体看代码store下的代码。
