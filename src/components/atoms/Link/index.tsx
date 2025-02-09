import { FC } from "react"
import NextLink from "next/link"

const Link: FC<{
  children: React.ReactNode
  isInternal?: boolean
  href: string
  className?: string
}> = ({ children, isInternal = true, href, className }) => {
  if (isInternal) {
    return (
      <NextLink href={href} className={className}>
        {children}
      </NextLink>
    )
  } else {
    return (
      <a
        target="_blank"
        rel="noopener noreferrer"
        href={href}
        className={className}
      >
        {children}
      </a>
    )
  }
}

export default Link
