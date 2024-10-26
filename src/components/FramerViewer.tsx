
interface Props {
    url: string;
}

export const FramerViewer = ({ url }: Props) => {
    return (
        <iframe
            src={url}
            style={{height: '100%', width: '100%', border: 'none'}}
            title="witt"
        />
    );
}
