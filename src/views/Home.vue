<template>
   <section class="relative h-full top-6  md:top-[33px] lg:top-[34px]   " >
      <eTrending />
      <eMain />
   </section>
</template>

<script setup>
   import {useOnMount} from "../use/hooks.js"
   
   useOnMount('home')
</script>

