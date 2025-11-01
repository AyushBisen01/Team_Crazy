import { DashboardHeader } from '@/components/dashboard/header';
import { IssueHeatmap } from '@/components/dashboard/issue-heatmap';
import { IssueTrendsChart } from '@/components/dashboard/issue-trends-chart';
import { MetricCard } from '@/components/dashboard/metric-card';
import { metrics } from '@/lib/data';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { DepartmentPerformanceChart } from '@/components/dashboard/department-performance-chart';

export default function DashboardPage() {
  return (
    <>
      <DashboardHeader title="Dashboard" />
      <div className="flex-1 space-y-4 p-4 pt-6 md:p-8">
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {metrics.slice(0, 3).map((metric) => (
            <MetricCard key={metric.title} {...metric} />
          ))}
        </div>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {metrics.slice(3).map((metric) => (
            <MetricCard key={metric.title} {...metric} />
          ))}
        </div>
        <div className="grid grid-cols-1 gap-4 lg:grid-cols-7">
          <div className="lg:col-span-4">
             <IssueTrendsChart />
          </div>
          <div className="lg:col-span-3">
            <DepartmentPerformanceChart />
          </div>
        </div>
        <div>
          <IssueHeatmap />
        </div>
      </div>
    </>
  );
}
