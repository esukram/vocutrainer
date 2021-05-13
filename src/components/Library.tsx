import { useParams } from 'react-router-dom';

export const Library = () => {
  const { libraryId } = useParams<{libraryId: string}>();

  return (
    <div>
      <h3>ID: {libraryId}</h3>
    </div>
  );
}
