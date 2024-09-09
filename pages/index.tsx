
import { useTheme } from 'next-themes'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { useBlogPosts } from '@/hooks/useBlogPosts'

export default function Home() {
  const { theme, setTheme } = useTheme()
  const { posts, expandedPost, toggleExpand } = useBlogPosts()

  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark')
  }

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6">Interactive Blog Card Showcase</h1>
      <Button onClick={toggleTheme} className="mb-4">
        Toggle {theme === 'dark' ? 'Light' : 'Dark'} Mode
      </Button>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {posts.map((post) => (
          <Card key={post.id} className="blog-card transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-lg">
            <CardHeader>
              <CardTitle>{post.title}</CardTitle>
              <CardDescription>{post.description}</CardDescription>
            </CardHeader>
            <CardContent>
              <p className={`transition-all duration-300 ease-in-out ${expandedPost === post.id ? 'max-h-full' : 'max-h-20 overflow-hidden'}`}>
                {post.content}
              </p>
            </CardContent>
            <CardFooter>
              <Button onClick={() => toggleExpand(post.id)}>
                {expandedPost === post.id ? 'Show Less' : 'View More'}
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  )
}