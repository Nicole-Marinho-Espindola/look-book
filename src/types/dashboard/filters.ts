export type Filter = {
  id: string;
  name: string;
  slug: string;
  order: number;
  isEnabled: boolean;
};

export type FilterProps = {
  filter: Filter;
  isSelected: boolean;
  onSelect: (slug: string) => void;
};

export type LineFiltersProps = {
  filters: Filter[];
};
