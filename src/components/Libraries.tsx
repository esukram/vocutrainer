import { useState, useEffect, useCallback } from 'react';
import { generatePath, Link } from 'react-router-dom';

import { Library, listLibraries } from '../graphql';
import { LibraryAdd } from './LibraryAdd';

export const librariesPath = '/libraries'
export const libraryIdPath = '/library/:libraryId';

export const Libraries = () => {
  const [ isLoading, setIsLoading ] = useState(true);
  const [ libraries, setLibraries ] = useState<Library[]>([]);

  const loadLibraries = useCallback(async () => {
    console.log('Loading libraries...', new Date().toTimeString());
    try {
      setIsLoading(true);
      setLibraries( await listLibraries() );
      setIsLoading(false);
    } catch (error) {
      console.error("Error fetching todos", error);
    }
  }, []);

  useEffect(() => {
    loadLibraries();
  }, [loadLibraries]);

  return (
    <>
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
          { libraries.map((library, _) => {
            return (
              <li key={ library.id }>
                <Link to={generatePath(libraryIdPath, { libraryId: library.id! })}>
                  {library.name}
                </Link>
              </li>
            )
          })}
        </ul>
      }
    </>
  );
}
