import Link from "next/link"
import Image from "next/image"
import { ArrowLeft, Calendar, User } from "lucide-react"
import { Button } from "@/components/ui/button"
import { BeforeAfterSlider } from "@/components/before-after-slider"
import { projects } from "@/public/data/data"
import { notFound } from "next/navigation"

export default function ProjectPage({ params }: { params: { slug: string } }) {
  const project = projects.find(p => p.slug === params.slug)
  
  // If project not found, return 404
  if (!project) {
    return notFound()
  }

  const currentIndex = projects.findIndex(p => p.slug === params.slug)
  const prevProject = currentIndex > 0 ? projects[currentIndex - 1] : null
  const nextProject = currentIndex < projects.length - 1 ? projects[currentIndex + 1] : null

  // Function to extract YouTube ID from URL
  const getYouTubeId = (url: string) => {
    const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
    const match = url.match(regExp);
    return (match && match[2].length === 11) ? match[2] : null;
  }

  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <Link href="/portfolio" className="inline-flex items-center gap-1 mb-8 hover:underline">
              <ArrowLeft className="h-4 w-4" />
              Back to Portfolio
            </Link>

            <div className="grid gap-10 lg:grid-cols-[2fr_1fr]">
              <div>
                <div className="space-y-4">
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">{project.title}</h1>
                  <p className="text-gray-500 dark:text-gray-400 md:text-xl">{project.description}</p>
                </div>

                <div className="mt-8 relative aspect-video overflow-hidden rounded-lg">
                  <Image
                    src={project.imageSrc || "/placeholder.svg"}
                    alt={project.title}
                    fill
                    className="object-cover"
                    priority
                  />
                </div>
              </div>

              <div className="space-y-6">
                <div className="rounded-lg border p-4">
                  <h3 className="font-semibold mb-4">Project Details</h3>
                  <div className="space-y-3">
                    <div className="flex items-center gap-2">
                      <div className="font-medium">Category:</div>
                      <div>{project.category}</div>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="font-medium">Client:</div>
                      <div className="flex items-center gap-1">
                        <User className="h-4 w-4" />
                        {project.client}
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="font-medium">Date:</div>
                      <div className="flex items-center gap-1">
                        <Calendar className="h-4 w-4" />
                        {project.date}
                      </div>
                    </div>
                  </div>
                </div>

                {project.liveUrl && (
                  <Link href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                    <Button className="w-full">View Live Project</Button>
                  </Link>
                )}
              </div>
            </div>

          
            <div className="mt-16 space-y-10">
  <div className="grid gap-10 lg:grid-cols-2">
    {project.features && project.features.length > 0 && (
      <div className="space-y-4">
        <h2 className="text-2xl font-bold">Features</h2>
        <ul className="text-gray-500 dark:text-gray-400 list-disc pl-5 space-y-2">
          {project.features.map((feature, index) => (
            <li key={index}>{feature}</li>
          ))}
        </ul>
      </div>
    )}
    
    {project.technologies && project.technologies.length > 0 && (
      <div className="space-y-4">
        <h2 className="text-2xl font-bold">Technologies Used</h2>
        <ul className="text-gray-500 dark:text-gray-400 list-disc pl-5 space-y-2">
          {project.technologies.map((tech, index) => (
            <li key={index}>{tech}</li>
          ))}
        </ul>
      </div>
    )}
  </div>




              {/* YouTube Video Section */}
              {project.youtubeUrl && (
                <div className="space-y-6">
                  <h2 className="text-2xl font-bold">Project Video</h2>
                  <div className="relative aspect-video w-full overflow-hidden rounded-lg">
                    <iframe
                      className="w-full h-full"
                      src={`https://www.youtube.com/embed/${getYouTubeId(project.youtubeUrl)}`}
                      title="YouTube video player"
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    />
                  </div>
                </div>
              )}

              {project.beforeImage && project.afterImage && (
                <div className="space-y-6">
                  <h2 className="text-2xl font-bold">Before & After</h2>
                  <BeforeAfterSlider
                    beforeImage={project.beforeImage}
                    afterImage={project.afterImage}
                    beforeLabel="Before"
                    afterLabel="After"
                  />
                </div>
              )}

{project.images  && project.technologies.length > 0 && (
  <div className="space-y-6">
                <h2 className="text-2xl font-bold">Project Gallery</h2>
                <div className="grid gap-6 sm:grid-cols-2">
                  {project.images.map((image, index) => (
                    <div key={index} className="relative aspect-video overflow-hidden rounded-lg">
                      <Image
                        src={image || "/placeholder.svg"}
                        alt={`Project image ${index + 1}`}
                        fill
                        className="object-cover"
                      />
                    </div>
                  ))}
                </div>
              </div>
)}

              <div className="flex justify-between items-center pt-10 border-t">
                {prevProject ? (
                  <Link href={`/portfolio/${prevProject.slug}`}>
                    <Button variant="outline" className="gap-1">
                      <ArrowLeft className="h-4 w-4" />
                      Previous Project
                    </Button>
                  </Link>
                ) : (
                 <div></div>
                )}
                {nextProject && (
                  <Link href={`/portfolio/${nextProject.slug}`}>
                    <Button variant="outline" className="gap-1">
                      Next Project
                      <ArrowLeft className="h-4 w-4 rotate-180" />
                    </Button>
                  </Link>
                )}
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}

// Generate static paths for SSG
export async function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }))
}