<template>
   <button class="flex flex-row items-center ">
      <span>
         <svg class="" width="32" height="32" xmlns="http://www.w3.org/2000/svg"><path d="M27.613 25.72 23.08 21.2a10.56 10.56 0 0 0 2.253-6.533C25.333 8.776 20.558 4 14.667 4S4 8.776 4 14.667c0 5.89 4.776 10.666 10.667 10.666A10.56 10.56 0 0 0 21.2 23.08l4.52 4.533a1.333 1.333 0 0 0 1.893 0 1.333 1.333 0 0 0 0-1.893ZM6.667 14.667a8 8 0 1 1 16 0 8 8 0 0 1-16 0Z" fill="#FFF"/></svg>
      </span>
      <span >
         <input v-model="store.searchText" 
            class=" text-[1rem] pl-6 w-[244px] h-6 md:h-8 md:w-[381px] md:text-f24 bg-dark 
                    transition-all border-b-0 hover:border-b-[2px] " 
            type="text" :placeholder="ph">
      </span>
   </button>
</template>


<script setup>
   import store from '../store';

   watch(() => store.searchText, (newVal) => {
      store.filter(newVal)
   })

   let p = 'Search for '
   const ph = computed(()=>{
      
      if(store.currentRoute==='home'){
         return p + 'movies or TV series'
      } else if(store.currentRoute==='movies'){
         return p + 'movies'
      } else if(store.currentRoute==='tv'){
         return p + 'TV series'
      } else {
         return p + 'bookmarked shows'
      }
   })
</script>


<style scoped>
   input:focus {
      outline: none;
      caret-color: #fc4747;
      font-weight: 300;
   }

</style>