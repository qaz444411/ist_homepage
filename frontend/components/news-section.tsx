"use client"

import React, { useEffect, useState } from "react"
import { Calendar, User, ArrowRight } from "lucide-react"
import NewsModal from "./news-modal"
import AddNewsModal from "./AddNewsModal"

interface NewsItem {
  id: number
  title: string
  summary: string
  content?: string
  date: string
  author: string
  category: string
  featured: boolean
  image_path?: string
}

export default function NewsSection() {
  const [newsList, setNewsList] = useState<NewsItem[]>([])
  const [selectedNews, setSelectedNews] = useState<NewsItem | null>(null)
  const [isModalOpen, setIsModalOpen] = useState(false)

  // ✅ API에서 뉴스 데이터 가져오기
  useEffect(() => {
    fetch("http://localhost:3001/api/news")
      .then(res => res.json())
      .then(data => setNewsList(data))
      .catch(err => console.error("뉴스 불러오기 실패:", err))
  }, [])

  const handleNewsClick = (item: NewsItem) => {
    setSelectedNews(item)
    setIsModalOpen(true)
  }

  const handleCloseModal = () => {
    setSelectedNews(null)
    setIsModalOpen(false)
  }
  const handleDeleteNews = async (id: number) => {
  if (confirm("정말 이 뉴스를 삭제하시겠습니까?")) {
    try {
      const res = await fetch(`http://localhost:3001/api/news/${id}`, {
        method: "DELETE",
      })
      if (res.ok) {
        alert("뉴스가 삭제되었습니다.")
        fetchNews()
      } else {
        alert("삭제에 실패했습니다.")
      }
    } catch (error) {
      console.error("삭제 오류:", error)
    }
  }
}


  const getCategoryColor = (category: string) => {
    switch (category) {
      case "수상": return "bg-yellow-100 text-yellow-800"
      case "연구": return "bg-blue-100 text-blue-800"
      case "논문": return "bg-green-100 text-green-800"
      case "행사": return "bg-purple-100 text-purple-800"
      case "모집": return "bg-red-100 text-red-800"
      case "특허": return "bg-indigo-100 text-indigo-800"
      default: return "bg-gray-100 text-gray-800"
    }
  }

  const allNews = newsList.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())

  const [isAdmin, setIsAdmin] = useState(false)
const [isAddModalOpen, setIsAddModalOpen] = useState(false)

// 관리자 인증 감지
useEffect(() => {
  const stored = localStorage.getItem("adminKey")
  const expires = localStorage.getItem("expiresAt")
  if (
    stored &&
    process.env.NEXT_PUBLIC_ADMIN_KEY &&
    stored === process.env.NEXT_PUBLIC_ADMIN_KEY &&
    expires &&
    Date.now() < parseInt(expires)
  ) {
    setIsAdmin(true)
  }
}, [])

// 뉴스 등록 후 다시 불러오기
const fetchNews = () => {
  fetch("http://localhost:3001/api/news")
    .then(res => res.json())
    .then(data => setNewsList(data))
    .catch(err => console.error("뉴스 불러오기 실패:", err))
}

useEffect(() => {
  fetchNews()
}, [])

// 등록 성공 후 콜백
const handleNewsAdded = () => {
  fetchNews()
  setIsAddModalOpen(false)
}

  return (
    <section className="py-16 px-4 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-blue-700 mb-4">News & Updates</h2>
          <div className="w-24 h-1 bg-blue-700 mx-auto mb-6"></div>
        </div>
        
        
        

        <div className="space-y-6">
          {allNews.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow cursor-pointer"
              onClick={() => handleNewsClick(item)}
            >
              <div className="flex flex-col md:flex-row md:items-start justify-between">
                <div className="flex-1">
                  <div className="flex items-center mb-3">
                    <span className={`px-3 py-1 rounded-full text-xs font-medium mr-3 ${getCategoryColor(item.category)}`}>
                      {item.category}
                    </span>
                    <div className="flex items-center text-sm text-gray-500">
                      <Calendar className="w-4 h-4 mr-1" />
  {new Date(item.date).toLocaleDateString("en-GB", {
    year: "numeric",
    month: "short",
    day: "2-digit",
    weekday: "short"
  })}
</div>
        </div>
        <h4 className="text-xl font-bold text-blue-700 mb-3">{item.title}</h4>
            
                  <p className="text-gray-600 mb-2">{item.summary}</p>
                  <div className="flex items-center text-sm text-gray-500">
                    <User className="w-4 h-4 mr-1" />
                    {item.author}
                  </div>
                </div>
                <div className="mt-4 md:mt-0 md:ml-6">
                  <button className="flex items-center text-blue-700 hover:text-blue-800 font-medium">
                    자세히 보기
                    <ArrowRight className="w-4 h-4 ml-1" />
                  </button>

                      {isAdmin && (
    <button
      onClick={(e) => {
        e.stopPropagation()
        handleDeleteNews(item.id)
      }}
      className="text-red-500 hover:text-red-700 text-sm"
    >
      삭제
    </button>
  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      {isAdmin && (
  <div className="text-right max-w-7xl mx-auto mb-6">
    <button
      className="bg-blue-700 text-white px-6 py-2 rounded-lg hover:bg-blue-800 transition"
      onClick={() => setIsAddModalOpen(true)}
    >
      + 뉴스 등록
    </button>
  </div>
)}

        {/* 뉴스 상세 모달 */}
      <NewsModal isOpen={isModalOpen} onClose={handleCloseModal} newsItem={selectedNews} />

      {/* ⬇️ 이 부분 추가해야 뉴스 등록 모달이 열림 */}
      {isAddModalOpen && (
        <AddNewsModal
          onClose={() => setIsAddModalOpen(false)}
          onNewsAdded={handleNewsAdded}
        />
      )}
    </section>

  )
}
