import React from 'react'
import Link from 'next/link'
const Button = ({ href, children }) => {
  return (
    <Link href={href}>
      <a className={`btn btn--lg btn--black border--black btn--white:hover border--w-3`}>{children}</a>
    </Link>
  )
}

export default Button
