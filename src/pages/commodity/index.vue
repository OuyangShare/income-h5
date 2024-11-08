<template src="./template.html"></template>
<style lang="scss" scoped src="./style.scss"></style>


<script lang="js">
import router from '@/router';
import { ref, onMounted } from 'vue';
export default {
  setup() {
        const swipeList = ref([
            'http://trace.cndwine.com/common/mobileImg/imgTest/swipper_1.png',
            'http://trace.cndwine.com/common/mobileImg/imgTest/swipper_1.png',
        ])
        const back = () => {
            router.back();
        }

        const obj = ref({});

        onMounted(() => {
           obj.value = JSON.parse(localStorage.getItem("info") || {});
           console.log(localStorage.getItem("info"));
           
           swipeList.value = Array.from(obj.value?.bannerList || [], x=>x.bannerimage);
        })
        return {
            swipeList,
            obj,
            back
        }
    }
}
</script>