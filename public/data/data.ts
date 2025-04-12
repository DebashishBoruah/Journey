import { Url } from "next/dist/shared/lib/router/router"
import { features } from "process"

export interface Project {
    slug: string
    title: string
    category: string
    imageSrc: string
    client: string
    date: string
    description: string
    features: string[]
    technologies : string[]
    images: string[]
    beforeImage: string
    afterImage: string
    liveUrl : Url
    youtubeUrl: string
    status : string
  }
  
  export const projects: Project[] = [
    {
      slug: "khetiBati",
      title: "Kheti Bati for IOS",
      category: "App Developement",
      imageSrc: "/assets/khetibati.jpg",
      client: "Client Project",
      date: "February 2025",
      description: "A comprehensive brand identity for an eco-friendly product company.",
      features: [" Expert Guidance: Connect with experienced mentors across various farming sectors.",
        "Personalized Resources: Get tailored farming advice based on your selected category.",
        "Weather & Market Updates: Receive real-time weather forecasts and mandi (market) details.",
        "Webinar & Plot Booking: Join informative webinars and rent plots effortlessly",
        "Localized Services: Enjoy region-specific recommendations in Assamese or English."
      ],
      technologies:[
        "Swift UI",
        "Rest APIs",
        "Xcode"
      ],
      images: [
        "/assets/project5/p5.1.jpg",
      ],
      beforeImage: "",
      afterImage: "",
      liveUrl: "",
      youtubeUrl:"",
      status:"Ongoing"
    },
    {
      slug: "MyPortfolio",
      title: "My Portfolio Website",
      category: "Web Design",
      imageSrc: "/assets/portfolio.jpg",
      client: "Self Project",
      date: "July 2024",
      description: "An interactive portfolio showcasing my skills in web development, design, and animation. Built with Tailwind CSS and powered by Framer Motion, it features both dark mode and light mode, along with the ability to translate into Japanese.",
      features: [
      "Translates to Japanese from English",
      "Change to Lightmode from Darkmode",
      "One tap voice introduction",
    ],
      technologies:[
      "Next.js",
      "Tailwind CSS",
      "Framer Motion"
      ],
      images: [
        "/assets/project1/p1.1.png",
        "/assets/project1/p1.4.png",
        "/assets/project1/p1.2.png",
        "/assets/project1/p1.3.png",
      ],
      beforeImage: "",
      afterImage: "",
      liveUrl: "https://portfolio-latest-three.vercel.app",
      youtubeUrl:"",
      status:"Published"
    },
    {
      slug: "axomWallet",
      title: "Axom Wallet",
      category: "App Developement",
      imageSrc: "/assets/axom_wallet.jpg",
      client: "Client Project",
      date: "June 2023",
      description: "A comprehensive brand identity for an eco-friendly product company.",
      features: [
      "Supports mobile, DTH, and other types of recharges.",
    "Introduced to overcome past limitations in fund transfer services",
    "Designed to be simple and intuitive."
    ],
      technologies:[
      "Flutter",
      "Rest APIs"
    ],
      images: [
        "/assets/project6/p6.1.jpg",
      ],
      beforeImage: "",
      afterImage: "",
      liveUrl: "",
      youtubeUrl:"",
      status:"Ongoing"
    },
    {
      slug: "khetiBatiAndroid",
      title: "Kheti Bati for Android",
      category: "App Developement",
      imageSrc: "/assets/khetibati_old.jpg",
      client: "Client Project",
      date: "June 2023",
      description: "A comprehensive brand identity for an eco-friendly product company.",
      features: [" Expert Guidance: Connect with experienced mentors across various farming sectors.",
        "Personalized Resources: Get tailored farming advice based on your selected category.",
        "Weather & Market Updates: Receive real-time weather forecasts and mandi (market) details.",
        "Webinar & Plot Booking: Join informative webinars and rent plots effortlessly",
        "Localized Services: Enjoy region-specific recommendations in Assamese or English."
      ],
      technologies:[
      "Flutter",
      "Rest APIs"
    ],
      images: [
      ],
      beforeImage: "",
      afterImage: "",
      liveUrl: "https://play.google.com/store/apps/details?id=com.xopuntech.kheti_bati_mvp&hl=en_IN",
      youtubeUrl:"",
      status:"Published"
    },
    {
        slug: "psquareRestro",
        title: "Psquare Restro",
        category: "Web Design",
        imageSrc: "/assets/project1.jpg",
        client: "Self Proejct",
        date: "June 2024",
        description: "The restaurant website is designed to offer visitors a warm and visually appealing experience, allowing them to explore the full range of offerings with ease. Users can browse high-quality images of dishes, each accompanied by a detailed description and price, making it easy to decide what to try before visiting. The menu is organized into clear categories such as starters, mains, desserts, and drinks, ensuring a smooth navigation experience. In addition to the menu, the website showcases the ambiance of the restaurant through a dedicated gallery page, featuring photos of the interior, events, and behind-the-scenes kitchen moments.",
        features: [
          "High-quality images of each dish with detailed descriptions",
          "Organized menu with clear pricing and categories (Starters, Mains, Desserts, Drinks)",
          "User-friendly theme switcher for day/night browsing",
          "Fully optimized for mobile, tablet, and desktop"
        ],
        technologies:[
          "HTML",
          "CSS",
          "Javascript"
        ],
        images: [
          "/assets/project2/p2.1.png",
          "/assets/project2/p2.2.png",
          "/assets/project2/p2.3.png",
          "/assets/project2/p2.4.png",
        ],
        beforeImage: "",
        afterImage: "",
        liveUrl: "https://debashishboruah.github.io/PSquare-Restro/",
        youtubeUrl:"",
         status:"Published"
      },
      {
        slug: "bloodlink",
        title: "Bloodlink App",
        category: "App Developement",
        imageSrc: "/assets/project3.jpg",
        client: "Self Project",
        date: "January 2024",
        description: "Bloodlink aims to provide a seamless and accessible solution for blood donation and request management through a cross-platform mobile application. By being available on both Android and iOS, Bloodlink ensures that any user, regardless of their device, can easily register as a donor, find potential donors, and request blood in times of need. This inclusivity maximizes the reach and impact of the app, making it a vital tool for enhancing the efficiency and reliability of blood donations within the community",
        features: [
        "Cross-Platform Development",
        "Implement a system for users to post blood donation requests, specifying details such as blood type, quantity needed, location, and urgency.",
        "Enable notifications and alerts for matching donors based on the specified criteria",
        "Develop a search functionality for users to find potential blood donors based on criteria such as blood type, location, and availability.",
        "Allow users to initiate phone calls, send SMS messages, or send emails by redirecting them to the corresponding apps on their device"
        ],
        technologies:[
        "Flutter",
        "Firebase",
         "Xcode"
      ],
        images: [
          "/assets/project3/Bloodlink1.jpg",
          "/assets/project3/Bloodlink2.jpg",
          "/assets/project3/Bloodlink3.jpg",
          "/assets/project3/Bloodlink4.jpg",
        ],
        beforeImage: "",
        afterImage: "",
        liveUrl: "",
        youtubeUrl:"https://youtu.be/POjFaYETqio",
        status:"Completed"
      },
      {
        slug: "ghibliStudioApp",
        title: "Ghibli Studio App",
        category: "App Developement",
        imageSrc: "/assets/project2.jpg",
        client: "Self Project",
        date: "June 2023",
        description: "In this project, I focused on delivering a seamless and immersive experience for fans to explore their favorite movies, characters, and more. From the intricate UI designs to the smooth functionality, every detail has been crafted with the magic of Studio Ghibli in mind.",
        features: ["Easily explore a curated collection of Studio Ghibli films by title or keyword.",
        "Users can create personalized playlists to keep track of their favorite films or plan future movie nights."],
        technologies:[
        "Flutter",
      "Firebase",
      "Xcode"
      ],
        images: [
          
        ],
        beforeImage: "",
        afterImage: "",
        liveUrl: "",
        youtubeUrl:"https://youtu.be/wF7ptz7Fzro",
         status:"Completed"
      },
      {
        slug: "devShort",
        title: "DevShort App",
        category: "App Developement",
        imageSrc: "/assets/dev_short.jpg",
        client: "Self Project",
        date: "June 2023",
        description: "In this project, I focused on delivering a seamless and immersive experience for fans to explore their favorite movies, characters, and more. From the intricate UI designs to the smooth functionality, every detail has been crafted with the magic of Studio Ghibli in mind.",
        features: ["Easily explore a curated collection of Studio Ghibli films by title or keyword.",
        "Users can create personalized playlists to keep track of their favorite films or plan future movie nights."],
        technologies:[
        "Flutter",
      "Rest APIs",
      "Xcode"
      ],
        images: [
          "/assets/project7/p7.1.jpg"
        ],
        beforeImage: "",
        afterImage: "",
        liveUrl: "",
        youtubeUrl:"",
         status:"Ongoing"
      },

      {
        slug: "RamenVlog",
        title: "Thumbnail Design for Ramen Making Vlog",
        category: "Thumbnail Design",
        imageSrc: "/assets/banner.png",
        client: "Self Project",
        date: "June 2023",
        description: "I’m taking on the Buldak Ramen Challenge—one of the spiciest instant noodles out there!  Will I be able to finish the whole bowl, or will the heat be too much to handle? Watch till the end to find out! 🍜",
        features: [],
        technologies:[],
        images: [],
        beforeImage: "",
        afterImage: "",
        liveUrl: "",
        youtubeUrl:"https://youtu.be/RLBPCi4ExII?si=FWbjBdv67exh3dAM",
         status:"Completed"
      },
      {
        slug: "groccery",
        title: "UI Design for a Groccery App",
        category: "UI/UX Design",
        imageSrc: "/assets/grocery_mokups copy.jpg",
        client: "Self Project",
        date: "June 2023",
        description: "A UI design for a grocery shopping application",
        features: [],
        technologies:["Figma"],
        images: ["/assets/grocery_mokups copy.jpg"],
        beforeImage: "",
        afterImage: "",
        liveUrl: "",
        youtubeUrl:"",
         status:"Completed"
      },
      {
        slug: "pondicherryVlog",
        title: "Thumbnail for Pondicherry Vlog",
        category: "Thumbnail Design",
        imageSrc: "/assets/pondicherry.jpg",
        client: "Self Project",
        date: "June 2023",
        description: "A thumbnail design my pondicherry youtube video",
        features: [],
        technologies:[],
        images: [],
        beforeImage: "",
        afterImage: "",
        liveUrl: "",
        youtubeUrl:"https://youtu.be/n1oXETXArLY?si=iUmGn1SWr1q8nzuv",
        status:"Completed"
      },
      {
        slug: "iosReplica",
        title: "Replica of IOS 17",
        category: "UI/UX Design",
        imageSrc: "/assets/ios_replica_mockupios_replica.png",
        client: "Self Project",
        date: "June 2023",
        description: "A replica design of IOS 17.",
        features: [],
        technologies:["Figma"],
        images: [
          "/assets/ios_replica_mockupios_replica.png",
        ],
        beforeImage: "",
        afterImage: "",
        liveUrl: "",
        youtubeUrl:"",
         status:"Completed"
      },
      {
        slug: "ngiNgaoKham",
        title: "Ngi Ngao Kham Elegance",
        category: "Web Design",
        imageSrc: "/assets/ngingaokham.jpg",
        client: "Self Project",
        date: "June 2023",
        description: "Ngi Ngao Kham Elegance is a traditional clothing platform dedicated to showcasing and selling beautiful Tai Ahom attire. The platform combines cultural richness with modern functionality, offering users a seamless shopping experience that honors tradition while embracing customization.",
        features: [
        "Explore a curated collection of authentic Tai Ahom garments, each reflecting the elegance and heritage of the community.",
      "Users can personalize their attire—selecting patterns, colors, and sizing—to create something truly unique and meaningful.",
      "Clean, elegant UI design inspired by traditional motifs, offering a smooth and intuitive user journey from discovery to checkout."
      ],
        technologies:["Next Js","Tailwind CSS"],
        images: [
          "/assets/project4/p4.1.png",
          "/assets/project4/p4.2.png",
          "/assets/project4/p4.3.png",
          "/assets/project4/p4.4.png",
        ],
        beforeImage: "",
        afterImage: "",
        liveUrl: "",
        youtubeUrl:"",
        status:"Ongoing"
      },
      {
        slug: "ghibliStudioUI",
        title: "UI Design for Ghibli Studio App",
        category: "UI/UX Design",
        imageSrc: "/assets/mockup.png",
        client: "Self Project",
        date: "June 2023",
        description: "A comprehensive brand identity for an eco-friendly product company.",
        features: [],
        technologies:[],
        images: [
         "/assets/mockup.png"],
        beforeImage: "",
        afterImage: "",
        liveUrl: "",
        youtubeUrl:"",
         status:"Completed"
      },
      // {
      //   slug: "RamenYa",
      //   title: "Ramen Ya",
      //   category: "Web Design",
      //   imageSrc: "/assets/ramenYa.jpg",
      //   client: "Self Project",
      //   date: "June 2023",
      //   description: "A comprehensive brand identity for an eco-friendly product company.",
      //   features: [""],
      //   technologies:[""],
      //   images: [
      //     "/placeholder.svg",
      //     "/placeholder.svg",
      //     "/placeholder.svg",
      //     "/placeholder.svg",
      //   ],
      //   beforeImage: "/placeholder.svg",
      //   afterImage: "/placeholder.svg",
      //   liveUrl: "",
      //   youtubeUrl:"",
      //    status:"Ongoing"
      // },
      
     
      // {
      //   slug: "helloKitty",
      //   title: "Hello Kity Web Design",
      //   category: "Web Design",
      //   imageSrc: "/assets/HelloKitty.jpg",
      //   client: "Self Project",
      //   date: "June 2023",
      //   description: "A comprehensive brand identity for an eco-friendly product company.",
      //   features: [""],
      //   technologies:[""],
      //   images: [
      //     "/placeholder.svg",
      //     "/placeholder.svg",
      //     "/placeholder.svg",
      //     "/placeholder.svg",
      //   ],
      //   beforeImage: "/placeholder.svg",
      //   afterImage: "/placeholder.svg",
      //   liveUrl: "",
      //   youtubeUrl:"",
      //   status:"Completed"
      // },
      
   
  ]