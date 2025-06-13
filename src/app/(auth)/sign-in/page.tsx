import { headers } from 'next/headers'
import { auth } from '@/lib/auth'
import { redirect } from 'next/navigation'
import Signinview from '@/modules/auth/ui/views/sign-in-view'


const page = async () => {
    const session = await auth.api.getSession({
        headers: await headers(),
    })
    if (!!session) {
        redirect('/')
    }
    return (
        <Signinview />


    )
}

export default page