<template>
  <div
      class="flex justify-end items-center bg-[#FCBF31] rounded-r-full py-1 pr-1 pl-6 border-2 border-black border-l-0">
    <span class="text-subtitle mr-3 font-bold">NEXT</span>
    <img :src="block" class="w-[26px] h-[26px]"/>
  </div>
</template>
<script setup lang="ts">
import {computed} from 'vue'
import n1 from '@/assets/next/n1.png'
import n2 from '@/assets/next/n2.png'
import n3 from '@/assets/next/n3.png'
import n4 from '@/assets/next/n4.png'
import n5 from '@/assets/next/n5.png'
import n6 from '@/assets/next/n6.png'
import n7 from '@/assets/next/n7.png'
import n8 from '@/assets/next/n8.png'
import n9 from '@/assets/next/n9.png'
import n10 from '@/assets/next/n10.png'

const props = defineProps({
  nextIndex: {
    type: Number,
    default: 0
  }
})

const Block: { [key: number]: string } = {
  1: n1,
  2: n2,
  3: n3,
  4: n4,
  5: n5,
  6: n6,
  7: n7,
  8: n8,
  9: n9,
  10: n10,
}

const block = computed(() => {
  if (props.nextIndex in Block) {
    return Block[props.nextIndex]
  }
})
</script>
