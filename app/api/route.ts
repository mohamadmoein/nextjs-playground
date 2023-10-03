import {NextResponse} from "next/server";
import {cookies} from "next/headers";
import {revalidatePath} from "next/cache";

export async function GET() {  
  return NextResponse.json(cookies().getAll())
}

export async function POST() {
  const randomNumber = generate5DigitRandomNumber()
  cookies().set('TOKEN', randomNumber, {httpOnly: true, sameSite: "strict"})
  // on https should be: cookies().set('TOKEN', randomNumber, {httpOnly: true, secure: true, sameSite: "strict"})
  return NextResponse.json({TOKEN: randomNumber})
}

function generate5DigitRandomNumber() {
  return (Math.floor(Math.random()*90000) + 10000).toString();
}