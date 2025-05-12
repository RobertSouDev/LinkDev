import { motion } from 'framer-motion'

export default function LinkCard({ title, url, icon }) {
  return (
    <motion.a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="bg-zinc-800 hover:bg-zinc-700 p-4 rounded-lg flex items-center space-x-4 shadow-md "
      whileHover={{ scale: 1.05 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
    >
      {icon && <span className="text-white">{icon}</span>}
      <span>{title}</span>
    </motion.a>
  )
}
