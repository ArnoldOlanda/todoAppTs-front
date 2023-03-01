import {useState, useEffect, useMemo} from 'react';

type FormValidations<T> = Record<keyof T, FormValidationField<T[keyof T]>>;
type FormValidationField<T> = [(value: T) => boolean, string];

export const useForm = <T extends Record<string, any>>(
  initialForm: T,
  validations: FormValidations<T>,
) => {
  const [formState, setFormState] = useState<T>(initialForm);
  const [formValidation, setFormValidation] = useState<
    Record<string, string | null>
  >({} as any);

  useEffect(() => {
    createValidators();
  }, [formState]);

  const isFormValid = useMemo(() => {
    for (const formValue of Object.keys(formValidation)) {
      if (formValidation[formValue] !== null) return false;
    }
    return true;
  }, [formValidation]);

  const onInputTextChange = (key: keyof T, value: any) => {
    setFormState({
      ...formState,
      [key]: value,
    });
  };

  const onResetForm = () => {
    setFormState(initialForm);
  };

  const createValidators = () => {
    const formCheckedValues: Record<string, string | null> = {} as any;

    for (const formField of Object.keys(validations)) {
      const [fn, errorMessage]: FormValidationField<T[keyof T]> =
        validations[formField];
      formCheckedValues[`${formField}Valid`] = fn(formState[formField])
        ? null
        : errorMessage;
    }

    setFormValidation(formCheckedValues);
  };

  return {
    ...formState,
    formState,
    onInputTextChange,
    onResetForm,
    formValidation,
    setFormValidation,
    isFormValid,
  };
};
