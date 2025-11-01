import { DashboardHeader } from '@/components/dashboard/header';
import { PageHeader } from '@/components/page-header';
import { issues } from '@/lib/data';
import { IssueCard } from '@/components/dashboard/issue-card';
import { Button } from '@/components/ui/button';
import { Download, PlusCircle } from 'lucide-react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function IssuesPage() {
  const allIssues = issues;
  const pendingIssues = issues.filter(issue => issue.status === 'pending' || issue.status === 'approved');
  const inProgressIssues = issues.filter(issue => issue.status === 'in-progress' || issue.status === 'assigned');
  const resolvedIssues = issues.filter(issue => issue.status === 'resolved');

  return (
    <>
      <DashboardHeader title="Issue Management" />
      <main className="flex-1 space-y-4 p-4 pt-6 md:p-8">
        <PageHeader title="All Reported Issues" description="Track, assign, and resolve civic issues.">
          <Button variant="outline">
            <Download className="mr-2 h-4 w-4" />
            Export Report
          </Button>
          <Button>
            <PlusCircle className="mr-2 h-4 w-4" />
            New Issue
          </Button>
        </PageHeader>
        
        <Tabs defaultValue="all">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="all">All</TabsTrigger>
            <TabsTrigger value="pending">Pending</TabsTrigger>
            <TabsTrigger value="in-progress">In Progress</TabsTrigger>
            <TabsTrigger value="resolved">Resolved</TabsTrigger>
          </TabsList>
          <TabsContent value="all">
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
              {allIssues.map(issue => <IssueCard key={issue.id} issue={issue} />)}
            </div>
          </TabsContent>
          <TabsContent value="pending">
             <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
              {pendingIssues.map(issue => <IssueCard key={issue.id} issue={issue} />)}
            </div>
          </TabsContent>
          <TabsContent value="in-progress">
             <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
              {inProgressIssues.map(issue => <IssueCard key={issue.id} issue={issue} />)}
            </div>
          </TabsContent>
          <TabsContent value="resolved">
             <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
              {resolvedIssues.map(issue => <IssueCard key={issue.id} issue={issue} />)}
            </div>
          </TabsContent>
        </Tabs>

      </main>
    </>
  );
}
