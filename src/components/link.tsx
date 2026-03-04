import NextLink, { type LinkProps as NextLinkProps } from "next/link";
import type { ReactNode } from "react";

export type LinkProps = Omit<NextLinkProps, 'href'> & {
  href: string
  className?: string
  children: ReactNode
}

export function Link({ href, className, children, ...props }: LinkProps) {
  // Determine if link is external
  // to use anchor tag instead of Next Link
  const isExternalByPattern =
    href.startsWith('http://') ||
    href.startsWith('https://') ||
    href.startsWith('//')

  if (isExternalByPattern) {
    return (
      <a
        className={className}
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        {...props}
      >
        {children}
      </a>
    )
  }

  return (
    <NextLink
      className={className} href={href} {...props}>
      {children}
    </NextLink>
  )
}