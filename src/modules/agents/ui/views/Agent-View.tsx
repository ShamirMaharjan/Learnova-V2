"use client";

import { useSuspenseQuery } from "@tanstack/react-query";
import { useTRPC } from "@/trpc/client";
import LoadingState from "@/components/Loading-State";
import { DataTable } from "../components/data-table";
import { columns } from "../components/columns";
import EmptyState from "@/components/Empty-State";
import { useAgentsFilters } from "../../hooks/Use-Agents-Filters";
import { DataPagination } from "../components/Data-Pagination";
import { useRouter } from "next/navigation";


export const AgentView = () => {
    const [filters, setFilters] = useAgentsFilters();

    const router = useRouter();

    const trpc = useTRPC();
    const { data, isLoading, isError } = useSuspenseQuery(trpc.agents.getMany.queryOptions({
        ...filters,
    }));
    return (
        <div className="flex-1 pb-4 py-4 md:px-8 flex flex-col gap-y-4">
            <DataTable
                data={data.items}
                columns={columns}
                onRowClick={(row) => router.push(`/agents/${row.id}`)}
            />
            <DataPagination
                page={filters.page}
                totalPages={data.totalPages}
                onPageChange={(page) => setFilters({ page })}
            />
            {data.items.length === 0 && (
                <EmptyState
                    title="Create your first agent"
                    description="Create an agent to join your meetings. Each agent will follow your instructions and can interact with participants during the call."
                />
            )}

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
