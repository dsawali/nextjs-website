import Link from 'next/link'
import { FaGithub, FaLinkedin, FaEnvelope, FaFilePdf } from 'react-icons/fa'

export default function Contact() {
  return (
    <div className='window-terminal w-full h-full flex flex-col justify-between overflow-y-auto'>
      <div>
        <div className='flex items-center mb-4'>
          <span className='mr-2 text-green-500'>contact@portfolio:~$</span>
          <span>cat contact_info.txt</span>
        </div>
        
        <div className='flex flex-col gap-1 pl-4'>
          <div className='flex items-center gap-3 hover:text-white transition-colors cursor-pointer group'>
            <FaFilePdf className='text-xl group-hover:scale-110 transition-transform' />
             <span>:</span>
             <Link href='Davis_Sawali_Resume.pdf' target='_blank' rel='noopener noreferrer' className='hover:underline'>
              resume
             </Link>
          </div>

          <div className='flex items-center gap-3 hover:text-white transition-colors cursor-pointer group'>
            <FaEnvelope className='text-xl group-hover:scale-110 transition-transform' />
            <span>:</span>
            <Link href='mailto:jnthndavis95@gmail.com' className='hover:underline'>
              jnthndavis95@gmail.com
            </Link>
          </div>
          
          <div className='flex items-center gap-3 hover:text-white transition-colors cursor-pointer group'>
            <FaLinkedin className='text-xl group-hover:scale-110 transition-transform' />
             <span>:</span>
             <Link href='https://www.linkedin.com/in/dsawali/' target='_blank' rel='noopener noreferrer' className='hover:underline'>
               linkedin.com/in/dsawali
             </Link>
          </div>
          
          <div className='flex items-center gap-3 hover:text-white transition-colors cursor-pointer group'>
            <FaGithub className='text-xl group-hover:scale-110 transition-transform' />
             <span>:</span>
             <Link href='https://github.com/dsawali' target='_blank' rel='noopener noreferrer' className='hover:underline'>
               github.com/dsawali
             </Link>
          </div>
          
        </div>
      </div>
      
      <div className='mt-4 text-xs text-green-700/50'>
        ====================================================
      </div>
    </div>
  )
}