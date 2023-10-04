import { Client } from "pg"
import { loadEnvConfig } from "@next/env";

const projectDir = process.cwd();

loadEnvConfig(projectDir);

const loadFakeData = async () => {
    console.log('executing loadFakeData....')
    console.log(`${process.env.POSTGRES_USER} ${process.env.POSTGRES_HOST} ${process.env.POSTGRES_NAME} ${process.env.POSTGRES_PASSWORD} ${process.env.POSTGRES_PORT!}`)
    const client = new Client({
        user:process.env.POSTGRES_USER,
        host:process.env.POSTGRES_HOST,
        database:process.env.POSTGRES_NAME,
        password:process.env.POSTGRES_PASSWORD,
        port: parseInt(process.env.POSTGRES_PORT!),
    })

    await client.connect()

    const res = await client.query('select 1')

    console.log('res',res)

    await client.end()
}

loadFakeData();