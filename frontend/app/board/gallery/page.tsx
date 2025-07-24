"use client"

import { useState } from "react"
import { ChevronLeft, ChevronRight, X } from "lucide-react"

export default function BoardGalleryPage() {
  const [selectedGalleryIndex, setSelectedGalleryIndex] = useState<number | null>(null)
  const [selectedImageIndex, setSelectedImageIndex] = useState(0)
  const [selectedYear, setSelectedYear] = useState("ALL")
  
  // 갤러리 데이터 - 각 항목마다 여러 이미지 포함
  const galleryData = [
    {
      id: 1,
      title: "Jeju MT",
      date: "2025.07.02. - 07.04.",
      year: "2025",
      thumbnail: "https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=800",
      images: [
        {
          src: "https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=1200",
          caption: "제주도 MT 단체사진"
        },
        {
          src: "https://images.pexels.com/photos/1174732/pexels-photo-1174732.jpeg?auto=compress&cs=tinysrgb&w=1200",
          caption: "해변에서의 즐거운 시간"
        },
        {
          src: "https://images.pexels.com/photos/1450353/pexels-photo-1450353.jpeg?auto=compress&cs=tinysrgb&w=1200",
          caption: "맛있는 제주 음식"
        },
        {
          src: "https://images.pexels.com/photos/2422915/pexels-photo-2422915.jpeg?auto=compress&cs=tinysrgb&w=1200",
          caption: "아름다운 제주 풍경"
        },
        {
          src: "https://images.pexels.com/photos/1174732/pexels-photo-1174732.jpeg?auto=compress&cs=tinysrgb&w=1200",
          caption: "연구실 멤버들과 함께"
        }
      ]
    },
    {
      id: 2,
      title: "CVPR 2025",
      date: "2025.06.15.",
      year: "2025",
      thumbnail: "https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=800",
      images: [
        {
          src: "https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=1200",
          caption: "CVPR 2025 학회장"
        },
        {
          src: "https://images.pexels.com/photos/2608517/pexels-photo-2608517.jpeg?auto=compress&cs=tinysrgb&w=1200",
          caption: "논문 발표 중"
        },
        {
          src: "https://images.pexels.com/photos/1181533/pexels-photo-1181533.jpeg?auto=compress&cs=tinysrgb&w=1200",
          caption: "포스터 세션"
        }
      ]
    },
    {
      id: 3,
      title: "Lab Dinner",
      date: "2025.05.30.",
      year: "2025",
      thumbnail: "https://images.pexels.com/photos/3184293/pexels-photo-3184293.jpeg?auto=compress&cs=tinysrgb&w=800",
      images: [
        {
          src: "https://images.pexels.com/photos/3184293/pexels-photo-3184293.jpeg?auto=compress&cs=tinysrgb&w=1200",
          caption: "연구실 회식"
        },
        {
          src: "https://images.pexels.com/photos/1267320/pexels-photo-1267320.jpeg?auto=compress&cs=tinysrgb&w=1200",
          caption: "맛있는 음식들"
        },
        {
          src: "https://images.pexels.com/photos/1581384/pexels-photo-1581384.jpeg?auto=compress&cs=tinysrgb&w=1200",
          caption: "즐거운 대화"
        },
        {
          src: "https://images.pexels.com/photos/1267697/pexels-photo-1267697.jpeg?auto=compress&cs=tinysrgb&w=1200",
          caption: "단체 건배"
        }
      ]
    },
    {
      id: 4,
      title: "ICLR 2025",
      date: "2025.04.27.",
      year: "2025",
      thumbnail: "https://images.pexels.com/photos/3184294/pexels-photo-3184294.jpeg?auto=compress&cs=tinysrgb&w=800",
      images: [
        {
          src: "https://images.pexels.com/photos/3184294/pexels-photo-3184294.jpeg?auto=compress&cs=tinysrgb&w=1200",
          caption: "ICLR 2025 컨퍼런스"
        },
        {
          src: "https://images.pexels.com/photos/2608517/pexels-photo-2608517.jpeg?auto=compress&cs=tinysrgb&w=1200",
          caption: "키노트 발표"
        }
      ]
    },
    {
      id: 5,
      title: "V-Lab at Yonsei University",
      date: "2025.03.14.",
      year: "2025",
      thumbnail: "https://images.pexels.com/photos/3184295/pexels-photo-3184295.jpeg?auto=compress&cs=tinysrgb&w=800",
      images: [
        {
          src: "https://images.pexels.com/photos/3184295/pexels-photo-3184295.jpeg?auto=compress&cs=tinysrgb&w=1200",
          caption: "연세대학교 V-Lab 방문"
        },
        {
          src: "https://images.pexels.com/photos/1181533/pexels-photo-1181533.jpeg?auto=compress&cs=tinysrgb&w=1200",
          caption: "연구 시설 견학"
        },
        {
          src: "https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=1200",
          caption: "연구진들과의 만남"
        }
      ]
    },
    {
      id: 6,
      title: "AAAI 2025",
      date: "2025.02.26.",
      year: "2025",
      thumbnail: "https://images.pexels.com/photos/3184296/pexels-photo-3184296.jpeg?auto=compress&cs=tinysrgb&w=800",
      images: [
        {
          src: "https://images.pexels.com/photos/3184296/pexels-photo-3184296.jpeg?auto=compress&cs=tinysrgb&w=1200",
          caption: "AAAI 2025 학회"
        },
        {
          src: "https://images.pexels.com/photos/2608517/pexels-photo-2608517.jpeg?auto=compress&cs=tinysrgb&w=1200",
          caption: "AI 연구 발표"
        }
      ]
    },
    {
      id: 7,
      title: "Winter Workshop",
      date: "2024.12.15.",
      year: "2024",
      thumbnail: "https://images.pexels.com/photos/3184297/pexels-photo-3184297.jpeg?auto=compress&cs=tinysrgb&w=800",
      images: [
        {
          src: "https://images.pexels.com/photos/3184297/pexels-photo-3184297.jpeg?auto=compress&cs=tinysrgb&w=1200",
          caption: "겨울 워크샵"
        },
        {
          src: "https://images.pexels.com/photos/1181533/pexels-photo-1181533.jpeg?auto=compress&cs=tinysrgb&w=1200",
          caption: "연구 발표 세션"
        },
        {
          src: "https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=1200",
          caption: "참가자들과의 토론"
        }
      ]
    },
    {
      id: 8,
      title: "Conference Presentation",
      date: "2024.11.20.",
      year: "2024",
      thumbnail: "https://images.pexels.com/photos/3184298/pexels-photo-3184298.jpeg?auto=compress&cs=tinysrgb&w=800",
      images: [
        {
          src: "https://images.pexels.com/photos/3184298/pexels-photo-3184298.jpeg?auto=compress&cs=tinysrgb&w=1200",
          caption: "학회 발표"
        },
        {
          src: "https://images.pexels.com/photos/2608517/pexels-photo-2608517.jpeg?auto=compress&cs=tinysrgb&w=1200",
          caption: "질의응답 시간"
        }
      ]
    },
    {
      id: 9,
      title: "Research Meeting",
      date: "2024.10.10.",
      year: "2024",
      thumbnail: "https://images.pexels.com/photos/3184299/pexels-photo-3184299.jpeg?auto=compress&cs=tinysrgb&w=800",
      images: [
        {
          src: "https://images.pexels.com/photos/3184299/pexels-photo-3184299.jpeg?auto=compress&cs=tinysrgb&w=1200",
          caption: "연구 미팅"
        },
        {
          src: "https://images.pexels.com/photos/1181533/pexels-photo-1181533.jpeg?auto=compress&cs=tinysrgb&w=1200",
          caption: "브레인스토밍"
        }
      ]
    },
    {
      id: 10,
      title: "Lab Retreat",
      date: "2023.09.15.",
      year: "2023",
      thumbnail: "https://images.pexels.com/photos/3184300/pexels-photo-3184300.jpeg?auto=compress&cs=tinysrgb&w=800",
      images: [
        {
          src: "https://images.pexels.com/photos/3184300/pexels-photo-3184300.jpeg?auto=compress&cs=tinysrgb&w=1200",
          caption: "연구실 워크샵"
        },
        {
          src: "https://images.pexels.com/photos/1174732/pexels-photo-1174732.jpeg?auto=compress&cs=tinysrgb&w=1200",
          caption: "팀 빌딩 활동"
        },
        {
          src: "https://images.pexels.com/photos/1450353/pexels-photo-1450353.jpeg?auto=compress&cs=tinysrgb&w=1200",
          caption: "자연 속에서의 휴식"
        }
      ]
    },
    {
      id: 11,
      title: "Summer School",
      date: "2023.08.20.",
      year: "2023",
      thumbnail: "https://images.pexels.com/photos/3184301/pexels-photo-3184301.jpeg?auto=compress&cs=tinysrgb&w=800",
      images: [
        {
          src: "https://images.pexels.com/photos/3184301/pexels-photo-3184301.jpeg?auto=compress&cs=tinysrgb&w=1200",
          caption: "여름 학교"
        },
        {
          src: "https://images.pexels.com/photos/2608517/pexels-photo-2608517.jpeg?auto=compress&cs=tinysrgb&w=1200",
          caption: "강의 중"
        }
      ]
    },
    {
      id: 12,
      title: "Graduation Ceremony",
      date: "2023.07.25.",
      year: "2023",
      thumbnail: "https://images.pexels.com/photos/3184302/pexels-photo-3184302.jpeg?auto=compress&cs=tinysrgb&w=800",
      images: [
        {
          src: "https://images.pexels.com/photos/3184302/pexels-photo-3184302.jpeg?auto=compress&cs=tinysrgb&w=1200",
          caption: "졸업식"
        },
        {
          src: "https://images.pexels.com/photos/1267320/pexels-photo-1267320.jpeg?auto=compress&cs=tinysrgb&w=1200",
          caption: "축하 파티"
        },
        {
          src: "https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=1200",
          caption: "기념 촬영"
        }
      ]
    }
  ]

  const years = ["ALL", "2025", "2024", "2023"]
  
  const filteredGallery = selectedYear === "ALL" 
    ? galleryData 
    : galleryData.filter(item => item.year === selectedYear)

  const openModal = (galleryIndex: number) => {
    setSelectedGalleryIndex(galleryIndex)
    setSelectedImageIndex(0)
  }

  const closeModal = () => {
    setSelectedGalleryIndex(null)
    setSelectedImageIndex(0)
  }

  const nextImage = () => {
    if (selectedGalleryIndex !== null) {
      const currentGallery = filteredGallery[selectedGalleryIndex]
      setSelectedImageIndex((selectedImageIndex + 1) % currentGallery.images.length)
    }
  }

  const prevImage = () => {
    if (selectedGalleryIndex !== null) {
      const currentGallery = filteredGallery[selectedGalleryIndex]
      setSelectedImageIndex((selectedImageIndex - 1 + currentGallery.images.length) % currentGallery.images.length)
    }
  }

  const handleKeyDown = (e: KeyboardEvent) => {
    if (selectedGalleryIndex !== null) {
      if (e.key === 'ArrowRight') nextImage()
      if (e.key === 'ArrowLeft') prevImage()
      if (e.key === 'Escape') closeModal()
    }
  }

  // 키보드 이벤트 리스너
  useState(() => {
    document.addEventListener('keydown', handleKeyDown)
    return () => document.removeEventListener('keydown', handleKeyDown)
  })

  return (
    <section className="py-16 px-4 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-blue-700 mb-4">Gallery</h2>
          <div className="w-24 h-1 bg-blue-700 mx-auto mb-6"></div>
        </div>

        {/* 연도 필터 */}
        <div className="flex justify-center mb-8">
          <div className="flex space-x-1 bg-white rounded-lg border border-gray-300 p-1">
            {years.map((year) => (
              <button
                key={year}
                onClick={() => setSelectedYear(year)}
                className={`px-6 py-2 rounded-md font-medium transition-colors ${
                  selectedYear === year 
                    ? "bg-blue-700 text-white" 
                    : "text-gray-700 hover:bg-gray-100"
                }`}
              >
                {year}
              </button>
            ))}
          </div>
        </div>

        {/* 그리드 갤러리 */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredGallery.map((item, index) => (
            <div
              key={item.id}
              className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow cursor-pointer"
              onClick={() => openModal(index)}
            >
              <div className="aspect-w-16 aspect-h-12">
                <img
                  src={item.thumbnail}
                  alt={item.title}
                  className="w-full h-64 object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-4">
                <h3 className="text-lg font-bold text-gray-800 mb-2">{item.title}</h3>
                <p className="text-sm text-gray-600">{item.date}</p>
                <p className="text-xs text-blue-600 mt-1">{item.images.length}장의 사진</p>
              </div>
            </div>
          ))}
        </div>

        {/* 모달 */}
        {selectedGalleryIndex !== null && (
          <div className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-50 p-4">
            <div className="relative max-w-6xl max-h-full w-full">
              {/* 닫기 버튼 */}
              <button
                onClick={closeModal}
                className="absolute -top-12 right-0 text-white hover:text-gray-300 transition-colors z-10"
              >
                <X className="w-8 h-8" />
              </button>
              
              {/* 이전 버튼 */}
              <button
                onClick={prevImage}
                className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white hover:text-gray-300 transition-colors z-10"
              >
                <ChevronLeft className="w-12 h-12" />
              </button>
              
              {/* 다음 버튼 */}
              <button
                onClick={nextImage}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white hover:text-gray-300 transition-colors z-10"
              >
                <ChevronRight className="w-12 h-12" />
              </button>
              
              {/* 이미지 */}
              <div className="flex items-center justify-center h-full">
                <img
                  src={filteredGallery[selectedGalleryIndex].images[selectedImageIndex].src}
                  alt={filteredGallery[selectedGalleryIndex].images[selectedImageIndex].caption}
                  className="max-w-full max-h-full object-contain rounded-lg"
                />
              </div>
              
              {/* 이미지 정보 */}
              <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-center text-white">
                <h3 className="text-xl font-bold mb-1">{filteredGallery[selectedGalleryIndex].title}</h3>
                <p className="text-sm opacity-80 mb-1">{filteredGallery[selectedGalleryIndex].images[selectedImageIndex].caption}</p>
                <p className="text-sm opacity-80">{filteredGallery[selectedGalleryIndex].date}</p>
                <p className="text-xs opacity-60 mt-2">
                  {selectedImageIndex + 1} / {filteredGallery[selectedGalleryIndex].images.length}
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  )
}