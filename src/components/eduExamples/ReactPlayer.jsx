import { useRef, useState } from "react"

export default function VideoPlayer({ src, width = '100%', height = '360px' }) {
    if (!src) return null

    const [playing, setPlaying] = useState(false)
    const videoRef = useRef(null)

    const isYouTube = /(?:youtube\.com\/watch\?v=|youtu\.be\/)/i.test(src);

    // YouTube
    if (isYouTube) {
        const match = src.match(/(?:v=|\/)([A-Za-z0-9_-]{11})/);
        const id = match ? match[1] : null;
        const embed = id ? `https://www.youtube.com/embed/${id}?autoplay=${playing ? 1 : 0}` : src;

        return (
        <div>
            <iframe
            src={embed}
            title="youtube-player"
            width={width}
            height={height}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            />
            <button onClick={() => setPlaying(!playing)} style={{ marginTop: "10px" }}>
            {playing ? "Pause" : "Play"}
            </button>
        </div>
        );
    }

    const handlePlayPause = () => {
        if (!videoRef.current) return
        if (playing) {
            videoRef.current.pause()
        } else {
            videoRef.current.play()
        }
        setPlaying(!playing)
    }

    return (
        <div>
            <video
                src={src}
                ref={videoRef}
                width={width}
                height={height}
                controls
                style={{ display: "block" }}
            ></video>
            <button onClick={handlePlayPause} style={{ margin: "10px" }}>
                {playing ? "Pause" : "Play"}
            </button>
        </div>
    )
}