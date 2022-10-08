
export interface ListItem {
    id:number;
    content: string;
    completed: boolean;
    listId: number;
    createdAt: string;
    updatedAt:string;
}

export interface List {
    id:number;
    name: string;
    archived: boolean;
    items: ListItem[];
    userId: number;
    createdAt:string;
    updatedAt:string;
}

