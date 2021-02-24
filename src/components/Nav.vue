<template>
  <div>
    <div>
      <van-tabbar v-model="active" active-color="#ff5f16" inactive-color="#797d82">
        <van-tabbar-item v-for="(item,index) in icon" :key="index">
          <span>{{item.name}}</span>
          <template #icon="props">
            <img :src="props.active ? item.active : item.inactive" />
          </template>
        </van-tabbar-item>
        <!-- <van-tabbar-item icon="search">标签</van-tabbar-item>
        <van-tabbar-item icon="setting-o">标签</van-tabbar-item> -->
      </van-tabbar>
    </div>
  </div>
</template>

<script>

export default {
  created() {

  },
  data() {
    return {
      active: 0,
      icon: [
        {
          name: '电影',
          active: 'https://s3.ax1x.com/2021/02/24/yOwbOU.png',
          inactive: 'https://s3.ax1x.com/2021/02/24/yO0C6K.png',
        },
        {
          name: '影院',
          active: 'https://img01.yzcdn.cn/vant/user-active.png',
          inactive: 'https://img01.yzcdn.cn/vant/user-inactive.png',
        }
      ]
    }
  },
  methods: {
    
  }
}
</script>

<style  scoped>

</style>
