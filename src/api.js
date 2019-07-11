import axios from "axios";

export const getResult = (from, to) => {
  return axios({
    method: "get",
    url: `https://free.currconv.com/api/v7/convert?q=${from}_${to}&compact=ultra&apiKey=c88d0484f970be819447`
    // amany's key= de16d9c21e2609ca2315
    // wijdan's key= 80017b5a4cbbbc532a33
    // maha's key= c88d0484f970be819447
    // taha's Key= 25b9fc364d1f0bdff9c3
  });
};


export const getFlags = (currency) => {
  return axios({
    method: "get",
    url: `https://restcountries.eu/rest/v2/currency/${currency}`
  })

};
