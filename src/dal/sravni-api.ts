import {DataT} from "./dataTypes";

export const sravniApi = {
   getData() {
      return fetch('https://random-data-api.com/api/coffee/random_coffee?size=20')
         .then(res => res.json())
         .then((res: DataT[]) => res)
   }
}
