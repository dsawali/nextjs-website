import experiences from './experiences.json';
import Experience from '@/components/experience/experience';

export default function Experiences() {
  return (
    <div className='window-terminal w-full h-full overflow-y-auto'>

        <span>experience@work: ~$</span>
      <ul>
        {Object.values(experiences).map((exp: {id: number, title: string, company: string, date: string }) => (
          <li key={exp.id}>
            <div className=''>
              <Experience 
                title={exp.title} 
                company={exp.company} 
                date={exp.date} 
              />
            </div>
          </li>
        ) )}
      </ul>
    </div>
  );
}
