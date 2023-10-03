import {ReactNode} from "react";

export default function TempLayout({children}: {children: ReactNode}) {
  return (
    <div>
      <div className={'py-6 bg-gray-100'}>
        temp layout
      </div>
      <div>
        {children}
      </div>
    </div>
  )
}