<template>
  <layout>
    <router-view />
  </layout>
  <preload />
</template>
<script setup lang="ts">
import { RouterView } from 'vue-router'
import Layout from './components/Layout.vue'
import Preload from '@/components/Preload.vue'
</script>
