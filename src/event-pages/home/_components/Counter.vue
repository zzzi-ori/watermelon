<template>
  <div
    v-if="remainingTime > 0"
    class="w-full relative bg-green border-y-2 border-white text-white text-body-b flex justify-center items-center py-1.5"
  >
    <img :src="event" alt="event" class="mr-2" />
    <span>이벤트 종료까지&nbsp;</span>
    <span v-if="remainingDays > 0">D-{{ remainingDays }}</span>
    <span v-else>{{ formattedTime }}</span>
    <img :src="instagram" alt="instagram" class="absolute right-4" />
  </div>
</template>
<script setup lang="ts">
import { computed, onMounted, ref } from 'vue'
import event from '../../../assets/event-white.svg'
import instagram from '@/assets/instagram.svg'
import { targetTime } from '@/utils/check-event-open.ts'

const currentRef = ref<Date>(new Date())

onMounted(() => {
  const interval = setInterval(() => {
    currentRef.value = new Date()
  }, 1000)
  return () => clearInterval(interval)
})

const remainingTime = computed(() => {
  return targetTime.getTime() - currentRef.value.getTime()
})

const remainingDays = computed(() => {
  return Math.floor(remainingTime.value / (1000 * 60 * 60 * 24))
})

const formattedTime = computed(() => {
  const hours = String(Math.floor(remainingTime.value / (1000 * 60 * 60)) % 24).padStart(2, '0')
  const minutes = String(Math.floor(remainingTime.value / (1000 * 60)) % 60).padStart(2, '0')
  const seconds = String(Math.floor(remainingTime.value / 1000) % 60).padStart(2, '0')
  return `${hours}:${minutes}:${seconds}`
})
</script>
