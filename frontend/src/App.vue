<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <div class="flex flex-col text-gray-800 w-full font-sans gap-12">
    <header class="bg-white shadow-sm border-b border-gray-200 w-md rounded-xl">
      <div class="max-w-4xl mx-auto px-4 py-4 flex justify-between items-center">
        <div class="flex items-center space-x-2">
          <img alt="Vue logo" class="w-8 h-8" src="@/assets/logo.svg" />
          <span class="font-semibold text-lg text-green-600">UF/CLP</span>
        </div>

        <nav class="flex flex-row gap-4">
          <RouterLink
            to="/"
            class="text-gray-600 hover:text-green-600 font-medium transition-colors"
            active-class="text-green-600 border-b-2 border-green-600"
          >
            Converter
          </RouterLink>
          <RouterLink
            to="/about"
            class="text-gray-600 hover:text-green-600 font-medium transition-colors"
            active-class="text-green-600 border-b-2 border-green-600"
          >
            Acerca de...
          </RouterLink>
        </nav>
      </div>
    </header>

    <main class="grow flex items-center justify-center p-4">
      <div class="w-full max-w-md">
        <RouterView />
      </div>
    </main>
  </div>
</template>
