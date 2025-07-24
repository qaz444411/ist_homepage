"use client"

import { useState } from "react"

interface AddNewsModalProps {
  onClose: () => void
  onNewsAdded: () => void
}

export default function AddNewsModal({ onClose, onNewsAdded }: AddNewsModalProps) {
  const [form, setForm] = useState({
    title: "",
    summary: "",
    content: "",
    date: "",
    author: "",
    category: "연구",
    featured: false,
  })
  const [image, setImage] = useState<File | null>(null)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    const data = new FormData()
    Object.entries(form).forEach(([key, value]) => {
      data.append(key, String(value))
    })
    if (image) data.append("image", image)

    const res = await fetch("http://localhost:3001/api/news", {
      method: "POST",
      body: data,
    })

    if (res.ok) {
      alert("뉴스가 등록되었습니다.")
      onNewsAdded()
    } else {
      alert("등록 실패")
    }
  }

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg w-full max-w-xl space-y-4 overflow-y-auto max-h-[90vh]">
        <h2 className="text-xl font-bold mb-4">뉴스 등록</h2>

        <input
          className="w-full border px-3 py-2 rounded"
          placeholder="제목"
          value={form.title}
          required
          onChange={e => setForm({ ...form, title: e.target.value })}
        />
        <textarea
          className="w-full border px-3 py-2 rounded"
          placeholder="요약"
          value={form.summary}
          required
          onChange={e => setForm({ ...form, summary: e.target.value })}
        />
        <textarea
          className="w-full border px-3 py-2 rounded"
          placeholder="상세 내용"
          value={form.content}
          onChange={e => setForm({ ...form, content: e.target.value })}
        />
        <input
          type="date"
          className="w-full border px-3 py-2 rounded"
          value={form.date}
          required
          onChange={e => setForm({ ...form, date: e.target.value })}
        />
        <input
          className="w-full border px-3 py-2 rounded"
          placeholder="작성자"
          value={form.author}
          required
          onChange={e => setForm({ ...form, author: e.target.value })}
        />
        <select
          className="w-full border px-3 py-2 rounded"
          value={form.category}
          onChange={e => setForm({ ...form, category: e.target.value })}
        >
          <option value="연구">연구</option>
          <option value="논문">논문</option>
          <option value="행사">행사</option>
          <option value="모집">모집</option>
          <option value="수상">수상</option>
          <option value="특허">특허</option>
        </select>
        <label className="block">
          <input type="checkbox" checked={form.featured} onChange={e => setForm({ ...form, featured: e.target.checked })} />
          <span className="ml-2">메인 슬라이드에 표시</span>
        </label>
        <input type="file" accept="image/*" onChange={e => setImage(e.target.files?.[0] || null)} />

        <div className="flex justify-end space-x-3 pt-4">
          <button type="button" onClick={onClose} className="px-4 py-2 rounded bg-gray-300 hover:bg-gray-400">
            취소
          </button>
          <button type="submit" className="px-4 py-2 rounded bg-blue-700 text-white hover:bg-blue-800">
            등록
          </button>
        </div>
      </form>
    </div>
  )
}

