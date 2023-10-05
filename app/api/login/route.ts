import { sql } from "@/db";
import { NextResponse } from "next/server"
import bcrypt from 'bcrypt'

export const POST = async (request:Request) => {
    const json = await request.json()
    const res = await sql("select id, username, password from users where username ilike $1",[json.username])
    if(res.rowCount === 0){
        return NextResponse.json({error:'User not found'},{status:404})
    }
    const user = res.rows[0]
    const match = await bcrypt.compare(json.password, user.password)
    if(!match){
        return NextResponse.json({error:"invalid credentials"},{status:401})
    }
    return NextResponse.json({data: res.rows[0]});
}