import axios from "axios";

const API_URL = "https://dog.ceo/api/" 

class API{

  //GET all breeds
  //https://dog.ceo/api/breeds/list/all
  static async getAllBreeds(){
    let res = await axios.get(API_URL + `breeds/list/all`)
    return res.data
  }

}

export default API;