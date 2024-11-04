import { useState } from 'react';
import HTMLFlipBook from 'react-pageflip';
import { Document, Page } from 'react-pdf/dist/esm/entry.webpack';
import tagline from '../tagline.png';

function Flipbook(props) {
  const [numPages, setNumPages] = useState(null);

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
  }
  function pagesList() {
    var pages = [];
    for (var i = 1; i <= numPages; i++) {
      pages.push(<div key={i}><Page width={500} pageNumber={i} /></div>);
    }
    return pages;
  }

  return (
    <Document
      file="./fikra1.pdf"
      onLoadSuccess={onDocumentLoadSuccess}
      className='fixed top-0 left-0 w-full h-full bg-white z-50 flex flex-col justify-center items-center overflow-visible lg:overflow-hidden min-w-0 min-h-0 scale-75 lg:scale-100'
    >
      <img src={tagline} alt="tagline" className="w-80 my-0 lg:my-3 hidden lg:block" />
      <div>
        <HTMLFlipBook width={500} height={707}>
          {pagesList()}
        </HTMLFlipBook>
      </div>
    </Document>

  );
}
export default Flipbook;