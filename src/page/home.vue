<template>
  <div>
    <div>
      <van-swipe class="swipe" autoplay indicator-color="white">
        <van-swipe-item v-for="(item,index) in banner" :key="index">
          <img :src="item.imgUrl" alt="" class="bannerImg">
        </van-swipe-item>
      </van-swipe>
    </div>
    <div>
      <van-tabs v-model="active" @click="onClick">
        <van-tab title="正在热映">
          <router-view />
        </van-tab>
        <van-tab title="即将上映">
          <router-view />
        </van-tab>
      </van-tabs>
    </div>
    <div>
      <navBar></navBar>
    </div>
  </div>
</template>

<script>
import navBar from '@/components/Nav'

export default {
  created() {
    this.$http.get('/mock/banner').then(res => {
      console.log(res.data)
      this.banner = res.data
    })
  },
  components: {
    navBar
  },
  data() {
    return {
      active: 0,
      banner: []
    }
  },
  methods: {
    onClick() {
      if (this.active === 0) {
        this.$router.push({
          path: '/nowPlaying'
        })
      } else {
        this.$router.push({
          path: '/comingSoon'
        })
      }
      console.log(this.active)
    }
  }
}
</script>

<style lang="less" scoped>
  .swipe .van-swipe-item {
    color: #fff;
    font-size: 20px;
    text-align: center;
  }
  /deep/ .van-tab--active {
    color: #ff5f16;
  }
  /deep/ .van-tabs__line {
    width: 65px;
    background-color: #ff5f16;
  }
  .bannerImg {
    width: 100%;
  }
</style>
