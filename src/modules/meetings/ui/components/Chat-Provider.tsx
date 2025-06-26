"use client"

import { authClient } from "@/lib/auth-client"
import LoadingState from "@/components/Loading-State"
import { ChatUI } from "./Chat-UI";

interface Props {
    meetingId: string;
    meetingName: string;
}

export const ChatProvider = ({ meetingId, meetingName }: Props) => {
    const { data, isPending } = authClient.useSession();

    if (isPending || !data?.user) {
        return (
            <LoadingState
                title="loading..."
                description="please wait while we load the chat"
            />
        )
    }

    return (
        <ChatUI
            meetingId={meetingId}
            meetingName={meetingName}
            userId={data.user.id}
            userName={data.user.name}
            userImage={data.user.image ?? ""}
        />
    )
}