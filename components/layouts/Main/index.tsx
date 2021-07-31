import { Fragment } from 'react'

// components
import { Header } from '@components'

// types
import type { PropsWithChildren } from 'react'

function MainLayout({ children }: PropsWithChildren<{}>) {
  return (
    <Fragment>
      <Header />
      <main>{children}</main>
    </Fragment>
  )
}

export default MainLayout
