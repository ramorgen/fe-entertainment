<template>
   <main class="relative h-screen  ">
      <aside class="absolute bg-semi_dark top-0 left-0 right-0 h-14 md:h-[72px] md:top-6 
                    lg:right-auto lg:top-0  lg:h-full lg:left-8 lg:w-24  ">
         <eMenu />
      </aside>
      <section class=" absolute routes w-full  top-20 left-4 md:top-[128px] md:left-[25px] lg:top-[64px] lg:left-[165px]">

         <eSearch class="relative " />
         <router-view></router-view>
      </section>
   </main>

</template>


<style scoped>
   .routes {
      max-width: calc(100vw - 20px);
   }

   @media screen and (min-width: 768px){
      .routes{
         max-width: calc(100vw - 28px);
      }
   }

   @media screen and (min-width: 1050px){
      .routes{
         max-width: calc(100vw - 170px);
      }
   }

   @media screen and (min-width: 1440px){
      .routes{
         max-width: 1275px;
      }
   }

  
   #app {
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
   }
</style>
