'use client';

import { ModalRoot } from '@mantine/core';
import { forwardRef } from 'react';

import { DisclosureProvider } from '@/contexts';
import { useUpdateEffect } from '@/hooks';
import { useDisclosureContext } from '@/hooks/contexts';
import { usePathname } from '@/navigation';
import { cn } from '@/utils';

const MoleculesModal = forwardRef(({ className, ...props }, ref) => {
  const { isOpen, close, dataState } = useDisclosureContext(),
    pathname = usePathname();

  useUpdateEffect(close, [close, pathname]);

  return (
    <ModalRoot
      className={cn('*:left-0', className)}
      data-state={dataState}
      onClose={close}
      opened={isOpen}
      ref={ref}
      {...props}
    />
  );
});
MoleculesModal.displayName = 'MoleculesModal';

const MoleculesModalWithProvider = (
  { defaultValue, trigger, ...props },
  ref
) => {
  return (
    <DisclosureProvider
      defaultValue={defaultValue}
      {...props}
    >
      <MoleculesModal
        ref={ref}
        {...props}
      />

      {trigger}
    </DisclosureProvider>
  );
};

export default forwardRef(MoleculesModalWithProvider);
