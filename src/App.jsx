import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Layout from './components/layout/Layout'
import ProtectedRoute from './components/layout/ProtectedRoute'
import AdminRoute from './components/layout/AdminRoute'

// Public pages
import Home               from './pages/Home'
import Courses            from './pages/Courses'
import CourseDetail       from './pages/CourseDetail'
import Apply              from './pages/Apply'
import ApplicationStatus  from './pages/ApplicationStatus'
import Contact            from './pages/Contact'
import Login              from './pages/Login'
import Register           from './pages/Register'
import NotFound           from './pages/NotFound'

// Admin pages
import AdminDashboard          from './pages/admin/Dashboard'
import AdminManageCourses      from './pages/admin/ManageCourses'
import AdminManageApplications from './pages/admin/ManageApplications'

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        {/* Public */}
        <Route index           element={<Home />} />
        <Route path="courses"  element={<Courses />} />
        <Route path="courses/:id" element={<CourseDetail />} />
        <Route path="contact"  element={<Contact />} />
        <Route path="login"    element={<Login />} />
        <Route path="register" element={<Register />} />

        {/* Student — must be logged in */}
        <Route element={<ProtectedRoute />}>
          <Route path="apply/:id"    element={<Apply />} />
          <Route path="my-applications" element={<ApplicationStatus />} />
        </Route>

        {/* Admin */}
        <Route element={<AdminRoute />}>
          <Route path="admin"                  element={<AdminDashboard />} />
          <Route path="admin/courses"          element={<AdminManageCourses />} />
          <Route path="admin/applications"     element={<AdminManageApplications />} />
        </Route>

        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  )
}