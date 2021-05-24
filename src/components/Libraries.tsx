import { useState } from "react";
import { generatePath, Link } from "react-router-dom";

import {
  useDeleteLibraryMutation,
  useListLibrariesQuery,
} from "../graphql/dao";
import { LibraryAdd } from "./LibraryAdd";
import type { Library } from "../graphql";

export const librariesPath = "/libraries";
export const libraryIdPath = "/library/:libraryId";

export const Libraries = () => {
  const [info, setInfo] = useState<string>();
  const { status, error, data: libraries, refetch } = useListLibrariesQuery();
  const deleteLibraryMut = useDeleteLibraryMutation();

  const deleteLibraryHandler = async (library: Library) => {
    const deleted = await deleteLibraryMut.mutateAsync(library);
    setInfo(`Deleted library: ${deleted.name} (${deleted.id}).`);
  };

  return (
    <>
      {error && <div style={{ border: "1px solid red" }}>{error.message}</div>}
      {info && <div style={{ border: "1px solid blue" }}>{info}</div>}
      <h2>
        Libraries{" "}
        <button
          onClick={() => {
            refetch();
          }}
        >
          Refresh
        </button>
      </h2>
      <LibraryAdd onAdd={() => {}} />
      {status === "loading" && <p>is loading!</p>}
      {status !== "success" && libraries?.length === 0 && (
        <p>No libraries available.</p>
      )}
      {status === "success" && libraries && libraries.length > 0 && (
        <ul>
          {libraries
            ?.sort((a, b) => {
              if (a.name?.toLocaleLowerCase() < b.name?.toLocaleLowerCase())
                return -1;
              if (a.name?.toLocaleLowerCase() > b.name?.toLocaleLowerCase())
                return 1;

              return 0;
            })
            .map((library, _) => {
              return (
                <li key={library.id}>
                  <Link
                    to={generatePath(libraryIdPath, { libraryId: library.id })}
                  >
                    {library.name} ({library.username})
                  </Link>
                  <button
                    onClick={() => {
                      deleteLibraryHandler(library);
                    }}
                  >
                    Delete
                  </button>
                </li>
              );
            })}
        </ul>
      )}
    </>
  );
};
