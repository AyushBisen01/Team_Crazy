import { DashboardHeader } from '@/components/dashboard/header';
import { PageHeader } from '@/components/page-header';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Slider } from '@/components/ui/slider';
import { Label } from '@/components/ui/label';

export default function AiSettingsPage() {
  return (
    <>
      <DashboardHeader title="AI Settings" />
      <main className="flex-1 space-y-4 p-4 pt-6 md:p-8">
        <PageHeader
          title="AI & Automation"
          description="Monitor AI model performance and configure automation rules."
        />
        <div className="grid gap-6 lg:grid-cols-3">
          <div className="lg:col-span-2">
            <Card>
              <CardHeader>
                <CardTitle>Green/Red Flag Thresholds</CardTitle>
                <CardDescription>
                  Set the number of flags required to trigger automatic actions.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-8">
                <div>
                  <Label htmlFor="auto-approve">Auto-Approve Threshold</Label>
                  <div className="mt-2 flex items-center gap-4">
                    <Slider id="auto-approve" defaultValue={[15]} max={30} step={1} />
                    <span className="w-12 rounded-md border p-2 text-center text-sm">15</span>
                  </div>
                   <p className="text-xs text-muted-foreground mt-2">Issues with this many or more Green Flags will be auto-approved.</p>
                </div>
                <div>
                  <Label htmlFor="auto-reject">Auto-Reject Threshold</Label>
                  <div className="mt-2 flex items-center gap-4">
                    <Slider id="auto-reject" defaultValue={[15]} max={30} step={1} />
                     <span className="w-12 rounded-md border p-2 text-center text-sm">15</span>
                  </div>
                  <p className="text-xs text-muted-foreground mt-2">Issues with this many or more Red Flags will be auto-rejected.</p>
                </div>
                <div>
                  <Label htmlFor="manual-review">Manual Review Range</Label>
                   <div className="mt-2 flex items-center gap-4">
                    <Slider id="manual-review" defaultValue={[5, 14]} max={30} step={1} />
                     <span className="w-16 rounded-md border p-2 text-center text-sm">5-14</span>
                  </div>
                  <p className="text-xs text-muted-foreground mt-2">Issues with flags in this range will be sent for manual review.</p>
                </div>
              </CardContent>
            </Card>
          </div>
          <div className="lg:col-span-1">
             <Card>
                <CardHeader>
                    <CardTitle>ML Model Performance</CardTitle>
                    <CardDescription>Current accuracy and classification stats.</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                   <div className="flex justify-between items-baseline">
                        <p className="text-muted-foreground">Overall Accuracy</p>
                        <p className="text-2xl font-bold text-primary">92%</p>
                   </div>
                    <div className="flex justify-between items-baseline">
                        <p className="text-muted-foreground">Auto-Approved</p>
                        <p className="text-lg font-semibold">45%</p>
                   </div>
                   <div className="flex justify-between items-baseline">
                        <p className="text-muted-foreground">Flagged for Review</p>
                        <p className="text-lg font-semibold">8%</p>
                   </div>
                    <div className="flex justify-between items-baseline">
                        <p className="text-muted-foreground">Misclassified</p>
                        <p className="text-lg font-semibold text-destructive">3%</p>
                   </div>
                </CardContent>
             </Card>
          </div>
        </div>
      </main>
    </>
  );
}
