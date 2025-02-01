import { dataJobs } from "@/data";
const TimeLineJobs = () => {
    return (
        <div className="flex flex-col justify-center divide-y divide-slate-200">
            <div className="w-full max-w-3x1 mx-auto md:pb-10 md:pt-10">
                <div className="-my-2">
                    {dataJobs.map((data) => (
                        <div key={data.id} className="relate py-6 pl-8 sm:pl-32 group">
                            <h3 className="text-3xl font-bold mt-5 -mb-1">{data.title}</h3>
                            <div className="flex flex-col sm:flex-row items-start mb-1 
                                        group-last:before:hidden before:absolute 
                                        before:left-2 sm:before:left-0 before:h-80
                                        before:px-px before:bg-slate-300 sm:before:ml-[6.5rem] 
                                        before:self-start before:-translate-x-1/2 
                                        before:translate-y-3 after:absolute after:left-2 
                                        sm:after:left-0 after:w-6 after:h-2 after:bg-green-700 
                                        after:border-4 after:box-content after:border-slate-50 
                                        after:rounded-full sm:after:ml-[6.5rem] after:-translate-x-1/2 
                                        after:translate-y-1">
                                <time className="sm:absolute left-[-80px] text-[17px] left-0 translate-y-0.5 inline-flex items-center justify-center text-xs font-semibold uppercase w-40 h-6 mb-3 sm:mb-0 text-emerald-600 bg-gray-100 rounded-full">{data.date}</time>
                                <div className="text-2xl font-bold text-gray-400 mt-1 mb-4 ">{data.subtitle}</div>
                                <div className="text-5xl w-80 h-32 mt-3 mb-6 sm:absolute left-30 -translate-y-4 inline-flex items-center justify-center text-xs font-semibold"><p className="text-[21px]">{data.text}</p></div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div >
    );
}

export default TimeLineJobs;