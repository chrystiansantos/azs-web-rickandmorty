import Link, { LinkProps } from "next/link";
import { ReactNode } from "react";

interface NavigateButtonProps extends LinkProps {
  children: ReactNode
}

export function NavigateButton({ children, href, ...rest }: NavigateButtonProps) {
  return (
    <Link
      href={href}
      className="text-zinc-600 font-semibold bg-zinc-100 py-1 px-3 rounded-full flex items-center gap-2 size-fit"
      {...rest}
    >
      {children}
    </Link>
  )
}