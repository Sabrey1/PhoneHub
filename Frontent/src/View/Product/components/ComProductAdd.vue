<template>
    <div class="card flex justify-center">
        <Button label="Add Product" icon="pi pi-plus" @click="visible = true" />
        <Dialog v-model:visible="visible" :draggable="false" modal header="Add Product" :style="{ width: '25rem' }">
            
            <div class="mb-2">
                <p for="name" class="font-semibold w-24 mb-1 mt-0">Name</p>
                <InputText id="name" fluid class="flex-auto" autocomplete="off" />
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

</script>
