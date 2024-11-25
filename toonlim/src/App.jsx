import './App.css'

import { FaPaintBrush, FaEraser, FaPlay, FaStop, FaFile, FaLayerGroup } from "react-icons/fa";
import { IoArrowUndo, IoArrowRedo, IoPlayBackSharp, IoPlayForwardSharp, IoSettingsSharp } from "react-icons/io5";
import { BiLayerPlus } from "react-icons/bi";
import { HiEye, HiEyeOff } from "react-icons/hi";
import { TiArrowDownThick, TiArrowUpThick } from "react-icons/ti";
import { TbDeviceIpadHorizontalPlus, TbDeviceTabletPlus, TbLayersSelected, TbLayersOff } from "react-icons/tb";
import { ImLoop } from "react-icons/im"
import { AiFillBoxPlot } from "react-icons/ai";
import { useState } from 'react';

function App() {
  // 0: File | 1: Tool | 2: Inspector | 3: Layer | 4: Timeline
  const [currentSection, setCurrentSection] = useState(1);

  return (
    <div className='App'>
      <div className='main'>
        <section className='section header-sec'>
          <p>Hader</p>
        </section>

        <section className='navbar'>
          <FaFile
          className={`sec-svg ${currentSection == 0 ? "current-sec-svg" : ""}`}
            onClick={() => { setCurrentSection(0) }}
          />
          <FaPaintBrush
                    className={`sec-svg ${currentSection == 1 ? "current-sec-svg" : ""}`}
            onClick={() => { setCurrentSection(1) }}
          />
          <IoSettingsSharp
                    className={`sec-svg ${currentSection == 2 ? "current-sec-svg" : ""}`}
            onClick={() => { setCurrentSection(2) }}
          />
          <FaLayerGroup
                    className={`sec-svg ${currentSection == 3 ? "current-sec-svg" : ""}`}
            onClick={() => { setCurrentSection(3) }}
          />
          <AiFillBoxPlot
                    className={`sec-svg ${currentSection == 4 ? "current-sec-svg" : ""}`}
            onClick={() => { setCurrentSection(4) }}
          />
        </section>

        <section className={`section file-sec ${currentSection == 0 ? "current-sec" : ""}`}>
          <p>File</p>
        </section>

        <section className={`section layer-sec ${currentSection == 3 ? "current-sec" : ""}`}>
          <p>Layer</p>
        </section>

        <section className={`section timeline-sec ${currentSection == 4 ? "current-sec" : ""}`}>
          <p>Timeline</p>
        </section>

        <section className={`section tools-sec ${currentSection == 1 ? "current-sec" : ""}`}>
          <p>Tools</p>
        </section>

        <section className={`section inspector-sec ${currentSection == 2 ? "current-sec" : ""}`}>
          <p>Inspector</p>
        </section>

        <section className='canvas-sec'>
          <p>Canvas</p>
        </section>
      </div>
    </div>
  )
}

export default App
