<template>
    <div class="h-auto flex items-center justify-start relative p-12 md:h-[100lvh] md:justify-center md:items-center md:relative">
        <UCard class="w-full max-w-sm">
            <template #header>
                <h1 class="text-sm">Pingwithme</h1>
            </template>
            <slot />
        </UCard>
    <div class="absolute bottom-0 text-md text-slate-400 md:bottom-[250px] "><p ><small>Copyright 2024 pingwithme. All rights reserved</small></p></div>
    </div>
</template>
  
  