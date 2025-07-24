"use client"

import { X } from "lucide-react"

interface NewsItem {
  id: number
  title: string
  summary: string
  date: string
  author: string

  category: string
  featured: boolean
  content?: string
  image_path?: string
}

interface NewsModalProps {
  isOpen: boolean
  onClose: () => void
  newsItem: NewsItem | null
}

export default function NewsModal({ isOpen, onClose, newsItem }: NewsModalProps) {
  if (!isOpen || !newsItem) return null

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

  const getDetailedContent = (item: NewsItem) => {
    switch (item.id) {
      case 1:
        return `IST Lab의 "AI 기반 데이터베이스 최적화 연구"가 2024년 한국정보과학회에서 우수논문상을 수상하는 쾌거를 달성했습니다.

이번 연구는 머신러닝 알고리즘을 활용하여 대용량 데이터베이스의 쿼리 성능을 획기적으로 향상시키는 새로운 방법론을 제시했습니다. 

주요 성과:
• 기존 대비 쿼리 처리 속도 40% 향상
• 메모리 사용량 25% 절약
• 다양한 데이터베이스 시스템에 적용 가능한 범용성 확보

이번 수상은 IST Lab의 연구 역량을 대내외에 알리는 중요한 성과로 평가됩니다.`

      // ... (case 2 ~ 6 동일하게 유지 가능)

      default:
        return item.summary
    }
  }

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto">
        {/* 헤더 */}
        <div className="sticky top-0 bg-white border-b border-gray-200 p-6 flex justify-between items-start">
          <div className="flex-1 pr-4">
            <div className="flex items-center mb-3">
              <span
                className={`px-3 py-1 rounded-full text-xs font-medium mr-3 ${getCategoryColor(newsItem.category)}`}
              >
                {newsItem.category}
              </span>
              <span className="text-sm text-gray-500">
  {new Date(newsItem.date).toLocaleDateString("en-GB", {
    year: "numeric",
    month: "short",
    day: "2-digit",
    weekday: "short"
  })}
</span>
            </div>
            <h2 className="text-2xl font-bold text-gray-800 mb-2">{newsItem.title}</h2>
            <p className="text-sm text-gray-600">작성자: {newsItem.author}</p>
          </div>
          <button onClick={onClose} className="p-2 hover:bg-gray-100 rounded-full transition-colors">
            <X className="w-6 h-6" />
          </button>
        </div>

       <div className="p-6">
  {newsItem.image_path && (
    <img
      src={`http://localhost:3001${newsItem.image_path}`}
      alt={newsItem.title}
      className="w-full h-64 md:h-80 object-cover rounded-lg shadow-lg mb-6"
    />
  )}

  <div className="prose max-w-none">
    <div className="whitespace-pre-line text-gray-700 leading-relaxed">
      {newsItem.content || newsItem.summary}
    </div>
  </div>
</div>

        {/* 푸터 */}
        <div className="sticky bottom-0 bg-gray-50 border-t border-gray-200 p-6">
          <button
            onClick={onClose}
            className="bg-blue-700 text-white px-6 py-2 rounded-lg hover:bg-blue-800 transition-colors"
          >
            닫기
          </button>
        </div>
      </div>
    </div>
  )
}
