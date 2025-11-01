'use server';
/**
 * @fileOverview AI-powered issue prioritization flow.
 *
 * - aiIssuePrioritization - A function that automatically sets issue priority based on Green/Red flags and descriptions.
 * - AiIssuePrioritizationInput - The input type for the aiIssuePrioritization function.
 * - AiIssuePrioritizationOutput - The return type for the aiIssuePrioritization function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const AiIssuePrioritizationInputSchema = z.object({
  greenFlags: z.number().describe('Number of green flags for the issue.'),
  redFlags: z.number().describe('Number of red flags for the issue.'),
  description: z.string().describe('The description of the issue.'),
});
export type AiIssuePrioritizationInput = z.infer<typeof AiIssuePrioritizationInputSchema>;

const AiIssuePrioritizationOutputSchema = z.object({
  priority: z
    .enum(['low', 'medium', 'high', 'critical'])
    .describe('The automatically determined priority of the issue.'),
});
export type AiIssuePrioritizationOutput = z.infer<typeof AiIssuePrioritizationOutputSchema>;

export async function aiIssuePrioritization(input: AiIssuePrioritizationInput): Promise<AiIssuePrioritizationOutput> {
  return aiIssuePrioritizationFlow(input);
}

const prompt = ai.definePrompt({
  name: 'aiIssuePrioritizationPrompt',
  input: {schema: AiIssuePrioritizationInputSchema},
  output: {schema: AiIssuePrioritizationOutputSchema},
  prompt: `You are an AI assistant that helps prioritize civic issues based on citizen feedback and issue descriptions.

  Given the number of green flags (positive feedback), red flags (negative feedback), and a description of the issue, determine the appropriate priority level.

  Consider the following guidelines:
  - Issues with a high number of red flags or a concerning description should be marked as "critical".
  - Issues with a significant number of red flags should be marked as "high".
  - Issues with a mix of green and red flags and a moderately concerning description should be marked as "medium".
  - Issues with a high number of green flags and a non-concerning description should be marked as "low".

  Green Flags: {{greenFlags}}
  Red Flags: {{redFlags}}
  Description: {{description}}

  Based on this information, set the issue's priority.
  Always return the priority.`,
});

const aiIssuePrioritizationFlow = ai.defineFlow(
  {
    name: 'aiIssuePrioritizationFlow',
    inputSchema: AiIssuePrioritizationInputSchema,
    outputSchema: AiIssuePrioritizationOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
