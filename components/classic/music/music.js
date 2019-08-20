// components/classic/music/music.js
let bgMusic = wx.getBackgroundAudioManager()
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    content: {
      type: Object
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    playing: false
  },

  /**
   * 组件的方法列表
   */
  methods: {
    playMusic(){
      if(!this.data.playing){
        this.setData({
          playing: true
        })
        if (bgMusic.src == this.data.content.url){
          bgMusic.play()
        }else{
          bgMusic.title = this.data.content.title
          bgMusic.src = this.data.content.url
          console.log(bgMusic)
        }
      }else{
        this.setData({
          playing: false
        })
        bgMusic.pause()
      }
    }
  }
})
