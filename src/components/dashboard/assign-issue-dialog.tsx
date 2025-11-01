'use client';

import { useState } from 'react';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogFooter,
} from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { type Issue, departments } from '@/lib/data';
import { suggestDepartments } from '@/ai/flows/issue-assignment-assistance';
import { Loader2, Wand2 } from 'lucide-react';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Label } from '@/components/ui/label';
import { Card, CardContent } from '../ui/card';

export function AssignIssueDialog({ issue }: { issue: Issue }) {
  const [suggestions, setSuggestions] = useState<string[]>([]);
  const [reasoning, setReasoning] = useState('');
  const [loading, setLoading] = useState(false);
  const [selectedDept, setSelectedDept] = useState<string | undefined>();
  const [open, setOpen] = useState(false);

  const handleSuggest = async () => {
    setLoading(true);
    setSuggestions([]);
    setReasoning('');
    try {
      const result = await suggestDepartments({
        title: issue.title,
        description: issue.description,
        category: issue.category,
        location: issue.location.address,
      });
      setSuggestions(result.suggestedDepartments);
      setReasoning(result.reasoning);
    } catch (error) {
      console.error('AI suggestion failed:', error);
      // Fallback to all departments
      setSuggestions(departments.map(d => d.name));
      setReasoning("AI suggestion failed. Please select a department manually.");
    } finally {
      setLoading(false);
    }
  };

  const handleOpenChange = (isOpen: boolean) => {
    setOpen(isOpen);
    if (!isOpen) {
        setSuggestions([]);
        setReasoning('');
    }
  }

  return (
    <Dialog open={open} onOpenChange={handleOpenChange}>
      <DialogTrigger asChild>
        <Button size="sm" variant="outline" className="flex-1">
          Assign
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Assign Issue: {issue.id}</DialogTitle>
          <DialogDescription>
            Assign this issue to the appropriate department. Use the AI assistant for suggestions.
          </DialogDescription>
        </DialogHeader>
        <div className="space-y-4 py-4">
            <Button onClick={handleSuggest} disabled={loading} className="w-full">
                {loading ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : <Wand2 className="mr-2 h-4 w-4" />}
                AI Suggestion
            </Button>
            {suggestions.length > 0 && (
                 <Card className="bg-muted/50">
                    <CardContent className="p-4 space-y-4">
                         <p className="text-sm text-muted-foreground">{reasoning}</p>
                        <RadioGroup onValueChange={setSelectedDept} value={selectedDept}>
                        {suggestions.map((deptName) => (
                            <div key={deptName} className="flex items-center space-x-2">
                            <RadioGroupItem value={deptName} id={deptName} />
                            <Label htmlFor={deptName}>{deptName}</Label>
                            </div>
                        ))}
                        </RadioGroup>
                    </CardContent>
                </Card>
            )}
        </div>
        <DialogFooter>
          <Button type="submit" disabled={!selectedDept}>
            Confirm Assignment
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
