import { neon } from "@neondatabase/serverless"

if (!process.env.DATABASE_URL) {
  throw new Error("DATABASE_URL environment variable is not set")
}

export const sql = neon(process.env.DATABASE_URL)

// Types for our database entities
export interface User {
  id: string
  firebase_uid: string
  email: string
  name?: string
  avatar_url?: string
  created_at: string
  updated_at: string
}

export interface Resume {
  id: string
  user_id: string
  title: string
  template_id: string
  data: ResumeData
  is_public: boolean
  created_at: string
  updated_at: string
}

export interface ResumeData {
  personalInfo: {
    fullName: string
    email: string
    phone: string
    location: string
    linkedinUrl?: string
    githubUrl?: string
    portfolioUrl?: string
    summary: string
  }
  experience: Array<{
    id: string
    company: string
    position: string
    startDate: string
    endDate?: string
    current: boolean
    description: string
    achievements: string[]
  }>
  education: Array<{
    id: string
    institution: string
    degree: string
    field: string
    startDate: string
    endDate?: string
    gpa?: string
  }>
  skills: Array<{
    id: string
    category: string
    items: string[]
  }>
  projects: Array<{
    id: string
    name: string
    description: string
    technologies: string[]
    url?: string
    githubUrl?: string
  }>
  certifications: Array<{
    id: string
    name: string
    issuer: string
    date: string
    url?: string
  }>
}
