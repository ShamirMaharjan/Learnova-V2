import { headers } from 'next/headers'
import { auth } from '@/lib/auth'
import { redirect } from 'next/navigation'
import Homeview from '@/modules/home/ui/views/home-views'

const page = async () => {
  const session = await auth.api.getSession({
    headers: await headers(),
  })
  if (!session) {
    redirect('/sign-in')
  }
  return (
    <Homeview />
  )
}

export default page