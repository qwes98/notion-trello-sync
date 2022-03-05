import { fetchMyTasks, fetchMainDbInfo } from "./utils/requests.js";

const mainDbInfo = await fetchMainDbInfo()
const myTasks= await fetchMyTasks()

console.log(mainDbInfo)
console.log(myTasks)
