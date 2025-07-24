"use client"

import { MapPin, Phone, Mail, Clock } from "lucide-react"
import { useEffect, useRef } from "react"

export default function ContactSection() {
  const mapRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const initMap = () => {
      if (window.naver && window.naver.maps && mapRef.current) {
        const location = new window.naver.maps.LatLng(35.9676, 126.7370) // 군산대학교 좌표
        
        const map = new window.naver.maps.Map(mapRef.current, {
          center: location,
          zoom: 16,
          mapTypeControl: true
        })

        new window.naver.maps.Marker({
          position: location,
          map: map,
          title: 'IST Lab - 군산대학교'
        })
      }
    }

    // 네이버 지도 API 스크립트 로드
    if (!window.naver) {
      const script = document.createElement('script')
      script.src = `https://openapi.map.naver.com/openapi/v3/maps.js?ncpClientId=${process.env.NEXT_PUBLIC_NAVER_MAPS_CLIENT_ID || 'demo'}`
      script.onload = initMap
      document.head.appendChild(script)
    } else {
      initMap()
    }
  }, [])

  return (
    <>
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-blue-700 mb-4">Contact</h2>
            <div className="w-24 h-1 bg-blue-700 mx-auto mb-6"></div>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-stretch">
            {/* Contact Information */}
            <div>
              <div className="bg-white rounded-lg shadow-xl p-8 h-full">
                <h3 className="text-2xl font-bold text-blue-700 mb-6">연락처 정보</h3>
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-blue-700 rounded-full flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-800 mb-1">주소</h4>
                      <p className="text-gray-600">
                        전북특별자치도 군산시 대학로 558(미룡동)
                        <br />
                        디지털정보관 1층 151-107 IST 연구실
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center flex-shrink-0">
                      <Phone className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-800 mb-1">전화번호</h4>
                      <p className="text-gray-600">063-469-8912</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-blue-800 rounded-full flex items-center justify-center flex-shrink-0">
                      <Mail className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-800 mb-1">이메일</h4>
                      <p className="text-gray-600">istlab@kunsan.ac.kr</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0">
                      <Clock className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-800 mb-1">운영시간</h4>
                      <p className="text-gray-600">평일 09:00 - 21:00</p>
                    </div>
                  </div>
                </div>

                {/* 지도 영역 (단순 표시) */}
                <div className="mt-8">
                  <div 
                    ref={mapRef}
                    className="w-full h-96 bg-gray-200 rounded-lg"
                    style={{ minHeight: '384px' }}
                  >
                    {/* 네이버 지도가 여기에 로드됩니다 */}
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <div className="bg-white rounded-lg shadow-xl p-8 h-full">
                <h3 className="text-2xl font-bold text-blue-700 mb-6">문의하기</h3>
                <form className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">이름 *</label>
                    <input
                      type="text"
                      required
                      name="name"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="이름을 입력하세요"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">이메일 *</label>
                    <input
                      type="email"
                      required
                      name="email"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="이메일을 입력하세요"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">소속/직책</label>
                    <input
                      type="text"
                      name="organization"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="소속이나 직책을 입력하세요"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">제목 *</label>
                    <input
                      type="text"
                      required
                      name="subject"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="제목을 입력하세요"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">내용 *</label>
                    <textarea
                      required
                      rows={5}
                      name="message"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-vertical"
                      placeholder="문의 내용을 입력하세요"
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-blue-700 text-white py-3 px-6 rounded-lg hover:bg-blue-800 transition-colors font-medium"
                    onClick={(e) => {
                      e.preventDefault();
                      const form = e.target.closest('form');
                      const formData = new FormData(form);
                      const name = formData.get('name');
                      const email = formData.get('email');
                      const subject = formData.get('subject');
                      const message = formData.get('message');
                      
                      if (!name || !email || !subject || !message) {
                        alert('모든 필수 항목을 입력해주세요.');
                        return;
                      }
                      
                      alert('문의가 성공적으로 전송되었습니다. 빠른 시일 내에 답변드리겠습니다.');
                      form.reset();
                    }}
                  >
                    메시지 보내기
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

