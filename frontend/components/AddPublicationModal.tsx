"use client"

import { useState } from "react"
import { X } from "lucide-react"

interface Props {
  onClose: () => void
  onSubmit: (formData: FormData) => void
}

export default function AddPublicationModal({ onClose, onSubmit }: Props) {
  const [category, setCategory] = useState("Journal")
  const [title, setTitle] = useState("")
  const [authors, setAuthors] = useState("")
  const [venue, setVenue] = useState("")
  const [year, setYear] = useState("")
  const [doi, setDoi] = useState("")
  const [paperUrl, setPaperUrl] = useState("")
  const [imageFile, setImageFile] = useState<File | null>(null)
  const [previewUrl, setPreviewUrl] = useState("")

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setImageFile(e.target.files[0])
      setPreviewUrl(URL.createObjectURL(e.target.files[0]))
    }
  }

  const handleSubmit = () => {
    const data = new FormData()
    data.append("category", category)
    data.append("title", title)
    data.append("authors", authors)
    data.append("venue", venue)
    data.append("year", year)
    data.append("doi", doi)
    data.append("paperUrl", paperUrl)
    if (imageFile) {
      data.append("image", imageFile)
    }

    fetch("http://localhost:3001/api/publications", {
      method: "POST",
      body: data,
    })
      .then(res => {
        if (res.ok) {
          alert("논문 등록 성공")
          onClose()
        } else {
          alert("등록 실패")
        }
      })
      .catch(err => {
        console.error("등록 오류", err)
        alert("서버 오류")
      })
  }

  return (
    <div className="fixed inset-0 bg-black bg-opacity-70 z-50 flex items-center justify-center">
      <div className="bg-white p-6 rounded-lg max-w-xl w-full relative">
        <button onClick={onClose} className="absolute top-3 right-3 text-gray-500 hover:text-black">
          <X className="w-6 h-6" />
        </button>
        <h2 className="text-2xl font-bold mb-4">논문 등록</h2>

        <div className="space-y-3">
          <select value={category} onChange={e => setCategory(e.target.value)} className="w-full border rounded px-3 py-2">
            <option value="Journal">Journal</option>
            <option value="Conference">Conference</option>
          </select>
          <input type="text" placeholder="제목" value={title} onChange={e => setTitle(e.target.value)} className="w-full border rounded px-3 py-2" />
          <input type="text" placeholder="저자" value={authors} onChange={e => setAuthors(e.target.value)} className="w-full border rounded px-3 py-2" />
          <input type="text" placeholder="학회/저널" value={venue} onChange={e => setVenue(e.target.value)} className="w-full border rounded px-3 py-2" />
          <input type="text" placeholder="출판 연도" value={year} onChange={e => setYear(e.target.value)} className="w-full border rounded px-3 py-2" />
          <input type="text" placeholder="DOI" value={doi} onChange={e => setDoi(e.target.value)} className="w-full border rounded px-3 py-2" />
          <input type="text" placeholder="외부 링크" value={paperUrl} onChange={e => setPaperUrl(e.target.value)} className="w-full border rounded px-3 py-2" />

          <input type="file" accept="image/*" onChange={handleImageChange} className="w-full" />
          {previewUrl && <img src={previewUrl} alt="Preview" className="w-32 mt-2" />}
        </div>

        <button onClick={handleSubmit} className="mt-4 w-full bg-blue-700 text-white py-2 rounded hover:bg-blue-800">
          등록
        </button>
      </div>
    </div>
  )
}
