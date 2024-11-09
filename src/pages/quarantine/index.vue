<template src="./template.html"></template>
<style lang="scss" scoped src="./style.scss"></style>


<script lang="js">
import router from '@/router';
import { ref, onMounted } from 'vue';
import { API } from '@/common/api'

export default {
    setup() {
        const back = () => {
            router.back();
        }
        const infoObj = ref({});
        const quarantines = ref({});
        onMounted(() => {
            API.getDetaInfo({code: 'P180100922'}).then(res => {
                infoObj.value = res?.data?.data;
                quarantines.value = infoObj.value.quarantines[0] || {};          
            })
        })
        return {
            infoObj,
            quarantines,
            back
        }
    }
}

</script>