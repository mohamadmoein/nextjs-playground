import Link from 'next/link'
import React from 'react'

function Home() {
	return (
		<div className='p-6'>
			<h1 className='font-bold text-xl'>Home</h1>
			<Link href={'/panel'} className='text-blue-600'>Go to panel</Link>
		</div>
	)
}

export default Home