<template src="./template.html"></template>
<style lang="scss" scoped src="./style.scss"></style>


<script lang="ts">
import { ref } from 'vue';
export default {
    setup() {
        const list = ref([
            {
                name: '商品详情',
                icon: '',
                sort: '1'
            },
            {
                name: '境外生产',
                icon: '',
                sort: '2'
            },
            {
                name: '国外检测',
                icon: '',
                sort: '3'
            },
            {
                name: '检测检疫',
                icon: '',
                sort: '6'
            },
            {
                name: '报关通关',
                icon: '',
                sort: '5'
            },
            {
                name: '物流信息',
                icon: '',
                sort: '4'
            },
            {
                name: '流通信息',
                icon: '',
                sort: '7'
            },
            {
                name: '防伪查询',
                icon: '',
                sort: '8'
            },
            {
                name: '了解我们',
                icon: '',
                sort: '9'
            }
        ])
        return {
            list,
        }
    }
}
</script>