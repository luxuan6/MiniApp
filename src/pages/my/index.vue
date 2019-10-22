<template>
    <div>
        我的页面
        <button open-type="getPhoneNumber" @getphonenumber="getPhoneNumber">获取手机号</button>
    </div>
</template>
<script>
import {mapActions} from 'vuex'
export default {
    props:{

    },
    components:{

    },
    data(){
        return {

        }
    },
    computed:{

    },
    methods:{
        ...mapActions({
            decryptPhone:'user/decryptPhone'
        }),
        getPhoneNumber(res){
            console.log('getPhoneNumber...',res)
            if(res.detail.errMsg==='getPhoneNumber:ok'){
                let {iv,encryptedData} =res.detail;
                console.log(this.decryptPhone,'11111')
                this.decryptPhone({iv,encryptedData})
            }else{
                wx.showToast({
                    title:'为了更美好的享受服务，请先绑定手机号',
                    icon:'none'
                })
                 console.log(this.decryptPhone,'2222')
            }
        }
    },
    created(){

    },
    mounted(){

    }
}
</script>
<style scoped lang="">

</style>