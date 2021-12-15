
const base = {

    // http://api.tianapi.com/ncov/index?key=242c8503f0ca29766018d33d500506da
    host: "http://api.tianapi.com",
    covInfo: "/ncov/index?key=242c8503f0ca29766018d33d500506da",

    // 国内疫情数据
    // https://yspm.api.storeapi.net/api/94/219?format=json&appid=12449&sign=f4f2fe72c7ac8c97d030e2fcc159ca3f
    chinaHost: "https://yspm.api.storeapi.net",
    chinaInfo: "/api/94/219?format=json&appid=12449&sign=f4f2fe72c7ac8c97d030e2fcc159ca3f",

    // 国外疫情数据
    // https://yspm.api.storeapi.net/api/94/220?format=json&appid=12449&sign=f4f2fe72c7ac8c97d030e2fcc159ca3f
    worldInfo: "/api/94/220?format=json&appid=12449&sign=f4f2fe72c7ac8c97d030e2fcc159ca3f",

    // 国内城市疫情数据
    cityInfo: "/api/94/221",
    // format=json&appid=12449&city_name=%E6%AD%A6%E6%B1%89&sign=ba0d5108df4db94ffdb8ca1107f525f9

    // 轮播图数据
    swiperInfo: "http://iwenwiki.com/wapicovid19/ncovimg.php",




//     1. key = 171e165a7d991c5f6ecd5194c54778ef
//     2. key = 6abf107dc48af5c2745ae63e8c125342
//     3. key = 25309d1d363848790921460a73866c0c
//     4. key = ea3295121216b176e1a6b8af7fcd3dcf
//     5. key = 674d6ec65afc51339176339dc899e16e
//     6. key = f3e50a7c0bce34a492c291db993d0c04
   
    travel: '/api/springTravel/citys?key=6abf107dc48af5c2745ae63e8c125342',
    travelQuery: '/api/springTravel/query?key=6abf107dc48af5c2745ae63e8c125342',//城市疫情&from=10191&to=10349

    // https://bang.360.cn/aj/getcitycode
    city:"/foo/aj/getcitycode"
}
export default base;
