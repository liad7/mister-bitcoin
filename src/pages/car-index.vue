<template>
    <div class="main-container">
        <UserMsg />
        <CarFilter @filter="onSetFilterBy" />
        <CarList @remove="removeCar" v-if="cars" :cars="filteredCars" />
        <RouterLink to="/car/edit"><button>Add a Car</button></RouterLink>
    </div>
</template>

<script>
import { carService } from '@/services/car.service.js'
import { eventBus } from '@/services/eventBus.service.js'

import CarList from '@/cmps/car-list.vue'
import CarFilter from '@/cmps/car-filter.vue'
import UserMsg from '@/cmps/user-msg.vue'

export default {
    data() {
        return {
            cars: null,
            filterBy: {},
        }
    },
    async created() {
        this.cars = await carService.query()
    },
    methods: {
        async removeCar(carId) {
            const msg = {
                txt: `Car ${carId} deleted.`,
                type: 'success',
                timeout: 2500,
            }
            await carService.remove(carId)
            this.cars = this.cars.filter(car => car._id !== carId)
            eventBus.emit('user-msg', msg)
        },
        onSetFilterBy(filterBy) {
            this.filterBy = filterBy
        },
    },
    computed: {
        filteredCars() {
            const regex = new RegExp(this.filterBy.txt, 'i')
            return this.cars.filter(car => regex.test(car.vendor))
        },
    },
    components: {
        CarList,
        CarFilter,
        UserMsg,
    },
}
</script>

<style lang="scss">
.main-container {
    position: relative;
}
</style>
