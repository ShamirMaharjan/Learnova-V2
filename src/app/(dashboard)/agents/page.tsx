import { dehydrate, HydrationBoundary } from "@tanstack/react-query";
import { getQueryClient, trpc } from "@/trpc/server";
import { AgentView, AgentViewLoading } from "@/modules/agents/ui/views/Agent-View";
import { Suspense } from "react";
import AgentsListHeader from "@/modules/agents/ui/components/Agents-List-Header";
import { auth } from "@/lib/auth";
import { headers } from "next/headers";
import { redirect } from "next/navigation";
import type { SearchParams } from "nuqs";
import { LoadSearchParams } from "@/modules/agents/params";

interface Props {
    searchParams: Promise<SearchParams>
}

const Page = async ({ searchParams }: Props) => {
    const filters = await LoadSearchParams(searchParams);

    const session = await auth.api.getSession({
        headers: await headers(),
    })
    if (!session) {
        redirect('/sign-in')
    }

    const queryClient = getQueryClient();
    void queryClient.prefetchQuery(trpc.agents.getMany.queryOptions({
        ...filters,
    }));

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