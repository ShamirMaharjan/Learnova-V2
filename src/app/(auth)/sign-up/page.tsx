import { headers } from 'next/headers'
import { auth } from '@/lib/auth'
import { redirect } from 'next/navigation'
import { Card } from '@/components/ui/card'
import Signupview from '@/modules/auth/ui/views/Sign-up-view'
const page = async () => {
    const session = await auth.api.getSession({
        headers: await headers(),
    })
    if (!!session) {
        redirect('/')
    }
    return (
        <Signupview />
    )
}

export default page