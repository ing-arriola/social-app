"use client";

import React, { FormEvent, useState } from 'react'
import { useRouter } from 'next/navigation'

export const Form = () => {
    const router = useRouter()
    const [username, setusername] = useState<undefined|string>("")
    const [password, setpassword] = useState<undefined|string>("")

    const onSubmit = async (e:FormEvent) => {
        e.preventDefault()
        const res = await fetch('/api/login',{
            method:'post',
            body:JSON.stringify({
                username,password
            })
        })
        if(res.ok){
            router.push("feed")
        }else{
            alert("login failed")
        }
    }

  return (
    <form onSubmit={onSubmit} className='flex flex-col gap-2 p-5 max-w-xs w-full bg-slate-800 rounded-lg'>
        <section>
            <section className='text-center' >
                <h3 className='font-semibold'>Sign In</h3>
            </section>
            <div className='my-3'>
                <hr/>
            </div>
        </section>
        <section className='flex flex-col gap-2'>
            <section className='flex flex-col gap-2'>
                <label>username:</label>
                <input 
                    className='text-black border border-slate-700 rounded p-2'
                    id='username'
                    type='text'
                    placeholder='Username'
                    value={username} 
                    onChange={(e)=>{setusername(e.target.value)}} 
                    required
                />
            </section>
            <section className='flex flex-col gap-2'>
                <label>password:</label>
                <input 
                    className='text-black border border-slate-700 rounded p-2'
                    id='password'
                    type='password'
                    placeholder='Password'
                    value={password} 
                    onChange={(e)=>{setpassword(e.target.value)}}
                    required
                />
            </section>
            <button className='mt-4 bg-slate-900 text-white rounded-lg p-2' >Sign In</button>
        </section>
    </form>
  )
}
