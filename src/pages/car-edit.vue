<template>
    <form @submit.prevent="save" v-if="car" class="car-edit">
        <input type="text" v-model="car.vendor">
        <input type="number" v-model.number="car.speed">
        <button>Save</button>
    </form>
</template>

<script>
import { carService } from '@/services/car.service.js'
export default {
    data() {
        return {
            car: null,
        }
    },
    async created(){
        const carId = this.$route.params._id
        if(carId) {
            this.car = await carService.get(carId)
        } else {
            this.car = carService.getEmptyCar()
        }
    },
    methods: {
        async save() {
            await carService.save(this.car)
            this.$router.push('/car')
        }
    }
}
</script>

<style lang="scss"></style>
