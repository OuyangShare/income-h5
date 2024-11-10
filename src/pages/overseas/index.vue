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
        const internetProduction = ref({});
        const producername = ref();
        const imglist = ref([]);
        onMounted(() => {
            API.getDetaInfo({code: route.query.code}).then(res => {
                infoObj.value = res?.data?.data;
                internetProduction.value = infoObj.value?.internetProduction || [];
                producername.value =  internetProduction.value[0].producername;
                imglist.value = Array.from(internetProduction.value, x=>x.origincertify);
            })
        })
        return {
            infoObj,
            internetProduction,
            producername,
            imglist,
            back
        }
    }
}

</script>