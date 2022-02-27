import {addItem, queryDb, retriveDb} from "./utils/requests.js";

const retrive_result = await retriveDb()
const query_result = await queryDb()

console.log(retrive_result)
console.log(query_result)