
import { EpsteinFile, TimelineEvent } from './types';

export const STATIC_FILES: EpsteinFile[] = [
  {
    id: 'doc-001',
    title: 'January 2024 Unsealed Records - Batch 1',
    category: 'Court Document',
    date: '2024-01-03',
    description: 'First set of previously redacted names from the Giuffre v. Maxwell defamation lawsuit.',
    fileSize: '12.4 MB'
  },
  {
    id: 'doc-002',
    title: 'Maxwell Trial Exhibit - Zorro Ranch Photos',
    category: 'Evidence',
    date: '2021-12-10',
    description: 'Evidence photos from the FBI raid on Epstein\'s New Mexico property.',
    fileSize: '8.1 MB'
  },
  {
    id: 'doc-003',
    title: 'SDNY Indictment: US vs Jeffrey Epstein',
    category: 'Court Document',
    date: '2019-07-06',
    description: 'The official federal indictment charging sex trafficking of minors.',
    fileSize: '2.5 MB'
  }
];

export const TIMELINE_DATA: TimelineEvent[] = [
  {
    year: '2005',
    title: 'Palm Beach Investigation',
    description: 'Initial police investigation begins following complaints about underage girls at Epstein\'s residence.'
  },
  {
    year: '2008',
    title: 'Non-Prosecution Agreement',
    description: 'Epstein pleads guilty to state charges and receives a 13-month sentence with work release.'
  },
  {
    year: '2019',
    title: 'Federal Arrest & Death',
    description: 'Arrested on federal sex trafficking charges in NY. Found dead in his cell in August.'
  },
  {
    year: '2021',
    title: 'Ghislaine Maxwell Conviction',
    description: 'Maxwell is found guilty of sex trafficking and related charges.'
  },
  {
    year: '2024',
    title: 'Major Document Unsealing',
    description: 'A federal judge orders the release of names of dozens of Epstein associates.'
  }
];
