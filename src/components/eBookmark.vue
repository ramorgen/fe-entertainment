<template>
<div @click="clicked()" 
           class=" absolute bg-dark text-white opacity-50 w-8 h-8 cursor-pointer rounded-full grid place-content-center 
                  top-2 right-2  md:top-4 hover:bg-white hover:opacity-100 hover:text-dark"
                  :class=_class
   >
      <svg v-if="props.film.isBookmarked" width="12" height="14" xmlns="http://www.w3.org/2000/svg"><path d="M10.61 0c.14 0 .273.028.4.083a1.03 1.03 0 0 1 .657.953v11.928a1.03 1.03 0 0 1-.656.953c-.116.05-.25.074-.402.074-.291 0-.543-.099-.756-.296L5.833 9.77l-4.02 3.924c-.218.203-.47.305-.756.305a.995.995 0 0 1-.4-.083A1.03 1.03 0 0 1 0 12.964V1.036A1.03 1.03 0 0 1 .656.083.995.995 0 0 1 1.057 0h9.552Z"  /></svg>
      <svg v-else class="text-current" width="12" height="14" xmlns="http://www.w3.org/2000/svg"><path d="m10.518.75.399 12.214-5.084-4.24-4.535 4.426L.75 1.036l9.768-.285Z" stroke="currentColor" stroke-width="1.5" fill="none"/></svg>
   </div>
</template>


<script setup>
import store from '../store';

   const props = defineProps(['film','mode'])

   const clicked = () => {
      props.film.isBookmarked = !props.film.isBookmarked
      store.getMain()
   }

   const _class = computed(()=>{
      let ret = ""
      if (props.film.isBookmarked){
         ret = 'fill-white hover:fill-dark '
      }
      if (props.mode==="trending"){
          ret += 'md:right-6 '
      } else {
         ret += 'md:right-4'
      }
      return ret
   })

</script>