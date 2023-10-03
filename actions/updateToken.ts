'use server'

import {cookies} from "next/headers";
import {revalidatePath} from "next/cache";

export default async function updateToken() {
  const randomNumber = generate5DigitRandomNumber()
  cookies().set('TOKEN', randomNumber, {httpOnly: true, sameSite: "strict"})
  // on https should be: cookies().set('TOKEN', randomNumber, {httpOnly: true, secure: true, sameSite: "strict"})
  // revalidatePath('/')
}

function generate5DigitRandomNumber() {
  return (Math.floor(Math.random()*90000) + 10000).toString();
}