"use client";

import { useSuspenseQuery } from "@tanstack/react-query";
import { useTRPC } from "@/trpc/client";
import LoadingState from "@/components/Loading-State";

export const AgentView = () => {
    const trpc = useTRPC();
    const { data, isLoading, isError } = useSuspenseQuery(trpc.agents.getMany.queryOptions());
    return (
        <div>
            {JSON.stringify(data, null, 2)}
        </div>
    );
}

export const AgentViewLoading = () => {
    return (
        <LoadingState
            title="Loading Agents"
            description="This may take a couple of moment" />
    )
}
