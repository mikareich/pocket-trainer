import Head from "next/head";
import React, { PropsWithChildren } from "react";
import { css } from "@emotion/react";

interface LayoutProps {
  title: string;
}

function Layout({ title, children }: PropsWithChildren<LayoutProps>) {
  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>
      <main
        css={css`
          width: 100%;
          height: max-content;
        `}
      >
        {children}
      </main>
    </>
  );
}

export default Layout;
