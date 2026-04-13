import { tags } from '@/constants';

export default function Slide_Text() {
  const tripleCopy = [...tags, ...tags, ...tags];

  return (
    <div className='slide-text alternat-2 pt_120'>
      <div className='text-inner'>
        <ul className='text-list'>
          {tripleCopy.map((tag, index) => (
            <li key={index}>{tag}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}
