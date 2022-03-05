import { Client } from "@notionhq/client"
import { config } from 'dotenv'

config()

const notion = new Client({ auth: process.env.NOTION_KEY })
const databaseId = process.env.NOTION_DATABASE_ID
const myUserId = process.env.NOTION_MY_USER_ID

export async function addItem(text) {
    try {
        return await notion.pages.create({
            parent: { database_id: databaseId },
            properties: {
                title: {
                    title: [
                        {
                            "text": {
                                "content": text
                            }
                        }
                    ]
                }
            },
        })
    } catch (error) {
        console.error(error.body)
    }
}


export async function fetchMainDbInfo() {
    try {
        return await notion.databases.retrieve({
            database_id: databaseId
        })
    } catch (error) {
        console.error(error.body)
    }
}


export async function fetchMyTasks() {
    try {
        return await notion.databases.query({
            database_id: databaseId,
            filter: {
                property: "Assign",
                people: {
                    contains: myUserId
                }
                // TODO: History로 들어간 object는 제외
            }
        })
    } catch (error) {
        console.log(error.body)
    }
}

