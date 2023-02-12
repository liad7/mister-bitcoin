<template>
    <article>
        <h2>{{ car.vendor }}</h2>
        <h2>{{ car.speed }}</h2>
    </article>
</template>

<script>
export default {
    props: {
        car: {
            type: Object,
            required: true,
        }
    }
}
</script>

<style lang="scss"></style>
