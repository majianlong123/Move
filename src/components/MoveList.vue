<template>
  <div class="box">
    <div class="nowPlayingList-wrap">
      <ul>
        <li class="nowPlayingFilm-item">
          <div class="nowPlayingFilm-img">
            <img src="https://static.maizuo.com/pc/v5/usr/movie/3f97c0ef0eca443b9307fad1c05c188e.jpg" alt="">
          </div>
          <div class="nowPlayingFilm-info">
            <div class="nowPlayingFilm-name">
              <span class="name">你好,李焕英</span>
              <span class="item">2D</span>
            </div>
            <div>
              <span class="label">观众评分</span>
              <span class="grade">7.4</span>
            </div>
            <div>
              <span class="label">主演：贾玲 贾玲 张小斐 沈腾 陈赫</span>
            </div>
            <div>
              <span class="label">中国大陆 | 128分钟</span>
            </div>
          </div>
          <div class="nowPlayingFilm-buy">
            <div>购票</div>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
	created() {
		this.$http.get('https://v1.hitokoto.cn/').then(res => {
			console.log(res)
		})
	},
  data () {
    return {

    }
  }
}
</script>

<style scoped>
.label {
  font-size: 13px;
  margin-top: 4px;
  color: #797d82;
}
.grade {
  color: #ffb232;
  font-size: 14px;
}
.nowPlayingList-wrap {
  background-color: #fff;
}
.nowPlayingList-wrap ul {
  list-style: none;
  padding: 0;
  margin-left: 15px;
  margin-bottom: 0;
  margin-top: 0;
}
.nowPlayingFilm-item {
  display: flex;
  padding: 15px 15px 15px 0;
}
.nowPlayingFilm-img img {
  width: 66px;
}
.nowPlayingFilm-info {
  padding: 0 10px;
  text-align: left;
}
.nowPlayingFilm-info .name {
  color: #191a1b;
  font-size: 16px;
  line-height: 22px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  display: inline-block;
  vertical-align: top;
}
.nowPlayingFilm-info .item {
  font-size: 9px;
  color: #fff;
  background-color: #d2d6dc;
  height: 14px;
  line-height: 14px;
  padding: 0 2px;
  border-radius: 2px;
}
.nowPlayingFilm-name {
  padding: 5px 0px;
}
.nowPlayingFilm-buy {
  margin-left: 10px;
}
.nowPlayingFilm-buy div {
  line-height: 25px;
  height: 25px;
  width: 50px;
  color: #ff5f16;
  font-size: 13px;
  text-align: center;
  border-radius: 2px;
  position: relative;
  border: 1px solid #ff5f16;
  margin: 30px auto
}

</style>
