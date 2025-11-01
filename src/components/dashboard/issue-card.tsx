import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card';
import type { Issue } from '@/lib/data';
import Image from 'next/image';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ThumbsUp, ThumbsDown, MapPin, Clock } from 'lucide-react';
import { cn } from '@/lib/utils';
import { AssignIssueDialog } from './assign-issue-dialog';

const priorityColors = {
  low: 'bg-blue-100 text-blue-800 border-blue-300',
  medium: 'bg-yellow-100 text-yellow-800 border-yellow-300',
  high: 'bg-orange-100 text-orange-800 border-orange-300',
  critical: 'bg-red-100 text-red-800 border-red-300',
};

const statusColors = {
    pending: 'bg-gray-100 text-gray-800',
    approved: 'bg-sky-100 text-sky-800',
    assigned: 'bg-indigo-100 text-indigo-800',
    'in-progress': 'bg-purple-100 text-purple-800',
    resolved: 'bg-emerald-100 text-emerald-800',
};

export function IssueCard({ issue }: { issue: Issue }) {
  const timeAgo = (date: Date): string => {
    const seconds = Math.floor((new Date().getTime() - date.getTime()) / 1000);
    let interval = seconds / 31536000;
    if (interval > 1) return Math.floor(interval) + " years ago";
    interval = seconds / 2592000;
    if (interval > 1) return Math.floor(interval) + " months ago";
    interval = seconds / 86400;
    if (interval > 1) return Math.floor(interval) + " days ago";
    interval = seconds / 3600;
    if (interval > 1) return Math.floor(interval) + " hours ago";
    interval = seconds / 60;
    if (interval > 1) return Math.floor(interval) + " minutes ago";
    return Math.floor(seconds) + " seconds ago";
  };
    
  return (
    <Card className="overflow-hidden flex flex-col">
      <CardHeader className="p-0">
        <div className="relative h-48 w-full">
          <Image
            src={issue.image.imageUrl}
            alt={issue.image.description}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="object-cover"
            data-ai-hint={issue.image.imageHint}
          />
        </div>
      </CardHeader>
      <CardContent className="p-4 flex-grow">
        <div className="mb-2 flex items-center justify-between">
            <Badge className={cn("capitalize", statusColors[issue.status])}>{issue.status.replace('-', ' ')}</Badge>
            <Badge variant="outline" className={cn("capitalize", priorityColors[issue.priority])}>{issue.priority}</Badge>
        </div>
        <h4 className="font-headline text-lg font-semibold leading-tight mb-2">{issue.title}</h4>
        <div className="space-y-2 text-sm text-muted-foreground">
             <div className="flex items-start gap-2">
                <MapPin className="h-4 w-4 mt-0.5 shrink-0" />
                <span>{issue.location.address}</span>
            </div>
            <div className="flex items-center gap-2">
                <Clock className="h-4 w-4 shrink-0" />
                <span>Reported: {timeAgo(issue.createdAt)}</span>
            </div>
            <div className="flex items-center gap-4 pt-1">
                <div className="flex items-center gap-1 text-green-600">
                    <ThumbsUp className="h-4 w-4" />
                    <span className="font-medium">{issue.greenFlags}</span>
                </div>
                 <div className="flex items-center gap-1 text-red-600">
                    <ThumbsDown className="h-4 w-4" />
                    <span className="font-medium">{issue.redFlags}</span>
                </div>
            </div>
        </div>
      </CardContent>
      <CardFooter className="p-2 bg-muted/50">
        <div className="flex w-full gap-2">
          {issue.status === 'pending' && <Button size="sm" className="flex-1">Approve</Button>}
          {issue.status === 'pending' && <Button size="sm" variant="destructive" className="flex-1">Reject</Button>}
          {(issue.status === 'approved' || issue.status === 'assigned') && <AssignIssueDialog issue={issue} />}
        </div>
      </CardFooter>
    </Card>
  );
}
