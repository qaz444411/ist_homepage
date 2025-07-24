import { Mail } from "lucide-react"

export default function ResearchersPage() {
  const researchers = [
    {
      name: "장원지에",
      image: "/placeholder.svg?height=200&width=200",
      research: "석사과정",
      email: "phd@kunsan.ac.kr",
    },
    {
      name: "유동주",
      image: "/placeholder.svg?height=200&width=200",
      research: "학부생",
      email: "masters@kunsan.ac.kr",
    },
    {
      name: "임성진",
      image: "/placeholder.svg?height=200&width=200",
      research: "학부생",
      email: "undergrad@kunsan.ac.kr",
    },
    {
      name: "이석호",
      image: "/placeholder.svg?height=200&width=200",
      research: "학부생",
      email: "undergrad@kunsan.ac.kr",
    },
     {
      name: "권세종",
      image: "/placeholder.svg?height=200&width=200",
      research: "학부생",
      email: "undergrad@kunsan.ac.kr",
    },
     {
      name: "이윤주",
      image: "/placeholder.svg?height=200&width=200",
      research: "학부생",
      email: "undergrad@kunsan.ac.kr",
    },
     {
      name: "고운별",
      image: "/placeholder.svg?height=200&width=200",
      research: "학부생",
      email: "undergrad@kunsan.ac.kr",
    },
     {
      name: "함인수",
      image: "/placeholder.svg?height=200&width=200",
      research: "학부생",
      email: "undergrad@kunsan.ac.kr",
    },
     {
      name: "최동혁",
      image: "/placeholder.svg?height=200&width=200",
      research: "학부생",
      email: "undergrad@kunsan.ac.kr",
    },
  
  ]

  return (
    <section className="py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-blue-700 mb-4">Researchers</h2>
          <div className="w-24 h-1 bg-blue-700 mx-auto mb-6"></div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {researchers.map((person, personIndex) => (
            <div
              key={personIndex}
              className="bg-white rounded-lg shadow-lg p-8 text-center hover:shadow-xl transition-shadow"
            >
              <div className="w-32 h-32 mx-auto mb-6 overflow-hidden rounded-full">
                <img
                  src={person.image || "/placeholder.svg"}
                  alt={person.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <h5 className="text-xl font-bold text-blue-700 mb-3">{person.name}</h5>
              <p className="text-gray-600 mb-3">{person.research}</p>
              <div className="flex items-center justify-center text-gray-600">
                <Mail className="w-5 h-5 mr-2" />
                <span>{person.email}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}