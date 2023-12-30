
'use client';

import { Footer } from 'flowbite-react';

export function FooterSection() {
  return (
    <Footer container>
      <div className="w-full text-center">
        <div className="w-full justify-between sm:flex sm:items-center sm:justify-between">
        <Footer.Brand src='' href="/">
            <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">WINERY</span>
        </Footer.Brand>
          <Footer.LinkGroup>
            <Footer.Link href="#">About</Footer.Link>
            <Footer.Link href="#">Privacy Policy</Footer.Link>
            <Footer.Link href="#">Licensing</Footer.Link>
            <Footer.Link href="#">Contact</Footer.Link>
          </Footer.LinkGroup>
        </div>
        <Footer.Divider />
        <Footer.Copyright href="#" by="Winery" year={2023} />
      </div>
    </Footer>
  );
}
