import { dehydrate, HydrationBoundary } from "@tanstack/react-query";
import { getQueryClient, trpc } from "@/trpc/server";
import { AgentView, AgentViewLoading } from "@/modules/agents/ui/views/Agent-View";
import { Suspense } from "react";

const Page = async () => {
    const queryClient = getQueryClient();
    void queryClient.prefetchQuery(trpc.agents.getMany.queryOptions());

    return (
        <HydrationBoundary state={dehydrate(queryClient)}>
            <Suspense fallback={<AgentViewLoading />}>

                <AgentView />
            </Suspense>
        </HydrationBoundary>
    );
};

export default Page;