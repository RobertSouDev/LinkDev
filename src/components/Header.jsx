export default function Header() {
    return (
      <div className="flex flex-col items-center">
        <img src="/profile.JPEG"  
  className="w-30 h-30 rounded-full object-cover object-top shadow-xl shadow-black/30  "
         />
        <h1 className="mt-4 text-2xl font-semibold animate-bounce"
          style={{ animationIterationCount: .5 }}

        >Robert Roger</h1>
        <p className="text-sm text-zinc-400 animate-bounce"
          style={{ animationIterationCount: .5 }}

        >Desenvolvedor Fullstack | React & Node.js</p>
      </div>
    )
  }
  