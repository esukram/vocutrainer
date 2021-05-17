import { useState, useEffect, useCallback } from 'react';
import { generatePath, Link } from 'react-router-dom';

import {
  Library,
  deleteLibrary, listLibraries
} from '../graphql';
import { LibraryAdd } from './LibraryAdd';

export const librariesPath = '/libraries'
export const libraryIdPath = '/library/:libraryId';

export const Libraries = () => {
  const [ isLoading, setIsLoading ] = useState(true);
  const [ libraries, setLibraries ] = useState<Library[]>([]);
  const [ errors, setErrors] = useState<Error[]>();
  const [ info, setInfo] = useState<string>();

  const loadLibraries = useCallback(async () => {
    try {
      setIsLoading(true);
      setLibraries( await listLibraries() );
      setIsLoading(false);
    } catch (error) {
      setErrors(error.errors);
    } finally {
      setIsLoading(false);
    }
  }, []);

  useEffect(() => {
    loadLibraries();
  }, [loadLibraries]);

  const deleteLibraryHandler = async (libraryId: string) => {
    try {
      const deleted = await deleteLibrary(libraryId);
      if (deleted) {
        setInfo(`Deleted library: ${deleted.name} (${deleted.id}).`);
        loadLibraries();
      }
    } catch (error) {
      setErrors(error.errors);
    }
  }

  return (
    <>
      { errors && errors.length >= 0 &&
        <div style={{border: '1px solid red'}}>
          <ul>
            { errors?.map((error, idx) => {
              return (<li key={idx}>{error.message}</li>)
            })
            }
          </ul>
        </div>
      }
      { info &&
        <div style={{border: '1px solid blue'}}>{info}</div>
      }
      <h2>Libraries</h2>
      <LibraryAdd onAdd={loadLibraries} />
      { isLoading &&
        <p>is loading!</p>
      }
      { !isLoading && (!libraries || libraries.length === 0) &&
        <p>No libraries available.</p>
      }
      { !isLoading &&
        <ul>
          { libraries.sort((a, b) => {
            if (a.name?.toLocaleLowerCase() < b.name?.toLocaleLowerCase() ) return -1;
            if (a.name?.toLocaleLowerCase() > b.name?.toLocaleLowerCase() ) return 1;

            return 0;
          }).map((library, _) => {
            return (
              <li key={ library.id }>
                <Link to={generatePath(libraryIdPath, { libraryId: library.id })}>
                  {library.name} ({library.username})
                </Link>
                <button onClick={() => { deleteLibraryHandler(library.id) }}>Delete</button>
              </li>
            )
          })}
        </ul>
      }
    </>
  );
}
