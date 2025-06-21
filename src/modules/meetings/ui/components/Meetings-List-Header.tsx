"use client"
import { Button } from '@/components/ui/button'
import { PlusIcon } from 'lucide-react'
import NewMeetingDialog from './New-Meeting-DIalog'
import { useState } from 'react'

const MeetingsListHeader = () => {
    const [isDialogOPen, setIsDialogOPen] = useState(false);
    return (
        <>
            <NewMeetingDialog open={isDialogOPen} onOpenChange={setIsDialogOPen} />
            <div className='py-4 px-4 md:px-8 flex flex-col gap-y-4'>
                <div className='flex items-center justify-between
            '>
                    <h5 className='font-medium text-xl'>My Meetings</h5>
                    <Button onClick={() => setIsDialogOPen(true)}>
                        <PlusIcon />
                        New Meeting
                    </Button>
                </div>
                <div className='flex items-center gap-x-2 p-1'>

                </div>
            </div>
        </>
    )
}

export default MeetingsListHeader