import { onMounted} from 'vue';
import router from '../router';
import store from "../store.js"

export function useOnMount(_route){
   onMounted(() => {
      store.currentRoute = _route
      store.searchText = ''
      router.push('/'+ (_route==='home' ? '' : _route))
      store.filter('')
     
   })
}