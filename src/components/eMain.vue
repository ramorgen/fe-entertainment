<template>
   <section class="md:mr-6 lg:mr-9  overflow-y-scroll"
           :class="store.currentRoute==='home' ? '_home' : '_notHome'" >
      <h1 >{{ store.title }}</h1>
      <div class="mt-6 lg:mt-8 _container" :class="_class">
         <eMainPicture  v-for="item in store.daten" :key="item.title" :film="item" />
      </div>

   </section>
</template>


<script setup>
   import store from '../store.js'

   const _class = computed(()=>{
      return store.currentRoute !=='home' ? '_height' : ''
      
   })
</script>


<style scoped>
._home{
   margin-top: 24px;
}

.notHome{
   margin-top: 24px;

}

._container {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(164px, 1fr));
      gap:20px 10px;
      
      justify-items: center;
      max-height: calc(100vh - 410px);
}

._height {
   max-height: calc(100vh - 270px) !important;
}

@media screen and (min-width:768px) {
   ._home{
      margin-top: 40px;
   }
   ._notHome {
      margin-top: 33px;
   }
   ._container {
      grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
      gap:28px;
      max-height: calc(100vh - 600px);
   }
}

@media screen and (min-width:1050px) {
   ._container {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
      gap:35px;
      max-height: calc(100vh - 589px);
   }
}


</style>