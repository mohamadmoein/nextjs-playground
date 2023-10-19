import {ReactNode, Suspense} from "react";
import Link from "next/link";

export default function TempLayout({children, users, projects}: {
    children: ReactNode,
    users: ReactNode,
    projects: ReactNode
}) {
    return (
        <div>
            <nav className={'p-4 shadow-2xl'}>
                <div className={'flex justify-start max-w-4xl mx-auto'}>
                    <div><Link href={'/'} className={'px-3 py-2'}>Proxy Endpoint</Link></div>
                </div>
            </nav>
            <main className={'max-w-4xl mx-auto'}>
                <div className={''}>{children}</div>
                <div className={'max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8'}>
                    <div>{users}</div>
                    <div>{projects}</div>
                </div>

            </main>
            <footer className={'pg-gray-100'}>
                <div className={'max-w-4xl mx-auto'}></div>
            </footer>
        </div>
    )
}
