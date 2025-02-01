import ContainerPage from "@/components/container";
import Photo from "@/components/profilePhoto";
import TransitionPage from "@/components/transition-page";

const PageAboutMe = () => {
    return (
        <>
            <TransitionPage />
            <ContainerPage>
                <div style={{ marginTop: "-90px", marginLeft: "10px" }}>
                    <h1 className="text-5xl font-bold leading-tight text-center md:text-left md:text text-secondary">
                        Who am i?
                    </h1>
                    <h2 style={{ width: "600px" }} className="text-4xl font-bold leading-tight text-center md:text-left md:text ">I´am David Alexander Romero Ipuz, a web Developer</h2>
                    <p style={{ width: "600px", height: "700px" }} className="text-2xl leading-tight text-center md:text-left md:text">
                        Database Management Technologist,
                        graduated from the University of Tolima, with a basic B1 level in English and intermediate
                        to advanced knowledge in networks and computers. I have 11 months of work experience as a Junior Frontend Developer,
                        specialized in the development and styling of web components using technologies such as HTML, CSS and JavaScript.
                        I have the skills to layout and design attractive and functional web interfaces, guaranteeing an optimal user experience.
                        I seek to contribute my technical knowledge and my capacity for continuous learning to the development of innovative solutions
                        in the technological field.
                    </p>
                </div>
                <div style={{ marginTop: "-350px", marginLeft: "1125px" }} className="flex flex-col absolute max-w-md">
                    <Photo />
                </div>
            </ContainerPage >
        </>
    );
}

export default PageAboutMe;