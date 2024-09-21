export type ShoppingListCategory = {
  category: string;
  items: ShoppingListItem[];
};

export type ShoppingListItem = {
  id: string;
  name: string;
  category: string;
  details: string;
  selected: boolean;
};
