"use client"
import { Button } from '@/components/ui/button'
import { PlusIcon, XCircleIcon } from 'lucide-react'
import NewMeetingDialog from './New-Meeting-DIalog'
import { useState } from 'react'
import { MeetingsSearchFilter } from './Meetings-Search-Filter'
import { StatusFilter } from './Status-Filter'
import { AgentIdFilter } from './Agent-Id-Filter'
import { useMeetingsFilters } from '../../hooks/Use-Meetings-Filters'
import { ScrollArea, ScrollBar } from '@/components/ui/scroll-area'

const MeetingsListHeader = () => {
    const [filters, setFilters] = useMeetingsFilters();
    const [isDialogOPen, setIsDialogOPen] = useState(false);

    const isAnyFilterModified = !!filters.search || !!filters.status || !!filters.agentId;

    const onClearFilters = () => {
        setFilters({
            search: "",
            status: null,
            agentId: "",
            page: 1,
        });
    };
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
                <ScrollArea>
                    <div className='flex items-center gap-x-2 p-1'>
                        <MeetingsSearchFilter />
                        <StatusFilter />
                        <AgentIdFilter />
                        {isAnyFilterModified && (
                            <Button variant='outline' onClick={onClearFilters}>
                                <XCircleIcon className='size-4' />
                                Clear Filters
                            </Button>
                        )}
                    </div>
                    <ScrollBar orientation='horizontal' />
                </ScrollArea>
            </div>
        </>
    )
}

export default MeetingsListHeader