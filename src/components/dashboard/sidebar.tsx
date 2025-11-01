'use client';

import {
  Sidebar,
  SidebarContent,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuBadge,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarFooter
} from '@/components/ui/sidebar';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import {
  LayoutDashboard,
  Hourglass,
  ListTodo,
  Building,
  BarChart,
  Cpu,
  Users,
  Settings,
  LogOut,
  Building2,
} from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { PlaceHolderImages } from '@/lib/placeholder-images';

const navItems = [
  { href: '/dashboard', icon: LayoutDashboard, label: 'Dashboard' },
  { href: '/dashboard/pending-approval', icon: Hourglass, label: 'Pending Approval', badge: 15 },
  { href: '/dashboard/issues', icon: ListTodo, label: 'Issue Management' },
  { href: '/dashboard/departments', icon: Building, label: 'Departments' },
  { href: '/dashboard/analytics', icon: BarChart, label: 'Analytics' },
  { href: '/dashboard/ai-settings', icon: Cpu, label: 'AI Settings' },
  { href: '/dashboard/users', icon: Users, label: 'User Management' },
];

export function DashboardSidebar() {
  const pathname = usePathname();
  const userAvatar = PlaceHolderImages.find(img => img.id === 'user-avatar-1');

  // The root path '/' should also be considered active for the dashboard link.
  const isDashboardActive = pathname === '/' || pathname === '/dashboard';

  return (
    <Sidebar>
      <SidebarHeader>
        <div className="flex items-center gap-2">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary text-primary-foreground">
                <Building2 className="h-6 w-6" />
            </div>
            <h1 className="font-headline text-xl font-bold text-primary-foreground/90">
                Janvaani HQ
            </h1>
        </div>
      </SidebarHeader>
      <SidebarContent className="p-2">
        <SidebarMenu>
          {navItems.map((item) => {
            const isActive = (item.href === '/dashboard') ? isDashboardActive : pathname === item.href;
            return (
              <SidebarMenuItem key={item.href}>
                <SidebarMenuButton
                  asChild
                  isActive={isActive}
                  tooltip={{ children: item.label }}
                >
                  <Link href={item.href}>
                    <item.icon />
                    <span>{item.label}</span>
                    {item.badge && <SidebarMenuBadge>{item.badge}</SidebarMenuBadge>}
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
            );
          })}
        </SidebarMenu>
      </SidebarContent>
      <SidebarFooter>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton asChild isActive={pathname === '/dashboard/settings'} tooltip={{ children: 'Settings' }}>
                <Link href="/dashboard/settings">
                    <Settings />
                    <span>Settings</span>
                </Link>
            </SidebarMenuButton>
          </SidebarMenuItem>
          <SidebarMenuItem>
            <div className="flex items-center gap-2 rounded-md p-2 text-sm text-sidebar-foreground/80">
              <Avatar className="h-8 w-8">
                <AvatarImage src={userAvatar?.imageUrl} alt="User Avatar" />
                <AvatarFallback>AD</AvatarFallback>
              </Avatar>
              <div className="flex flex-col truncate">
                <span className="font-semibold">Admin User</span>
                <span className="text-xs text-sidebar-foreground/60">Super Admin</span>
              </div>
              <SidebarMenuButton asChild variant="ghost" size="icon" className="ml-auto h-8 w-8">
                <Link href="#">
                    <LogOut />
                </Link>
              </SidebarMenuButton>
            </div>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarFooter>
    </Sidebar>
  );
}
