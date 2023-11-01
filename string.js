const client = require('./client')

async function init() {
    // await client.set("name", "Hitesh")
    // await client.expire("name", 4)
    const result = await client.get("name")
    console.log("Result -> ", result)
}

init()