import React, { useState, useEffect, useRef } from 'react';
import logo from './logo.svg';
import './App.css';
import logoDarkImage from './v4/images/logo-dark.png';
// import logoDarkImage from '%PUBLIC_URL%/v4/images/logo-dark.png';
import menuIconPng from './v4/images/menu-icon.png';
import truckPng from './v4/images/truck.png';

import mainIcon13Png from './v4/images/main-icon-13.png';
import mainIcon14Png from './v4/images/main-icon-14.png';
import mainIcon15Png from './v4/images/main-icon-15.png';
import mainIcon16Png from './v4/images/main-icon-16.png';
import { motion, AnimatePresence } from "framer-motion";

function App() {
  const [posX, setPosX] = useState(0);
  const [posY, setPosY] = useState(0);
  const [opa, setOpa] = useState(1);
  const [divTxt, setDivTxt] = useState('');
  const div1Ref = useRef<HTMLDivElement>(null);
  const div2Ref = useRef<HTMLDivElement>(null);
  const div3Ref = useRef<HTMLDivElement>(null);
  return (
    <>

      <div className="body-overlay"></div>
      <div id="panel-left"></div>
      <div id="panel-right"></div>


      <div className="page page--main" data-page="profile">
        <div className=" ">
          <header className="header header--fixed header--change">
            <div className="header__inner">
              <div className="header__icon">
                <a href="index.php">
                  <img src={logoDarkImage} alt="" title="" />
                </a>
              </div>
              <div className="header__icon header__icon--more">
                <a href="#" data-popup="social" className="open-popup">
                  <img src={menuIconPng} alt="" title="" />
                </a>
              </div>
            </div>
          </header>

          <h1 className="top-heading">QUICK QUOTE</h1>

          <div className="row justify-content-center bg-lightblue">
            <div className="col-12 col-lg-10 p-0 p-md-4">
              <div className="container">
                <div className="row no-gutters mt-sm-3 mb-sm-3 mt-md-0 mb-md-0">

                  <div data-v-0f34685d="" className="col text-center ">
                    <span data-v-0f34685d="" className="icon-stack">
                      <div data-v-0f34685d="" className="circle"></div>
                    </span>
                    <div data-v-0f34685d="" className="first">

                    </div>
                    <div data-v-0f34685d="" className="title"><span data-v-0f34685d="">Type</span></div>
                  </div>

                  <div data-v-0f34685d="" className="col text-center ">
                    <span data-v-0f34685d="" className="icon-stack">


                      <div data-v-0f34685d="" className="circle"></div>
                    </span>
                    <div data-v-0f34685d="" className="">
                      <div data-v-0f34685d="" className="line"></div>
                    </div>
                    <div data-v-0f34685d="" className="title"><span data-v-0f34685d="">From</span></div>
                  </div>

                  <div data-v-0f34685d="" className="col text-center ">
                    <span data-v-0f34685d="" className="icon-stack">

                      <div data-v-0f34685d="" className="circle"></div>
                    </span>
                    <div data-v-0f34685d="" className="">
                      <div data-v-0f34685d="" className="line"></div>
                    </div>
                    <div data-v-0f34685d="" className="title"><span data-v-0f34685d="">To</span></div>
                  </div>


                  <div data-v-0f34685d="" className="col text-center ">
                    <span data-v-0f34685d="" className="icon-stack">
                      <div data-v-0f34685d="" className="circle"></div>
                    </span>
                    <div data-v-0f34685d="" className="">
                      <div data-v-0f34685d="" className="line"></div>
                    </div>
                    <div data-v-0f34685d="" className="title"><span data-v-0f34685d="">Access</span></div>
                  </div>

                  <div data-v-0f34685d="" className="col text-center active first">
                    <span data-v-0f34685d="" className="icon-stack">
                      <i data-v-0f34685d="" className=" "><img src={truckPng} className="moving-truck" /></i>
                      <div data-v-0f34685d="" className="circle"></div>
                    </span>
                    <div data-v-0f34685d="" className="">
                      <div data-v-0f34685d="" className="line"></div>
                    </div>
                    <div data-v-0f34685d="" className="title"><span data-v-0f34685d="">Items</span></div>
                  </div>

                  <div data-v-0f34685d="" className="col text-center">
                    <span data-v-0f34685d="" className="icon-stack">

                      <div data-v-0f34685d="" className="circle"></div>
                    </span>
                    <div data-v-0f34685d="" className="">
                      <div data-v-0f34685d="" className="line"></div>
                    </div>
                    <div data-v-0f34685d="" className="title"><span data-v-0f34685d="">Extras</span></div>
                  </div>

                  <div data-v-0f34685d="" className="col text-center">
                    <span data-v-0f34685d="" className="icon-stack">

                      <div data-v-0f34685d="" className="circle"></div>
                    </span>
                    <div data-v-0f34685d="" className="">
                      <div data-v-0f34685d="" className="line"></div>
                    </div>
                    <div data-v-0f34685d="" className="title"><span data-v-0f34685d="">When</span></div>
                  </div>

                  <div data-v-0f34685d="" className="col text-center last">
                    <span data-v-0f34685d="" className="icon-stack">

                      <div data-v-0f34685d="" className="circle"></div>
                    </span>
                    <div data-v-0f34685d="" className="">
                      <div data-v-0f34685d="" className="line"></div>
                    </div>
                    <div data-v-0f34685d="" className="title"><span data-v-0f34685d="">Book</span></div>
                  </div>

                </div>
              </div>
            </div>
          </div>


          <div className="container dashboard-section">

            <h2>What items you are moving</h2>
            <h3>What sort of apartment are you moving into?</h3>
            <div className="">

              <div className="tabs tabs--style1 mb-20">
                <input type="radio" name="tabs2" className="tabs__radio" id="tab1" checked={true} />
                <label className="tabs__label tabs__label--12" htmlFor="tab1">
                  <img src={mainIcon13Png} alt="" title="" className="tab-icon" />
                  <h3>Bedroom</h3>
                </label>
                <div className="tabs__content">
                  <h2>Bedroom</h2>
                  <div className="container">
                  <motion.div className="mx-2 px-4 py-2 bg-violet-400 rounded-xl text-xl font-normal text-center"
                        style={{
                          height: "36px",
                          width: "200px",
                          // background: "red", const [divTxt, setDivTxt] = useState('');
                          // position: "relative",
                        }}
                        animate={{
                          x: [posX, posX + 100, posX + 200, posX + 150, posX + 100],
                          y: [posY, posY + 100, posY + 200, posY + 250, posY + 300],
                          // y: [posY + 100, posY + 150, posY + 200, posY + 100, posY],
                          // scale: [1, 0.8, 0.6, 0.4, 0.2],
                          opacity: [opa, opa - 0.2, opa - 0.4, opa - 0.6, 0],
                          transition: { duration: 2, },
                        }}
                      >{divTxt}</motion.div>
                    <div className="row">
                      
                      <div className="mx-auto p-16 bg-gray-200 rounded-2xl ">

                        <div className="flex flex-col items-center justify-between">

                          <div className="flex justify-around items-center w-full my-6  text-xl font-normal ">
                            <div ref={div1Ref} onClick={() => {
                              console.log('somak 02/28/24 12:36:23=>..', posY, '==', posX);
                              setDivTxt(div1Ref.current?.textContent!);
                              // posX !== (div1Ref.current?.offsetLeft! - 200) ? setPosX(div1Ref.current?.offsetLeft! - 200) : setPosX(posX + 1)
                              posX !== (div1Ref.current?.offsetLeft!) ? setPosX(div1Ref.current?.offsetLeft!) : setPosX(posX + 1)
                              posY !== 1 ? setPosY(1) : setPosY(posY + 0.1)
                              opa !== 1 ? setOpa(1) : setOpa(opa + 0.1)
                              
                            }}
                              className="cursor-pointer px-4 py-2 bg-violet-300 rounded-xl relative">Bedside Table
                              <div className=' bg-red-400 rounded-full w-[16px] h-[16px] absolute text-center p-auto top-0 left-[88%]'>2</div>
                            </div>
                            <div ref={div2Ref}
                              onClick={() => {
                                setDivTxt(div2Ref.current?.textContent!);
                                // posX !== div2Ref.current?.offsetLeft! - 200 ? setPosX(div2Ref.current?.offsetLeft! - 200) : setPosX(posX + 1)
                                posX !== (div2Ref.current?.offsetLeft!) ? setPosX(div2Ref.current?.offsetLeft!) : setPosX(posX + 1)
                                posY !== 1 ? setPosY(1) : setPosY(posY + 0.1); opa !== 1 ? setOpa(1) : setOpa(opa + 0.1)
                              }}
                              className="cursor-pointer px-4 py-2 bg-violet-300 rounded-xl relative">Bunkbed
                              <div className=' bg-red-400 rounded-full w-[16px] h-[16px] absolute text-center p-auto top-0 left-28'>2</div>
                            </div>

                            <div
                              onClick={() => {
                                setDivTxt('Chest Of Drawers');
                                posX !== (div1Ref.current?.offsetLeft!) ? setPosX(div1Ref.current?.offsetLeft!) : setPosX(posX + 1)
                                posY !== 1 ? setPosY(1) : setPosY(posY + 0.1); opa !== 1 ? setOpa(1) : setOpa(opa + 0.1)
                              }}
                              className="cursor-pointer mx-2 px-4 py-2 bg-violet-300 rounded-xl relative">
                              Chest Of Drawers<div className=' bg-red-400 rounded-full w-[16px] h-[16px] absolute text-center p-auto top-0 left-[88%]'>2</div>
                            </div>

                            <div
                              onClick={() => {
                                setDivTxt('Cot');
                                posX !== (div1Ref.current?.offsetLeft!) ? setPosX(div1Ref.current?.offsetLeft!) : setPosX(posX + 1)
                                posY !== 1 ? setPosY(1) : setPosY(posY + 0.1); opa !== 1 ? setOpa(1) : setOpa(opa + 0.1)
                              }}
                              className="cursor-pointer mx-2 px-4 py-2 bg-violet-300 rounded-xl relative">
                              Cot<div className=' bg-red-400 rounded-full w-[16px] h-[16px] absolute text-center p-auto top-0 left-[88%]'>2</div>
                            </div>
                            <div
                              onClick={() => {
                                setDivTxt('Double Mattress');
                                posX !== (div2Ref.current?.offsetLeft!) ? setPosX(div2Ref.current?.offsetLeft!) : setPosX(posX + 1)
                                posY !== 1 ? setPosY(1) : setPosY(posY + 0.1); opa !== 1 ? setOpa(1) : setOpa(opa + 0.1)
                              }}
                              className="cursor-pointer mx-2 px-4 py-2 bg-violet-300 rounded-xl relative">
                              Double Mattress<div className=' bg-red-400 rounded-full w-[16px] h-[16px] absolute text-center p-auto top-0 left-[88%]'>2</div>
                            </div>
                          </div>
                          <div className="flex justify-around items-center w-full my-6  text-xl font-normal">
                            <div
                              onClick={() => {
                                setDivTxt('Double Bed Frame');
                                posX !== (div1Ref.current?.offsetLeft!) ? setPosX(div1Ref.current?.offsetLeft!) : setPosX(posX + 1)
                                posY !== 1 ? setPosY(1) : setPosY(posY + 0.1); opa !== 1 ? setOpa(1) : setOpa(opa + 0.1)
                              }}
                              className="cursor-pointer mx-2 px-4 py-2 bg-violet-300 rounded-xl relative">
                              Double Bed Frame<div className=' bg-red-400 rounded-full w-[16px] h-[16px] absolute text-center p-auto top-0 left-[88%]'>2</div>
                            </div>
                            <div
                              onClick={() => {
                                setDivTxt('Double Solid Bed Base');
                                posX !== (div2Ref.current?.offsetLeft!) ? setPosX(div2Ref.current?.offsetLeft!) : setPosX(posX + 1)
                                posY !== 1 ? setPosY(1) : setPosY(posY + 0.1); opa !== 1 ? setOpa(1) : setOpa(opa + 0.1)
                              }}
                              className="cursor-pointer mx-2 px-4 py-2 bg-violet-300 rounded-xl relative">
                              Double Solid Bed Base<div className=' bg-red-400 rounded-full w-[16px] h-[16px] absolute text-center p-auto top-0 left-[88%]'>2</div>
                            </div>
                            <div
                              onClick={() => {
                                setDivTxt('Dresser');
                                posX !== (div1Ref.current?.offsetLeft!) ? setPosX(div1Ref.current?.offsetLeft!) : setPosX(posX + 1)
                                posY !== 1 ? setPosY(1) : setPosY(posY + 0.1); opa !== 1 ? setOpa(1) : setOpa(opa + 0.1)
                              }}
                              className="cursor-pointer mx-2 px-4 py-2 bg-violet-300 rounded-xl relative">
                              Dresser<div className=' bg-red-400 rounded-full w-[16px] h-[16px] absolute text-center p-auto top-0 left-[88%]'>2</div>
                            </div>
                            <div
                              onClick={() => {
                                setDivTxt('Gas Lift Bed Base');
                                posX !== (div2Ref.current?.offsetLeft!) ? setPosX(div2Ref.current?.offsetLeft!) : setPosX(posX + 1)
                                posY !== 1 ? setPosY(1) : setPosY(posY + 0.1); opa !== 1 ? setOpa(1) : setOpa(opa + 0.1)
                              }}
                              className="cursor-pointer mx-2 px-4 py-2 bg-violet-300 rounded-xl relative">
                              Gas Lift Bed Base (disassembled)<div className=' bg-red-400 rounded-full w-[16px] h-[16px] absolute text-center p-auto top-0 left-[88%]'>2</div>
                            </div>
                          </div>
                          <div className="flex justify-around items-center w-full my-6  text-xl font-normal">
                            <div
                              onClick={() => {
                                setDivTxt('King Mattress');
                                posX !== (div1Ref.current?.offsetLeft!) ? setPosX(div1Ref.current?.offsetLeft!) : setPosX(posX + 1)
                                posY !== 1 ? setPosY(1) : setPosY(posY + 0.1); opa !== 1 ? setOpa(1) : setOpa(opa + 0.1)
                              }}
                              className="cursor-pointer mx-2 px-4 py-2 bg-violet-300 rounded-xl relative">
                              King Mattress<div className=' bg-red-400 rounded-full w-[16px] h-[16px] absolute text-center p-auto top-0 left-[88%]'>2</div>
                            </div>
                            <div
                              onClick={() => {
                                setDivTxt('King Bed Frame');
                                posX !== (div2Ref.current?.offsetLeft!) ? setPosX(div2Ref.current?.offsetLeft!) : setPosX(posX + 1)
                                posY !== 1 ? setPosY(1) : setPosY(posY + 0.1); opa !== 1 ? setOpa(1) : setOpa(opa + 0.1)
                              }}
                              className="cursor-pointer mx-2 px-4 py-2 bg-violet-300 rounded-xl relative">
                              King Bed Frame<div className=' bg-red-400 rounded-full w-[16px] h-[16px] absolute text-center p-auto top-0 left-[88%]'>2</div>
                            </div>
                            <div
                              onClick={() => {
                                setDivTxt('King Solid Bed Base');
                                posX !== (div1Ref.current?.offsetLeft!) ? setPosX(div1Ref.current?.offsetLeft!) : setPosX(posX + 1)
                                posY !== 1 ? setPosY(1) : setPosY(posY + 0.1); opa !== 1 ? setOpa(1) : setOpa(opa + 0.1)
                              }}
                              className="cursor-pointer mx-2 px-4 py-2 bg-violet-300 rounded-xl relative">
                              King Solid Bed Base<div className=' bg-red-400 rounded-full w-[16px] h-[16px] absolute text-center p-auto top-0 left-[88%]'>2</div>
                            </div>
                            <div
                              onClick={() => {
                                setDivTxt('Mirror');
                                posX !== (div2Ref.current?.offsetLeft!) ? setPosX(div2Ref.current?.offsetLeft!) : setPosX(posX + 1)
                                posY !== 1 ? setPosY(1) : setPosY(posY + 0.1); opa !== 1 ? setOpa(1) : setOpa(opa + 0.1)
                              }}
                              className="cursor-pointer mx-2 px-4 py-2 bg-violet-300 rounded-xl relative">
                              Mirror<div className=' bg-red-400 rounded-full w-[16px] h-[16px] absolute text-center p-auto top-0 left-[88%]'>2</div>
                            </div>
                            <div
                              onClick={() => {
                                setDivTxt('Queen Mattress');
                                posX !== (div1Ref.current?.offsetLeft!) ? setPosX(div1Ref.current?.offsetLeft!) : setPosX(posX + 1)
                                posY !== 1 ? setPosY(1) : setPosY(posY + 0.1); opa !== 1 ? setOpa(1) : setOpa(opa + 0.1)
                              }}
                              className="cursor-pointer mx-2 px-4 py-2 bg-violet-300 rounded-xl relative">
                              Queen Mattress<div className=' bg-red-400 rounded-full w-[16px] h-[16px] absolute text-center p-auto top-0 left-[88%]'>2</div>
                            </div>
                          </div>
                          <div className="flex justify-around items-center w-full my-6  text-xl font-normal">
                            <div
                              onClick={() => {
                                setDivTxt('Queen Bed Frame');
                                posX !== (div1Ref.current?.offsetLeft!) ? setPosX(div1Ref.current?.offsetLeft!) : setPosX(posX + 1)
                                posY !== 1 ? setPosY(1) : setPosY(posY + 0.1); opa !== 1 ? setOpa(1) : setOpa(opa + 0.1)
                              }}
                              className="cursor-pointer mx-2 px-4 py-2 bg-violet-300 rounded-xl relative">
                              Queen Bed Frame<div className=' bg-red-400 rounded-full w-[16px] h-[16px] absolute text-center p-auto top-0 left-[88%]'>2</div>
                            </div>
                            <div
                              onClick={() => {
                                setDivTxt('Queen Solid Bed Base');
                                posX !== (div2Ref.current?.offsetLeft!) ? setPosX(div2Ref.current?.offsetLeft!) : setPosX(posX + 1)
                                posY !== 1 ? setPosY(1) : setPosY(posY + 0.1); opa !== 1 ? setOpa(1) : setOpa(opa + 0.1)
                              }}
                              className="cursor-pointer mx-2 px-4 py-2 bg-violet-300 rounded-xl relative">
                              Queen Solid Bed Base<div className=' bg-red-400 rounded-full w-[16px] h-[16px] absolute text-center p-auto top-0 left-[88%]'>2</div>
                            </div>
                            <div
                              onClick={() => {
                                setDivTxt('Single Mattress');
                                posX !== (div1Ref.current?.offsetLeft!) ? setPosX(div1Ref.current?.offsetLeft!) : setPosX(posX + 1)
                                posY !== 1 ? setPosY(1) : setPosY(posY + 0.1); opa !== 1 ? setOpa(1) : setOpa(opa + 0.1)
                              }}
                              className="cursor-pointer mx-2 px-4 py-2 bg-violet-300 rounded-xl relative">
                              Single Mattress<div className=' bg-red-400 rounded-full w-[16px] h-[16px] absolute text-center p-auto top-0 left-[88%]'>2</div>
                            </div>
                            <div
                              onClick={() => {
                                setDivTxt('Single Bed Frame');
                                posX !== (div2Ref.current?.offsetLeft!) ? setPosX(div2Ref.current?.offsetLeft!) : setPosX(posX + 1)
                                posY !== 1 ? setPosY(1) : setPosY(posY + 0.1); opa !== 1 ? setOpa(1) : setOpa(opa + 0.1)
                              }}
                              className="cursor-pointer mx-2 px-4 py-2 bg-violet-300 rounded-xl relative">
                              Single Bed Frame<div className=' bg-red-400 rounded-full w-[16px] h-[16px] absolute text-center p-auto top-0 left-[88%]'>2</div>
                            </div>
                          </div>
                          <div className="flex justify-around items-center w-full my-6  text-xl font-normal">
                            <div
                              onClick={() => {
                                setDivTxt('Single Solid Bed Base');
                                posX !== (div2Ref.current?.offsetLeft!) ? setPosX(div2Ref.current?.offsetLeft!) : setPosX(posX + 1)
                                posY !== 1 ? setPosY(1) : setPosY(posY + 0.1); opa !== 1 ? setOpa(1) : setOpa(opa + 0.1)
                              }}
                              className="cursor-pointer mx-2 px-4 py-2 bg-violet-300 rounded-xl relative">
                              Single Solid Bed Base<div className=' bg-red-400 rounded-full w-[16px] h-[16px] absolute text-center p-auto top-0 left-[88%]'>2</div>
                            </div>
                            <div
                              onClick={() => { console.log('somak 02/28/24 12:36:23=>..', posY, '==', posX);
                                setDivTxt('TallBoy');
                                posX !== (div1Ref.current?.offsetLeft!) ? setPosX(div1Ref.current?.offsetLeft!) : setPosX(posX + 1)
                                posY !== 1 ? setPosY(1) : setPosY(posY + 0.1); opa !== 1 ? setOpa(1) : setOpa(opa + 0.1)
                              }}
                              className="cursor-pointer mx-2 px-4 py-2 bg-violet-300 rounded-xl relative">
                              TallBoy<div className=' bg-red-400 rounded-full w-[16px] h-[16px] absolute text-center p-auto top-0 left-[88%]'>2</div>
                            </div>
                            <div
                              onClick={() => {
                                setDivTxt('Trundle');
                                posX !== (div2Ref.current?.offsetLeft!) ? setPosX(div2Ref.current?.offsetLeft!) : setPosX(posX + 1)
                                posY !== 1 ? setPosY(1) : setPosY(posY + 0.1); opa !== 1 ? setOpa(1) : setOpa(opa + 0.1)
                              }}
                              className="cursor-pointer mx-2 px-4 py-2 bg-violet-300 rounded-xl relative">
                              Trundle<div className=' bg-red-400 rounded-full w-[16px] h-[16px] absolute text-center p-auto top-0 left-[88%]'>2</div>
                            </div>


                            <div ref={div3Ref}
                              onClick={() => {
                                setDivTxt(div3Ref.current?.textContent!);
                                // posX !== div3Ref.current?.offsetLeft! ? setPosX(div3Ref.current?.offsetLeft!) : setPosX(posX + 1);
                                posX !== (div1Ref.current?.offsetLeft!) ? setPosX(div1Ref.current?.offsetLeft!) : setPosX(posX + 1)
                                // posY !== div3Ref.current?.offsetTop! ? setPosY(div3Ref.current?.offsetTop!) : setPosY(posY + 1);
                                posY !== 1 ? setPosY(1) : setPosY(posY + 0.1); opa !== 1 ? setOpa(1) : setOpa(opa + 0.1)
                              }}
                              className="cursor-pointer mx-2 px-4 py-2 bg-violet-300 rounded-xl relative">
                              Wardrobe<div className=' bg-red-400 rounded-full w-[16px] h-[16px] absolute text-center p-auto top-0 left-[88%]'>2</div>
                            </div>
                          </div>
                        </div>

                      </div>
                    </div>
                  </div>
                </div>


                <input type="radio" name="tabs2" className="tabs__radio" id="tab2" />
                <label className="tabs__label tabs__label--12" htmlFor="tab2">
                  <img src={mainIcon14Png} alt="" title="" className="tab-icon" />
                  <h3>Lounge & Dining</h3>
                </label>
                <div className="tabs__content">
                  <h2>Launge & Dining</h2>
                  <div className="container">
                    <div className="row">
                      <div className="col-md-12">
                        <label htmlFor="cars">Launge & Dining</label>
                        <select name="Select " id=" ">
                          <option value="">Select</option>
                          <option value="">1</option>
                          <option value="">2</option>
                          <option value="">3</option>
                          <option value="">4</option>
                        </select>

                        <label htmlFor=" ">Double Matress</label>
                        <select name="Select " id="Select">
                          <option value="">Select</option>
                          <option value="">1</option>
                          <option value="">2</option>
                          <option value="">3</option>
                          <option value="">4</option>
                        </select>

                        <label htmlFor=" ">Bunkbed</label>
                        <select name="Select " id=" ">
                          <option value="">Select</option>
                          <option value="">1</option>
                          <option value="">2</option>
                          <option value="">3</option>
                          <option value="">4</option>
                        </select>

                        <label htmlFor=" ">Coat</label>
                        <select name="Select " id=" ">
                          <option value="">Select</option>
                          <option value="">1</option>
                          <option value="">2</option>
                          <option value="">3</option>
                          <option value="">4</option>
                        </select>
                        <label htmlFor=" ">Dresses</label>
                        <select name="Select " id=" ">
                          <option value="">Select</option>
                          <option value="">1</option>
                          <option value="">2</option>
                          <option value="">3</option>
                          <option value="">4</option>
                        </select>
                      </div>
                    </div>
                  </div>
                </div>


                <input type="radio" name="tabs2" className="tabs__radio" id="tab3" />
                <label className="tabs__label tabs__label--12" htmlFor="tab3">
                  <img src={mainIcon15Png} alt="" title="" className="tab-icon" />
                  <h3>Offiec & Study</h3>
                </label>
                <div className="tabs__content">
                  <h2>Offiec & Study</h2>
                  <div className="container">
                    <div className="row">
                      <div className="col-md-12">
                        <label htmlFor="cars">Launge & Dining</label>
                        <select name="Select " id=" ">
                          <option value="">Select</option>
                          <option value="">1</option>
                          <option value="">2</option>
                          <option value="">3</option>
                          <option value="">4</option>
                        </select>

                        <label htmlFor=" ">Double Matress</label>
                        <select name="Select " id="Select">
                          <option value="">Select</option>
                          <option value="">1</option>
                          <option value="">2</option>
                          <option value="">3</option>
                          <option value="">4</option>
                        </select>

                        <label htmlFor=" ">Bunkbed</label>
                        <select name="Select " id=" ">
                          <option value="">Select</option>
                          <option value="">1</option>
                          <option value="">2</option>
                          <option value="">3</option>
                          <option value="">4</option>
                        </select>

                        <label htmlFor=" ">Coat</label>
                        <select name="Select " id=" ">
                          <option value="">Select</option>
                          <option value="">1</option>
                          <option value="">2</option>
                          <option value="">3</option>
                          <option value="">4</option>
                        </select>
                        <label htmlFor=" ">Dresses</label>
                        <select name="Select " id=" ">
                          <option value="">Select</option>
                          <option value="">1</option>
                          <option value="">2</option>
                          <option value="">3</option>
                          <option value="">4</option>
                        </select>
                      </div>
                    </div>
                  </div>
                </div>

                <input type="radio" name="tabs2" className="tabs__radio" id="tab4" />
                <label className="tabs__label tabs__label--12" htmlFor="tab4">
                  <img src={mainIcon16Png} alt="" title="" className="tab-icon" />
                  <h3>Garage & Study</h3>
                </label>
                <div className="tabs__content">
                  <h2>Garage & Study</h2>
                  <div className="container">
                    <div className="row">
                      <div className="col-md-12">
                        <label htmlFor="cars">Launge & Dining</label>
                        <select name="Select " id=" ">
                          <option value="">Select</option>
                          <option value="">1</option>
                          <option value="">2</option>
                          <option value="">3</option>
                          <option value="">4</option>
                        </select>

                        <label htmlFor=" ">Double Matress</label>
                        <select name="Select " id="Select">
                          <option value="">Select</option>
                          <option value="">1</option>
                          <option value="">2</option>
                          <option value="">3</option>
                          <option value="">4</option>
                        </select>

                        <label htmlFor=" ">Bunkbed</label>
                        <select name="Select " id=" ">
                          <option value="">Select</option>
                          <option value="">1</option>
                          <option value="">2</option>
                          <option value="">3</option>
                          <option value="">4</option>
                        </select>

                        <label htmlFor=" ">Coat</label>
                        <select name="Select " id=" ">
                          <option value="">Select</option>
                          <option value="">1</option>
                          <option value="">2</option>
                          <option value="">3</option>
                          <option value="">4</option>
                        </select>
                        <label htmlFor=" ">Dresses</label>
                        <select name="Select " id=" ">
                          <option value="">Select</option>
                          <option value="">1</option>
                          <option value="">2</option>
                          <option value="">3</option>
                          <option value="">4</option>
                        </select>
                      </div>
                    </div>
                  </div>
                </div>
              </div>


            </div>

            <div className="row"> <a href="page-11.php" className="back">Proceed</a> </div>

          </div>

        </div>
      </div>

    </>
  );
}

export default App;
