'use client';

import { Slot } from '@radix-ui/react-slot';
import { forwardRef } from 'react';

import { useFormContext } from '@/hooks/contexts';

const MoleculesFormReset = ({ asChild, ...props }, ref) => {
  const { reset, defaultValues } = useFormContext();

  const Tag = asChild ? Slot : 'button';

  return (
    <Tag
      ref={ref}
      type='reset'
      {...props}
      onClick={(ev) => {
        reset(defaultValues);

        props.onClick?.(ev);
      }}
    />
  );
};

export default forwardRef(MoleculesFormReset);
