<template>
    <div class="card flex justify-center">
        <Button label="Add Product" icon="pi pi-plus" @click="visible = true" />
        <Dialog v-model:visible="visible" :draggable="false" modal header="Add Product" :style="{ width: '30rem' }">
            
            <div class="mb-2">
                <p for="name" class="font-semibold w-24 mb-1 mt-0">Model Name</p>
                <InputText id="name" fluid class="flex-auto" autocomplete="off" />
            </div>
            <div class="mb-2">
                <p for="name" class="font-semibold w-24 mb-1 mt-0">Category</p>
                <Select v-model="selectedCity" :options="cities" optionLabel="name" placeholder="Select a City" class="w-full md:w-56" />
            </div>
            <div>
                <div class="grid">
                    <div class="col">
                        <p for="name" class="font-semibold w-24 mb-1 mt-0">Storage</p>
                        <InputText id="name" fluid class="flex-auto" autocomplete="off" />
                    </div>
                    <div class="col">
                        <p for="name" class="font-semibold w-24 mb-1 mt-0">Color</p>
                        <InputText id="name" fluid class="flex-auto" autocomplete="off" />
                    </div>
                </div>

                <div class="grid">
                    <div class="col">
                        <p for="name" class="font-semibold w-24 mb-1 mt-0">Price</p>
                        <InputText id="name" fluid class="flex-auto" autocomplete="off" />
                    </div>
                    <div class="col">
                        <p for="name" class="font-semibold w-24 mb-1 mt-0">Quantity</p>
                        <InputText id="name" fluid class="flex-auto" autocomplete="off" />
                    </div>
                </div>
                
            </div>
            <div class="mb-4">
                <p for="description" class="font-semibold w-24 mb-1">Description</p>
                <InputText id="description" type="email" class="flex-auto" fluid autocomplete="off" />
            </div>
            <div class="flex justify-end gap-2">
                <Button type="button" class="w-full" label="Cancel" severity="secondary" @click="visible = false"></Button>
                <Button type="button" label="Save" class="w-full" @click="visible = false"></Button>
            </div>
        </Dialog>
    </div>
</template>

<script setup>
import { ref } from "vue";

const visible = ref(false);

const selectedCity = ref();
const cities = ref([
    { name: 'New York', code: 'NY' },
    { name: 'Rome', code: 'RM' },
    { name: 'London', code: 'LDN' },
    { name: 'Istanbul', code: 'IST' },
    { name: 'Paris', code: 'PRS' }
]);

</script>
