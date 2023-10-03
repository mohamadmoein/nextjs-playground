import {Metadata} from "next";

export const metadata: Metadata = {
  title: 'Temp page',
  description: 'This is the temp page description',
}

export default function Temp() {
  return (
    <div>I am Temp</div>
  )
}