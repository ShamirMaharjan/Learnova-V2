import { dehydrate, HydrationBoundary } from "@tanstack/react-query";
import { getQueryClient, trpc } from "@/trpc/server";
import { AgentView, AgentViewLoading } from "@/modules/agents/ui/views/Agent-View";
import { Suspense } from "react";
import AgentsListHeader from "@/modules/agents/ui/components/Agents-List-Header";
import { auth } from "@/lib/auth";
import { headers } from "next/headers";
import { redirect } from "next/navigation";

const Page = async () => {

    const session = await auth.api.getSession({
        headers: await headers(),
    })
    if (!session) {
        redirect('/sign-in')
    }

    const queryClient = getQueryClient();
    void queryClient.prefetchQuery(trpc.agents.getMany.queryOptions());

    return (
        <>
            <AgentsListHeader />
            <HydrationBoundary state={dehydrate(queryClient)}>
                <Suspense fallback={<AgentViewLoading />}>

                    <AgentView />
                </Suspense>
            </HydrationBoundary>
        </>
    );
};

export default Page;