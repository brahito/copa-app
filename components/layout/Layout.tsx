import React, { FC, ReactNode } from 'react'
import Head from 'next/head';

interface Props {
    title?: string;
    children: ReactNode;
}

export const Layout: FC<Props> = ({ children, title }) => {
    return (
        <>
            <Head>
                <title>{title ? `${title}` : 'Copa App'}</title>
                <meta name="author" content="Brayan Moreno" />
                <meta name="description" content="Esta es una app para practicar para copa" />
            </Head>
            <main>
                {children}
            </main>
        </>
    )
}
