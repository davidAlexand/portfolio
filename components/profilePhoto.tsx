import Image from "next/image";
import MotionTransition from "./transition-component";

const Photo = () => {
    return (
        <MotionTransition position="bottom" className="bottom-0 right-0 hidden md:inline-block md:absolute">
            <Image src="/photoAlexander.png" width={400} height={400}
                className="flex flex-col justify-center max-w-md" alt="Photo" />
        </MotionTransition>
    );
}
export default Photo;