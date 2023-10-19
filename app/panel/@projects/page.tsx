import {wait} from "@/app/panel/page";

export default async function Projects() {

    await wait(2500)
    // throw new Error('Erroooorrrrrrr')

    return (
        <div className={'bg-cyan-700 text-white p-4 rounded-lg'}>
            Projects list
        </div>
    )
}