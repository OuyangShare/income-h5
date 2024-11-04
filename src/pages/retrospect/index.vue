<template src="./template.html"></template>
<style lang="scss" scoped src="./style.scss"></style>

<script lang="ts">
import router from '@/router';
import { ref } from 'vue';

export default {
    setup() {
        const list = ref([
            {
                name: '商品详情',
                icon: '',
                sort: '1',
                url: '/commodity'
            },
            {
                name: '境外生产',
                icon: '',
                sort: '2',
                url: '/overseas'
            },
            {
                name: '国外检测',
                icon: '',
                sort: '3',
                url: '/detection',
            },
            {
                name: '检测检疫',
                icon: '',
                sort: '6',
                url: '/quarantine'
            },
            {
                name: '报关通关',
                icon: '',
                sort: '5',
                url: '/clearance'
            },
            {
                name: '物流信息',
                icon: '',
                sort: '4',
                url: '/logistics'
            },
            {
                name: '流通信息',
                icon: '',
                sort: '7',
                url: '/circulation'
            },
            {
                name: '防伪查询',
                icon: '',
                sort: '8',
                url: '/security'
            },
            {
                name: '了解我们',
                icon: '',
                sort: '9',
                url: '/aboutus'
            }
        ]);

        const jumpPage = item => {
            router.push(item.url)
        };

        return {
            list,
            jumpPage,
        }
    }
}
</script>