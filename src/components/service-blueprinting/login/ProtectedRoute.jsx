// src/components/service-blueprinting/login/ProtectedRoute.jsx
// AUTH DISABLED - to re-enable, remove the pass-through below and uncomment the original.

// PASS-THROUGH: remove this block to re-enable auth
export default function ProtectedRoute({ children }) {
  return children
}

/* ============================================================
   ORIGINAL PROTECTED ROUTE - uncomment to restore login
   ============================================================

import React, { useState, useEffect } from 'react'
import { useHistory } from '@docusaurus/router'
import { useAuth } from '@site/src/contexts/AuthContext'
import { auth } from '@site/src/firebase/firebase'
import { signOut } from 'firebase/auth'
import Link from '@docusaurus/Link'
import { getItem } from '@site/src/components/Forms/utils/BrowserStorage'

export default function ProtectedRoute({ children }) {
  const { loading, user } = useAuth()
  const history = useHistory()
  const [isLogoutHovered, setIsLogoutHovered] = useState(false)
  const [wasRecentlyAuthenticated, setWasRecentlyAuthenticated] = useState(false)

  useEffect(() => {
    const userEmail = getItem('userEmail', '')
    const userId = getItem('userId', '')
    if (userEmail && userId) setWasRecentlyAuthenticated(true)
  }, [])

  useEffect(() => {
    if (user) setWasRecentlyAuthenticated(true)
  }, [user])

  const currentPath = window.location.pathname

  const isProtectedPath = () => {
    if (currentPath === '/learning/login') return false
    if (currentPath === '/learning/service-blueprinting') return false
    if (currentPath === '/learning/' || currentPath === '/learning') return false
    if (currentPath.startsWith('/learning/service-blueprinting/')) return true
    if (currentPath.startsWith('/learning/automation-essentials')) return true
    return false
  }

  if (!isProtectedPath()) return children

  if (loading) {
    return (
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center',
        minHeight: '200px', fontFamily: 'SeasonMix, system-ui, -apple-system, sans-serif' }}>
        <div>Loading authentication...</div>
      </div>
    )
  }

  if (!user && wasRecentlyAuthenticated) {
    setTimeout(() => { if (!user) setWasRecentlyAuthenticated(false) }, 2000)
    return (
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center',
        minHeight: '200px', fontFamily: 'SeasonMix, system-ui, -apple-system, sans-serif' }}>
        <div>Verifying authentication...</div>
      </div>
    )
  }

  if (!user) {
    try {
      if (currentPath !== '/learning/login') sessionStorage.setItem('redirectUrl', currentPath)
    } catch (error) {}

    let courseName = 'this content'
    let courseIcon = '🔒'
    if (currentPath.includes('service-blueprinting')) { courseName = 'Service Blueprinting'; courseIcon = '🔰' }
    else if (currentPath.includes('automation-essentials')) { courseName = 'Automation Essentials'; courseIcon = '⚡' }

    return (
      <div style={{ position: 'fixed', top: 0, left: 0, right: 0, bottom: 0,
        backgroundColor: 'rgba(0, 0, 0, 0.9)', display: 'flex', alignItems: 'center',
        justifyContent: 'center', zIndex: 9999, fontFamily: 'SeasonMix, system-ui, -apple-system, sans-serif' }}>
        <div style={{ backgroundColor: 'var(--brand-white)', padding: '3rem', borderRadius: '16px',
          border: '2px solid var(--brand-blue-400)', boxShadow: '0 0 30px rgba(0, 102, 255, 0.3)',
          textAlign: 'center', maxWidth: '500px', margin: '1rem' }}>
          <div style={{ fontSize: '4rem', marginBottom: '1.5rem' }}>{courseIcon}</div>
          <h2 style={{ color: 'var(--brand-black-700)', margin: '0 0 1rem 0', fontSize: '2rem', fontWeight: '600' }}>
            Login Required
          </h2>
          <p style={{ color: 'var(--brand-grey-600)', margin: '0 0 2rem 0', fontSize: '1.2rem', lineHeight: '1.6' }}>
            {courseName === 'this content'
              ? 'This content requires you to login to continue.'
              : `The ${courseName} course requires you to login to continue.`}
          </p>
          <Link to='/learning/login' style={{ display: 'inline-block', backgroundColor: 'var(--brand-blue)',
            color: 'var(--brand-white)', padding: '1rem 2.5rem', borderRadius: '8px',
            textDecoration: 'none', fontSize: '1.2rem', fontWeight: '600' }}>
            Login to Continue
          </Link>
          <p style={{ color: 'var(--brand-grey-500)', margin: '2rem 0 0 0', fontSize: '0.95rem' }}>
            Don't have an account?{' '}
            <Link to='/learning/login' style={{ color: 'var(--brand-blue)', textDecoration: 'none', fontWeight: '500' }}>
              Sign up here
            </Link>
          </p>
        </div>
      </div>
    )
  }

  const handleLogout = async () => {
    try {
      setWasRecentlyAuthenticated(false)
      await signOut(auth)
      history.push('/learning/')
    } catch (error) {
      history.push('/learning/')
    }
  }

  return (
    <>
      <button onClick={handleLogout}
        onMouseEnter={() => setIsLogoutHovered(true)}
        onMouseLeave={() => setIsLogoutHovered(false)}
        style={{ position: 'fixed', top: '20px', right: '20px',
          backgroundColor: isLogoutHovered ? '#dc2626' : '#0066cc',
          color: 'white', border: '2px solid white', borderRadius: '8px',
          padding: '0.8rem 1.5rem', fontSize: '1rem', fontWeight: '700',
          cursor: 'pointer', zIndex: 99999, transition: 'all 0.3s ease',
          boxShadow: '0 4px 15px rgba(0, 102, 204, 0.4)',
          fontFamily: 'SeasonMix, system-ui, -apple-system, sans-serif' }}
        title={`Logout ${user.email}`}>
        🚪 Logout
      </button>
      {children}
    </>
  )
}

============================================================ */
