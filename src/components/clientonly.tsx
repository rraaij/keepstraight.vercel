"use client";

import { ReactNode, useEffect, useState } from "react";

/**
 * Checks if we are client-rendering or not.
 *
 * Error: Hydration failed because the initial UI does not match what was rendered on the server.
 * Warning: Did not expect server HTML to contain a <div> in <div>.
 * See more info here: https://nextjs.org/docs/messages/react-hydration-error
 */
type Props = { children: ReactNode };

const ClientOnly = ({ children }: Props) => {
  const [hasMounted, setHasMounted] = useState<boolean>(false);

  useEffect(() => {
    setHasMounted(true);
  }, []);

  if (!hasMounted) return null;

  return <>{children}</>;
};
export default ClientOnly;
