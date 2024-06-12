'use client';

import { forwardRef } from 'react';

import { Link } from '@/navigation';

const AtomsLinkUnstyled = ({ href, ...props }, ref) => {
  return (
    <Link
      href={href ?? ''}
      ref={ref}
      {...props}
    />
  );
};

export default forwardRef(AtomsLinkUnstyled);
