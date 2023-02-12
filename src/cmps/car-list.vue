<template>
    <section>
        <ul class="car-list">
            <li v-for="car in cars" :key="car._id">
                <CarPreview :car="car"/>
            </li>
        </ul>
    </section>
</template>

<script>
import CarPreview from '@/cmps/car-preview.vue'
export default {
    // props: ['cars']
    props: {
        cars: {
            type: Array,
            required: true,
        }
    },
    components: {
        CarPreview,
    }
}
</script>

<style lang="scss"></style>
