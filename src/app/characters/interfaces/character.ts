export interface ResponseCharacters {
  info: Info;
  data: Character[];
}

export interface ResponseCharacter {
  info: Info;
  data: Character;
}

export interface Character {
  _id: number;
  films: string[];
  shortFilms: string[];
  tvShows: string[];
  videoGames: string[];
  parkAttractions: string[];
  allies: any[];
  enemies: any[];
  sourceUrl: string;
  name: string;
  imageUrl: string;
  createdAt: string;
  updatedAt: string;
  url: string;
  __v: number;
}

export interface Info {
  count: number;
  totalPages: number;
  previousPage: null;
  nextPage: string;
}
