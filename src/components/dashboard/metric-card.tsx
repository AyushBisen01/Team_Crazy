import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { cn } from '@/lib/utils';
import type { Metric } from '@/lib/data';

export function MetricCard({ title, value, change, changeType, icon: Icon }: Metric) {
  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-sm font-medium">{title}</CardTitle>
        <Icon className="h-4 w-4 text-muted-foreground" />
      </CardHeader>
      <CardContent>
        <div className="text-2xl font-bold">{value}</div>
        <p
          className={cn('text-xs text-muted-foreground', {
            'text-emerald-500': changeType === 'increase',
            'text-red-500': changeType === 'decrease',
          })}
        >
          {change}
        </p>
      </CardContent>
    </Card>
  );
}
