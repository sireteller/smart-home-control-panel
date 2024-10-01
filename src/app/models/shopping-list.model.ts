export type ShoppingListCategory = {
  id: string,
  category: string;
  items: ShoppingListItem[];
};

export type ShoppingListItem = {
  identifier: string,
  name: string,
  details: string,
  quantity: number | undefined,
  checked: boolean,
  categoryMatchId: string
};
