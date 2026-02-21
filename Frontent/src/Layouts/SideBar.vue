<template>
    <div class="surface-900 text-white w-20rem h-screen ">
        <div class="justify-content-between p-3">
            <div class="flex align-items-center justify-content-between mb-3">
                <div>
                <h2>Shopping</h2>
            </div>
                <div>
                    <Button icon="pi pi-bars" class="p-button-text"></Button>
                </div>
            </div>
        </div>
        <!-- button -->
        <div>
            <router-link to="/">
                <Button class="p-button-text w-full justify-content-start m-0 p-0">
                    <div class="p-2">
                        <icon class="pi pi-home text-xl"></icon>
                        <span class="ml-4 text-xl">Dashboard</span>
                    </div>
                </Button>
            </router-link>
            <router-link to="/user">
                <Button class="p-button-text w-full justify-content-start m-0 p-0">
                    <div class="p-2">
                        <icon class="pi pi-home text-xl"></icon>
                        <span class="ml-4 text-xl">User</span>
                    </div>
                </Button>
            </router-link>

             <router-link to="/customer"> 
                <Button class="p-button-text w-full justify-content-start m-0 p-0">
                    <div class="p-2">
                        <icon class="pi pi-home text-xl"></icon>
                        <span class="ml-4 text-xl">Customer</span>
                    </div>
                </Button>
             </router-link>
            <router-link to="/category">
                <Button class="p-button-text w-full justify-content-start m-0 p-0">
                    <div class="p-2">
                        <icon class="pi pi-home text-xl"></icon>
                        <span class="ml-4 text-xl">Category</span>
                    </div>
                </Button>
            </router-link>
            <Button class="p-button-text w-full justify-content-start m-0 p-0">
                <div class="p-2">
                    <icon class="pi pi-home text-xl"></icon>
                    <span class="ml-4 text-xl">Product</span>
                </div>
            </Button>
            <Button class="p-button-text w-full justify-content-start m-0 p-0">
                <div class="p-2">
                    <icon class="pi pi-home text-xl"></icon>
                    <span class="ml-4 text-xl">Sale</span>
                </div>
            </Button>
            <Button class="p-button-text w-full justify-content-start m-0 p-0">
                <div class="p-2">
                    <icon class="pi pi-home text-xl"></icon>
                    <span class="ml-4 text-xl">Payment</span>
                </div>
            </Button>
        </div>
        <div>
            <slot></slot>
        </div>
    </div>
</template>

<script setup>
import router from '../routers/routes';


</script>