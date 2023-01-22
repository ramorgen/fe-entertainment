<template>
   <div @mouseover="showPlay=true" @mouseout="showPlay=false" class="relative ">
      <picture >
         <source media="(min-width:1050px)" :srcset="props.film.thumbnail.regular.large">
         <source media="(min-width:768px)" :srcset="props.film.thumbnail.regular.medium">
         <img loading="lazy" class="rounded-lg" :src="props.film.thumbnail.regular.small" :alt="props.film.title" >  
      </picture>
      <eShowPlay :showPlay = showPlay />
      
      <div class="pt-2 h-9 md:h-11 w-full">
         <div class="w-[160px] h-4 flex flex-row justify-between text-f13 leading-4 ">
            <p class="opacity-[0.55]">{{ film.year }}</p>
            <eCategory :film="film" mode="" />
            <p class="opacity-[0.55]">{{ film.rating }}</p>
         </div>
         <h4>{{ film.title }}</h4>
      </div>
      <eBookmark class="absolute" :film="props.film" mode="" />


   </div>
</template>


<script setup>
   import store from '../store.js'

   const props = defineProps(['film'])
   const showPlay = ref(false)
</script>

