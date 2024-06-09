import { MaxWidthWrapper } from "@/components/MaxWidthWrapper";
import { Check, Star } from "lucide-react";
import Image from "next/image";

export default function Home() {
  return (
    <div className="bg-slate-50 ">
      <section>
        <MaxWidthWrapper className="pb-24 pt-10 lg:grid lg:grid-cols-3 sm:pb-32 lg:gap-x-0 xl:gap-x-8 lg:pt-24 xl:pt-32 lg:pb-52">
          <div className="col-span-2 px-6 lg:px-0 lg:pt-4">
            <div className="flex flex-col relative mx-auto text-center lg:text-left  items-center lg:items-start">
              <div className="absolute w-28 left-0 -top-24 hidden lg:block">
                <img src="/tiger1.png" className="w-full" />
              </div>
              <h1 className="relative w-fit tracking-tight text-balance mt-16 font-bold !leading-tight text-gray-900 text-5xl md:text-6xl lg:text-7xl">
                Your Image on a{" "}
                <span className="bg-orange-600 px-2 text-white ">Custom</span>{" "}
                <br />
                T-shirts & Hoddies
              </h1>
              <p className="mt-8 text-lg lg:pr-11 max-w-prose text-center lg:text-left text-balance md:text-wrap">
                {" "}
                Capture your favorite memories with your own,{" "}
                <span className="font-semibold">one-of-one</span> t-shirts &
                hoodies.{" "}
                <span className="font-semibold  text-orange-600">
                  TigerPrint
                </span>{" "}
                allow you to print your memory on your favorite t-shirts
              </p>
              <ul className="mt-8 space-y-2 text-left font-medium flex flex-col items center sm:items-start">
                <div className="space-y-2">
                  <li className="flex gap-1.5 items-center text-left">
                    <Check className="h-5 w-5 shrink-0 text-green-500 " />
                    High-quality, durable materials
                  </li>
                  <li className="flex gap-1.5 items-center text-left ">
                    <Check className="h-5 w-5 shrink-0  text-green-500 " />5
                    years of print garantee
                  </li>
                  <li className="flex gap-1.5 items-center text-left">
                    <Check className="h-5 w-5 shrink-0  text-green-500" />
                    Print via modern technology
                  </li>
                </div>
              </ul>
              <div className="mt-12 flex flex-col sm:flex-row items-center sm:items-start gap-5">
                <div className="flex -space-x-4">
                  <img
                    className="inline-block h-11 w-11 rounded-full ring-2 ring-slate-100 object-cover"
                    src="user/user1.jpg"
                    alt="User images"
                  />
                  <img
                    className="inline-block h-11 w-11 rounded-full ring-2 ring-slate-100 object-cover"
                    src="user/user2.jpg"
                    alt="User images"
                  />
                  <img
                    className="inline-block h-11 w-11 rounded-full ring-2 ring-slate-100 object-cover"
                    src="user/user3.jpg"
                    alt="User images"
                  />
                  <img
                    className="inline-block h-11 w-11 rounded-full ring-2 ring-slate-100 object-cover"
                    src="user/user4.jpg"
                    alt="User images"
                  />
                  <img
                    className="inline-block h-11 w-11 rounded-full ring-2 ring-slate-100 object-cover"
                    src="user/user5.jpg"
                    alt="User images"
                  />
                </div>

                <div className="flex flex-col justify-between items-center sm:items-start">
                  <div className="flex gap-0.5">
                    <Star className="h-4 w-4 text-green-600 fill-green-600" />
                    <Star className="h-4 w-4 text-green-600 fill-green-600" />
                    <Star className="h-4 w-4 text-green-600 fill-green-600" />
                    <Star className="h-4 w-4 text-green-600 fill-green-600" />
                    <Star className="h-4 w-4 text-green-600 fill-green-600" />
                  </div>
                  <p>
                    <span className="font-semibold">1,250</span> happy customers
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-span-full lg:col-span-1 w-full flex justify-center px-8 sm:px-16 md:px-0 mt-32 lg:mx-0 lg:mt-20 h-fit" >
            <div className="relative md:max-w-xl" >
              <img src="your-image.png" className="absolute w-40 lg:w-52 left-56 -top-20 select-none sm:block lg:hidden xl:block" alt="" />

            </div>
          </div>
        </MaxWidthWrapper>
      </section>
    </div>
  );
}
