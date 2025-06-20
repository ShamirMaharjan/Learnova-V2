"use client"

import ErrorState from "@/components/Error-State";
import LoadingState from "@/components/Loading-State";
import { useTRPC } from "@/trpc/client"
import { useSuspenseQuery } from "@tanstack/react-query";

export const MeetingsView = () => {
    const trpc = useTRPC();
    const { data } = useSuspenseQuery(trpc.meetings.getMany.queryOptions({}));
    return (
        <div>
            {JSON.stringify(data)}
        </div>
    )
}

export const MeetingsViewLoading = () => {
    return (
        <LoadingState
            title="Loading meetings"
            description="This may take a couple of moment" />
    )
}

export const MeetingsViewError = () => {
    return (
        <ErrorState
            title="Erro Loading meetings"
            description="Something went wrong" />
    )
}