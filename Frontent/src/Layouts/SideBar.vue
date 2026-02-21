<template>
    <div class="flex">
        <div class="surface-900 text-white w-20rem h-screen ">
        <div class="justify-content-between p-3">
            <div class="flex align-items-center justify-content-between mb-3">
                <div>
                <h2 class=" ">Shopping</h2>
            </div>
                
            </div>
        </div>
        
        <div class="mt-5">
            <router-link to="/">
                <Button class="p-button-text w-full justify-content-start m-0 p-0">
                    <div class="p-2 text-white">
                        <icon class="pi pi-objects-column text-xl"></icon>
                        <span class="ml-4 text-xl">Dashboard</span>
                    </div>
                </Button>
            </router-link>
            <router-link to="/user">
                <Button class="p-button-text w-full justify-content-start m-0 p-0">
                    <div class="p-2 text-white">
                        <icon class="pi pi-users text-xl"></icon>
                        <span class="ml-4 text-xl">User</span>
                    </div>
                </Button>
            </router-link>

             <router-link to="/customer"> 
                <Button class="p-button-text w-full justify-content-start m-0 p-0">
                    <div class="p-2 text-white">
                        <icon class="pi pi-user text-xl"></icon>
                        <span class="ml-4 text-xl">Customer</span>
                    </div>
                </Button>
             </router-link>
            <router-link to="/category">
                <Button class="p-button-text w-full justify-content-start m-0 p-0">
                    <div class="p-2 text-white">
                        <icon class="pi pi-tags text-xl"></icon>
                        <span class="ml-4 text-xl">Category</span>
                    </div>
                </Button>
            </router-link>
            <router-link to="/product">
                <Button class="p-button-text w-full justify-content-start m-0 p-0">
                    <div class="p-2 text-white">
                        <icon class="pi pi-box text-xl"></icon>
                        <span class="ml-4 text-xl">Product</span>
                    </div>
                </Button>
            </router-link>
            <router-link to="/sale">
                <Button class="p-button-text w-full justify-content-start m-0 p-0">
                    <div class="p-2 text-white">
                        <icon class="pi pi-shopping-cart text-xl"></icon>
                        <span class="ml-4 text-xl">Sale</span>
                    </div>
                </Button>
            </router-link>
            <router-link to="/payment">
                <Button class="p-button-text w-full justify-content-start m-0 p-0">
                    <div class="p-2 text-white">
                        <icon class="pi pi-money-bill text-xl"></icon>
                        <span class="ml-4 text-xl">Payment</span>
                    </div>
                </Button>
            </router-link>

          
        </div>
    </div>
    <div class="w-full">
        <div class="surface-700 justify-content-between h-5rem w-full h-screen flex align-items-center pl-3">
            <div class="flex gap-2">
                <Button icon="pi pi-bars" class="p-button-text"></Button>
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
 
</script>