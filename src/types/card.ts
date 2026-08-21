export interface CardProps {
  id: number;
  title: string;
  image: string;
  userId: number;
  author: string;
  category: string;
  categoryColor: string;
  likes: number;
  format: "square" | "portrait" | "landscape" | "tall";
}
