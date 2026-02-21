<template>
    <div class="flex h-screen ">
        <div :class="['surface-900 text-white h-screen flex flex-column transition-width duration-100', isSidebarOpen ? 'w-20rem' : 'w-3rem' ] ">
        
            <div class="flex align-items-center justify-content-center mb-3 p-3">
                <div class="flex align-items-center gap-3 justify-content-center">
                    <img src="https://cdn.pixabay.com/photo/2020/04/17/19/48/city-5056657_640.png" class="w-5rem h-4rem" />
                    <h2 v-if="isSidebarOpen">Shopping</h2>
                </div>
            </div>
        
            <div class="mt-5">
                <router-link to="/">
                    <Button class="p-button-text w-full justify-content-start m-0 p-0">
                        <div class="p-2 text-white">
                            <i class="pi pi-objects-column text-xl"></i>
                            <span v-if="isSidebarOpen" class="ml-4 text-xl">Dashboard</span>
                        </div>
                    </Button>
                </router-link>
                <router-link to="/user">
                    <Button class="p-button-text w-full justify-content-start m-0 p-0">
                        <div class="p-2 text-white">
                            <i class="pi pi-users text-xl"></i>
                            <span v-if="isSidebarOpen" class="ml-4 text-xl">User</span>
                        </div>
                    </Button>
                </router-link>

                <router-link to="/customer"> 
                    <Button class="p-button-text w-full justify-content-start m-0 p-0">
                        <div class="p-2 text-white">
                            <i class="pi pi-user text-xl"></i>
                            <span v-if="isSidebarOpen" class="ml-4 text-xl">Customer</span>
                        </div>
                    </Button>
                </router-link>
                <router-link to="/category">
                    <Button class="p-button-text w-full justify-content-start m-0 p-0">
                        <div class="p-2 text-white">
                            <i class="pi pi-tags text-xl"></i>
                            <span  v-if="isSidebarOpen" class="ml-4 text-xl">Category</span>
                        </div>
                    </Button>
                </router-link>
                <router-link to="/product">
                    <Button class="p-button-text w-full justify-content-start m-0 p-0">
                        <div class="p-2 text-white">
                            <i class="pi pi-box text-xl"></i>
                            <span v-if="isSidebarOpen" class="ml-4 text-xl">Product</span>
                        </div>
                    </Button>
                </router-link>
                <router-link to="/sale">
                    <Button class="p-button-text w-full justify-content-start m-0 p-0">
                        <div class="p-2 text-white">
                            <i class="pi pi-shopping-cart text-xl"></i>
                            <span v-if="isSidebarOpen" class="ml-4 text-xl">Sale</span>
                        </div>
                    </Button>
                </router-link>
                <router-link to="/payment">
                    <Button class="p-button-text w-full justify-content-start m-0 p-0">
                        <div class="p-2 text-white">
                            <i class="pi pi-money-bill text-xl"></i>
                            <span v-if="isSidebarOpen" class="ml-4 text-xl">Payment</span>
                        </div>
                    </Button>
                </router-link>          
            </div>
            <div class="mt-auto ">
                <Button class="p-button-text text-red-500 w-full justify-content-start m-0 p-0">
                <div class="p-2 flex align-items-center">
                    <i class="pi pi-sign-out text-xl"></i>
                    <span v-if="isSidebarOpen" class="ml-3">Logout</span>
                </div>
                </Button>
            </div>
        </div>
        
        <div class="w-full">
            <div class="surface-700 justify-content-between h-5rem w-full h-screen flex align-items-center pl-3">
                <div class="flex gap-2">
                    <Button icon="pi pi-bars" @click="toggleSideBar" class="p-button-text"></Button>
                    <p class="m-0 p-0 text-white text-2xl">Dashboard</p>
                </div>
                
                <div class="mr-3">
                    <Avatar label="P" class="mr-2" size="large" shape="circle" />
                </div>
            </div>
            <div class="p-4">
                <slot></slot>
            </div>
        </div>
    
</div>
   
   
</template>

<script setup>

import { ref } from 'vue'

const isSidebarOpen = ref(true)

function toggleSideBar(){
    isSidebarOpen.value = !isSidebarOpen.value
}
 
</script>