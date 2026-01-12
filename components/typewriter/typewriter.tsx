'use client';

import Typewriter from 'typewriter-effect';

type TypewriterProps = {
  words: string[]
}

export default function TypewriterComponent({ words }: TypewriterProps) {
  return (
    <div>
      <Typewriter 
        options={{
          strings: words,
          autoStart: true,
          loop: true,
          delay: 55,
          deleteSpeed: 40
        }}
      />
    </div>
  )
}