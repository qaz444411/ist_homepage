import { Mail } from "lucide-react"

export default function AlumniPage() {
  // 변수명도 소문자 alumni 로 변경
  const alumni = [
    {
      name: "최명회",
      image: "/placeholder.svg?height=200&width=200",
      research: "",
      email: "graduate1@example.com",
      graduation: "", 
      currentPosition: "",
    },
    {
      name: "김종성",
      image: "/placeholder.svg?height=200&width=200",
      research: "",
      email: "graduate2@example.com",
      graduation: "",
      currentPosition: "",
    },
    {
      name: "정혜진",
      image: "/placeholder.svg?height=200&width=200",
      research: "",
      email: "graduate2@example.com",
      graduation: "2022년 졸업",
      currentPosition: "",
    },
    {
      name: "송원용",
      image: "/placeholder.svg?height=200&width=200",
      research: "",
      email: "graduate2@example.com",
      graduation: "2022년 졸업",
      currentPosition: "",
    },
    {
      name: "지종진",
      image: "/placeholder.svg?height=200&width=200",
      research: "",
      email: "graduate2@example.com",
      graduation: "2022년 졸업",
      currentPosition: "",
    },
    {
      name: "황인탁",
      image: "/placeholder.svg?height=200&width=200",
      research: "",
      email: "graduate2@example.com",
      graduation: "2022년 졸업",
      currentPosition: "",
    },
    {
      name: "박용구",
      image: "/placeholder.svg?height=200&width=200",
      research: "",
      email: "graduate2@example.com",
      graduation: "2022년 졸업",
      currentPosition: "",
    },
    {
      name: "두미경",
      image: "/placeholder.svg?height=200&width=200",
      research: "",
      email: "graduate2@example.com",
      graduation: "2022년 졸업",
      currentPosition: "",
    },
    {
      name: "박혜민",
      image: "/placeholder.svg?height=200&width=200",
      research: "",
      email: "graduate2@example.com",
      graduation: "2022년 졸업",
      currentPosition: "",
    },
    {
      name: "배정환",
      image: "/placeholder.svg?height=200&width=200",
      research: "",
      email: "graduate2@example.com",
      graduation: "2022년 졸업",
      currentPosition: "",
    },
    {
      name: "김은정",
      image: "/placeholder.svg?height=200&width=200",
      research: "",
      email: "graduate2@example.com",
      graduation: "2022년 졸업",
      currentPosition: "",
    },
    {
      name: "임지희",
      image: "/placeholder.svg?height=200&width=200",
      research: "",
      email: "graduate2@example.com",
      graduation: "2022년 졸업",
      currentPosition: "",
    },
    {
      name: "민주홍",
      image: "/placeholder.svg?height=200&width=200",
      research: "",
      email: "graduate2@example.com",
      graduation: "2022년 졸업",
      currentPosition: "",
    },
    {
      name: "천주희",
      image: "/placeholder.svg?height=200&width=200",
      research: "",
      email: "graduate2@example.com",
      graduation: "2022년 졸업",
      currentPosition: "",
    },
    {
      name: "서국화",
      image: "/placeholder.svg?height=200&width=200",
      research: "",
      email: "graduate2@example.com",
      graduation: "2022년 졸업",
      currentPosition: "",
    },
    {
      name: "이은숙",
      image: "/placeholder.svg?height=200&width=200",
      research: "",
      email: "graduate2@example.com",
      graduation: "2022년 졸업",
      currentPosition: "",
    },
    {
      name: "한상준",
      image: "/placeholder.svg?height=200&width=200",
      research: "",
      email: "graduate2@example.com",
      graduation: "2022년 졸업",
      currentPosition: "",
    },
    {
      name: "유명훈",
      image: "/placeholder.svg?height=200&width=200",
      research: "",
      email: "graduate2@example.com",
      graduation: "2022년 졸업",
      currentPosition: "",
    },
    {
      name: "양승혁",
      image: "/placeholder.svg?height=200&width=200",
      research: "",
      email: "graduate2@example.com",
      graduation: "2022년 졸업",
      currentPosition: "",
    },
    {
      name: "유영진",
      image: "/placeholder.svg?height=200&width=200",
      research: "",
      email: "graduate2@example.com",
      graduation: "2022년 졸업",
      currentPosition: "",
    },
    {
      name: "최우근",
      image: "/placeholder.svg?height=200&width=200",
      research: "",
      email: "graduate2@example.com",
      graduation: "2022년 졸업",
      currentPosition: "",
    },
    {
      name: "최호진",
      image: "/placeholder.svg?height=200&width=200",
      research: "",
      email: "graduate2@example.com",
      graduation: "2022년 졸업",
      currentPosition: "",
    },
    {
      name: "유현석",
      image: "/placeholder.svg?height=200&width=200",
      research: "",
      email: "graduate2@example.com",
      graduation: "2022년 졸업",
      currentPosition: "",
    },
    {
      name: "김찬중",
      image: "/placeholder.svg?height=200&width=200",
      research: "",
      email: "graduate2@example.com",
      graduation: "2022년 졸업",
      currentPosition: "",
    },
    {
      name: "문선예",
      image: "/placeholder.svg?height=200&width=200",
      research: "",
      email: "graduate2@example.com",
      graduation: "2022년 졸업",
      currentPosition: "",
    },
    {
      name: "유영식",
      image: "/placeholder.svg?height=200&width=200",
      research: "",
      email: "graduate2@example.com",
      graduation: "2022년 졸업",
      currentPosition: "",
    },
    {
      name: "김범석",
      image: "/placeholder.svg?height=200&width=200",
      research: "",
      email: "graduate2@example.com",
      graduation: "2022년 졸업",
      currentPosition: "",
    },
    {
      name: "한승민",
      image: "/placeholder.svg?height=200&width=200",
      research: "",
      email: "graduate2@example.com",
      graduation: "2022년 졸업",
      currentPosition: "",
    },
    {
      name: "응엔 비에트 홍",
      image: "/placeholder.svg?height=200&width=200",
      research: "",
      email: "graduate2@example.com",
      graduation: "2022년 졸업",
      currentPosition: "",
    },
    {
      name: "배승훈",
      image: "/placeholder.svg?height=200&width=200",
      research: "",
      email: "graduate2@example.com",
      graduation: "2022년 졸업",
      currentPosition: "",
    },
    {
      name: "홍승재",
      image: "/placeholder.svg?height=200&width=200",
      research: "",
      email: "graduate2@example.com",
      graduation: "2022년 졸업",
      currentPosition: "",
    },
    {
      name: "서정환",
      image: "/placeholder.svg?height=200&width=200",
      research: "",
      email: "graduate2@example.com",
      graduation: "2022년 졸업",
      currentPosition: "",
    },
    {
      name: "김동환",
      image: "/placeholder.svg?height=200&width=200",
      research: "",
      email: "graduate2@example.com",
      graduation: "2022년 졸업",
      currentPosition: "",
    },
    {
      name: "이상수",
      image: "/placeholder.svg?height=200&width=200",
      research: "",
      email: "graduate2@example.com",
      graduation: "2022년 졸업",
      currentPosition: "",
    },
    {
      name: "이주형",
      image: "/placeholder.svg?height=200&width=200",
      research: "",
      email: "graduate2@example.com",
      graduation: "2022년 졸업",
      currentPosition: "",
    },
    {
      name: "김수영",
      image: "/placeholder.svg?height=200&width=200",
      research: "",
      email: "graduate2@example.com",
      graduation: "2022년 졸업",
      currentPosition: "",
    },
    {
      name: "정주현",
      image: "/placeholder.svg?height=200&width=200",
      research: "",
      email: "graduate2@example.com",
      graduation: "2022년 졸업",
      currentPosition: "",
    },
    {
      name: "정민수",
      image: "/placeholder.svg?height=200&width=200",
      research: "",
      email: "graduate2@example.com",
      graduation: "2022년 졸업",
      currentPosition: "",
    },
    {
      name: "고재현",
      image: "/placeholder.svg?height=200&width=200",
      research: "",
      email: "graduate2@example.com",
      graduation: "2022년 졸업",
      currentPosition: "",
    },
    {
      name: "조연수",
      image: "/placeholder.svg?height=200&width=200",
      research: "",
      email: "graduate2@example.com",
      graduation: "2022년 졸업",
      currentPosition: "",
    },
    {
      name: "첸 하이티엔",
      image: "/placeholder.svg?height=200&width=200",
      research: "",
      email: "graduate2@example.com",
      graduation: "2022년 졸업",
      currentPosition: "",
    },
    {
      name: "런청주안",
      image: "/placeholder.svg?height=200&width=200",
      research: "",
      email: "graduate2@example.com",
      graduation: "2022년 졸업",
      currentPosition: "",
    },
    {
      name: "왕이란",
      image: "/placeholder.svg?height=200&width=200",
      research: "",
      email: "graduate2@example.com",
      graduation: "2022년 졸업",
      currentPosition: "",
    },
    {
      name: "박성민",
      image: "/placeholder.svg?height=200&width=200",
      research: "",
      email: "graduate2@example.com",
      graduation: "2022년 졸업",
      currentPosition: "",
    },
        {
      name: "송우석",
      image: "/placeholder.svg?height=200&width=200",
      research: "",
      email: "graduate2@example.com",
      graduation: "2022년 졸업",
      currentPosition: "",
    },
        {
      name: "구다훈",
      image: "/placeholder.svg?height=200&width=200",
      research: "",
      email: "graduate2@example.com",
      graduation: "2022년 졸업",
      currentPosition: "",
    },
    {
      name: "박영선",
      image: "/placeholder.svg?height=200&width=200",
      research: "",
      email: "graduate2@example.com",
      graduation: "2022년 졸업",
      currentPosition: "",
    },
    {
      name: "송준범",
      image: "/placeholder.svg?height=200&width=200",
      research: "",
      email: "graduate2@example.com",
      graduation: "2022년 졸업",
      currentPosition: "",
    },
    {
      name: "김기오",
      image: "/placeholder.svg?height=200&width=200",
      research: "",
      email: "graduate2@example.com",
      graduation: "2022년 졸업",
      currentPosition: "",
    }

  ]

  return (
    <section className="py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-blue-700 mb-4">Alumni</h2>
          <div className="w-24 h-1 bg-blue-700 mx-auto mb-6"></div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* graduates → alumni 로 변경 */}
          {alumni.map((person, personIndex) => (
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
              <p className="text-gray-600 mb-2">{person.research}</p>
              <p className="text-sm text-gray-500 mb-2">{person.graduation}</p>
              <p className="text-sm text-blue-600 font-medium mb-3">
                {person.currentPosition}
              </p>
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