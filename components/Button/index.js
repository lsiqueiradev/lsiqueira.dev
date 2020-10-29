import React from 'react';
import Link from 'next/link';

import { 
  Container
} from './styles';

export default function Button({ href, children }){
  return (
    <Container>
      <Link href={href}>
        <a className="button">
          <div className="bottom"></div>
          <div className="top">
            <div className="label">{children}</div>
            <div className="button-border button-border-left"></div>
            <div className="button-border button-border-top"></div>
            <div className="button-border button-border-right"></div>
            <div className="button-border button-border-bottom"></div>
          </div>
        </a>
      </Link>
    </Container>
  );
}