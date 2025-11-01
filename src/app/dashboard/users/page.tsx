import { DashboardHeader } from '@/components/dashboard/header';
import { PageHeader } from '@/components/page-header';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

export default function UsersPage() {
  return (
    <>
      <DashboardHeader title="User Management" />
      <main className="flex-1 space-y-4 p-4 pt-6 md:p-8">
        <PageHeader title="User Management" description="Manage administrator and staff accounts and roles." />
         <Card className="min-h-[400px]">
            <CardHeader>
                <CardTitle>Coming Soon</CardTitle>
                <CardDescription>This page will allow management of user roles and permissions.</CardDescription>
            </CardHeader>
            <CardContent>
                <p>User management interface will be displayed here.</p>
            </CardContent>
        </Card>
      </main>
    </>
  );
}
