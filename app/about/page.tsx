import Link from "next/link"
import Image from "next/image"

export default function AboutPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="grid gap-10 lg:grid-cols-2 items-center">
              <div className="space-y-4">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl">About Me</h1>
                <p className="text-gray-500 dark:text-gray-400 md:text-xl">
                Hello, my name is Debashish Boruah, currently working as a Software Engineer Trainee at Xopuntech India Pvt. Ltd
                </p>
                <p className="text-gray-500 dark:text-gray-400">
                I hold a Bachelor's degree in Information Technology from Assam Kaziranga University and a Master degree at computer Application (MCA) 
                from Dibrugarh University. As a passionate Mobile App Developer, I’ve had the opportunity to work on various client projects from 
                Singapore and the USA, which has broadened my perspective and strengthened my real-world development experience. Recently, 
                I also published an app called "Kheti-Bati", specifically designed to assist farmers — a project close to my heart and aimed 
                at contributing to the agricultural community.  In addition to Android development, I’m actively learning SwiftUI and building 
                iOS applications, expanding my skill set to become a well-rounded mobile developer. 
                </p>
                <p className="text-gray-500 dark:text-gray-400"> In addition to Android development, I’m actively learning SwiftUI and building 
                iOS applications, expanding my skill set to become a well-rounded mobile developer. </p>
              
                <p className="text-gray-500 dark:text-gray-400">
                I am genuinely excited about the opportunity 
                to work with you and bring value to your team. I’m confident that you won’t regret choosing me, and I look forward to hearing from you soon. Thank you!
                </p>
              </div>
              <div className="relative h-[300px] w-[300px] mx-auto overflow-hidden rounded-xl lg:order-last">
  <Image 
    src="/assets/myimg.jpg" 
    alt="Debashish Boruah" 
    width={300} 
    height={400} 
    className="object-cover" 
    priority
  />
</div>
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-50 dark:bg-gray-900">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">My Values</h2>
                <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                  The principles that guide my work and relationships
                </p>
              </div>
            </div>

            <div className="grid gap-8 mt-10 sm:grid-cols-2 lg:grid-cols-3">
              <div className="flex flex-col items-center text-center space-y-3 p-6 rounded-lg border">
                <div className="p-3 rounded-full bg-primary/10">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-6 w-6 text-primary"
                  >
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold">Quality</h3>
                <p className="text-gray-500 dark:text-gray-400">
                  I am committed to excellence in everything we create, from the smallest detail to the overall
                  experience.
                </p>
              </div>

              <div className="flex flex-col items-center text-center space-y-3 p-6 rounded-lg border">
                <div className="p-3 rounded-full bg-primary/10">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-6 w-6 text-primary"
                  >
                    <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z" />
                    <circle cx="12" cy="12" r="3" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold">Transparency</h3>
                <p className="text-gray-500 dark:text-gray-400">
                  I believe in open communication and honesty in all my client and team relationships.
                </p>
              </div>

              <div className="flex flex-col items-center text-center space-y-3 p-6 rounded-lg border">
                <div className="p-3 rounded-full bg-primary/10">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-6 w-6 text-primary"
                  >
                    <path d="M12 2v4" />
                    <path d="m6.41 6.41 2.83 2.83" />
                    <path d="M2 12h4" />
                    <path d="m6.41 17.59 2.83-2.83" />
                    <path d="M12 18v4" />
                    <path d="m17.59 17.59-2.83-2.83" />
                    <path d="M18 12h4" />
                    <path d="m17.59 6.41-2.83 2.83" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold">Innovation</h3>
                <p className="text-gray-500 dark:text-gray-400">
                  I constantly explore new ideas, technologies, and approaches to solve problems in creative ways.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">My Skills</h2>
                <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                  Technolgies I have worked on
                </p>
              </div>
            </div>

            <div className="grid gap-8 mt-10 sm:grid-cols-2 lg:grid-cols-4">
              <div className="flex flex-col items-center text-center space-y-3">
                <div className="relative h-40 w-40 overflow-hidden rounded-full">
                  <Image src="/assets/flutter-icon-2048x2048-ufx4idi8.png" alt="Flutter" fill className="object-cover" />
                </div>
                <div>
                  <h3 className="text-xl font-bold">Flutter</h3>
                  <p className="text-gray-500 dark:text-gray-400">6 Projects</p>
                </div>
              </div>

              <div className="flex flex-col items-center text-center space-y-3">
                <div className="relative h-40 w-40 overflow-hidden rounded-full">
                  <Image src="/assets/517264769259dgnjmuwrgtqcn0oihukljmpdmsfbs5jh7vre4b54boiymie7n4bdzwihntj6xqvbud8oar5puup4aoapuw87ujiwhgnfqfvmp8h.jpg" alt="Swift UI" fill className="object-cover" />
                </div>
                <div>
                  <h3 className="text-xl font-bold">Swift UI</h3>
                  <p className="text-gray-500 dark:text-gray-400">3 Projects</p>
                </div>
              </div>

              <div className="flex flex-col items-center text-center space-y-3">
                <div className="relative h-40 w-40 overflow-hidden rounded-full">
                  <Image src="/assets/new-next.webp" alt="Nextjs" fill className="object-cover" />
                </div>
                <div>
                  <h3 className="text-xl font-bold">Next Js</h3>
                  <p className="text-gray-500 dark:text-gray-400">5 Projects</p>
                </div>
              </div>

              <div className="flex flex-col items-center text-center space-y-3">
                <div className="relative h-40 w-40 overflow-hidden rounded-full">
                  <Image src="/assets/Screenshot 2025-04-10 at 11.34.23 PM.png" alt="UI/UX" fill className="object-cover" />
                </div>
                <div>
                  <h3 className="text-xl font-bold">UI/UX</h3>
                  <p className="text-gray-500 dark:text-gray-400">3 Project</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}

