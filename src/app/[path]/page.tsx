import {FramerViewer} from "@/components/FramerViewer";
import {Metadata} from "next";
import { redirect } from "next/navigation";

export const generateMetadata = async ({ params }): Promise<Metadata> => {
    let title, description;
    switch (params.path) {
        case "firm":
            title = process.env.NEXT_PUBLIC_FIRM_TITLE;
            description = process.env.NEXT_PUBLIC_FIRM_DESCRIPTION;
            break;
        default:
            title = process.env.NEXT_PUBLIC_ROOT_TITLE;
            description = process.env.NEXT_PUBLIC_ROOT_DESCRIPTION;
            break;
    }
    return {
        title: title,
        description: description,
    }
}

const Home = ({ params }) => {
    if (params.path != "firm") {
        redirect("/");
    }

    let url;
    switch (params.path) {
        case "firm":
            url = process.env.NEXT_PUBLIC_FIRM_URL;
            break;
        default:
            url = process.env.NEXT_PUBLIC_ROOT_URL;
            break;
    }

    return (
            <div style={{ height: '100vh', width: '100vw', overflow: 'hidden' }}>
                {url ? (
                    <FramerViewer url={url} />
                ) : (
                    <p>Loading...</p>
                )}
            </div>
    );
};

export default Home;
