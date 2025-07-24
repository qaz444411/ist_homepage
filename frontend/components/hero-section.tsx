"use client"

import { useState, useEffect } from "react"
import { ChevronLeft, ChevronRight, X } from "lucide-react"

export default function HeroSection() {
  const [selectedImageIndex, setSelectedImageIndex] = useState<number | null>(null)
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0)

  // 로컬 이미지 경로로 대체
  const heroImages = [
    { src: "/images/hero/slide1.jpg", caption: "" },
    { src: "/images/hero/slide2.jpg", caption: "" },
    { src: "/images/hero/slide3.jpg", caption: "" },
    { src: "/images/hero/slide4.jpg", caption: "" },
    { src: "/images/hero/slide5.jpg", caption: "" }
  ]

  // 자동 슬라이드 효과
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlideIndex((prevIndex) => (prevIndex + 1) % heroImages.length)
    }, 4000)
    return () => clearInterval(interval)
  }, [heroImages.length])

  const openModal = (index: number) => setSelectedImageIndex(index)
  const closeModal = () => setSelectedImageIndex(null)
  const nextImage = () => setSelectedImageIndex((selectedImageIndex! + 1) % heroImages.length)
  const prevImage = () => setSelectedImageIndex((selectedImageIndex! - 1 + heroImages.length) % heroImages.length)
  const nextSlide = () => setCurrentSlideIndex((currentSlideIndex + 1) % heroImages.length)
  const prevSlide = () => setCurrentSlideIndex((currentSlideIndex - 1 + heroImages.length) % heroImages.length)

  return (
    <>
      <section className="min-h-screen bg-gradient-to-br from-blue-900 to-blue-700 flex items-center justify-center">
        <div className="text-center text-white px-4 max-w-6xl w-full">
          {/* 슬라이드 */}
          <div className="mb-12">
            <div className="relative w-full max-w-4xl mx-auto">
              <div className="relative h-96 rounded-2xl overflow-hidden shadow-2xl">
                <div className="relative w-full h-full">
                  <img
                    src={heroImages[currentSlideIndex].src}
                    alt={heroImages[currentSlideIndex].caption}
                    className="w-full h-full object-cover cursor-pointer"
                    onClick={() => openModal(currentSlideIndex)}
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-30"></div>
                  <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 text-center">
                    <h3 className="text-2xl font-bold text-white mb-2">{heroImages[currentSlideIndex].caption}</h3>
                  </div>
                </div>

                {/* 버튼 */}
                <button onClick={prevSlide} className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-3 rounded-full hover:bg-opacity-70">
                  <ChevronLeft className="w-6 h-6" />
                </button>
                <button onClick={nextSlide} className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-3 rounded-full hover:bg-opacity-70">
                  <ChevronRight className="w-6 h-6" />
                </button>

                {/* 인디케이터 */}
                <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
                  {heroImages.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentSlideIndex(index)}
                      className={`w-3 h-3 rounded-full transition-all ${index === currentSlideIndex ? 'bg-white' : 'bg-white bg-opacity-50 hover:bg-opacity-75'}`}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* 타이틀 */}
          <div className="mb-8">
            <div className="w-32 h-32 mx-auto mb-6 bg-white rounded-full flex items-center justify-center shadow-2xl">
              <div className="text-blue-900 text-6xl font-bold">IST</div>
            </div>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold mb-4">IST Lab</h1>
          <h2 className="text-2xl md:text-3xl mb-6 opacity-90">Information Science & Technology Laboratory</h2>
        </div>
      </section>

      {/* 모달 */}
      {selectedImageIndex !== null && (
        <div className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-50 p-4">
          <div className="relative max-w-6xl max-h-full w-full">
            <button onClick={closeModal} className="absolute -top-12 right-0 text-white hover:text-gray-300">
              <X className="w-8 h-8" />
            </button>
            <button onClick={prevImage} className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white hover:text-gray-300 z-10">
              <ChevronLeft className="w-12 h-12" />
            </button>
            <button onClick={nextImage} className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white hover:text-gray-300 z-10">
              <ChevronRight className="w-12 h-12" />
            </button>
            <div className="flex items-center justify-center h-full">
              <img
                src={heroImages[selectedImageIndex].src}
                alt={heroImages[selectedImageIndex].caption}
                className="max-w-full max-h-full object-contain rounded-xl"
              />
            </div>
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-center text-white">
              <p className="text-lg mb-1">{heroImages[selectedImageIndex].caption}</p>
              <p className="text-sm opacity-60">{selectedImageIndex + 1} / {heroImages.length}</p>
            </div>
          </div>
        </div>
      )}
    </>
  )
}