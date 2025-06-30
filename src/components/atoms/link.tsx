'use client'
// remover esse use cliente, recebendo a rota mae por props atraves do ssr
import NextLink, { LinkProps as NextLinkProps } from "next/link";
import { usePathname } from "next/navigation";
import { ReactNode } from "react";
import { twMerge } from "tailwind-merge";

interface LinkProps extends NextLinkProps {
  children: ReactNode
  className?: string
}


export function Link({ children, className = "", href, ...rest }: LinkProps) {
  const pathName = usePathname()
  const hasLinkActive = pathName === href || pathName.slice(1).startsWith(href.toString())

  return (
    <NextLink
      href={href}
      className={
        twMerge(
          'border-b border-transparent pb-1 text-slate-200 hover:border-slate-200 hover:brightness-80 transition-all duration-200',
          hasLinkActive && 'text-slate-200 border-slate-200',
          className,
        )
      }
      {...rest}>
      {children}
    </NextLink>
  )
}