'use server';

/**
 * @fileOverview Provides AI assistance for assigning issues to the appropriate department.
 *
 * - suggestDepartments - A function that suggests departments for issue assignment.
 * - SuggestDepartmentsInput - The input type for the suggestDepartments function.
 * - SuggestDepartmentsOutput - The return type for the suggestDepartments function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const SuggestDepartmentsInputSchema = z.object({
  title: z.string().describe('The title of the issue.'),
  description: z.string().describe('A detailed description of the issue.'),
  category: z.string().describe('The category of the issue (e.g., pothole, streetlight).'),
  location: z.string().describe('The location of the issue.'),
});
export type SuggestDepartmentsInput = z.infer<typeof SuggestDepartmentsInputSchema>;

const SuggestDepartmentsOutputSchema = z.object({
  suggestedDepartments: z
    .array(z.string())
    .describe('An array of suggested department names for issue assignment.'),
  reasoning: z.string().describe('The AI reasoning behind the department suggestions.'),
});
export type SuggestDepartmentsOutput = z.infer<typeof SuggestDepartmentsOutputSchema>;

export async function suggestDepartments(
  input: SuggestDepartmentsInput
): Promise<SuggestDepartmentsOutput> {
  return suggestDepartmentsFlow(input);
}

const suggestDepartmentsPrompt = ai.definePrompt({
  name: 'suggestDepartmentsPrompt',
  input: {schema: SuggestDepartmentsInputSchema},
  output: {schema: SuggestDepartmentsOutputSchema},
  prompt: `You are an AI assistant designed to suggest the most appropriate municipal departments to assign civic issues to.

  Based on the issue details provided, identify and return a list of suggested departments that should be assigned to resolve the issue.
  Also provide reasoning for the suggested departments.

  Issue Title: {{{title}}}
  Issue Description: {{{description}}}
  Issue Category: {{{category}}}
  Issue Location: {{{location}}}

  Respond in JSON format.
  `,
});

const suggestDepartmentsFlow = ai.defineFlow(
  {
    name: 'suggestDepartmentsFlow',
    inputSchema: SuggestDepartmentsInputSchema,
    outputSchema: SuggestDepartmentsOutputSchema,
  },
  async input => {
    const {output} = await suggestDepartmentsPrompt(input);
    return output!;
  }
);
