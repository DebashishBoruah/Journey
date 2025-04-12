import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Mail, MapPin, Phone } from "lucide-react"

export default function ContactPage() {
  return (
    <div className="flex flex-col min-h-screen">
      
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl">Get in Touch</h1>
                <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                  Have a project in mind? We'd love to hear from you.
                </p>
              </div>
            </div>

            <div className="mx-auto grid max-w-5xl gap-10 lg:grid-cols-2 items-start mt-10">
              <div className="space-y-8">
                <div className="flex items-start space-x-4">
                  <MapPin className="h-6 w-6 text-primary" />
                  <div>
                    <h3 className="font-bold">Our Location</h3>
                    <p className="text-gray-500 dark:text-gray-400">
                      123 Design Street
                      <br />
                      Creative District
                      <br />
                      New York, NY 10001
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <Mail className="h-6 w-6 text-primary" />
                  <div>
                    <h3 className="font-bold">Email Us</h3>
                    <p className="text-gray-500 dark:text-gray-400">
                      hello@creativestudio.com
                      <br />
                      info@creativestudio.com
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <Phone className="h-6 w-6 text-primary" />
                  <div>
                    <h3 className="font-bold">Call Us</h3>
                    <p className="text-gray-500 dark:text-gray-400">
                      +1 (555) 123-4567
                      <br />
                      Mon-Fri, 9am-6pm EST
                    </p>
                  </div>
                </div>

                <div className="rounded-lg overflow-hidden h-[300px] w-full">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d193595.15830869428!2d-74.11976397304605!3d40.69766374874431!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2sca!4v1650309612271!5m2!1sen!2sca"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen={false}
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  ></iframe>
                </div>
              </div>

              <div className="space-y-6 border rounded-lg p-6">
                <div className="space-y-2">
                  <h2 className="text-2xl font-bold">Send Us a Message</h2>
                  <p className="text-gray-500 dark:text-gray-400">
                    Fill out the form below and we'll get back to you as soon as possible.
                  </p>
                </div>

                <form className="space-y-4">
                  <div className="grid gap-4 sm:grid-cols-2">
                    <div className="space-y-2">
                      <label
                        htmlFor="first-name"
                        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                      >
                        First name
                      </label>
                      <Input id="first-name" placeholder="John" />
                    </div>
                    <div className="space-y-2">
                      <label
                        htmlFor="last-name"
                        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                      >
                        Last name
                      </label>
                      <Input id="last-name" placeholder="Doe" />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label
                      htmlFor="email"
                      className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    >
                      Email
                    </label>
                    <Input id="email" placeholder="john.doe@example.com" type="email" />
                  </div>

                  <div className="space-y-2">
                    <label
                      htmlFor="subject"
                      className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    >
                      Subject
                    </label>
                    <Input id="subject" placeholder="Project Inquiry" />
                  </div>

                  <div className="space-y-2">
                    <label
                      htmlFor="message"
                      className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    >
                      Message
                    </label>
                    <Textarea id="message" placeholder="Tell us about your project..." className="min-h-[150px]" />
                  </div>

                  <Button type="submit" className="w-full">
                    Send Message
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}

