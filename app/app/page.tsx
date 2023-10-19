import { cookies } from "next/headers";
import InjectRandomSession from "@/components/InjectRandomSession";
import { Suspense } from "react";

export default async function Home() {
  const cookieStore = cookies()
  await Promise.all([wait(500),wait(800), wait(700)]);

  return (
    <div className={'py-16 px-8'}>

      <div className="grid md:grid-cols-2 gap-8 mb-8">
        <div className={'col-span-2 border rounded-md p-8'}>
          {cookieStore.getAll().map((cookie) => (
            <div key={cookie.name}>
              <p className={'grid grid-cols-3'}>
                <span className={'col-span-1'}>Name: {cookie.name}</span>
                <span className={'col-span-2'}>Value: {cookie.value}</span>
              </p>
            </div>
          ))}
          <div className={'pt-8'}>
            <InjectRandomSession />
          </div>
        </div>
      </div>

      {/*<div className={'grid grid-cols-1 md:grid-cols-2 gap-8'}>*/}
      {/*  <Suspense fallback={<div>loading</div>}>*/}
      {/*    <Temp index={1} time={1000} error={false} />*/}
      {/*  </Suspense>*/}
      {/*  <Suspense fallback={<div>loading</div>}>*/}
      {/*    <Temp index={2} time={3000} error={false} />*/}
      {/*  </Suspense>*/}
      {/*</div>*/}

    </div>
  )
}

const Temp = async ({ index, time, error = false }: { index: number, time: number, error: boolean }) => {
  console.log(`Temp${index}: before await`)
  const data = await wait(time)
  console.log(`Temp${index}: after await`)

  if (error) throw new Error('Custom message')

  return <div className={'border rounded-md p-8'}>Delayes rendered: {index}</div>
}

export async function wait(time: number) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('resolved');
    }, time);
  });
}
