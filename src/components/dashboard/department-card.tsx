import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import type { Department } from '@/lib/data';
import { Progress } from '@/components/ui/progress';

export function DepartmentCard({ department }: { department: Department }) {
    const efficiency = Math.round((department.done / department.totalAssigned) * 100);

    return (
        <Card>
            <CardHeader>
                <CardTitle className="font-headline text-xl">{department.name}</CardTitle>
                <CardDescription>Performance Overview</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
                <div className="grid grid-cols-2 gap-4 text-center">
                    <div>
                        <p className="text-2xl font-bold">{department.totalAssigned}</p>
                        <p className="text-xs text-muted-foreground">Total Assigned</p>
                    </div>
                     <div>
                        <p className="text-2xl font-bold">{department.done}</p>
                        <p className="text-xs text-muted-foreground">Resolved</p>
                    </div>
                     <div>
                        <p className="text-2xl font-bold">{department.inProgress}</p>
                        <p className="text-xs text-muted-foreground">In Progress</p>
                    </div>
                     <div>
                        <p className="text-2xl font-bold text-destructive">{department.overdue}</p>
                        <p className="text-xs text-muted-foreground">Overdue</p>
                    </div>
                </div>
            </CardContent>
            <CardFooter className="flex-col items-start gap-2">
                <div className="flex w-full justify-between text-sm">
                    <span className="text-muted-foreground">Efficiency</span>
                    <span className="font-semibold">{efficiency}%</span>
                </div>
                <Progress value={efficiency} aria-label={`${efficiency}% efficiency`} />
            </CardFooter>
        </Card>
    )
}
