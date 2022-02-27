<div align="center">
	<h1>Notion Trello Sync Project</h1>
	<p>
		<b>A simple notion card syncing to trello card</b>
	</p>
	<br>
</div>

## Prepare

To use this program, you need to save your **Notion API key** and the **Database ID** as environment variables (or .env file).

```shell
export NOTION_KEY=<YOUR NOTION KEY>
export NOTION_DATABASE_ID=<YOUT DATABASE ID>
```

If you don't have **Notion Key**, prepare this key to follow this [Create An Integration Guide](https://developers.notion.com/docs#step-1-create-an-integration)

If you didn't **set up your target database** and don't know your **Database Id**, follow this [Share A Database With Your Integration Guide](https://developers.notion.com/docs#step-2-share-a-database-with-your-integration)


## Requirements

This package supports the following minimum versions:

- Runtime: `node >= 13.2`