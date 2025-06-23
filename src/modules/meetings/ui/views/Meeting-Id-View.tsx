"use client"
import ErrorState from "@/components/Error-State";
import LoadingState from "@/components/Loading-State";
import { useTRPC } from "@/trpc/client";
import { useMutation, useQueryClient, useSuspenseQuery } from "@tanstack/react-query";
import MeetingIdViewHeader from "../components/Meeting-Id-View-Header";
import { useRouter } from "next/navigation";
import { toast } from "sonner";
import { useConfirm } from "@/hooks/Use-Confirm";
import UpdateMeetingDialog from "../components/Update-Meeting-Dialog";
import { useState } from "react";

interface Props {
    meetingId: string;
}

export const MeetingIdView = ({ meetingId }: Props) => {
    const trpc = useTRPC();
    const router = useRouter();
    const queryClient = useQueryClient();

    const [UpdateMeetingDialogOpen, setUpdateMeetingDialogOpen] = useState(false);

    const [RemoveConfirmation, confirmRemove] = useConfirm(
        "Are you Sure?",
        "The Following action will remove this meeting"
    );



    const { data } = useSuspenseQuery(
        trpc.meetings.getOne.queryOptions({ id: meetingId })
    )

    const removeMeeting = useMutation(
        trpc.meetings.remove.mutationOptions({
            onSuccess: () => {
                queryClient.invalidateQueries(
                    trpc.meetings.getMany.queryOptions({})
                );
                router.push("/meetings");
            },
            onError: (error) => {
                toast.error(error.message);
            }
        })
    )

    const handleRemoveMeeting = async () => {
        const ok = await confirmRemove();
        if (!ok) return;

        await removeMeeting.mutateAsync({ id: meetingId })

    }
    return (
        <>
            <RemoveConfirmation />
            <UpdateMeetingDialog
                open={UpdateMeetingDialogOpen}
                onOpenChange={setUpdateMeetingDialogOpen}
                initialValues={data}
            />
            <div className="flex-1 py-4 px-4 md:px-8 flex flex-col gap-y-4">
                <MeetingIdViewHeader
                    meetingId={meetingId}
                    meetingName={data.name}
                    onEdit={() => setUpdateMeetingDialogOpen(true)}
                    onRemove={handleRemoveMeeting}
                />
                {JSON.stringify(data, null, 2)}
            </div>
        </>
    )
}

export const MeetingIdViewLoading = () => {
    return (
        <LoadingState
            title="Loading meetings"
            description="This may take a couple of moment" />
    )
}

export const MeetingIdViewError = () => {
    return (
        <ErrorState
            title="Erro Loading meetings"
            description="Something went wrong" />
    )
}