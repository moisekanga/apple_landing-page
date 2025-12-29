import { useEffect, useRef } from "react";

const Hero = () => {

    const videoRef = useRef<HTMLVideoElement>(null);

    useEffect(() => {
        if (videoRef.current) videoRef.current.playbackRate = 2;
    }
    , [])
    return (
        <section id = "hero" className="py-100">
            <div>
                <h1>MackBook Pro</h1>
                <img src="/title.png" alt="Macbook Pro Title" />
            </div>

            <video src="/videos/hero.mp4" autoPlay muted playsInline ref={videoRef}/>
            <button>Buy</button>
            <p>From $1999 or $169.12/mo. for 12 mo.*</p>
        </section>
    )
}

export default Hero;