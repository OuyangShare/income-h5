<template src="./template.html"></template>
<style lang="scss" scoped src="./style.scss"></style>

<script lang="js">
import router from '@/router';
import { ref, onMounted } from 'vue';
import { API } from '@/common/api'

export default {
    setup() {
        const list = ref([
            {
                name: '商品详情', 
                icon: '<i class="fas fa-glass-martini" />',
                sort: '1',
                url: '/commodity'
            },
            {
                name: '境外生产',
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
                router.push(item.url)
            } else {
                location.href = "https://www.cndwine.com"
            }
        };

        const infoObj = ref({});

        onMounted(() => {
            localStorage.setItem("info", JSON.stringify({
                id:0,
                name:"str",
                pcode:"str",
                price:0,
                storagemethod:"str",
                brand:"str",
                spec:"str",
                grapetype:"str",
                grapelevel:"str",
                paireddishes:"str",
                aerationtime:"str",
                aroma:"str",
                isdelete:0,
                createTime:1730709064633,
                updateTime:1730709064633,
                internetProduction:[
                        {
                        id:0,
                        pcode:"str",
                        producername:"str",
                        originnodename:"str",
                        origincertify:"str",
                        serialVersionUID:0
                        }
                    ],
                customs:[
                        {
                        id:0,
                        pcode:"str",
                        cuscode:"str",
                        serialVersionUID:0
                        }
                    ],
                logistics:[
                        {
                        id:0,
                        pcode:"str",
                        filldate:1730709064636,
                        eta:1730709064636,
                        serialVersionUID:0
                        }
                    ],
                logisticsinfos:[
                        {
                        id:0,
                        pcode:"str",
                        dealername:"str",
                        cusname:"str",
                        logisticsname:"str",
                        serialVersionUID:0
                        }
                    ],
                overseastests:[
                        {
                        id:0,
                        pcode:"str",
                        inspectiondate:1730709064636,
                        inspectionorgname:"str",
                        inspectioncode:"str",
                        serialVersionUID:0
                        }
                    ],
                quarantines:[
                        {
                        id:0,
                        pcode:"str",
                        sanitarycerity:"str",
                        serialVersionUID:0
                        }
                    ],
                securitydetails:[
                        {
                        id:0,
                        pcode:"str",
                        securitycode:"str",
                        serialcode:"str",
                        bottlecode:"str",
                        isdelete:0,
                        serialVersionUID:0
                        }
                    ],
                bannerList:[
                        {
                        id:0,
                        bannercode:"str",
                        bannername:"str",
                        bannerimage:"str",
                        is_deleted:0,
                        createtime:1730709064638,
                        updatetime:1730709064638,
                        serialVersionUID:0
                        }
                    ],
                    IsccproductList:[
                        {
                            id:0,
                            pcode:"str",
                            cano:"str",
                            caimg:"str",
                            createtime:1730709064639,
                            updatetime:1730709064639,
                            serialVersionUID:0
                        }
                    ]
                }))
            infoObj.value = JSON.parse(localStorage.getItem('info'));
            try {
                API.getDetaInfo({code: 'P180100922'}).then(res => {
                    infoObj.value = res.data;
                    localStorage.setItem('info', res.data)
                })
            } catch (error) {
                console.log(error);
            }
        })
        return {
            list,
            jumpPage,
            infoObj,
        }
    }
}
</script>