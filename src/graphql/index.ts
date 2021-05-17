// convenience wrapper for DTOs
import type {
  Library as LibraryGen,
  Dictionary as DictionaryGen,
 } from './API';

 // make fields non-empty
 export type Library = Required<Omit<LibraryGen, "__typename">>;
 export type Dictionary = Required<Omit<DictionaryGen, "__typename">>;

// convenience wrapper for accessing data
export {
  addLibrary,
  deleteLibrary,
  listLibraries
} from './dao';
