<template>
    <div class="click-check" @click="click">
        {{ value }}
    </div>
</template>

<script>
export default {
    props: {
        value: { type: String, default: '' }
    },
    methods: {
        click() {
            let newValue = this.value ? '' : '✓';
            this.$emit('input', newValue);
            this.$emit('change', newValue);
        }
    }
}
</script>

<style scoped lang="scss">
.click-check {
    width: 100%;
    min-height: 20px;
    cursor: pointer;
}
</style>