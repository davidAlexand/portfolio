import Link from "next/link";
import MotionTransition from "./transition-component";
import { socialNetworks } from "@/data";

const Header = () => {
    return (
        <MotionTransition position="bottom" className="absolute z-50 inline-block w-full top-12 md:top-1 right-4">
            <header>
                <div className="container justify-start max-w-xl mx-4 md:top-1 mt-1 md:mt-0">
                    <Link href="/">
                        <h1 className="text-4xl font-bold text-center md:text-left mt-1 md:mt-0" >
                            Alexander
                            <span className="text-secondary">
                                Romero
                            </span>
                        </h1>
                    </Link>
                    <div className=" items-left gap-5" >
                        {socialNetworks.map(({ logo, src, id }) =>
                            <Link key={id}
                                href={src}
                                target="_blank"
                                className=" transition-all duration  hover:text-secondary"
                            >
                                {logo}
                            </Link>
                        )}
                    </div>
                </div>
            </header>
        </MotionTransition>
    )
}

export default Header;