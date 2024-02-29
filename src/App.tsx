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

type furniture = {
  id: number,
  name: string,
  count: number,
}

function App() {
  const [posX, setPosX] = useState(0);
  const [posY, setPosY] = useState(0);
  const [opa, setOpa] = useState(1);
  const [divTxt, setDivTxt] = useState('');
  const div1Ref = useRef<HTMLDivElement>(null);
  const div2Ref = useRef<HTMLDivElement>(null);
  const div3Ref = useRef<HTMLDivElement>(null);
  const [divy, setDivy] = useState(0);

  const handleDivClick = (e: any) => {
    e.preventDefault();
    --items[1].count;
    setItems(() => items);

  }

  const [items, setItems] = useState<furniture[]>([
    { id: 1, name: 'Bedside Table', count: 0 },
    { id: 2, name: 'Bunkbed', count: 0 },
    { id: 3, name: 'Chest Of Drawers', count: 0 },
    { id: 4, name: 'Cot', count: 0 },
    { id: 5, name: 'Double Mattress', count: 0 },
    { id: 6, name: 'Double Bed Frame', count: 0 },
    { id: 7, name: 'Double Solid Bed Base', count: 0 },
    { id: 8, name: 'Dresser', count: 0 },
    { id: 9, name: 'Gas Lift Bed Base (disassembled)', count: 0 },
    { id: 10, name: 'King Mattress', count: 0 },
    { id: 11, name: 'King Bed Frame', count: 0 },
    { id: 12, name: 'King Solid Bed Base', count: 0 },
    { id: 13, name: 'Mirror', count: 0 },
    { id: 14, name: 'Queen Mattress', count: 0 },
    { id: 15, name: 'Queen Bed Frame', count: 0 },
    { id: 16, name: 'Queen Solid Bed Base', count: 0 },
    { id: 17, name: 'Single Mattress', count: 0 },
    { id: 18, name: 'Single Bed Frame', count: 0 },
    { id: 19, name: 'Single Solid Bed Base', count: 0 },
    { id: 20, name: 'TallBoy', count: 0 },
    { id: 21, name: 'Trundle', count: 0 },
    { id: 22, name: 'Wardrobe', count: 0 },
  ]);
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
                              opa !== 1 ? setOpa(1) : setOpa(opa + 0.1);
                              items[0].count++;

                              // const item = items?.find(i => i.id == 1);
                              // const filterItems: furniture[] | undefined = items?.filter(i => i.id !== item?.id);
                              // if (item !== undefined) {
                              //   setItems([...filterItems!, { id: 1, name: 'Bedside Table', count: item.count + 1 }]);
                              // }
                              // else {
                              //   setItems([...filterItems!, { id: 1, name: 'Bedside Table', count: 1 }]);
                              // }
                            }}
                              className="cursor-pointer px-4 py-2 bg-violet-300 rounded-xl relative">Bedside Table
                              {items[0].count > 0 &&
                                <div className=' bg-red-400 rounded-full w-[16px] h-[16px] absolute text-center p-auto top-0 left-[88%]'>{items[0].count}</div>
                              }

                            </div>
                            <div ref={div2Ref}
                              onClick={() => {
                                setDivTxt(div2Ref.current?.textContent!);
                                // posX !== div2Ref.current?.offsetLeft! - 200 ? setPosX(div2Ref.current?.offsetLeft! - 200) : setPosX(posX + 1)
                                posX !== (div2Ref.current?.offsetLeft!) ? setPosX(div2Ref.current?.offsetLeft!) : setPosX(posX + 1)
                                posY !== 1 ? setPosY(1) : setPosY(posY + 0.1); opa !== 1 ? setOpa(1) : setOpa(opa + 0.1);
                                items[1].count++;
                              }}
                              className="cursor-pointer px-4 py-2 bg-violet-300 rounded-xl relative">Bunkbed
                              {items[1].count > 0 &&
                                <div className=' bg-red-400 rounded-full w-[16px] h-[16px] absolute text-center p-auto top-0 left-[88%]'>{items[1].count}</div>
                              }
                            </div>

                            <div
                              onClick={() => {
                                setDivTxt('Chest Of Drawers');
                                posX !== (div1Ref.current?.offsetLeft!) ? setPosX(div1Ref.current?.offsetLeft!) : setPosX(posX + 1)
                                posY !== 1 ? setPosY(1) : setPosY(posY + 0.1); opa !== 1 ? setOpa(1) : setOpa(opa + 0.1);
                                items[2].count++;
                                // --items[1].count;
                              }}
                              className="cursor-pointer mx-2 px-4 py-2 bg-violet-300 rounded-xl relative">
                              Chest Of Drawers
                              {items[2].count > 0 &&
                                <div className=' bg-red-400 rounded-full w-[16px] h-[16px] absolute text-center p-auto top-0 left-[88%]'>{items[2].count}</div>
                              }
                            </div>

                            <div
                              onClick={() => {
                                setDivTxt('Cot');
                                posX !== (div1Ref.current?.offsetLeft!) ? setPosX(div1Ref.current?.offsetLeft!) : setPosX(posX + 1)
                                posY !== 1 ? setPosY(1) : setPosY(posY + 0.1); opa !== 1 ? setOpa(1) : setOpa(opa + 0.1); items[3].count++;
                              }}
                              className="cursor-pointer mx-2 px-4 py-2 bg-violet-300 rounded-xl relative">
                              Cot
                              {items[3].count > 0 &&
                                <div className=' bg-red-400 rounded-full w-[16px] h-[16px] absolute text-center p-auto top-0 left-[88%]'>{items[3].count}</div>
                              }
                            </div>
                            <div
                              onClick={() => {
                                setDivTxt('Double Mattress');
                                posX !== (div2Ref.current?.offsetLeft!) ? setPosX(div2Ref.current?.offsetLeft!) : setPosX(posX + 1)
                                posY !== 1 ? setPosY(1) : setPosY(posY + 0.1); opa !== 1 ? setOpa(1) : setOpa(opa + 0.1); items[4].count++;
                              }}
                              className="cursor-pointer mx-2 px-4 py-2 bg-violet-300 rounded-xl relative">
                              Double Mattress
                              {items[4].count > 0 &&
                                <div className=' bg-red-400 rounded-full w-[16px] h-[16px] absolute text-center p-auto top-0 left-[88%]'>{items[4].count}</div>
                              }
                            </div>
                          </div>
                          <div className="flex justify-around items-center w-full my-6  text-xl font-normal">
                            <div
                              onClick={() => {
                                setDivTxt('Double Bed Frame');
                                posX !== (div1Ref.current?.offsetLeft!) ? setPosX(div1Ref.current?.offsetLeft!) : setPosX(posX + 1)
                                posY !== 1 ? setPosY(1) : setPosY(posY + 0.1); opa !== 1 ? setOpa(1) : setOpa(opa + 0.1); items[5].count++;
                              }}
                              className="cursor-pointer mx-2 px-4 py-2 bg-violet-300 rounded-xl relative">
                              Double Bed Frame
                              {items[5].count > 0 &&
                                <div className=' bg-red-400 rounded-full w-[16px] h-[16px] absolute text-center p-auto top-0 left-[88%]'>{items[5].count}</div>
                              }
                            </div>
                            <div
                              onClick={() => {
                                setDivTxt('Double Solid Bed Base');
                                posX !== (div2Ref.current?.offsetLeft!) ? setPosX(div2Ref.current?.offsetLeft!) : setPosX(posX + 1)
                                posY !== 1 ? setPosY(1) : setPosY(posY + 0.1); opa !== 1 ? setOpa(1) : setOpa(opa + 0.1); items[6].count++;
                              }}
                              className="cursor-pointer mx-2 px-4 py-2 bg-violet-300 rounded-xl relative">
                              Double Solid Bed Base
                              {items[6].count > 0 &&
                                <div className=' bg-red-400 rounded-full w-[16px] h-[16px] absolute text-center p-auto top-0 left-[88%]'>{items[6].count}</div>
                              }
                            </div>
                            <div
                              onClick={() => {
                                setDivTxt('Dresser');
                                posX !== (div1Ref.current?.offsetLeft!) ? setPosX(div1Ref.current?.offsetLeft!) : setPosX(posX + 1)
                                posY !== 1 ? setPosY(1) : setPosY(posY + 0.1); opa !== 1 ? setOpa(1) : setOpa(opa + 0.1); items[7].count++;
                              }}
                              className="cursor-pointer mx-2 px-4 py-2 bg-violet-300 rounded-xl relative">
                              Dresser
                              {items[7].count > 0 &&
                                <div className=' bg-red-400 rounded-full w-[16px] h-[16px] absolute text-center p-auto top-0 left-[88%]'>{items[7].count}</div>
                              }
                            </div>
                            <div
                              onClick={() => {
                                setDivTxt('Gas Lift Bed Base');
                                posX !== (div2Ref.current?.offsetLeft!) ? setPosX(div2Ref.current?.offsetLeft!) : setPosX(posX + 1)
                                posY !== 1 ? setPosY(1) : setPosY(posY + 0.1); opa !== 1 ? setOpa(1) : setOpa(opa + 0.1); items[8].count++;
                              }}
                              className="cursor-pointer mx-2 px-4 py-2 bg-violet-300 rounded-xl relative">
                              Gas Lift Bed Base (disassembled)
                              {items[8].count > 0 &&
                                <div className=' bg-red-400 rounded-full w-[16px] h-[16px] absolute text-center p-auto top-0 left-[88%]'>{items[8].count}</div>
                              }
                            </div>
                          </div>
                          <div className="flex justify-around items-center w-full my-6  text-xl font-normal">
                            <div
                              onClick={() => {
                                setDivTxt('King Mattress');
                                posX !== (div1Ref.current?.offsetLeft!) ? setPosX(div1Ref.current?.offsetLeft!) : setPosX(posX + 1)
                                posY !== 1 ? setPosY(1) : setPosY(posY + 0.1); opa !== 1 ? setOpa(1) : setOpa(opa + 0.1); items[9].count++;
                              }}
                              className="cursor-pointer mx-2 px-4 py-2 bg-violet-300 rounded-xl relative">
                              King Mattress
                              {items[9].count > 0 &&
                                <div className=' bg-red-400 rounded-full w-[16px] h-[16px] absolute text-center p-auto top-0 left-[88%]'>{items[9].count}</div>
                              }
                            </div>
                            <div
                              onClick={() => {
                                setDivTxt('King Bed Frame');
                                posX !== (div2Ref.current?.offsetLeft!) ? setPosX(div2Ref.current?.offsetLeft!) : setPosX(posX + 1)
                                posY !== 1 ? setPosY(1) : setPosY(posY + 0.1); opa !== 1 ? setOpa(1) : setOpa(opa + 0.1); items[10].count++;
                              }}
                              className="cursor-pointer mx-2 px-4 py-2 bg-violet-300 rounded-xl relative">
                              King Bed Frame
                              {items[10].count > 0 &&
                                <div className=' bg-red-400 rounded-full w-[16px] h-[16px] absolute text-center p-auto top-0 left-[88%]'>{items[10].count}</div>
                              }
                            </div>
                            <div
                              onClick={() => {
                                setDivTxt('King Solid Bed Base');
                                posX !== (div1Ref.current?.offsetLeft!) ? setPosX(div1Ref.current?.offsetLeft!) : setPosX(posX + 1)
                                posY !== 1 ? setPosY(1) : setPosY(posY + 0.1); opa !== 1 ? setOpa(1) : setOpa(opa + 0.1); items[11].count++;
                              }}
                              className="cursor-pointer mx-2 px-4 py-2 bg-violet-300 rounded-xl relative">
                              King Solid Bed Base
                              {items[11].count > 0 &&
                                <div className=' bg-red-400 rounded-full w-[16px] h-[16px] absolute text-center p-auto top-0 left-[88%]'>{items[11].count}</div>
                              }
                            </div>
                            <div
                              onClick={() => {
                                setDivTxt('Mirror');
                                posX !== (div2Ref.current?.offsetLeft!) ? setPosX(div2Ref.current?.offsetLeft!) : setPosX(posX + 1)
                                posY !== 1 ? setPosY(1) : setPosY(posY + 0.1); opa !== 1 ? setOpa(1) : setOpa(opa + 0.1); items[12].count++;
                              }}
                              className="cursor-pointer mx-2 px-4 py-2 bg-violet-300 rounded-xl relative">
                              Mirror
                              {items[12].count > 0 &&
                                <div className=' bg-red-400 rounded-full w-[16px] h-[16px] absolute text-center p-auto top-0 left-[88%]'>{items[12].count}</div>
                              }
                            </div>
                            <div
                              onClick={() => {
                                setDivTxt('Queen Mattress');
                                posX !== (div1Ref.current?.offsetLeft!) ? setPosX(div1Ref.current?.offsetLeft!) : setPosX(posX + 1)
                                posY !== 1 ? setPosY(1) : setPosY(posY + 0.1); opa !== 1 ? setOpa(1) : setOpa(opa + 0.1); items[13].count++;
                              }}
                              className="cursor-pointer mx-2 px-4 py-2 bg-violet-300 rounded-xl relative">
                              Queen Mattress
                              {items[13].count > 0 &&
                                <div className=' bg-red-400 rounded-full w-[16px] h-[16px] absolute text-center p-auto top-0 left-[88%]'>{items[13].count}</div>
                              }
                            </div>
                          </div>
                          <div className="flex justify-around items-center w-full my-6  text-xl font-normal">
                            <div
                              onClick={() => {
                                setDivTxt('Queen Bed Frame');
                                posX !== (div1Ref.current?.offsetLeft!) ? setPosX(div1Ref.current?.offsetLeft!) : setPosX(posX + 1)
                                posY !== 1 ? setPosY(1) : setPosY(posY + 0.1); opa !== 1 ? setOpa(1) : setOpa(opa + 0.1); items[14].count++;
                              }}
                              className="cursor-pointer mx-2 px-4 py-2 bg-violet-300 rounded-xl relative">
                              Queen Bed Frame
                              {items[14].count > 0 &&
                                <div className=' bg-red-400 rounded-full w-[16px] h-[16px] absolute text-center p-auto top-0 left-[88%]'>{items[14].count}</div>
                              }
                            </div>
                            <div
                              onClick={() => {
                                setDivTxt('Queen Solid Bed Base');
                                posX !== (div2Ref.current?.offsetLeft!) ? setPosX(div2Ref.current?.offsetLeft!) : setPosX(posX + 1)
                                posY !== 1 ? setPosY(1) : setPosY(posY + 0.1); opa !== 1 ? setOpa(1) : setOpa(opa + 0.1); items[15].count++;
                              }}
                              className="cursor-pointer mx-2 px-4 py-2 bg-violet-300 rounded-xl relative">
                              Queen Solid Bed Base
                              {items[15].count > 0 &&
                                <div className=' bg-red-400 rounded-full w-[16px] h-[16px] absolute text-center p-auto top-0 left-[88%]'>{items[15].count}</div>
                              }
                            </div>
                            <div
                              onClick={() => {
                                setDivTxt('Single Mattress');
                                posX !== (div1Ref.current?.offsetLeft!) ? setPosX(div1Ref.current?.offsetLeft!) : setPosX(posX + 1)
                                posY !== 1 ? setPosY(1) : setPosY(posY + 0.1); opa !== 1 ? setOpa(1) : setOpa(opa + 0.1); items[16].count++;
                              }}
                              className="cursor-pointer mx-2 px-4 py-2 bg-violet-300 rounded-xl relative">
                              Single Mattress
                              {items[16].count > 0 &&
                                <div className=' bg-red-400 rounded-full w-[16px] h-[16px] absolute text-center p-auto top-0 left-[88%]'>{items[16].count}</div>
                              }
                            </div>
                            <div
                              onClick={() => {
                                setDivTxt('Single Bed Frame');
                                posX !== (div2Ref.current?.offsetLeft!) ? setPosX(div2Ref.current?.offsetLeft!) : setPosX(posX + 1)
                                posY !== 1 ? setPosY(1) : setPosY(posY + 0.1); opa !== 1 ? setOpa(1) : setOpa(opa + 0.1); items[17].count++;
                              }}
                              className="cursor-pointer mx-2 px-4 py-2 bg-violet-300 rounded-xl relative">
                              Single Bed Frame
                              {items[17].count > 0 &&
                                <div className=' bg-red-400 rounded-full w-[16px] h-[16px] absolute text-center p-auto top-0 left-[88%]'>{items[17].count}</div>
                              }
                            </div>
                          </div>
                          <div className="flex justify-around items-center w-full my-6  text-xl font-normal">
                            <div
                              onClick={() => {
                                setDivTxt('Single Solid Bed Base');
                                posX !== (div2Ref.current?.offsetLeft!) ? setPosX(div2Ref.current?.offsetLeft!) : setPosX(posX + 1)
                                posY !== 1 ? setPosY(1) : setPosY(posY + 0.1); opa !== 1 ? setOpa(1) : setOpa(opa + 0.1); items[18].count++;
                              }}
                              className="cursor-pointer mx-2 px-4 py-2 bg-violet-300 rounded-xl relative">
                              Single Solid Bed Base
                              {items[18].count > 0 &&
                                <div className=' bg-red-400 rounded-full w-[16px] h-[16px] absolute text-center p-auto top-0 left-[88%]'>{items[18].count}</div>
                              }
                            </div>
                            <div
                              onClick={() => {
                                console.log('somak 02/28/24 12:36:23=>..', posY, '==', posX);
                                setDivTxt('TallBoy');
                                posX !== (div1Ref.current?.offsetLeft!) ? setPosX(div1Ref.current?.offsetLeft!) : setPosX(posX + 1)
                                posY !== 1 ? setPosY(1) : setPosY(posY + 0.1); opa !== 1 ? setOpa(1) : setOpa(opa + 0.1); items[19].count++;
                              }}
                              className="cursor-pointer mx-2 px-4 py-2 bg-violet-300 rounded-xl relative">
                              TallBoy
                              {items[19].count > 0 &&
                                <div className=' bg-red-400 rounded-full w-[16px] h-[16px] absolute text-center p-auto top-0 left-[88%]'>{items[19].count}</div>
                              }
                            </div>
                            <div
                              onClick={() => {
                                setDivTxt('Trundle');
                                posX !== (div2Ref.current?.offsetLeft!) ? setPosX(div2Ref.current?.offsetLeft!) : setPosX(posX + 1)
                                posY !== 1 ? setPosY(1) : setPosY(posY + 0.1); opa !== 1 ? setOpa(1) : setOpa(opa + 0.1); items[20].count++;
                              }}
                              className="cursor-pointer mx-2 px-4 py-2 bg-violet-300 rounded-xl relative">
                              Trundle
                              {items[20].count > 0 &&
                                <div className=' bg-red-400 rounded-full w-[16px] h-[16px] absolute text-center p-auto top-0 left-[88%]'>{items[20].count}</div>
                              }
                            </div>


                            <div ref={div3Ref}
                              onClick={() => {
                                setDivTxt(div3Ref.current?.textContent!);
                                // posX !== div3Ref.current?.offsetLeft! ? setPosX(div3Ref.current?.offsetLeft!) : setPosX(posX + 1);
                                posX !== (div1Ref.current?.offsetLeft!) ? setPosX(div1Ref.current?.offsetLeft!) : setPosX(posX + 1)
                                // posY !== div3Ref.current?.offsetTop! ? setPosY(div3Ref.current?.offsetTop!) : setPosY(posY + 1);
                                posY !== 1 ? setPosY(1) : setPosY(posY + 0.1); opa !== 1 ? setOpa(1) : setOpa(opa + 0.1); items[21].count++;
                              }}
                              className="cursor-pointer mx-2 px-4 py-2 bg-violet-300 rounded-xl relative">
                              Wardrobe
                              {items[21].count > 0 &&
                                <div className=' bg-red-400 rounded-full w-[16px] h-[16px] absolute text-center p-auto top-0 left-[88%]'>{items[21].count}</div>
                              }
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





              <div className='flex flex-col items-center justify-center my-4'>


                {items && items.map((item, key) => {


                  if (item.count > 0) {
                    return (
                      <div key={key + 's'} className='flex justify-between items-center'>
                        <div key={key} className=' cursor-pointer bg-violet-500 rounded-full w-[32px] h-[32px] border-teal-600 border-6 text-center text-white font-normal text-5xl '
                          onClick={event => {
                            console.log('somak 02/29/24 15:03:32==>', key, '==', item.id);
                            setDivy(divy+1);
                            --items[key].count;
                            // --items[1].count;
                            // setItems(() => items);
                            // let tempItems = items;
                            // tempItems[key].count -= 1;
                            // setItems(tempItems);
                            console.log('somak 02/29/24 15:03:32==>', key, '==', item.id, items[key].count);
                          }}
                        >-</div>
                        <div
                          onClick={() => {
                            setDivTxt('Chest Of Drawers');
                            posX !== (div1Ref.current?.offsetLeft!) ? setPosX(div1Ref.current?.offsetLeft!) : setPosX(posX + 1)
                            posY !== 1 ? setPosY(1) : setPosY(posY + 0.1); opa !== 1 ? setOpa(1) : setOpa(opa + 0.1)
                          }}
                          className="cursor-pointer mx-4 px-4 py-2 bg-violet-300 rounded-xl relative">
                          {item.name}<div className=' bg-red-400 rounded-full w-[16px] h-[16px] absolute text-center p-auto top-0 left-[88%]'>{items[key].count}</div>
                        </div>
                        <div key={key} className=' cursor-pointer bg-violet-500 rounded-full w-[32px] h-[32px] border-teal-600 border-6 text-center text-white font-normal text-5xl '
                        onClick={event => {
                          setDivy(divy+1);
                          items[key].count+=1;
                          // let tempItems = items;
                          // tempItems[key].count++;
                          // setItems(tempItems);
                        }}
                      >+</div>
                      </div>
                    )
                  }
                }
                )}


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
