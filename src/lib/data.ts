import type { ImagePlaceholder } from './placeholder-images';
import { PlaceHolderImages } from './placeholder-images';
import { FileText, CheckCircle, Hourglass, Clock, TrendingUp, Users } from 'lucide-react';

export type Metric = {
  title: string;
  value: string;
  change: string;
  changeType: 'increase' | 'decrease';
  icon: React.ElementType;
};

export type Issue = {
  id: string;
  title: string;
  description: string;
  category: 'pothole' | 'streetlight' | 'garbage' | 'water-leak' | 'other';
  priority: 'low' | 'medium' | 'high' | 'critical';
  status: 'pending' | 'approved' | 'assigned' | 'in-progress' | 'resolved';
  location: { lat: number; lng: number; address: string };
  image: ImagePlaceholder;
  userId: string;
  departmentId?: string;
  createdAt: Date;
  updatedAt: Date;
  greenFlags: number;
  redFlags: number;
  aiConfidence?: number;
};

export type Department = {
  id: string;
  name: string;
  totalAssigned: number;
  done: number;
  inProgress: number;
  overdue: number;
};

export const metrics: Metric[] = [
  { title: 'Total Reports', value: '1,247', change: '▲ 12% this week', changeType: 'increase', icon: FileText },
  { title: 'Resolved Issues', value: '892', change: '▲ 8% resolved', changeType: 'increase', icon: CheckCircle },
  { title: 'Pending Approval', value: '155', change: '▼ 3% pending', changeType: 'decrease', icon: Hourglass },
  { title: 'Avg. Resolution Time', value: '2.3 days', change: '▼ 0.5 days', changeType: 'decrease', icon: Clock },
  { title: 'Department Performance', value: '84%', change: '▲ 5% efficiency', changeType: 'increase', icon: TrendingUp },
  { title: 'Citizen Engagement', value: '1,234 users', change: '▲ 15% active', changeType: 'increase', icon: Users },
];

const now = new Date();

export const issues: Issue[] = [
  {
    id: 'IS001',
    title: 'Large Pothole on Main Street',
    description: 'A very large and dangerous pothole has formed in the middle of Main Street, causing traffic issues.',
    category: 'pothole',
    priority: 'high',
    status: 'assigned',
    location: { lat: 12.9716, lng: 77.5946, address: 'Main Street, Bengaluru' },
    image: PlaceHolderImages.find(img => img.id === 'pothole-1')!,
    userId: 'USR001',
    departmentId: 'PWD',
    createdAt: new Date(now.setDate(now.getDate() - 2)),
    updatedAt: new Date(),
    greenFlags: 12,
    redFlags: 2,
    aiConfidence: 0.92,
  },
  {
    id: 'IS002',
    title: 'Streetlight out at 5th and Oak',
    description: 'The streetlight at the corner of 5th Avenue and Oak Street is not working, making the intersection dark and unsafe at night.',
    category: 'streetlight',
    priority: 'medium',
    status: 'in-progress',
    location: { lat: 12.9759, lng: 77.5996, address: '5th and Oak, Bengaluru' },
    image: PlaceHolderImages.find(img => img.id === 'streetlight-1')!,
    userId: 'USR002',
    departmentId: 'Street Lights',
    createdAt: new Date(now.setDate(now.getDate() - 5)),
    updatedAt: new Date(now.setDate(now.getDate() - 1)),
    greenFlags: 5,
    redFlags: 0,
  },
  {
    id: 'IS003',
    title: 'Garbage overflowing at park entrance',
    description: 'The trash cans at the entrance to City Park are overflowing and have not been collected for days.',
    category: 'garbage',
    priority: 'medium',
    status: 'approved',
    location: { lat: 12.9698, lng: 77.5946, address: 'City Park, Bengaluru' },
    image: PlaceHolderImages.find(img => img.id === 'garbage-1')!,
    userId: 'USR003',
    createdAt: new Date(now.setDate(now.getDate() - 3)),
    updatedAt: new Date(),
    greenFlags: 8,
    redFlags: 1,
    aiConfidence: 0.95,
  },
  {
    id: 'IS004',
    title: 'Water leak on Maple Avenue',
    description: 'There is a significant water leak from a pipe under the sidewalk on Maple Avenue.',
    category: 'water-leak',
    priority: 'critical',
    status: 'pending',
    location: { lat: 12.9716, lng: 77.5980, address: 'Maple Avenue, Bengaluru' },
    image: PlaceHolderImages.find(img => img.id === 'water-leak-1')!,
    userId: 'USR004',
    createdAt: new Date(),
    updatedAt: new Date(),
    greenFlags: 2,
    redFlags: 5,
  },
    {
    id: 'IS005',
    title: 'Broken sidewalk near bus stop',
    description: 'The sidewalk is cracked and uneven, creating a tripping hazard for people waiting for the bus.',
    category: 'other',
    priority: 'low',
    status: 'resolved',
    location: { lat: 12.973, lng: 77.601, address: 'Bus Stop, Koramangala' },
    image: PlaceHolderImages.find(img => img.id === 'sidewalk-1')!,
    userId: 'USR005',
    departmentId: 'PWD',
    createdAt: new Date(now.setDate(now.getDate() - 14)),
    updatedAt: new Date(now.setDate(now.getDate() - 3)),
    greenFlags: 20,
    redFlags: 0,
  }
];

export const departments: Department[] = [
    { id: 'PWD', name: 'Public Works Department', totalAssigned: 156, done: 120, inProgress: 25, overdue: 11 },
    { id: 'Sanitation', name: 'Sanitation', totalAssigned: 89, done: 78, inProgress: 8, overdue: 3 },
    { id: 'Street Lights', name: 'Street Lights', totalAssigned: 45, done: 40, inProgress: 5, overdue: 0 },
    { id: 'Utilities', name: 'Utilities', totalAssigned: 62, done: 50, inProgress: 7, overdue: 5 },
];
