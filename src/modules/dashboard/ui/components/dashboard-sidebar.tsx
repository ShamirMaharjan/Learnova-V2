"use client"
import { Separator } from "@/components/ui/separator"
import { cn } from "@/lib/utils"
import {
    Sidebar,
    SidebarContent,
    SidebarHeader,
    SidebarFooter,
    SidebarGroup,
    SidebarGroupContent,
    SidebarMenu,
    SidebarMenuButton,
    SidebarMenuItem,

} from "@/components/ui/sidebar"
import { BotIcon, StarIcon, VideoIcon } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { usePathname } from "next/navigation"
import DashboardUserButton from "./Dashboard-UserButton"
import { DashboardTrial } from "./Dashboard-Trial"


const Dashboardsidebar = () => {

    const pathname = usePathname();

    const firstSection = [{
        icon: VideoIcon,
        label: "Meetings",
        href: "/meetings"
    }, {
        icon: BotIcon,
        label: "Agents",
        href: "/agents"
    }]

    const secondSection = [{
        icon: StarIcon,
        label: "Upgrade",
        href: "/upgrade"
    }]


    return (
        <Sidebar>
            <SidebarHeader className="text-sidebar-accent-foreground">
                <Link href="/" className="flex items-center gap-2 px-2 pt-2">
                    <Image src="/logo.svg" height={32} width={32} alt="Learnova" />
                    <p className="text-2xl font-semibold">Learnova</p>
                </Link>
            </SidebarHeader>
            <div className="px-4 py-2">
                <Separator className="opacity-10 text-purple-900" />
            </div>
            <SidebarContent>
                <SidebarGroup>
                    <SidebarGroupContent>
                        <SidebarMenu>
                            {firstSection.map((item) => (
                                <SidebarMenuItem key={item.href}>
                                    <SidebarMenuButton
                                        asChild
                                        className={
                                            cn(
                                                "h-10 hover:bg-linear-to-r/oklch border border-transparent",
                                                "hover:border-[#6C54B6]/10 from-sidebar/accent from-5% via-sidebar/50 to-sidebar/50",
                                                pathname === item.href && 'bg-linear-to-r/oklch from-sidebar/accent from-5% via-sidebar/50 to-sidebar/50 border-[#6C54B6]/10'
                                            )}
                                        isActive={pathname === item.href}
                                    >

                                        <Link href={item.href}>
                                            <item.icon className="size-5" />
                                            <span className="text-sm font-medium tracking-tight">
                                                {item.label}
                                            </span>
                                        </Link>
                                    </SidebarMenuButton>
                                </SidebarMenuItem>
                            ))}
                        </SidebarMenu>
                    </SidebarGroupContent>
                </SidebarGroup>

                <div className="px-4 py-2">
                    <Separator className="opacity-10 text-purple-900" />
                </div>

                <SidebarGroup>
                    <SidebarGroupContent>
                        <SidebarMenu>
                            {secondSection.map((item) => (
                                <SidebarMenuItem key={item.href}>
                                    <SidebarMenuButton
                                        asChild
                                        className={
                                            cn(
                                                "h-10 hover:bg-linear-to-r/oklch border border-transparent",
                                                "hover:border-[#6C54B6]/10 from-sidebar/accent from-5% via-sidebar/50 to-sidebar/50",
                                                pathname === item.href && 'bg-linear-to-r/oklch from-sidebar/accent from-5% via-sidebar/50 to-sidebar/50 border-[#6C54B6]/10'
                                            )}
                                        isActive={pathname === item.href}
                                    >

                                        <Link href={item.href}>
                                            <item.icon className="size-5" />
                                            <span className="text-sm font-medium tracking-tight">
                                                {item.label}
                                            </span>
                                        </Link>
                                    </SidebarMenuButton>
                                </SidebarMenuItem>
                            ))}
                        </SidebarMenu>
                    </SidebarGroupContent>
                </SidebarGroup>
            </SidebarContent>
            <SidebarFooter className="text-white">
                <DashboardTrial />
                <Separator className="opacity-10 text-purple-900" />
                <DashboardTrial />
                <DashboardUserButton />
            </SidebarFooter>
        </Sidebar>
    )
}

export default Dashboardsidebar