import React, { useState, useEffect } from 'react';

import HeaderBaca from '../components/pages/baca-cerita/HeaderBaca';
import CeritaPage1 from '../components/pages/baca-cerita/CeritaPage1';
import CeritaPage2 from '../components/pages/baca-cerita/CeritaPage2';
import CeritaPage3 from '../components/pages/baca-cerita/CeritaPage3';
import CeritaPage4 from '../components/pages/baca-cerita/CeritaPage4';
import CeritaPage5 from '../components/pages/baca-cerita/CeritaPage5';
import CeritaPage6 from '../components/pages/baca-cerita/CeritaPage6';
import CeritaPage7 from '../components/pages/baca-cerita/CeritaPage7';
import CeritaPage8 from '../components/pages/baca-cerita/CeritaPage8';
import CeritaPage9 from '../components/pages/baca-cerita/CeritaPage9';


const BacaCerita = () => {
    const [pagenum, setPagenum] = useState(1);
    const totalPage = 9;
    const minPage = 1;
    const maxPage = 9;

    const nextPage = () => {
        if (pagenum==9){
            return;
        }
        return setPagenum(pagenum+1);
    }
    const prevPage = () => {
        if (pagenum==0){
            return;
        }
        return setPagenum(pagenum-1);
    }

    return (
        <React.Fragment>
            <HeaderBaca pagenum={pagenum} totalPage={totalPage} />
            <CeritaPage1 pagenum={pagenum} totalPage={totalPage} nextPage={nextPage} prevPage={prevPage}  />
            <CeritaPage2 pagenum={pagenum} totalPage={totalPage} nextPage={nextPage} prevPage={prevPage}  />
            <CeritaPage3 pagenum={pagenum} totalPage={totalPage} nextPage={nextPage} prevPage={prevPage}  />
            <CeritaPage4 pagenum={pagenum} totalPage={totalPage} nextPage={nextPage} prevPage={prevPage}  />
            <CeritaPage5 pagenum={pagenum} totalPage={totalPage} nextPage={nextPage} prevPage={prevPage}  />
            <CeritaPage6 pagenum={pagenum} totalPage={totalPage} nextPage={nextPage} prevPage={prevPage}  />
            <CeritaPage7 pagenum={pagenum} totalPage={totalPage} nextPage={nextPage} prevPage={prevPage}  />
            <CeritaPage8 pagenum={pagenum} totalPage={totalPage} nextPage={nextPage} prevPage={prevPage}  />
            <CeritaPage9 pagenum={pagenum} totalPage={totalPage} nextPage={nextPage} prevPage={prevPage}  />
        </React.Fragment>
    );

};

export default BacaCerita;