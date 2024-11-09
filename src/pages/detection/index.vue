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
        const back = () => {
            router.back();
        }
        const infoObj = ref({});
        const overseastests = ref({});
        onMounted(() => {
            API.getDetaInfo({code: route.query.code}).then(res => {
                infoObj.value = res?.data?.data;
                overseastests.value = infoObj.value.overseastests[0] || {}               
            })
        })
        return {
            infoObj,
            overseastests,
            back
        }
    }
}

</script>