<template>
    <div class="flex flex-col min-h-screen">

        <div class="flex-grow p-12 flex items-center justify-start md:justify-center md:items-center">
            <UCard class="w-full max-w-sm">
                <template #header>
                    <h1 class="text-sm">Pingwithme</h1>
                </template>
                <slot />
            </UCard>
        </div>

        <footer class="text-md text-slate-400 p-4 text-center">
            <p><small>Copyright 2024 pingwithme. All rights reserved</small></p>
        </footer>
    </div>
</template>
