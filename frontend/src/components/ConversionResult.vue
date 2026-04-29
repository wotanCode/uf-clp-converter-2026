<script setup lang="ts">
import { computed } from 'vue'
import { formatCurrency } from '../utils/format'
import type { ConvertResponse } from '../interfaces'

const props = defineProps<{
  result: ConvertResponse | null
  error: string | null
}>()

const resultText = computed(() => {
  if (!props.result) return ''
  return formatCurrency(props.result.result, props.result.to)
})
</script>

<template>
  <div class="pt-4 mt-4 border-t border-gray-100 min-h-[80px] flex flex-col items-center justify-center">

    <div
      v-if="error"
      class="text-red-500 text-sm text-center bg-red-50 p-3 rounded-lg w-full"
    >
      {{ error }}
    </div>

    <div v-else-if="result" class="text-center w-full">
      <p class="text-sm text-gray-500 mb-1">Resultado:</p>

      <p class="text-3xl font-bold text-green-600">
        {{ resultText }}
      </p>

      <p class="text-xs text-gray-400 mt-2">
        Valor UF: {{ formatCurrency(result.ufValue, 'clp') }} ({{ result.date }})
      </p>
    </div>

    <div v-else class="text-gray-400 text-sm text-center">
      Ingresa un monto y presiona convertir
    </div>
  </div>
</template>
