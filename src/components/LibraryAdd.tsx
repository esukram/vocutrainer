import { Formik, FormikHelpers, Form, Field, FormikErrors } from "formik";

import { useCreateLibraryMutation } from "../graphql/dao";

export interface LibraryAddProps {
  onAdd: () => void;
}
type Library = {
  name: string;
};

export const LibraryAdd = ({ onAdd }: LibraryAddProps) => {
  const initialValues: Library = { name: "" };
  const createLibrary = useCreateLibraryMutation();

  const onSubmit = async (
    library: Library,
    helpers: FormikHelpers<Library>
  ) => {
    try {
      await createLibrary.mutateAsync({ name: library.name });
      // await addLibrary(library.name);
      helpers.resetForm();
      // calling refresh of parent
      //onAdd();
    } catch (err) {
      // TODO: Add error display
      console.log("Adding failed: ", err);
    } finally {
      helpers.setSubmitting(false);
    }
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={onSubmit}
      validate={(library) => {
        const errors: FormikErrors<Library> = {};
        if (!library.name) {
          errors.name = "Required";
        }

        return errors;
      }}
    >
      {({ errors, touched, isValidating, isSubmitting }) => (
        <Form>
          <fieldset>
            <legend>New Library Entry</legend>
            <div>
              <label>
                Name
                <Field name='name' placeholder='Library Name' />
              </label>
              {errors.name && touched.name && (
                <div style={{ color: "red" }}>{errors.name}</div>
              )}
            </div>

            <button type='submit' disabled={isSubmitting || isValidating}>
              Add Entry
            </button>
          </fieldset>
        </Form>
      )}
    </Formik>
  );
};
