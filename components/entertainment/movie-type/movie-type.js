// components/entertainment/movie-type/movie-type.js
Component({
  options: {
    styleIsolation: 'isolated'
  },
  /**
   * 组件的属性列表
   */
  properties: {
    movies: {
      type: Array
    },
    title: {
      type: String
    }
  },
  // attached () {
  //   console.log(this.properties.movies)
  // },
  /**
   * 组件的初始数据
   */
  data: {

  },
  /**
   * 组件的方法列表
   */
  methods: {
    handleMore() {
      this.triggerEvent('showMoreMovie', this.properties.title)
    }
  }
})
