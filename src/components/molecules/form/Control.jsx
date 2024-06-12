'use client';

import { Slot } from '@radix-ui/react-slot';
import { forwardRef } from 'react';

import { useFormContext } from '@/hooks/contexts';

const MoleculesFormControl = ({ name, customRegister, ...props }, ref) => {
  const { getFieldState, formState, register } = useFormContext();

  const { error } = getFieldState(name, formState);

  return (
    <Slot
      error={error}
      ref={ref}
      {...(customRegister ?? register)(name)}
      {...props}
    />
  );
};

export default forwardRef(MoleculesFormControl);
