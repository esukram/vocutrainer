import { useState, useEffect } from 'react';
import { generatePath, Link } from 'react-router-dom';

import { Library, listLibraries } from '../graphql';

export const Libraries = () => {
  const [ isLoading, setIsLoading ] = useState(true);
  const [ libraries, setLibraries ] = useState<Library[]>([]);

  useEffect(() => {
    async function getLibrary() {
      try {
        setIsLoading(true);
        setLibraries( await listLibraries() );
        setIsLoading(false);
      } catch (error) {
        console.error("Error fetching todos", error);
      }
    }

    getLibrary();
  }, []);

  return (
    <>
      <h2>Libraries</h2>
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
                <Link to={generatePath('/library/:id', { id: library.id! })}>
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
