<template>
    <div>
        <form report-submit=true @submit="submit" @reset="reset">
            <input type="text" name="company" placeholder="面试公司">
            <button form-type="submit">添加面试</button>
        </form>
    </div>
</template>


<script>
import {mapActions} from 'vuex';

export default {
    methods: {
        ...mapActions({
            addSign: 'sign/addSign'
        }),
        submit(e){
            console.log('e...', e);
            this.addSign({
                company: '北京大学',
                phone: '17621526605',
                form_id: e.detail.formId,
                address: JSON.stringify({address:'北京市海淀区颐和园路5号'}),
                latitude: 39.59,
                longitude: 116.18,
                start_time: ~~(+new Date()/60000)*60000 + 65*60*1000,
                description: '测试form_id'
            })
        }
    }
}
</script>