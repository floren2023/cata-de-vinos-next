import React from 'react'
import Image from "next/image";

const socios = () => {
  return (
       <div className="  ">
        <div className="pl-20 text-gray-600 font-[merienda] text-md tracking-wider pb-4 ">
          Nuestros socios
        </div>

        <div className="grid sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-10 justify-center  pb-8 pl-10 pr-10 mx-auto">
          <div className="justify-center content-center items-center mx-auto">
            <Image
              src="/logos/freixenet.png"
              alt="logo freixenet"
              className="h-20  " width={100} height={50}
            />
          </div>
          <div className="justify-center content-center items-center  mx-auto">
            <Image
              src="/logos/bordeaux.png"
              alt="logo bordeaux"
              className="h-20 " width={200} height={50}
            />
          </div>
          <div className="justify-center content-center items-center  mx-auto">
            <Image src="/logos/rioja.jpg" alt="logo rioja" className="h-20  " width={100} height={50}/>
          </div>
          <div className="justify-center content-center items-center  mx-auto">
            <Image
              src="/logos/gaieter.png"
              alt="logo gaieter"
              className="h-20  " width={100} height={50}
            />
          </div>
        </div>
      </div> 
  )
}

export default socios