export const Podcast = ({ episode }) => {
    return (
        <iframe 
            src={`https://open.spotify.com/embed/episode/${episode}`}
            width="100%" 
            height="352" 
            frameBorder="0"
            allowTransparency="true"
            allow="encrypted-media;"
        ></iframe>
    )
}