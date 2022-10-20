export const Youtube = ({ id }) => {
    <iframe 
        width="560" 
        height="315" 
        src={`https://www.youtube.com/embed/${id}`}
        title="YouTube video player" 
        frameborder="0" 
        allowTransparency="true"
        allow="encrypted-media;" 
        allowfullscreen>
    </iframe>

}