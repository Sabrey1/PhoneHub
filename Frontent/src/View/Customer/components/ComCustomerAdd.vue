
<template>
    <div class="card flex justify-center">
        <Button label="Add Customer" icon="pi pi-plus" @click="visible = true" />
        <Dialog v-model:visible="visible" :draggable="false" modal header="Add Customer" :style="{ width: '25rem' }">
            
            <div class="mb-2">
                <p for="username" class="font-semibold w-24 mb-1 mt-0">Full Name</p>
                <InputText id="username" fluid class="flex-auto" autocomplete="off" />
            </div>
            <div class="mb-2">
                <p for="email" class="font-semibold w-24 mb-1">Email</p>
                <InputText id="email" type="email" class="flex-auto" fluid autocomplete="off" />
            </div>
            <div class="mb-2">
                <p for="phone" class="font-semibold w-24 mb-1">Phone</p>
                <InputText id="phone" type="number" class="flex-auto" fluid autocomplete="off" />
            </div>
            <div class="mb-4">
                <p for="email" class="font-semibold w-24 mb-1">Address</p>
                <InputText id="email" class="flex-auto" fluid autocomplete="off" />
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

</script>
