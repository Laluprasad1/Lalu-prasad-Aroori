export const portfolioData = {
  profile: {
    name: "Lalu Prasad Aroori",
    title: "AI/ML Enthusiast · Cloud Computing · Web Developer",
    email: "aroorilaluprasad@gmail.com",
    phone: "+91 7013716541",
    linkedin: "https://www.linkedin.com/in/lalu-prasad-aroori",
    github: "https://github.com/Laluprasad1",
    resume: "/Lalu prasad_Aroori.pdf",
    image: "/profile-image.jpg", // Add your profile image here
    bio: "Passionate AI/ML enthusiast with expertise in cloud computing and web development. I love creating innovative solutions that bridge the gap between cutting-edge technology and real-world applications."
  },

  skills: [
    { name: "Python", percentage: 90, category: "Programming" },
    { name: "Java", percentage: 75, category: "Programming" },
    { name: "HTML/CSS/JS", percentage: 85, category: "Web Development" },
    { name: "React", percentage: 80, category: "Web Development" },
    { name: "Tailwind CSS", percentage: 78, category: "Web Development" },
    { name: "Machine Learning", percentage: 82, category: "AI/ML" },
    { name: "Cloud (AWS, GCP)", percentage: 70, category: "Cloud Computing" }
  ],

  projects: [
    {
      id: 1,
      title: "Beyond Expressions — Anveshan 2025",
      description: "Advanced research project utilizing deep learning models to analyze human emotions and social behavior patterns. Implemented state-of-the-art NLP techniques for comprehensive emotional intelligence analysis.",
      technologies: ["AI", "NLP", "Deep Learning", "Python", "TensorFlow"],
      category: "AI/ML Research",
      image: "/project-beyond-expressions.jpg",
      demoUrl: "#",
      githubUrl: "#",
      featured: true,
      details: {
        overview: "A comprehensive research project focused on understanding human emotions through advanced AI techniques.",
        challenges: "Processing complex emotional data and creating accurate behavioral prediction models.",
        solutions: "Implemented ensemble deep learning models with custom NLP pipelines for enhanced accuracy.",
        impact: "Achieved 87% accuracy in emotion detection and provided insights into social behavior patterns."
      }
    },
    {
      id: 2,
      title: "AI Banner Generation",
      description: "Innovative generative AI tool that automatically creates custom banners using computer vision and machine learning algorithms. Features intelligent design suggestions and automated layout optimization.",
      technologies: ["Generative AI", "Computer Vision", "Python", "OpenCV", "PIL"],
      category: "Generative AI",
      image: "/project-ai-banner.jpg",
      demoUrl: "#",
      githubUrl: "#",
      featured: true,
      details: {
        overview: "An AI-powered tool that generates professional banners automatically based on user requirements.",
        challenges: "Creating visually appealing designs while maintaining brand consistency and readability.",
        solutions: "Developed custom GAN models with style transfer techniques for diverse design generation.",
        impact: "Reduced banner creation time by 80% while maintaining professional design standards."
      }
    },
    {
      id: 3,
      title: "Resume Spark",
      description: "Interactive resume builder web application powered by AI suggestions. Features real-time editing, multiple templates, and intelligent content recommendations based on industry standards.",
      technologies: ["React", "Node.js", "AI", "Web Development", "MongoDB"],
      category: "Web Application",
      image: "/project-resume-spark.jpg",
      demoUrl: "#",
      githubUrl: "#",
      featured: true,
      details: {
        overview: "A smart resume builder that helps users create professional resumes with AI-powered suggestions.",
        challenges: "Providing relevant suggestions while maintaining user creativity and personal branding.",
        solutions: "Integrated NLP models for content analysis and recommendation engine for personalized suggestions.",
        impact: "Helped 500+ users create professional resumes with 95% user satisfaction rate."
      }
    }
  ],

  experience: [
    {
      id: 1,
      type: "internship",
      title: "Machine Learning Intern",
      company: "Tech Innovation Labs",
      duration: "Jun 2024 - Aug 2024",
      description: "Developed ML models for predictive analytics and worked on computer vision projects.",
      technologies: ["Python", "TensorFlow", "OpenCV", "Pandas"]
    },
    {
      id: 2,
      type: "certificate",
      title: "AWS Cloud Practitioner",
      issuer: "Amazon Web Services",
      date: "March 2024",
      credentialId: "AWS-CCP-2024-001",
      description: "Comprehensive understanding of AWS cloud services and architecture."
    },
    {
      id: 3,
      type: "certificate",
      title: "Google Cloud Associate",
      issuer: "Google Cloud",
      date: "January 2024",
      credentialId: "GCP-ACE-2024-001",
      description: "Proficiency in Google Cloud Platform services and deployment strategies."
    }
  ],

  socialLinks: [
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/lalu-prasad-aroori",
      icon: "linkedin"
    },
    {
      name: "GitHub",
      url: "https://github.com/Laluprasad1",
      icon: "github"
    },
    {
      name: "Email",
      url: "mailto:aroorilaluprasad@gmail.com",
      icon: "mail"
    }
  ]
};

export const navigationLinks = [
  { name: "Home", href: "#home" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Experience", href: "#experience" }
];