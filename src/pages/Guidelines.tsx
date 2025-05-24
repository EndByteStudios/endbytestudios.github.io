import { BookOpen } from 'lucide-react'
import GuidelinesMDX from '../data/guidelines.mdx'
import Alert from '../components/mdx/Alert'
import InfoBox from '../components/mdx/Info'
import Tip from '../components/mdx/Tip'

const mdxComponents = {
  Alert,
  Info: InfoBox,
  Tip,
}

export default function Guidelines() {
  return (
    <div className="min-h-[calc(100vh-120px)] flex items-start justify-center bg-gray-900 py-24 px-2">
      <div className="bg-gray-800/80 rounded-2xl shadow-2xl max-w-3xl w-full p-8 md:p-12 border border-gray-700">
        <div className="flex flex-col items-center mb-8">
          <span className="bg-purple-700/20 rounded-full p-3 mb-4">
            <BookOpen className="h-8 w-8 text-purple-400" />
          </span>
          <h1 className="text-4xl md:text-5xl font-heading font-bold text-center text-white mb-2">Community Guidelines</h1>
          <p className="text-lg text-gray-300 text-center max-w-xl mb-2">
            Please follow these guidelines to ensure a positive and productive experience for everyone.
          </p>
          <div className="w-16 h-1 bg-purple-500 rounded-full mt-2 mb-2" />
        </div>
        <article className="prose prose-invert prose-purple prose-headings:font-heading prose-headings:font-bold prose-a:text-purple-400 prose-a:no-underline hover:prose-a:underline prose-p:leading-relaxed prose-li:marker:text-purple-400 prose-ol:pl-6 prose-ul:pl-6 prose-h2:mt-10 prose-h2:mb-4 prose-h3:mt-8 prose-h3:mb-2 prose-hr:my-8">
          <GuidelinesMDX components={mdxComponents} />
        </article>
      </div>
    </div>
  )
} 