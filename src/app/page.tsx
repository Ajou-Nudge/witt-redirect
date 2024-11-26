import { FramerViewer } from "@/components/FramerViewer";
import { redirect } from "next/navigation";
import {Metadata} from "next";

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
