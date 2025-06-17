"use client";

export default function Services() {
    return (
        <section className="relative w-full lg:h-screen overflow-hidden px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16">
            {/* Video Background */}
            <div className="relative w-full lg:h-full rounded-lg lg:rounded-xl overflow-hidden">
                <video
                    className="w-full h-auto lg:absolute lg:top-0 lg:left-0 lg:w-full lg:h-full rounded-lg lg:rounded-xl"
                    autoPlay
                    muted
                    loop
                    playsInline
                    preload="metadata"
                    controls={false}
                    style={{
                        objectFit: 'cover',
                        objectPosition: 'center center',
                        width: '100%',
                        display: 'block',
                    }}
                >
                    <source src="/sri-sec.webm" type="video/webm" />
                    <source src="/sri-sec.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                </video>

                {/* Dark Overlay */}
                <div className="absolute inset-0 bg-black/20 z-10 lg:block hidden" />
            </div>
        </section>
    );
}