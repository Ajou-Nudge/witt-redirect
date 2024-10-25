import {FramerViewer} from "@/components/FramerViewer";
import {Metadata} from "next";

export const generateMetadata = async (): Promise<Metadata> => {
    const title = process.env.NEXT_PUBLIC_ROOT_TITLE;
    const description = process.env.NEXT_PUBLIC_ROOT_DESCRIPTION;
    return {
        title: title,
        description: description,
    }
}

const Home = () => {
    const url = process.env.NEXT_PUBLIC_ROOT_URL;

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
