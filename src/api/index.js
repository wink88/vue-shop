
import base from "./base";

import axios from 'axios'

import md5 from 'md5-js'

const api={
    getCovInfo(){
        return  axios.get(base.host+base.covInfo)
    } ,
    getChinaInfo(){
        // return axios.get(base.chinaHost+base.chinaInfo);
        return axios.get("http://localhost:8888/api/94/219")
    },
    getWorldInfo(){
        // return axios.get(base.chinaHost+base.worldInfo)
        return axios.get("http://localhost:8888/api/94/220")
    },
    getCityInfo(cityName){
        // format=json&appid=12449&city_name=%E6%AD%A6%E6%B1%89&sign=ba0d5108df4db94ffdb8ca1107f525f9
        // appid12449city_name武汉formatjson+密钥


        let sign=md5('appid12449city_name'+cityName+'formatjsonb2fd8f6669fe411c611902812e72efa0');
        let canshu='format=json&appid=12449&city_name='+cityName+"&sign="+sign;

        return axios.get(base.chinaHost+base.cityInfo+'?'+canshu);
        
    },
    getSwiperInfo(){
        return axios.get(base.swiperInfo);
    },
    // 出行城市
    getTravel() {
        return axios.get(base.travel)
    },

    getTravelQuery(params) {//params={from:'',to:''}
        return axios.get(base.travelQuery,{
            params
        })
    },

    getCity(){
        return axios.get(base.city)
    },


    getListInfo(){
        return axios.get("http://localhost:8888/api/94/222")
    }

}
export default api;