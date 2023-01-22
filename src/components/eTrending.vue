<template>
   <div class="relative ">
      <h1 >Trending</h1>
      <div class="mt-4 md:mt-6 _scroller _snap-inline">
         <eTrendingPic  v-for="item in pics" :key="item.title" :film="item" />
      </div>
   </div>
  
</template>


<script setup>
   import store from '../store.js'

   let pics = store.getTrending()
</script>


<style scoped>
._scroller {
      display: grid;
      grid-auto-flow: column;
      grid-auto-columns: 240px;
      gap:1rem;
      overflow-x: auto;
      overscroll-behavior-inline: contain;
   }
   ._scroller::-webkit-scrollbar{
      display: none;
  }

   @media screen and (min-width: 768px){
      ._scroller{
         grid-auto-columns: 470px;
         gap: 2.5rem;
      }
   }

   ._snap-inline {
      scroll-snap-type: inline mandatory;
   }

   ._snap-inline > * {
      scroll-snap-align: start;
   }
  
</style>