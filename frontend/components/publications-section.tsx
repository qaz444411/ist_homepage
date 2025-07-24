"use client"

import { useEffect, useState } from "react"
import { ChevronDown, ExternalLink, FileText, X, Plus } from "lucide-react"
import AddPublicationModal from "../components/AddPublicationModal"

type CategoryType = "Journal" | "Conference"

interface PublicationItem {
  id: number
  title: string
  authors: string
  venue: string
  volume?: string
  pages?: string
  year: string
  doi?: string
  paperUrl: string
  image?: string
  image_path?: string // 🔥 이걸 새로 추가하세요
  location?: string
  date?: string
  category: CategoryType
}

interface PublicationsSectionProps {
  initialCategory?: CategoryType | null
}

export default function PublicationsSection({ initialCategory }: PublicationsSectionProps) {
  const [selectedCategory, setSelectedCategory] = useState<CategoryType>("Journal")
  const [selectedYear, setSelectedYear] = useState("All")
  const [isYearDropdownOpen, setIsYearDropdownOpen] = useState(false)
  const [selectedImage, setSelectedImage] = useState<string | null>(null)
  const [publications, setPublications] = useState<Record<CategoryType, PublicationItem[]>>({ Journal: [], Conference: [] })
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [isAdmin, setIsAdmin] = useState(false)

  const years = ["All", "2025", "2024", "2023", "2022", "2021", "2020", "2019"]

  // 초기 카테고리 설정
  useEffect(() => {
    if (initialCategory && ["Journal", "Conference"].includes(initialCategory)) {
      setSelectedCategory(initialCategory as CategoryType)
    }
  }, [initialCategory])

  // 논문 데이터 불러오기
  useEffect(() => {
    fetch("http://localhost:3001/api/publications")
      .then(res => res.json())
      .then(data => {
        const journals = data.filter((pub: any) => pub.category === "Journal")
        const conferences = data.filter((pub: any) => pub.category === "Conference")
        setPublications({ Journal: journals, Conference: conferences })
      })
      .catch(err => console.error("데이터 로딩 실패:", err))
  }, [])

  // 관리자 권한 확인
  useEffect(() => {
    const key = localStorage.getItem("adminKey")
    const expires = localStorage.getItem("expiresAt")
    if (
      key &&
      process.env.NEXT_PUBLIC_ADMIN_KEY &&
      key === process.env.NEXT_PUBLIC_ADMIN_KEY &&
      expires &&
      Date.now() < parseInt(expires)
    ) {
      setIsAdmin(true)
    }
  }, [])

  // 논문 등록 핸들러
  const handleAddPublication = async (formData: FormData) => {
    try {
      const res = await fetch("http://localhost:3001/api/publications", {
        method: "POST",
        body: formData
      })

      if (res.ok) {
        alert("등록되었습니다.")
        setIsModalOpen(false)
        location.reload()
      } else {
        alert("등록 실패")
      }
    } catch (err) {
      console.error(err)
      alert("오류 발생")
    }
  }

  const handleDeletePublication = async (id: number) => {
  if (!confirm("정말 삭제하시겠습니까?")) return

  try {
    const res = await fetch(`http://localhost:3001/api/publications/${id}`, {
      method: "DELETE"
    })
    if (res.ok) {
      alert("삭제되었습니다.")
      location.reload()  // 혹은 setPublications(...)로 갱신
    } else {
      alert("삭제 실패")
    }
  } catch (err) {
    console.error("삭제 오류:", err)
    alert("오류 발생")
  }
}

  const allPublications = publications[selectedCategory]
  const currentPublications = selectedYear === "All"
    ? allPublications
    : allPublications.filter((pub) => pub.year === selectedYear)

  return (
    <section className="py-16 px-4 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-blue-700 mb-4">Publications</h2>
          <div className="w-24 h-1 bg-blue-700 mx-auto mb-6"></div>
        </div>

        {/* 관리자 등록 버튼 */}
        {isAdmin && (
          <div className="text-right mb-6">
            <button
              onClick={() => setIsModalOpen(true)}
              className="flex items-center gap-2 bg-blue-700 text-white px-4 py-2 rounded hover:bg-blue-800"
            >
              <Plus className="w-4 h-4" /> 논문 등록
            </button>
          </div>
        )}

        {/* 등록 모달 */}
        {isModalOpen && (
          <AddPublicationModal
            onClose={() => setIsModalOpen(false)}
            onSubmit={handleAddPublication}
          />
        )}

        {/* 카테고리 및 연도 필터 */}
        <div className="mb-8">
          <div className="flex justify-center mb-4">
            <div className="bg-white rounded-lg border border-gray-300 p-1">
              {["Journal", "Conference"].map((type) => (
                <button
                  key={type}
                  onClick={() => {
                    setSelectedCategory(type as CategoryType)
                    setSelectedYear("All")
                  }}
                  className={`px-6 py-2 rounded-md font-medium transition-colors ${
                    selectedCategory === type ? "bg-blue-700 text-white" : "text-gray-700 hover:bg-gray-100"
                  }`}
                >
                  {type}
                </button>
              ))}
            </div>
          </div>

          <div className="flex justify-center">
            <div className="relative">
              <button
                onClick={() => setIsYearDropdownOpen(!isYearDropdownOpen)}
                className="flex items-center bg-white border border-gray-300 rounded-lg px-6 py-3 text-lg font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent min-w-32"
              >
                {selectedYear}
                <ChevronDown className={`ml-2 w-5 h-5 transition-transform ${isYearDropdownOpen ? 'rotate-180' : ''}`} />
              </button>
              {isYearDropdownOpen && (
                <div className="absolute top-full left-0 mt-1 w-full bg-white border border-gray-300 rounded-lg shadow-lg z-10">
                  {years.map((year) => (
                    <button
                      key={year}
                      onClick={() => {
                        setSelectedYear(year)
                        setIsYearDropdownOpen(false)
                      }}
                      className={`w-full text-left px-6 py-3 hover:bg-gray-50 first:rounded-t-lg last:rounded-b-lg ${selectedYear === year ? 'bg-blue-50 text-blue-700 font-medium' : 'text-gray-700'}`}
                    >
                      {year}
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>

        {/* 논문 목록 */}
        <div className="space-y-8">
          {currentPublications.map((pub) => (
            <div key={pub.id} className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow">
              <div className="flex flex-col md:flex-row gap-6">
                {/* 이미지 출력 */}
                <div className="flex-shrink-0">
                  <div className="w-40 h-52 bg-gray-100 rounded-lg overflow-hidden border">
                   <img
  src={pub.image_path ? `http://localhost:3001/${pub.image_path.replace(/\\/g, "/")}` : "/placeholder.svg"}
  alt={`${pub.title} paper`}
  className="w-full h-full object-cover cursor-pointer hover:opacity-80 transition-opacity"
  onClick={() => setSelectedImage(`http://localhost:3001/${pub.image_path?.replace(/\\/g, "/")}`)}
/>

{isAdmin && (
  <button
    onClick={() => handleDeletePublication(pub.id)}
    className="text-red-500 hover:underline text-sm"
  >
    삭제
  </button>
)}
{/* 외부 링크 버튼 */}
{pub.paper_url && (
  <a
    href={pub.paper_url}
    target="_blank"
    rel="noopener noreferrer"
    className="inline-flex items-center mt-4 px-4 py-2 bg-blue-700 text-white rounded-lg hover:bg-blue-800 transition"
  >
    <ExternalLink className="w-4 h-4 mr-2" />
    Link
  </a>
)}
         </div>
                </div>
                {/* 정보 출력 */}
                <div className="flex-1">
                  <div className="mb-4">
                    <h3 className="text-xl font-bold text-blue-700 mb-3 leading-tight">{pub.title}</h3>
                    <p className="text-gray-600 mb-2">{pub.authors}</p>
                    <p className="text-gray-600 mb-2">
                      {pub.venue}
                      {pub.volume && `, ${pub.volume}`}
                      {pub.pages && `, ${pub.pages}`}
                    </p>
                    {pub.location && <p className="text-gray-600 mb-2">{pub.location}</p>}
                    {pub.date && <p className="text-gray-600 mb-2">{pub.date}</p>}
                    {pub.doi && <p className="text-gray-600 mb-2">{pub.doi}</p>}
                    <p className="text-gray-600">{pub.year}</p>


                    {isAdmin && (
      <button
        onClick={() => handleDeletePublication(pub.id)}
        className="text-red-500 hover:underline text-sm mt-2"
      >
        삭제
      </button>
    )}
                  </div>
                  <div className="flex flex-wrap gap-3">
                    <a
                      href={pub.paperUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center bg-blue-700 text-white px-4 py-2 rounded-lg hover:bg-blue-800 transition-colors"
                    >
                      <ExternalLink className="w-4 h-4 mr-2" /> Link
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Empty 상태 */}
        {currentPublications.length === 0 && (
          <div className="text-center py-12">
            <FileText className="w-16 h-16 text-gray-400 mx-auto mb-4" />
            <p className="text-gray-500 text-lg">해당 카테고리에 논문이 없습니다.</p>
          </div>
        )}

        {/* 이미지 모달 */}
        {selectedImage && (
          <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4">
            <div className="relative max-w-4xl max-h-full">
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute -top-10 right-0 text-white hover:text-gray-300 transition-colors"
              >
                <X className="w-8 h-8" />
              </button>
              <img
                src={selectedImage}
                alt="Paper preview"
                className="max-w-full max-h-full object-contain rounded-lg"
              />
            </div>
          </div>
        )}
      </div>
    </section>
  )
}
