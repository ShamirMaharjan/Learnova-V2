import { SidebarProvider } from "@/components/ui/sidebar";
import Dashboardsidebar from "@/modules/dashboard/ui/components/dashboard-sidebar";

interface Props {
    children: React.ReactNode;
}

const layout = ({ children }: Props) => {
    return (
        <SidebarProvider>
            <main className="flex flex-col h-screen w-screen bg-muted">
                <Dashboardsidebar />
                {children}
            </main>

        </SidebarProvider>
    )
}

export default layout