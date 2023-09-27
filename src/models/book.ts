import { Author } from "./author";

export interface Book {
    id: number;
    title: string;
    authors: Author[];
    subjects: string[];
    languages: string[];
    copyright: boolean;
    media_type: string;
    formats: { [key: string]: string };
    download_count: number;
}
