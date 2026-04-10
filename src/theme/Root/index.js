// src/theme/Root/index.js
// AUTH DISABLED - to re-enable, uncomment the original Root component below
// and remove the pass-through Root above it.

import React from 'react'

// PASS-THROUGH: remove this block to re-enable auth
const Root = ({ children }) => <>{children}</>
export default Root

/* ============================================================
   ORIGINAL AUTH ROOT - uncomment to restore login
   ============================================================

import { useState, useEffect, useRef } from 'react'
import { useLocation } from '@docusaurus/router'
import { AuthProvider } from '@site/src/contexts/AuthContext'
import { FirebaseProvider } from '@site/src/contexts/FirebaseContext'

const PROTECTED_PATH_STUBS = [
  '/learning/service-blueprinting/courses',
  '/learning/service-blueprinting/modules',
  '/learning/service-blueprinting/forms',
  '/learning/service-blueprinting/certificate',
  '/learning/automation-essentials',
]

const LOGIN_PATHS = ['/learning/login']

const COMPLETELY_PUBLIC_PATHS = [
  '/',
  '/learning/discover',
  '/learning/actions',
  '/learning/contact-us',
  '/learning/service-blueprinting',
  '/learning/automation-essentials',
  '/learning/pro',
  '/learning/insights',
  '/learning/express',
  '/learning/',
  '/learning',
]

const RobustLoadingScreen = () => {
  useEffect(() => {
    const protectiveStyles = `
      body::before, body::after { display: none !important; }
      html, body { overflow-x: hidden !important; }
      script[src*="extension"], script[src*="chrome"] { display: none !important; }
    `
    const styleElement = document.createElement('style')
    styleElement.textContent = protectiveStyles
    document.head.appendChild(styleElement)
    return () => { if (styleElement.parentNode) styleElement.parentNode.removeChild(styleElement) }
  }, [])

  return (
    <div style={{ position: 'fixed', top: 0, left: 0, right: 0, bottom: 0, backgroundColor: '#FFFFFF',
      display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center',
      zIndex: 999999, fontFamily: 'SeasonMix, system-ui, -apple-system, sans-serif' }}>
      <div style={{ width: '40px', height: '40px', border: '4px solid #E2E8F0',
        borderTop: '4px solid #0066CC', borderRadius: '50%',
        animation: 'spin 1s linear infinite', marginBottom: '1rem' }} />
      <p style={{ color: '#4A5568', fontSize: '1rem', margin: 0 }}>Loading...</p>
      <style>{`@keyframes spin { 0% { transform: rotate(0deg); } 100% { transform: rotate(360deg); } }`}</style>
    </div>
  )
}

const isProtectedPage = pathname =>
  PROTECTED_PATH_STUBS.some(stub => pathname.startsWith(stub))

const isLoginPage = pathname =>
  LOGIN_PATHS.some(path => pathname === path)

const isCompletelyPublicPage = pathname => {
  if (COMPLETELY_PUBLIC_PATHS.some(path => {
    if (path === '/' || path === '/learning/' || path === '/learning') return pathname === path
    if (path.startsWith('/learning/')) return pathname === path
    return pathname.startsWith(path)
  })) return true
  if (pathname === '/learning/' || pathname === '/learning') return true
  return false
}

const Root = ({ children }) => {
  const location = useLocation()
  const [isReady, setIsReady] = useState(false)
  const [pageConfig, setPageConfig] = useState(null)
  const stableConfigRef = useRef(null)

  useEffect(() => {
    const pathname = location.pathname
    if (!stableConfigRef.current || stableConfigRef.current.pathname !== pathname) {
      let config
      if (isLoginPage(pathname)) {
        config = { type: 'login', needsAuth: true, needsFirebase: true, pathname }
      } else if (isProtectedPage(pathname)) {
        config = { type: 'protected', needsAuth: true, needsFirebase: true, pathname }
      } else if (isCompletelyPublicPage(pathname)) {
        config = { type: 'public', needsAuth: false, needsFirebase: false, pathname }
      } else {
        config = { type: 'public', needsAuth: false, needsFirebase: false, pathname }
      }
      stableConfigRef.current = config
      setPageConfig(config)
    }
  }, [location.pathname])

  useEffect(() => {
    if (!pageConfig) return
    const stabilityTimer = setTimeout(() => {
      if (stableConfigRef.current?.pathname === location.pathname) setIsReady(true)
    }, 200)
    return () => clearTimeout(stabilityTimer)
  }, [pageConfig, location.pathname])

  if (!isReady || !pageConfig) return <RobustLoadingScreen />

  if (pageConfig.type === 'public') return <>{children}</>

  if (pageConfig.type === 'login') {
    return (
      <FirebaseProvider>
        <AuthProvider requireAuth={false}>{children}</AuthProvider>
      </FirebaseProvider>
    )
  }

  if (pageConfig.type === 'protected') {
    return (
      <FirebaseProvider>
        <AuthProvider requireAuth={true}>{children}</AuthProvider>
      </FirebaseProvider>
    )
  }

  return <>{children}</>
}

export default Root

============================================================ */
