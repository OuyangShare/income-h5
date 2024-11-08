<template src="./template.html"></template>
<style lang="scss" scoped src="./style.scss"></style>


<script lang="ts">
import router from '@/router';


export default {
    setup() {
        const back = () => {
            router.back();
        }
        return {
            back
        }
    }
}

</script>