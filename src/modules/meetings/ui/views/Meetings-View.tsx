"use client"

import { DataTable } from "@/components/Data-Table";
import ErrorState from "@/components/Error-State";
import LoadingState from "@/components/Loading-State";
import { useTRPC } from "@/trpc/client"
import { useSuspenseQuery } from "@tanstack/react-query";
import { columns } from "../components/columns";
import { useRouter } from "next/navigation";
import { useMeetingsFilters } from "../../hooks/Use-Meetings-Filters";
import { DataPagination } from "@/components/Data-Pagination";

export const MeetingsView = () => {
    const trpc = useTRPC();
    const router = useRouter();
    const [filters, setFilters] = useMeetingsFilters();

    const { data } = useSuspenseQuery(trpc.meetings.getMany.queryOptions({
        ...filters,
    }));
    return (
        <div className="flex-1 pb-4 px-4 md:px-8 flex flex-col gap-y-4">
            <DataTable data={data.items} columns={columns} onRowClick={(row) => router.push(`/meetings/${row.id}`)} />
            <DataPagination
                page={filters.page}
                totalPages={data.totalPages}
                onPageChange={(page) => setFilters({ page })}
            />
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