import { DashboardHeader } from '@/components/dashboard/header';
import { PageHeader } from '@/components/page-header';
import { departments } from '@/lib/data';
import { DepartmentCard } from '@/components/dashboard/department-card';

export default function DepartmentsPage() {
  return (
    <>
      <DashboardHeader title="Departments" />
      <main className="flex-1 space-y-4 p-4 pt-6 md:p-8">
        <PageHeader title="Department Management" description="Monitor performance and issue queues for all departments." />
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3">
            {departments.map(dept => (
                <DepartmentCard key={dept.id} department={dept} />
            ))}
        </div>
      </main>
    </>
  );
}
