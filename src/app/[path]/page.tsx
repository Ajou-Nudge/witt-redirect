import { FramerViewer } from "@/components/FramerViewer";
import { Metadata } from "next";
import { redirect } from "next/navigation";

interface Params {
    path: string;
}

export const generateMetadata = async ({ params }: { params: Params }): Promise<Metadata> => {
    let title, description;
    switch (params.path) {
        case "firm":
            title = process.env.NEXT_PUBLIC_FIRM_TITLE;
            description = process.env.NEXT_PUBLIC_FIRM_DESCRIPTION;
            break;
        case "test":
            title = process.env.NEXT_PUBLIC_TEST_TITLE;
            description = process.env.NEXT_PUBLIC_TEST_DESCRIPTION;
            break;
        default:
            title = process.env.NEXT_PUBLIC_ROOT_TITLE;
            description = process.env.NEXT_PUBLIC_ROOT_DESCRIPTION;
            break;
    }
    return {
        title: title || "Default Title",
        description: description || "Default Description",
    };
};

const Home = ({ params }: { params: Params }) => {
    const { path } = params;

    if (path !== "firm" && path !== "test") {
        redirect("/");
    }

    let url = "";
    switch (params.path) {
        case "firm":
            url = process.env.NEXT_PUBLIC_FIRM_URL;
            break;
        case "test":
            url = process.env.NEXT_PUBLIC_TEST_URL;
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
