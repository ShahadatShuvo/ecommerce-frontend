export interface ProductProps {
  data: {
    id: number;
    attributes: {
      createdAt: string;
      updatedAt: string;
      publishedAt: string;
      title: string;
      slug: string;
      description: string;
      category: string;
      size: string;
      color: string;
      price: number;
      availableQty: number;
    };
  }[];
}
