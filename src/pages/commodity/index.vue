<template src="./template.html"></template>
<style lang="scss" scoped src="./style.scss"></style>


<script lang="js">
import router from '@/router';
import { ref, onMounted } from 'vue';
import { API } from '@/common/api'
import { useRoute } from 'vue-router';

export default {
    setup() {
        const route = useRoute();
        const swipeList = ref([
            'http://trace.cndwine.com/common/mobileImg/imgTest/swipper_1.png',
            'http://trace.cndwine.com/common/mobileImg/imgTest/swipper_1.png',
        ])
        const back = () => {
            router.back();
        }

        const obj = ref({});

        onMounted(() => {
            API.getDetaInfo({code: route.query.code}).then(res => {
                const data = res?.data?.data;
                obj.value = data;
                swipeList.value = Array.from(obj.value?.bannerList || [], x=>x.bannerimage);
            })
        })
        return {
            swipeList,
            obj,
            back
        }
    }
}
</script>