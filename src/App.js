import './App.css';
import Section from './components/Section/Section';
import Hero from './components/Hero/Hero';
import Navbar from './components/Navbar/Navbar';
import { useEffect, useState } from 'react';
import { getTopAlbums } from './service/service';
import { SLUGS } from './utils/constant';
import { Divider } from '@mui/material';
import Faq from './components/Faq/Faq';

function App() {

  return (
    <div>
      <Navbar />
      <Hero />
      <div className="songContainer">
        <Section type="album" title="Top Albums" url={SLUGS.TOP_ALBUMS} />
      </div>
    </div>
  );
}

export default App;
