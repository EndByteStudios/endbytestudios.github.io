export interface Resource {
  id: string;
  name: string;
  description: string;
  category: string;
  url: string;
  tags: string[];
  isOpenSource: boolean;
}

export type Category = 
  | 'Learning'
  | 'Design'
  | 'Developer Tools'
  | 'Hosting'
  | 'APIs'
  | 'Books'
  | 'Communities'
  | 'All';