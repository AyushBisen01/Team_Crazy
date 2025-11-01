'use client';

import { Bar, BarChart, CartesianGrid, XAxis, YAxis } from 'recharts';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
  ChartLegend,
  ChartLegendContent,
} from '@/components/ui/chart';
import { departments } from '@/lib/data';

const chartData = departments.map(d => ({
    name: d.id,
    total: d.totalAssigned,
    resolved: d.done,
    efficiency: Math.round((d.done / d.totalAssigned) * 100),
}));


const chartConfig = {
  resolved: {
    label: 'Resolved',
    color: 'hsl(var(--primary))',
  },
  total: {
    label: 'Total',
    color: 'hsl(var(--muted))',
  },
};

export function DepartmentPerformanceChart() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Department Performance</CardTitle>
        <CardDescription>Efficiency by Department</CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig} className="h-[250px] w-full">
          <BarChart accessibilityLayer data={chartData} layout="vertical" margin={{ left: 10, right: 10 }}>
            <CartesianGrid horizontal={false} />
            <YAxis
              dataKey="name"
              type="category"
              tickLine={false}
              tickMargin={10}
              axisLine={false}
              tickFormatter={(value) => value}
              className="text-xs"
            />
            <XAxis dataKey="total" type="number" hide />
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent indicator="line" />}
            />
            <ChartLegend content={<ChartLegendContent />} />
            <Bar
              dataKey="total"
              fill="var(--color-total)"
              radius={4}
              stackId="a"
            />
            <Bar
              dataKey="resolved"
              fill="var(--color-resolved)"
              radius={4}
              stackId="a"
            />
          </BarChart>
        </ChartContainer>
      </CardContent>
    </Card>
  );
}
