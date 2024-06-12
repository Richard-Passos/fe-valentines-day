import DisclosureContext, { DisclosureProvider } from './Disclosure';
import ErrorBoundaryContext, { ErrorBoundaryProvider } from './ErrorBoundary';

const Contexts = {
  Disclosure: DisclosureContext,
  ErrorBoundary: ErrorBoundaryContext
};

export default Contexts;
export {
  Contexts,
  DisclosureContext,
  DisclosureProvider,
  ErrorBoundaryContext,
  ErrorBoundaryProvider
};
