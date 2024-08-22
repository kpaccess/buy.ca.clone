export type CitiesProps = {
  id: number;
  city: string;
};

export type PropertyDetailProps = {
  count: number;
  med: number;
};

export type PropertyDetails = {
  [neighbourhood: string]: PropertyDetailProps;
};
