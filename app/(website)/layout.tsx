import {ReactNode} from "react";
import Link from "next/link";

export default function TempLayout({children}: { children: ReactNode }) {
  return (
    <div>
      <nav className={'p-4 shadow-2xl'}>
        <div className={'flex justify-start max-w-4xl mx-auto'}>
          <div><Link href={'/'} className={'px-3 py-2'}>Proxy Endpoint</Link></div>
        </div>
      </nav>
      <main className={'max-w-4xl mx-auto'}>{children}</main>
      <footer className={'pg-gray-100'}>
        <div className={'max-w-4xl mx-auto'}></div>
      </footer>
    </div>
  )
}