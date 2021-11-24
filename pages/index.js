import Head from 'next/head'
import Image from 'next/image'
import Chart from './components/Chart'
import Navbar from './components/Navbar'

export default function Home() {
  return (
    <>
      <div className="h-full bg-gradient-to-r from-purple-500 via-purple-500 to-purple-900">
        <Navbar />
        <div className="flex flex-wrap">
          <div className="w-screen md:w-2/3 p-8">
            <div>
              <p className="text-white text-2xl md:text-5xl text-center md:text-left md:px-4 md:font-medium md:pt-5">Web App Monitoring suhu dan kelembaban sarang burung walet</p>
            </div>
            <div className="flex flex-wrap mt-5 items-center justify-items-center">
              <div className="relative w-full md:w-1/3 h-auto md:h-96 self-center">
                <div className="absolute h-full w-full z-0 overflow-hidden">
                  <Image
                    src="/mockup1.png"
                    layout="fill"
                    objectFit="cover"
                  />
                </div>
              </div>
              <div className="relative w-full md:w-1/3 h-auto md:h-96 self-center">
                <div className="absolute h-full w-full z-0 overflow-hidden">
                  <Image
                    src="/mockup2.png"
                    layout="fill"
                    objectFit="cover"
                  />
                </div>
              </div>
              <div className="relative w-full md:w-1/3 h-auto md:h-96 self-center">
                <div className="absolute h-full w-full z-0 overflow-hidden">
                  <Image
                    src="/mockup3.png"
                    layout="fill"
                    objectFit="cover"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="w-screen md:w-1/3">
            <div className="items-center justify-center p-8">
              <Chart />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
