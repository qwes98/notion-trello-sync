import { Client } from "@notionhq/client"
import { config } from 'dotenv'

config()

const notion = new Client({ auth: process.env.NOTION_KEY })
const databaseId = process.env.NOTION_DATABASE_ID
const myUserId = process.env.NOTION_MY_USER_ID

export async function addItem(text) {
    try {
        const response = await notion.pages.create({
            parent: { database_id: databaseId },
            properties: {
                title: {
                    title:[
                        {
                            "text": {
                                "content": text
                            }
                        }
                    ]
                }
            },
        })
        return response
    } catch (error) {
        console.error(error.body)
    }
}


export async function retriveDb() {
    try {
        const response = await notion.databases.retrieve({
            database_id: databaseId
        })
        return response
    } catch (error) {
        console.error(error.body)
    }
}


export async function queryDb() {
    try {
        const response = await notion.databases.query({
            database_id: databaseId,
            filter: {
                property: "Assign",
                people: {
                    contains: myUserId
                }
            }
        })
        return response
    } catch (error) {
        console.log(error.body)
    }
}

