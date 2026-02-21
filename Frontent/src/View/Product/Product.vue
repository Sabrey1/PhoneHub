<template>
    <div>
        <div class="mb-3 flex justify-content-between align-items-center">
            <div>
                <h1 class="m-0 p-0">Product</h1>
                <p class="m-0 p-0">4 products</p>
            </div>
            <div class="flex gap-3">
                <IconField>
                    <InputIcon class="pi pi-search" />
                    <InputText v-model="value1" placeholder="Search product..." />
                </IconField>
                <ComProductAdd />
            </div>
        </div>
        <div>
            <DataTable :value="users" stripedRows  tableStyle="min-width: 50rem">
                <Column field="code" header="Code"></Column>
                <Column field="username" header="Name"></Column>
                <Column field="date" header="Date"></Column>
                <Column field="description" header="Description"></Column>
               
                 
                <Column header="Action" style="width: 100px;">
                    <template #body="slotProps">
                        <div class="flex gap-2">
                            <Button label="Show"></Button>
                            <Button label="Edit"></Button>
                            <Button label="Delete" class="p-button-danger"></Button>
                        </div>
                    </template>
                </Column>
            </DataTable>
        </div>
    </div>
</template>

<script setup>
import {ref} from 'vue'

import ComProductAdd from "@/View/Product/components/ComProductAdd.vue"

const users = ref([
     {
        code: 'f230fh0g3',
        username: 'johndoe',
        date: '13/10/2020 10:00',
        
        description: 'Pendding'},
     {
        code: 'f230fh0g3',
        username: 'johndoe',
        date: '13/10/2020 10:00',
        
        description: 'Pendding'},
     {
        code: 'f230fh0g3',
        username: 'johndoe',
        date: '13/10/2020 10:00',
        
        description: 'Pendding'},
     {
        code: 'f230fh0g3',
        username: 'johndoe',
        date: '13/10/2020 10:00',
        
        description: 'Pendding'},
     {
        code: 'f230fh0g3',
        username: 'johndoe',
        date: '13/10/2020 10:00',
        
        description: 'Pendding'},
])
</script>