import {wait} from "@/app/panel/page";

export default async function Users() {

    await wait(1500)

    return (
        <div className={'bg-green-700 text-white p-4 rounded-lg'}>
            Users list
        </div>
    )
}