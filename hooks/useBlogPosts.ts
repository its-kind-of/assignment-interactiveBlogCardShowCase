
import { useState, useEffect } from 'react'

interface BlogPost {
  id: number
  title: string
  description: string
  content: string
}

const blogData: BlogPost[] = [
  {
    id: 1,
    title: "Getting Started with Next.js",
    description: "Learn the basics of Next.js and build your first app",
    content: "Next.js is a powerful React framework that makes it easy to create fast, SEO-friendly web applications. In this post, we'll cover the basics of setting up a Next.js project, creating pages, and leveraging its built-in features like server-side rendering and API routes."
  },
  {
    id: 2,
    title: "Mastering CSS Animations",
    description: "Dive deep into CSS animations and transitions",
    content: "CSS animations and transitions can bring life to your web pages. In this post, we'll explore advanced techniques for creating smooth, performant animations using keyframes, transforms, and the animation property. We'll also cover best practices for accessibility and performance optimization."
  },
  {
    id: 3,
    title: "The Power of ShadCN UI",
    description: "Discover how ShadCN UI can streamline your development process",
    content: "ShadCN UI is a collection of reusable components that can significantly speed up your development workflow. We'll explore how to integrate ShadCN UI into your project, customize its components, and leverage its theming capabilities to create beautiful, consistent user interfaces with minimal effort."
  }
]

export function useBlogPosts() {
  const [posts, setPosts] = useState<BlogPost[]>([])
  const [expandedPost, setExpandedPost] = useState<number | null>(null)

  useEffect(() => {
    // Simulate fetching data from an API
    setTimeout(() => {
      setPosts(blogData)
    }, 500)
  }, [])

  const toggleExpand = (id: number) => {
    setExpandedPost(expandedPost === id ? null : id)
  }

  return { posts, expandedPost, toggleExpand }
}