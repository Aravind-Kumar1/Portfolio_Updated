import ProjectGallery from "@/components/sections/project-gallery"
import ContactPreview from "@/components/sections/contact-preview";

export default function ProjectsPage() {
    return (
        <main className="min-h-screen">
            <div className="pt-24 sm:pt-32">
                <div className="container mx-auto px-4 sm:px-6">
                    <div className="w-full mx-auto bg-blue-600 rounded-2xl">
                        <div className="h-48 sm:h-80 md:h-96 flex items-center px-4 sm:px-8 md:px-12 lg:px-16">
                                <p className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl text-white text-left w-full leading-snug sm:leading-tight lg:leading-[1.2] xl:leading-[1.3]"

                                style={{fontFamily: 'Poppins', fontWeight: '300'}}>
                                <span className="block">Every project is a collaboration.</span>
                                <span className="block">Ideas into reality through</span>
                                <span className="block">thoughtful design</span>
                            </p>
                        </div>
                    </div>
                </div>
                <div className="container mx-auto px-4 sm:px-6 py-8 sm:py-12 md:py-16 w-full">
                <ProjectGallery />
                </div>
                {/*<ContactPreview />*/}
            </div>
        </main>
    )
}