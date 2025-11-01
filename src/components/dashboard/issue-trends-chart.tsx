'use client';

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { ChartContainer, ChartTooltip, ChartTooltipContent, ChartLegend, ChartLegendContent } from '@/components/ui/chart';
import { Area, XAxis, YAxis, CartesianGrid, AreaChart } from 'recharts';

const chartData = [
  { month: 'January', reported: 186, resolved: 80 },
  { month: 'February', reported: 305, resolved: 200 },
  { month: 'March', reported: 237, resolved: 120 },
  { month: 'April', reported: 273, resolved: 190 },
  { month: 'May', reported: 209, resolved: 130 },
  { month: 'June', reported: 214, resolved: 140 },
];

const chartConfig = {
  reported: {
    label: 'Reported',
    color: 'hsl(var(--primary))',
  },
  resolved: {
    label: 'Resolved',
    color: 'hsl(var(--accent))',
  },
};

export function IssueTrendsChart() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Issue Trends</CardTitle>
        <CardDescription>Reported vs. Resolved Issues Over Time</CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig} className="h-[250px] w-full">
          <AreaChart
            accessibilityLayer
            data={chartData}
            margin={{
              left: 12,
              right: 12,
            }}
          >
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="month"
              tickLine={false}
              axisLine={false}
              tickMargin={8}
              tickFormatter={(value) => value.slice(0, 3)}
            />
            <YAxis
                tickLine={false}
                axisLine={false}
                tickMargin={8}
            />
            <ChartTooltip cursor={false} content={<ChartTooltipContent />} />
            <ChartLegend content={<ChartLegendContent />} />
            <defs>
              <linearGradient id="fillReported" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="var(--color-reported)" stopOpacity={0.8} />
                <stop offset="95%" stopColor="var(--color-reported)" stopOpacity={0.1} />
              </linearGradient>
              <linearGradient id="fillResolved" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="var(--color-resolved)" stopOpacity={0.8} />
                <stop offset="95%" stopColor="var(--color-resolved)" stopOpacity={0.1} />
              </linearGradient>
            </defs>
            <Area
              dataKey="reported"
              type="natural"
              fill="url(#fillReported)"
              stroke="var(--color-reported)"
              stackId="a"
            />
            <Area
              dataKey="resolved"
              type="natural"
              fill="url(#fillResolved)"
              stroke="var(--color-resolved)"
              stackId="a"
            />
          </AreaChart>
        </ChartContainer>
      </CardContent>
    </Card>
  );
}
