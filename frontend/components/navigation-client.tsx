"use client"

import { Menu, X } from "lucide-react"
import { useState, useEffect } from "react"
import { usePathname, useRouter } from "next/navigation"

export default function Navigation() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [openDropdown, setOpenDropdown] = useState<string | null>(null)
  const [adminKeyInput, setAdminKeyInput] = useState("")
  const [isAdmin, setIsAdmin] = useState(false)

  const pathname = usePathname()
  const router = useRouter()

  // 관리자 키 확인
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

  const handleAdminLogin = () => {
    if (adminKeyInput === process.env.NEXT_PUBLIC_ADMIN_KEY) {
      const expires = Date.now() + 30 * 60 * 1000
      localStorage.setItem("adminKey", adminKeyInput)
      localStorage.setItem("expiresAt", expires.toString())
      setIsAdmin(true)
      alert("관리자 인증 성공")
      setAdminKeyInput("")
    } else {
      alert("잘못된 키입니다.")
    }
  }

  const handleLogout = () => {
    localStorage.removeItem("adminKey")
    localStorage.removeItem("expiresAt")
    setIsAdmin(false)
  }

  const getActiveSection = () => {
    if (pathname === '/') return 'home'
    if (pathname.startsWith('/about')) return 'about'
    if (pathname.startsWith('/board')) return 'board'
    if (pathname.startsWith('/members')) return 'members'
    if (pathname.startsWith('/publications')) return 'publications'
    if (pathname.startsWith('/contact')) return 'contact'
    return 'home'
  }

  const activeSection = getActiveSection()

  const menuItems = [
    { id: "home", label: "Home", path: "/" },
    { id: "about", label: "About", path: "/about" },
    {
      id: "members",
      label: "Members",
      path: "/members",
      dropdown: [
        { label: "Professor", path: "/members/professor" },
        { label: "Researchers", path: "/members/researchers" },
        { label: "Alumni", path: "/members/alumni" },
      ]
    },
    { id: "publications", label: "Publications", path: "/publications" },
    {
      id: "board",
      label: "Board",
      path: "/board",
      dropdown: [
        { label: "News", path: "/board/news" },
        { label: "Gallery", path: "/board/gallery" },
      ]
    },
    { id: "contact", label: "Contact", path: "/contact" },
  ]

  const handleMouseEnter = (itemId: string) => {
    setOpenDropdown(itemId)
  }

  const handleMouseLeave = () => {
    setOpenDropdown(null)
  }

  return (
    <nav className="fixed top-0 w-full bg-blue-900 text-white z-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-16 w-full">
          {/* Logo */}
          <div className="flex items-center flex-shrink-0">
            <button
              className="text-xl font-bold hover:text-blue-300 transition-colors focus:outline-none"
              onClick={() => router.push("/")}
            >
              IST Lab
            </button>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8 flex-1 justify-center">
            {menuItems.map((item) => (
              <div
                key={item.id}
                className="relative"
                onMouseEnter={() => item.dropdown && handleMouseEnter(item.id)}
                onMouseLeave={handleMouseLeave}
              >
                <button
                  onClick={() => router.push(item.path)}
                  className={`px-3 py-2 text-lg font-bold transition-colors focus:outline-none ${
                    activeSection === item.id ? "text-white font-bold" : "text-blue-300 hover:text-white"
                  }`}
                >
                  {item.label}
                </button>

                {/* Dropdown */}
                {item.dropdown && openDropdown === item.id && (
                  <div className="absolute top-full left-0 mt-0 bg-blue-800 rounded-b-lg shadow-lg z-50 animate-dropdown min-w-40">
                    <div className="py-2">
                      {item.dropdown.map((dropdownItem, index) => (
                        <button
                          key={index}
                          onClick={() => {
                            router.push(dropdownItem.path)
                            setOpenDropdown(null)
                          }}
                          className="block w-full text-left px-4 py-2 text-sm text-blue-200 hover:text-white hover:bg-blue-700 transition-colors focus:outline-none"
                        >
                          {dropdownItem.label}
                        </button>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* University Info + Admin */}
          <div className="hidden md:flex items-center gap-4 text-right flex-shrink-0">
            <div className="text-sm">
              Kunsan National University
              <div className="text-xs opacity-80">Software Department</div>
            </div>

            {!isAdmin ? (
              <div className="flex items-center gap-2">
                <input
                  type="password"
                  placeholder="관리자 키"
                  value={adminKeyInput}
                  onChange={(e) => setAdminKeyInput(e.target.value)}
                  className="px-2 py-1 rounded text-black text-sm"
                />
                <button
                  onClick={handleAdminLogin}
                  className="bg-blue-600 hover:bg-blue-700 text-white px-3 py-1 rounded text-sm"
                >
                  인증
                </button>
              </div>
            ) : (
              <div className="flex items-center gap-2">
                <span className="text-green-300 text-sm">관리자 모드</span>
                <button
                  onClick={handleLogout}
                  className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded text-sm"
                >
                  로그아웃
                </button>
              </div>
            )}
          </div>

          {/* Mobile 버튼 */}
          <div className="md:hidden">
            <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="p-2 focus:outline-none">
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile 메뉴 */}
        {isMobileMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {menuItems.map((item) => (
                <div key={item.id}>
                  <button
                    onClick={() => {
                      router.push(item.path)
                      setIsMobileMenuOpen(false)
                    }}
                    className={`block px-3 py-2 text-lg font-bold transition-colors focus:outline-none ${
                      activeSection === item.id ? "text-white font-bold" : "text-blue-300 hover:text-white"
                    }`}
                  >
                    {item.label}
                  </button>
                  {/* Mobile Dropdown */}
                  {item.dropdown && (
                    <div className="ml-4 space-y-1">
                      {item.dropdown.map((dropdownItem, index) => (
                        <button
                          key={index}
                          onClick={() => {
                            router.push(dropdownItem.path)
                            setIsMobileMenuOpen(false)
                          }}
                          className="block px-3 py-2 text-sm text-blue-200 hover:text-white transition-colors focus:outline-none"
                        >
                          {dropdownItem.label}
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
