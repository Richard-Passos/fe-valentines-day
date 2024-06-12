'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { Slot } from '@radix-ui/react-slot';
import { forwardRef } from 'react';
import { useEffect } from 'react';
import { FormProvider } from 'react-hook-form';
import { useForm } from 'react-hook-form';
import * as z from 'zod';

import { useFormContext } from '@/hooks/contexts';

const MoleculesForm = forwardRef(({ asChild, onSubmit, ...props }, ref) => {
  const { handleSubmit } = useFormContext();

  const Tag = asChild ? Slot : 'form';

  return (
    <Tag
      onSubmit={handleSubmit(onSubmit)}
      ref={ref}
      {...props}
    />
  );
});
MoleculesForm.displayName = 'MoleculesForm';

const MoleculesFormWithProvider = (
  { fields = {}, shouldReset = true, ...props },
  ref
) => {
  fields = Object.entries(fields ?? {});

  const schema = z.object(
    fields.reduce(
      (obj, [key, data = {}]) => ({
        ...obj,
        [key]: data.schema?.reduce(
          (obj, { name, params }) => obj[name]?.(...params),
          z
        )
      }),
      {}
    )
  );

  const defaultValues = fields.reduce(
    (obj, data = {}) => ({ ...obj, [data.name]: data.defaultValue }),
    {}
  );

  const form = useForm({
    resolver: zodResolver(schema),
    defaultValues
  });

  const { reset } = form,
    { isSubmitSuccessful } = form.formState;

  useEffect(() => {
    if (shouldReset && isSubmitSuccessful) reset();
  }, [shouldReset, isSubmitSuccessful, reset]);

  return (
    <FormProvider value={{ ...form, defaultValues }}>
      <MoleculesForm
        ref={ref}
        {...props}
      />
    </FormProvider>
  );
};

export default forwardRef(MoleculesFormWithProvider);
