import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import { Library, listLibraries } from '../graphql';

export const Libraries = () => {
  const [libraries, setLibraries] = useState<Library[]>([]);

  useEffect(() => {
    async function getLibrary() {
      try {
        setLibraries( await listLibraries() );
      } catch (error) {
        console.error("Error fetching todos", error);
      }
    }

    getLibrary();
  }, []);

  return (
    <div>
      <h2>Libraries</h2>
      <ul>
        {
          (!libraries || libraries.length === 0)
          ? <p>No libraries available.</p>
          : libraries.map((library, _) => {
            const location = `/library/${library.id}`;
            return (
              <li key={ library.id }>
                <Link to={location} >
                  {library.name}
                </Link>
              </li>
            );
          })
        }
      </ul>
    </div>
  );
}
