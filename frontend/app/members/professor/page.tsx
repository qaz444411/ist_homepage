import { Mail, GraduationCap } from "lucide-react"
import { User } from "lucide-react"

export default function ProfessorPage() {
  const professor = {
    name: "정동원",
    title: "Professor",
    image: "/placeholder.svg?height=300&width=240",
    research: "데이터베이스, 모빌리티",
    email: "professor@kunsan.ac.kr",
    homepage: "https://sites.google.com/site/withimp/home?authuser=0",
    education: [
      "Ph.D. in Computer Science, KAIST (2005)",
      "M.S. in Computer Science, KAIST (2001)",
      "B.S. in Computer Science, Seoul National University (1999)"
    ],
    career: [
      "Professor, Kunsan National University (2010 - Present)",
      "Associate Professor, Kunsan National University (2006 - 2010)",
      "Assistant Professor, Kunsan National University (2005 - 2006)",
      "Research Engineer, Samsung Electronics (2001 - 2005)"
    ],
    interests: [
      "Database Systems",
      "Big Data Processing",
      "Smart Mobility Systems",
      "IoT Data Management",
      "Machine Learning for Databases"
    ]
  }

  return (
    <section className="py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-blue-700 mb-4">Professor</h2>
          <div className="w-24 h-1 bg-blue-700 mx-auto mb-6"></div>
        </div>

        <div className="flex justify-center">
          <div className="bg-white rounded-lg shadow-xl p-8 max-w-5xl w-full">
            <div className="grid lg:grid-cols-2 gap-12 items-start">
              {/* Left: Photo and Basic Info */}
              <div className="text-center">
                <div className="w-64 h-64 mx-auto mb-6 bg-gray-200 rounded-full flex items-center justify-center">
                  <User className="w-32 h-32 text-gray-400" />
                </div>
                <h4 className="text-3xl font-bold text-gray-800 mb-4">{professor.name}</h4>
                <p className="text-blue-600 font-medium text-xl mb-6">{professor.title}</p>
                <div className="space-y-4 text-lg text-gray-600">
                  <div className="flex items-center justify-center">
                    <Mail className="w-6 h-6 mr-3" />
                    <span>{professor.email}</span>
                  </div>
                  <div className="flex items-center justify-center mt-6">
                    <a
                      href={professor.homepage}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-blue-700 text-white px-8 py-3 rounded-lg hover:bg-blue-800 transition-colors text-lg font-medium"
                    >
                      [홈페이지]
                    </a>
                  </div>
                </div>
              </div>

              {/* Right: Detailed Information */}
              <div className="space-y-8">
                {/* Education */}
                <div>
                  <h5 className="text-2xl font-bold text-blue-700 mb-4 flex items-center">
                    <GraduationCap className="w-6 h-6 mr-3" />
                    Education
                  </h5>
                  <div className="space-y-2">
                    {professor.education.map((edu, index) => (
                      <p key={index} className="text-gray-700 text-lg">{edu}</p>
                    ))}
                  </div>
                </div>

                {/* Career */}
                <div>
                  <h5 className="text-2xl font-bold text-blue-700 mb-4">Career</h5>
                  <div className="space-y-2">
                    {professor.career.map((career, index) => (
                      <p key={index} className="text-gray-700 text-lg">{career}</p>
                    ))}
                  </div>
                </div>

                {/* Research Interests */}
                <div>
                  <h5 className="text-2xl font-bold text-blue-700 mb-4">Research Interests</h5>
                  <div className="grid grid-cols-1 gap-2">
                    {professor.interests.map((interest, index) => (
                      <div key={index} className="flex items-center">
                        <div className="w-2 h-2 bg-blue-700 rounded-full mr-3"></div>
                        <p className="text-gray-700 text-lg">{interest}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}