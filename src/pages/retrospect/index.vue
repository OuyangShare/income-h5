<template src="./template.html"></template>
<style lang="scss" scoped src="./style.scss"></style>

<script lang="js">
import router from '@/router';
import { useRoute } from 'vue-router';
 import { ref, onMounted } from 'vue';
import { API } from '@/common/api'

export default {
    setup() {
        const route = useRoute();

        const list = ref([
            {
                name: '商品详情', 
                icon: '<i class="fa-solid fa-lightbulb"></i>',
                sort: '1',
                url: '/commodity'
            },
            {
                name: '检测报告',
                icon: '<i class="fas fa-home"></i>',
                sort: '2',
                url: '/overseas'
            },
            {
                name: '国外检测',
                icon: '<i class="fas fa-flask"></i>',
                sort: '3',
                url: '/detection',
            },
            {
                name: '检测检疫',
                icon: '<i class="fas fa-tint"></i>',
                sort: '6',
                url: '/quarantine'
            },
            {
                name: '报关通关',
                icon: '<i class="fas fa-id-card"></i>',
                sort: '5',
                url: '/clearance'
            },
            {
                name: '物流信息',
                icon: '<i class="fas fa-anchor"></i>',
                sort: '4',
                url: '/logistics'
            },
            {
                name: '流通信息',
                icon: '<i class="fas fa-truck"></i>',
                sort: '7',
                url: '/circulation'
            },
            {
                name: '防伪查询',
                icon: '<i class="fas fa-search"></i>', 
                sort: '8',
                url: '/security'
            },
            {
                name: '了解我们',
                icon: '<i class="fas fa-star"></i>',
                sort: '9',
                url: ''
            }
        ]);

        const jumpPage = item => {
            if(item.url) {
                router.push(
                    {
                        path: item.url,
                        query: route.query
                    }
                )
            } else {
                location.href = "https://www.cndwine.com"
            }
        };

        const infoObj = ref({});

        onMounted(() => {
            API.getDetaInfo({code: route.query.code}).then(res => {
                infoObj.value = res?.data?.data;                
            })
        })
        return {
            list,
            jumpPage,
            infoObj,
        }
    }
}
</script>