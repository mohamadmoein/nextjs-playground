import { cookies } from "next/headers";
import InjectRandomSession from "@/components/InjectRandomSession";
import { Suspense } from "react";

async function wait(time: number) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('resolved');
    }, time);
  });
}

export default async function Home() {
  const cookieStore = cookies()
  await Promise.all([wait(2000),wait(2000), wait(2000)]);

  return (
    <div className={'py-16 px-8'}>

      <div className="grid md:grid-cols-2 gap-8">
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
        <div className="border rounded-md p-8">
          <h2>Submit normal form</h2>
        </div>
        <div className="border rounded-md p-8">
          <h2>Submit multipart form</h2>
        </div>
      </div>


      <div>
        <Suspense fallback={<div>loading</div>}>
          <Temp index={1} time={1000} />
        </Suspense>
        <Suspense fallback={<div>loading</div>}>
          <Temp index={2} time={3000} />
        </Suspense>
      </div>
      
    </div>
  )
}

const Temp = async ({ index, time }: { index: number, time: number }) => {
  console.log(`Temp${index}: before await`);
  const data = await wait(time)
  console.log(`Temp${index}: after await`);

  return <div>Delayes rendered: {index}</div>
}
