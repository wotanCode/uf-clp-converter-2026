<script setup lang="ts">
import { ref } from 'vue'
import { useConverterStore } from '../stores/converter'
import ConversionForm from './ConversionForm.vue'
import ConversionResult from './ConversionResult.vue'

const store = useConverterStore()

const amount = ref<number | null>(null)
const conversionType = ref<'uf-to-clp' | 'clp-to-uf'>('clp-to-uf')

const handleConvert = () => {
  if (!amount.value || amount.value <= 0) return

  store.performConversion({
    amount: amount.value,
    from: conversionType.value === 'clp-to-uf' ? 'clp' : 'uf',
    to: conversionType.value === 'clp-to-uf' ? 'uf' : 'clp',
  })
}
</script>

<template>
  <div class="bg-white p-8 rounded-xl shadow-md border border-gray-100">
    <h1 class="text-2xl font-bold text-center text-gray-800 mb-6">
      Conversor Moneda
    </h1>

    <div class="space-y-5">
      <ConversionForm
        v-model:amount="amount"
        v-model:conversionType="conversionType"
        :loading="store.loading"
        @submit="handleConvert"
      />

      <ConversionResult
        :result="store.result"
        :error="store.error"
      />
    </div>
  </div>
</template>
