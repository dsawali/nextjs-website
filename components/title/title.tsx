import TypewriterComponent from '@/components/typewriter/typewriter';

export default function Title() {
  return (
    <div className=''>
      <div>
        <p className='hero-title lg:whitespace-nowrap'>Davis Sawali</p>
        <TypewriterComponent words={['Software Engineering, Open Source, Automation']} />
      </div>
    </div>
  );
}