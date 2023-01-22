import { reactive } from "vue";
import { useWindowSize } from '@vueuse/core'
const { width, height } = useWindowSize()

import d from'./data.json'

const  store = reactive({
   
   version: "1.0.00",
   wWidth:width,
   wHeight:height,
   raw:d,
   daten:null,
   currentRoute:'home',
   title:'Recommended for you',
   searchText:"",

   getTrending: () => {
      if (store.raw){
      return toRaw(store.raw).filter((item)=> {
         return item.isTrending === true
      })
   }
   },



   filter: (inp="") => {
      let _inp = inp.toLowerCase()
      if (store.currentRoute === 'home'){
         store.title = 'Recommended for you'
         store.daten = store.raw.filter((item) => {
            return (item.title.toLowerCase().includes(_inp) && !item.isTrending)
         })
      }

      if (store.currentRoute === 'movies'){
         store.title = 'Movies'
         store.daten = store.raw.filter((item) => {
            return (item.title.toLowerCase().includes(_inp) && item.category==='Movie')
         })
      }         
      if (store.currentRoute === 'tv'){
         store.title = 'TV Series'
         store.daten = store.raw.filter((item) => {
            return (item.title.toLowerCase().includes(_inp) && item.category==='TV Series')
         })
      }         
      if (store.currentRoute === 'bookmark'){
         store.title = 'Bookmarked Movies and TV Series'
         store.daten = store.raw.filter((item) => {
            return (item.title.toLowerCase().includes(_inp) && item.isBookmarked)
         })
      }       
   }

})
export default store

