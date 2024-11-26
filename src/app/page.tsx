import { FramerViewer } from "@/components/FramerViewer";
import { redirect } from "next/navigation";
import {Metadata} from "next";

export const generateMetadata = async (): Promise<Metadata> => {
    const url = metadataConfig["cafe"].url;
    const encodedUrl = encodeURIComponent(url);
    const response = await fetch(`${process.env.BASE_URL}/api/metadata?url=${encodedUrl}`);
    const metadata = await response.json();
    return {
        title: metadata.title,
        description: metadata.description,
        openGraph: {
            title: metadata.ogTitle,
            description: metadata.ogDescription,
            images: [
                {
                    url: metadata.ogImage,
                    width: 800,
                    height: 600,
                },
            ],
        }
    };
};

const metadataConfig = JSON.parse(process.env.METADATA_CONFIG || "{}");

const Home = async () => {
    if (!metadataConfig["cafe"]) {
        redirect("/");
    }
    const url = metadataConfig["cafe"].url;

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
