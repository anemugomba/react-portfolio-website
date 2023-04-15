import React, { ReactNode } from 'react'
import NavigationBar from './NavigationBar'
import Footer from './Footer'

interface Props {
    children?: ReactNode
}

export default function Layout({ children }: Props) {
    return (
        <>
            <NavigationBar />
            <main style={{zIndex: 1}}>{children}</main>
            <Footer />
        </>
    )
}
