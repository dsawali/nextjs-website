type ExperienceProps = {
  title: string;
  company: string;
  date: string;
};


export default function Experience({ title, company, date }: ExperienceProps) {
  return (

    <div className='mt-3'>
      <p className=''>* {title}, {company} </p>
      <p>↳ {date}</p>
    </div>
  )
}