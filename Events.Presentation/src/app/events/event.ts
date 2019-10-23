export interface IEventType {
    id: number;
    title: string;
    description: string;
}

export interface IEvent {
    id: Number;
    title: string;
    date: Date;
    description: string;
    notes: string;
    type: IEventType[];
}
