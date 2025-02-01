import TimeLineJobs from "@/components/time-lineJobs";
import TimeLineStudies from "@/components/time-lineStudies";
const studies = () => {
    return (
        <>
            <h1 className="font-bold text-5xl text-left 
    absolute top-10 left-5  
    sm:top-30 sm:left-10  
    md:top-40 md:left-20  
    lg:top-50 lg:left-32  
    xl:top-50 xl:left-[60px]  
    z-40">
                Education
            </h1>
            <div className="font-bold text-5xl text-left 
    absolute top-10 left-5  
    sm:top-30 sm:left-10  
    md:top-40 md:left-20  
    lg:top-50 lg:left-32  
    xl:top-50 xl:left-[60px]  
    z-40">
                <TimeLineStudies />
            </div>
            <h1 className="font-bold text-5xl text-right 
    absolute top-10 right-5  
    sm:top-30 sm:right-40  
    md:top-40 md:right-30  
    lg:top-50 lg:right-30  
    xl:top-50 xl:right-[175px]  
    z-40">
                Work Experience
            </h1>
            <div className="font-bold text-5xl text-left
    absolute top-10 right-5  
    sm:top-30 sm:right-65  
    md:top-40 md:right-65  
    lg:top-50 lg:right-60  
    xl:top-50 xl:right-[160px]  
    z-40">
                <TimeLineJobs />
            </div>

        </>
    );
}

export default studies;