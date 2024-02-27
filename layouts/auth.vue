<template>
    <div class="h-auto flex items-center justify-start relative p-12 md:h-[100lvh] md:justify-center md:items-center md:relative">
        <UCard class="w-full max-w-sm">
            <template #header>
                <h1 class="text-2xl font-bold">Ping With Me</h1>
            </template>
            <slot />
        </UCard>
    <div class="absolute bottom-0 text-sm text-gray-700 md:bottom-[250px] "><p ><small>© PINGWITHME. ALL COPY RIGHTS RESERVED</small></p></div>
    </div>
</template>
  
  