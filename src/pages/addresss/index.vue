<template>
  <div class="wrap">
    <header>
      <span>北京</span>
      <input type="text" placeholder="面试地址" v-model="address" focus>
    </header>
    <ul v-if="suggestion">
       
      <li v-for="(item, index) in suggestion" :key="index"  @click="select(index)">
        <image src="/static/images/location.svg"></image>
        <div>
          <p>{{item.title}}</p>
          <p>{{item.address}}</p>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
import QQMapWX from '../../util/qqmap-wx-jssdk.min.js';
import {mapMutations} from 'vuex'
export default {
  data () {
    return {
      address: '',
      suggestion: []
    }
  },
  watch: {
    // 监听input框变化，调用智能提示
    address(val, oldVal){
      this.search();
    },
    suggestion(){
       console.log( this.suggestion)
    }
  },
  methods: {
    ...mapMutations({
      updateState: 'interview/updateState'
    }),
    select(index){
      console.log('index...', index);
      
      this.updateState({
        address: this.suggestion[index]
      })
    
      wx.navigateBack();
    },
    search(){
         let qqmapsdk = new QQMapWX({
            key: 'ZVUBZ-J46CU-7IPVI-2N6M4-2EIRV-V7FCM'
        });
       qqmapsdk.getSuggestion({
          //获取输入框值并设置keyword参数
            keyword: this.address, //用户输入的关键词，可设置固定值,如keyword:'KFC'
          region:'北京', //设置城市名，限制关键词所示的地域范围，非必填参数
          success: (res) =>{//搜索成功后的回调
            this.suggestion = res.data;
            console.log( this.suggestion)
            }
        }) 
       
    }
  },
  created () {
      this.search;
  }
}
</script>

<style lang="scss" scoped>
header{
  display: flex;
  align-items: center;
  border-top: 1px solid #eee;
  border-bottom: 1px solid #eee;
  height: 88rpx;
  span{
    width: 26%;
    text-align: center;
    box-sizing: border-box;
    border-right: 1px solid #eee;
  }
  input{
    padding: 0 20rpx;
  }
}
li{
  height: 100rpx;
  padding: 10rpx 0 10rpx 60rpx;
  box-sizing: border-box;
  border-bottom: 1px solid #eee;
  display: flex;
  align-items: center;
  flex-direction: row;
  image{
    width: 44rpx;
    height: 44rpx;
  }
  div{
    flex: 1;
    margin-left: 30rpx;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
  }
  p:nth-child(1){
    font-size: 34rpx;
  }
  p:nth-child(2){
    font-size: 24rpx;
    color: #c0c0c0;
  }
}
</style>