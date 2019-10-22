<template>
    <div>
        <p>签到小程序的第一个页面</p>

        <button @click="goTabBar">去tabBar</button>


        <navigator open-type="switchTab" url="/pages/tabBar/component/component" hover-class="navigator-hover">
            <button type="default">跳转到Tab页</button>
        </navigator>
    </div>
</template>

<script>
export default {
    methods: {
        goTabBar(){
            uni.switchTab({
                url: '/pages/tabBar/component/component'
            })
        }
    },
    async created(){
        let fingerInfo = wx.getStorageSync('finger');
        if (!fingerInfo || !fingerInfo.finger || +new Date() - fingerInfo.timestamp > 24*60*60*1000){
            wx.navigateTo({ url: '/pages/finger/index' });
        }
    }
}
</script>