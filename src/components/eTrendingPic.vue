<template>
   
   <div @mouseover="showPlay=true" @mouseout="showPlay=false" 
         class="relative w-[240px] h-[140px] md:w-[470px] md:h-[230px] ">
      <picture >
         <source media="(min-width:768px)" :srcset="props.film.thumbnail.trending.large">
         <img loading="lazy" class="rounded-lg " :src="props.film.thumbnail.trending.small" :alt="props.film.title" >  
      </picture>
      <eShowPlay :showPlay = showPlay />


      <div class="absolute w-full h-[70px] md:h-[100px] bottom-0 overl">  
         <div class="mt-4 ml-4 mb-4 md:mt-6 md:ml-6 md:mb-6 ">
            <div class="w-[6.2rem] md:w-[10rem] flex flex-row justify-between items-center">
               <h5>{{ props.film.year }}</h5>
               <h5>•</h5>
               <eCategory :film="film" mode="trending" />
               <h5>•</h5>
               <h5 v-if="store.wWidth>767">{{ props.film.rating }}</h5>
            </div>
            <h3 class="">{{ props.film.title }}</h3>
            <div v-if="store.wWidth<768" class="absolute top-[27px] right-6 bottom-6">
               <h5 >{{ props.film.rating }}</h5>
               <div class="absolute w-9 h-5 opacity-20 rounded-2xl top-0 -left-2 bg-white"></div>
            </div>
         </div>
      </div>

      <eBookmark class="absolute" :film="props.film" mode="trending" />
      
      <!-- <div @click="props.film.isBookmarked = !props.film.isBookmarked" 
           class=" absolute bg-dark text-white opacity-50 w-8 h-8 cursor-pointer rounded-full grid place-content-center 
                  top-2 left-[200px] md:top-4 md:left-[414px] 
                  hover:bg-white hover:opacity-100 hover:text-dark"
                  :class="props.film.isBookmarked ? 'fill-white hover:fill-dark' : ''">
         <svg v-if="props.film.isBookmarked" width="12" height="14" xmlns="http://www.w3.org/2000/svg"><path d="M10.61 0c.14 0 .273.028.4.083a1.03 1.03 0 0 1 .657.953v11.928a1.03 1.03 0 0 1-.656.953c-.116.05-.25.074-.402.074-.291 0-.543-.099-.756-.296L5.833 9.77l-4.02 3.924c-.218.203-.47.305-.756.305a.995.995 0 0 1-.4-.083A1.03 1.03 0 0 1 0 12.964V1.036A1.03 1.03 0 0 1 .656.083.995.995 0 0 1 1.057 0h9.552Z"  /></svg>
         <svg class="text-current" v-else width="12" height="14" xmlns="http://www.w3.org/2000/svg"><path d="m10.518.75.399 12.214-5.084-4.24-4.535 4.426L.75 1.036l9.768-.285Z" stroke="currentColor" stroke-width="1.5" fill="none"/></svg>
      </div> -->
   </div>
</template>


<script setup>
   import store from '../store.js'
   const props = defineProps(['film'])

   const showPlay = ref(false)
</script>


<style scoped>
   .overl{
      background: linear-gradient(180deg, rgba(0, 0, 0, 0.0001) 0%, rgba(0, 0, 0, 0.75) 100%);
      border-radius: 0px 0px 8px 8px;
   }
</style>