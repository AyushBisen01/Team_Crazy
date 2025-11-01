import { DashboardHeader } from '@/components/dashboard/header';
import { PageHeader } from '@/components/page-header';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

export default function SettingsPage() {
  return (
    <>
      <DashboardHeader title="Settings" />
      <main className="flex-1 space-y-4 p-4 pt-6 md:p-8">
        <PageHeader title="Settings" description="Configure application settings, notification templates, and SLAs." />
         <Card className="min-h-[400px]">
            <CardHeader>
                <CardTitle>Coming Soon</CardTitle>
                <CardDescription>This page will provide configuration options for the application.</CardDescription>
            </CardHeader>
            <CardContent>
                <p>Application settings will be displayed here.</p>
            </CardContent>
        </Card>
      </main>
    </>
  );
}
