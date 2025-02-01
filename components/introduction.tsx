'use client'
import { TypeAnimation } from "react-type-animation";
import Image from 'next/image'
import Link from "next/link";

const Introduction = () => {
    return (
        <div className="z-20 w-full bg-darkBg/60">
            <div className="z-20 grid items-center h-full p-6 md:py-0 md:grid-cols-2">
                <Image style={{ marginTop: "-65px", marginLeft: "-95px" }} src="/alexander.png" priority width="550" height="550" alt="profile pic" />
                <div className="flex flex-col justify-center max-w-md">
                    <h1 className="mb-7 text-2xl loading-tight text-center md:text-left
                    md:text-4xl md:mb-10 ">
                    </h1>
                    <div style={{ marginTop: "-125px", marginLeft: "-5px" }} className=" font-bold flex z-40 flex flex-col items-left justify-left w-full nt-auto h-max top-21 left-20">
                        <h2 className="text-7xl font-bold">i am</h2>
                        <div style={{ marginTop: "-65px", marginLeft: "150px" }} className="flex z-40 flex flex-col items-left justify-left w-full nt-auto h-max left-25">

                            <TypeAnimation
                                sequence={[
                                    "Developer",
                                    10000,
                                    "Freelancer",
                                    1000
                                ]}
                                wrapper="span"
                                speed={10}
                                repeat={Infinity}
                                className="text-7xl font-bold block text-secondary"
                            />
                        </div>
                    </div>

                    <div style={{ marginTop: "15px", marginLeft: "-5px" }} className=" flex item-center justify-center gap-5 md:justify-start md:gap-10">
                        <Link href="/projects"
                            style={{ height: "60px", width: "190px" }} className=" px-3 py-2 trasition-all border-2 cursor-pointer text-md 
                        w-fit rounded-xl hover:shadow-xl hover hover:shadow-white/50">
                            <p className="text-3xl font-bold">see projects</p>
                        </Link>
                        <Link href="/contact"
                            className="px-3 py-2 trasition-all border-2 cursor-pointer text-md 
                        w-fit rounded-xl hover:shadow-xl hover:shadow-secondary ">
                            <p className="text-3xl font-bold">contact me</p>
                        </Link>

                    </div>
                </div>
            </div>

        </div>
    );

}

export default Introduction;