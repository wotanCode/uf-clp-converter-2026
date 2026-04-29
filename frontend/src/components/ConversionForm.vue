<script setup lang="ts">
const { amount, conversionType, loading } = defineProps<{
  amount: number | null
  conversionType: 'uf-to-clp' | 'clp-to-uf'
  loading: boolean
}>()

const emit = defineEmits<{
  (e: 'update:amount', value: number | null): void
  (e: 'update:conversionType', value: 'uf-to-clp' | 'clp-to-uf'): void
  (e: 'submit'): void
}>()

const updateConversionType = (e: Event) => {
  const target = e.target as HTMLSelectElement
  emit('update:conversionType', target.value as 'uf-to-clp' | 'clp-to-uf')
}

const updateAmount = (e: Event) => {
  const target = e.target as HTMLInputElement
  emit('update:amount', target.value ? Number(target.value) : null)
}
</script>

<template>
  <div class="flex flex-col gap-5">
    <!-- Selector -->
    <div>
      <label class="block text-sm font-medium text-gray-700 mb-1">
        Tipo de conversión
      </label>

      <select
        :value="conversionType"
        @change="updateConversionType"
        class="w-full px-4 py-2 border border-gray-300 rounded-lg"
      >
        <option value="clp-to-uf">CLP a UF</option>
        <option value="uf-to-clp">UF a CLP</option>
      </select>
    </div>

    <!-- Input -->
    <div>
      <label class="block text-sm font-medium text-gray-700 mb-1">
        Monto
      </label>

      <div class="relative">
        <input
          type="number"
          :value="amount ?? ''"
          @input="updateAmount"
          placeholder="Ej: 100000"
          class="w-full px-4 py-2 border border-gray-300 rounded-lg"
        />

        <div class="absolute inset-y-0 right-0 pr-3 flex items-center">
          <span class="text-gray-500 text-sm font-medium">
            {{ conversionType === 'clp-to-uf' ? 'CLP' : 'UF' }}
          </span>
        </div>
      </div>
    </div>

    <!-- Button -->
    <button
      @click="emit('submit')"
      :disabled="loading || !amount"
      class="w-full bg-green-600 text-white py-2.5 rounded-lg disabled:bg-green-300"
    >
      <span v-if="loading">Convirtiendo...</span>
      <span v-else>Convertir</span>
    </button>
  </div>
</template>
