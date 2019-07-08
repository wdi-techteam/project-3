import axios from "axios";

export const getResult =(from, to)=>{

  return axios({ method: "get",
    url: `https://free.currconv.com/api/v7/convert?q=${from}_${to}&compact=ultra&apiKey=c88d0484f970be819447`
    // "https://free.currconv.com/api/v7/convert?q=USD_PHP&compact=ultra&apiKey=de16d9c21e2609ca2315"
    // 'https://free.currconv.com/api/v7/currencies?apiKey=80017b5a4cbbbc532a33'
    // amany's key= de16d9c21e2609ca2315
    // wijdan's key= 80017b5a4cbbbc532a33
    // maha's key= c88d0484f970be819447
  })
}