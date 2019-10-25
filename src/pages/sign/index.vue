<template>
    <div class="wrap">
        <navigator url="/pages/my/index" hover-class="navigator-hover" class="my"></navigator>
            <!-- <input type="text" name="company" placeholder="面试公司"> -->
             <sign-map class="sign-map"></sign-map>
            <button @click="addInterview">添加面试</button>
    </div>
</template>


<script>
import {mapActions} from 'vuex';
import {signMap} from '../../components/sign-map';
export default {
    components: {
    signMap
  },
    methods: {
        // ...mapActions({
        //     addSign: 'sign/addSign'
        // }),
        // submit(e){
        //     console.log('e...', e);
        //     this.addSign({
        //         company: '北京大学',
        //         phone: '17621526605',
        //         form_id: e.detail.formId,
        //         address: JSON.stringify({address:'北京市海淀区颐和园路5号'}),
        //         latitude: 39.59,
        //         longitude: 116.18,
        //         start_time: ~~(+new Date()/60000)*60000 + 65*60*1000,
        //         description: '测试form_id'
        //     })
        // }
        addInterview() {
            wx.redirectTo({
                url: "/pages/add/index"
            });
    }
    }
}
</script>

<style lang="scss" scoped>
.wrap {
  height: 100%;
}
.my{
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background: black;
  position: fixed;
  z-index: 999;
  right: 10%;
  bottom: 20%;
}
.sign-map {
  width: 100%;
  height: 91%;
  display: block;
}
button {
  background: black;
  color: #fff;
  border-radius: 0;
}
</style>