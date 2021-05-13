import {
  Formik,
  FormikHelpers,
  Form,
  Field,
  FormikErrors
} from 'formik';

import { addLibrary } from "../graphql"
import { CreateLibraryInput as Library } from "graphql/API";

export const LibraryAdd = () => {
  const initialValues:Library = {name: ''};

  const onSubmit = async(library: Library, helpers: FormikHelpers<Library>) => {
    try {
      await addLibrary(library);
      helpers.resetForm();
      // TODO: How to refresh state of parent component?
      window.location.reload();
    } catch (err) {
      // TODO: Add error display
      console.log("Adding failed: ", err);
    } finally {
      helpers.setSubmitting(false);
    }
  }

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={onSubmit}
      validate={library => {
        const errors: FormikErrors<Library> = {};
        if (!library.name) {
          errors.name = 'Required';
        }

        return errors;
      }}
    >
      {({ errors, touched, isValidating, isSubmitting }) => (
        <Form>
          <fieldset>
            <legend>New Library Entry</legend>
            <div>
              <label >Name
                <Field name="name" placeholder="Library Name" />
              </label>
              {errors.name && touched.name && <div style={{color: 'red'}}>{errors.name}</div>}
            </div>

            <button type="submit" disabled={isSubmitting || isValidating}>
              Add Entry
            </button>
          </fieldset>
        </Form>
      )}
    </Formik>
  );
}
