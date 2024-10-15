export interface Country {
  name: string;
  region: string;
  capital: string
  population: number;
  flags: Flags;
  flag: string;
  borders: string[];
}
export interface Flags {
  svg: string;
  png: string;
}
