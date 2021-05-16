import { useState, useEffect, useCallback } from 'react';
import { generatePath, Link } from 'react-router-dom';

import { Library, listLibraries } from '../graphql';
import { LibraryAdd } from './LibraryAdd';

export const librariesPath = '/libraries'
export const libraryIdPath = '/library/:libraryId';

export const Libraries = () => {
  const [ isLoading, setIsLoading ] = useState(true);
  const [ libraries, setLibraries ] = useState<Library[]>([]);
  const [ errors, setErrors] = useState<Error[]>();

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

  return (
    <>
      { errors && errors.length >= 0 && <div style={{border: '1px solid red'}}>
        <ul>
          { errors?.map((error, idx) => {
            return (<li key={idx}>{error.message}</li>)
          })
          }
        </ul>
      </div>}
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
                  {library.name} ({library.username})
                </Link>
              </li>
            )
          })}
        </ul>
      }
    </>
  );
}
