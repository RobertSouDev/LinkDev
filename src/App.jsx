import Header from './components/Header'
import LinkCard from './components/LinkCard'
import Footer from './components/Footer'
import {links} from "./data/links"
import { motion } from 'framer-motion'

export default function App() {
  return (
    <div className="min-h-screen bg-zinc-700 text-white flex flex-col items-center px-4 py-6">
      <div className='mt-20'>

      </div>
      <Header />
      <div className="w-full max-w-md space-y-4 mt-6">
      {links.map((link, index) => (
          <motion.div
            key={link.title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              delay: index * 0.3,
              duration:0.8, 
              ease: "easeInOut" 
              }}
          >
            <LinkCard {...link} />
          </motion.div>
        ))}
      </div>
      <Footer />
    </div>
  )
}
