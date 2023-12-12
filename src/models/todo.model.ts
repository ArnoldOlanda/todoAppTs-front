export interface Todo {
  id: number;
  title: string;
  date: Date;
  status: string;
  category: {
    id: number;
    category: string;
    createdAt: string;
    updatedAt: string;
  };
}
