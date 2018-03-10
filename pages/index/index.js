//index.js
//获取应用实例
const app = getApp()
Page({
  data: {
    mode: "scaleToFill",
    arr: [
      'http://img02.tooopen.com/images/20150928/tooopen_sy_143912755726.jpg',
      'http://img06.tooopen.com/images/20160818/tooopen_sy_175866434296.jpg',
      'http://img06.tooopen.com/images/20160818/tooopen_sy_175833047715.jpg'
    ],
    list:[
      {
        "id": "js",
        "url": "../../images/js.jpg",
        "text": "JavaScript从入门到精通",
        "content": "JavaScript入门到精通，ECMAScript语法基础，BOM，DOM，EVENT事件对象，运动原理，AJAX数据交互，JSONP跨域取数据方法和原理解析。"
      },
      {
        "id":"angular",
        "url": "../../images/angular.jpg",
        "text": "Angular.JS从入门到实战",
        "content": "angular表达式，angular指令，angular作用域，angular控制器，angular过滤器，angular Service，angular模块 ···"
      },
      {
        "id":"react",
        "url": "../../images/react.jpg",
        "text": "Reactr入门到实战",
        "content": "React安装，React JSX，React组件，React组件，React生命周期，React Ajax，React 表单与事件，React Props ···"
      },
      {
        "id":"vue",
        "url": "../../images/vue.jpg",
        "text": "vue.js 入门到实战",
        "content": "vue双向数据绑定，组件化，模板语法，条件语句，计算属性，生命周期，自定义指令，路由，环境安装，安装vue脚手架，"
      },
      {
        "id":"node",
        "url": "../../images/node.jpg",
        "text": "Node.JS实战",
        "content": "Node.js安装与配置，NPM使用介绍，Node REPL，Node.js callback，Node.js Buffer，Node EventEmitter，Node Stream，Node.js GET/POST请求，Node.js Express框架"
      },
      {
        "id":"es6",
        "url": "../../images/es6.jpg",
        "text": "ECMAScript6 教程",
        "content": "let & const和block作用域，箭头函数，函数参数默认值，Spread/Rest操作符，对象此法扩展，对象和数组解构，对象超类，模板语法和分隔符，Map和WeakMap，Set和WeakSet，symbol，Generators，Promises，"
      }
    ],
    indicatorDots: true,
    autoplay: true,
    interval: 3000,
    duration: 800,
  },
  onLoad: function (options) {
    this.setData({ arr: this.arr });
    this.setData({ list: this.list});
  },
  navTo:function(e){ 
    var id = e.currentTarget.id;  
    wx.navigateTo({
      url: "../../pages/"+id+"/"+id
    })
  },
  onShareAppMessage: function(res) {
    return {
      title: 'JavaScript秘密花园',
      path: '/pages/index/index',
      success: function (res) {
        console.log('scuuess')
      },
      fail: function (res) {
        console.log('fail');
      }
    }
  },
  onReady: function () {


  },
  onShow: function () {

  },
  onHide: function () {

  },
  onUnload: function () {

  },
  onPullDownRefresh: function () {

  },
  onReachBottom: function () {

  },
  onShareAppMessage: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },


})