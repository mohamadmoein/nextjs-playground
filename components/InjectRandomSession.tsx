'use client'

import updateToken from "@/actions/updateToken";
import {useRouter} from "next/navigation";

export default function InjectRandomSession() {
  const router = useRouter()

  async function updateTokensssssssss() {
    const res = await fetch("/api", {
      method: "POST",
      body: JSON.stringify({
        salam: "test"
      })
    })

    const data = await res.json()
    console.log(data)

    router.refresh()

    // await updateToken()
  }

  async function getCookies() {
    const res = await fetch("/api")
    const data = await res.json()
    console.log('Cookies: ', data);
    
  }

  return (
    <div>
      <button onClick={updateTokensssssssss} className={'border rounded-md px-3 py-2 bg-cyan-600 text-white'}>Inject Random Session with key: TOKEN</button>
      <button onClick={getCookies} className={'border rounded-md px-3 py-2 bg-cyan-600 text-white'}>Log cookies</button>
    </div>
  )
}