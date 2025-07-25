import React from 'react'

export default function Blob({className = ''}) {

  return (
    <div className={`relative ${className} bg-transparent`} >
      <svg 
        viewBox="0 0 200 200" 
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full"
      >
        <defs>
          <linearGradient id="blobGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#3B82F6" />
            <stop offset="50%" stopColor="#8B5CF6" />
            <stop offset="100%" stopColor="#EC4899" />
          </linearGradient>
        </defs>
        <path 
          fill="url(#blobGradient)" 
          opacity="0.8" 
          transform="translate(100, 100)"
        >
          <animate 
            attributeName="d"
            dur="12s"
            repeatCount="indefinite"
            values="M34.3,-57.5C46.8,-52.1,61.1,-47.8,70.9,-38.4C80.7,-29,86,-14.5,85.9,0C85.9,14.5,80.6,29,73.1,42.3C65.6,55.7,56,68,43.4,74.7C30.9,81.5,15.4,82.8,-0.6,83.8C-16.6,84.9,-33.3,85.7,-46.8,79.4C-60.3,73.2,-70.6,60,-74.6,45.6C-78.5,31.2,-76,15.6,-76.3,-0.2C-76.5,-15.9,-79.6,-31.8,-74.6,-44.3C-69.5,-56.9,-56.5,-66.1,-42.8,-70.9C-29,-75.6,-14.5,-75.8,-1.8,-72.6C10.9,-69.5,21.7,-62.9,34.3,-57.5Z;M35.5,-59.6C46.9,-54.9,57.7,-47.2,66.5,-36.8C75.3,-26.4,82,-13.2,80,-1.2C78,10.9,67.2,21.7,59.2,33.4C51.2,45.2,45.9,57.7,36.5,67.9C27,78.1,13.5,85.9,0.7,84.7C-12.2,83.5,-24.4,73.4,-38.6,66C-52.9,58.6,-69.2,54,-75.1,43.5C-81,32.9,-76.5,16.5,-73.4,1.8C-70.3,-12.9,-68.5,-25.7,-63.4,-37.6C-58.3,-49.6,-49.8,-60.6,-38.7,-65.5C-27.6,-70.4,-13.8,-69.1,-0.9,-67.6C12,-66.1,24.1,-64.3,35.5,-59.6Z;M31.6,-57.2C41.4,-49.1,49.9,-41.4,57.6,-32C65.2,-22.5,72,-11.3,71.4,-0.3C70.8,10.6,62.9,21.2,55.9,31.7C48.8,42.3,42.7,52.8,33.6,62.4C24.4,71.9,12.2,80.4,-1.9,83.7C-16,87,-32,85.1,-41.9,76C-51.8,66.9,-55.6,50.6,-62.1,36.7C-68.6,22.9,-77.8,11.4,-77.5,0.1C-77.3,-11.2,-67.7,-22.4,-59,-32.3C-50.3,-42.3,-42.4,-51.2,-32.8,-59.3C-23.1,-67.4,-11.5,-74.8,-0.3,-74.3C10.9,-73.8,21.9,-65.3,31.6,-57.2Z;M36,-58.6C48.6,-55.1,62.1,-49.4,71.7,-39.3C81.3,-29.1,86.9,-14.6,87.8,0.5C88.7,15.6,84.8,31.2,76.7,43.8C68.6,56.5,56.3,66.3,42.8,73.3C29.3,80.2,14.6,84.3,2,80.8C-10.6,77.4,-21.3,66.3,-31.6,57.6C-42,48.8,-52.1,42.3,-60.6,33.1C-69.1,23.9,-76,12,-76,0C-75.9,-11.9,-68.9,-23.8,-60.3,-32.9C-51.7,-42,-41.6,-48.2,-31.3,-53.1C-21,-57.9,-10.5,-61.4,0.6,-62.4C11.7,-63.5,23.4,-62.1,36,-58.6Z;M40.3,-71.7C51.9,-63,60.9,-51.7,65.3,-39.3C69.8,-26.9,69.7,-13.4,71.1,0.8C72.4,15,75.2,30,70.3,41.7C65.4,53.3,52.9,61.7,40,64.7C27,67.8,13.5,65.5,-0.6,66.5C-14.6,67.4,-29.2,71.6,-39.8,67.2C-50.5,62.9,-57.3,49.9,-60.6,37.3C-63.9,24.7,-63.7,12.3,-65.7,-1.1C-67.6,-14.6,-71.8,-29.2,-69.2,-43.2C-66.7,-57.1,-57.5,-70.4,-44.9,-78.6C-32.2,-86.8,-16.1,-89.8,-0.9,-88.2C14.3,-86.6,28.6,-80.5,40.3,-71.7Z;M34.3,-57.5C46.8,-52.1,61.1,-47.8,70.9,-38.4C80.7,-29,86,-14.5,85.9,0C85.9,14.5,80.6,29,73.1,42.3C65.6,55.7,56,68,43.4,74.7C30.9,81.5,15.4,82.8,-0.6,83.8C-16.6,84.9,-33.3,85.7,-46.8,79.4C-60.3,73.2,-70.6,60,-74.6,45.6C-78.5,31.2,-76,15.6,-76.3,-0.2C-76.5,-15.9,-79.6,-31.8,-74.6,-44.3C-69.5,-56.9,-56.5,-66.1,-42.8,-70.9C-29,-75.6,-14.5,-75.8,-1.8,-72.6C10.9,-69.5,21.7,-62.9,34.3,-57.5Z"
          />
        </path>
      </svg>
      <div className='absolute inset-0 scale-[1.3] blur-[80px] pointer-events-none z-[-1]'>
          <svg 
        viewBox="0 0 200 200" 
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full"
        style={{
      filter: "blur(60px)",
      transform: "scale(1)",
      opacity: 0.5,
    }}
      >
        <defs>
          <linearGradient id="blobGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#3B82F6" />
            <stop offset="50%" stopColor="#8B5CF6" />
            <stop offset="100%" stopColor="#EC4899" />
          </linearGradient>
        </defs>
        <path 
          fill="url(#blobGradient)" 
          opacity="0.8" 
          transform="translate(100, 100)"
        >
          <animate 
            attributeName="d"
            dur="8s"
            repeatCount="indefinite"
            values="M34.3,-57.5C46.8,-52.1,61.1,-47.8,70.9,-38.4C80.7,-29,86,-14.5,85.9,0C85.9,14.5,80.6,29,73.1,42.3C65.6,55.7,56,68,43.4,74.7C30.9,81.5,15.4,82.8,-0.6,83.8C-16.6,84.9,-33.3,85.7,-46.8,79.4C-60.3,73.2,-70.6,60,-74.6,45.6C-78.5,31.2,-76,15.6,-76.3,-0.2C-76.5,-15.9,-79.6,-31.8,-74.6,-44.3C-69.5,-56.9,-56.5,-66.1,-42.8,-70.9C-29,-75.6,-14.5,-75.8,-1.8,-72.6C10.9,-69.5,21.7,-62.9,34.3,-57.5Z;M35.5,-59.6C46.9,-54.9,57.7,-47.2,66.5,-36.8C75.3,-26.4,82,-13.2,80,-1.2C78,10.9,67.2,21.7,59.2,33.4C51.2,45.2,45.9,57.7,36.5,67.9C27,78.1,13.5,85.9,0.7,84.7C-12.2,83.5,-24.4,73.4,-38.6,66C-52.9,58.6,-69.2,54,-75.1,43.5C-81,32.9,-76.5,16.5,-73.4,1.8C-70.3,-12.9,-68.5,-25.7,-63.4,-37.6C-58.3,-49.6,-49.8,-60.6,-38.7,-65.5C-27.6,-70.4,-13.8,-69.1,-0.9,-67.6C12,-66.1,24.1,-64.3,35.5,-59.6Z;M31.6,-57.2C41.4,-49.1,49.9,-41.4,57.6,-32C65.2,-22.5,72,-11.3,71.4,-0.3C70.8,10.6,62.9,21.2,55.9,31.7C48.8,42.3,42.7,52.8,33.6,62.4C24.4,71.9,12.2,80.4,-1.9,83.7C-16,87,-32,85.1,-41.9,76C-51.8,66.9,-55.6,50.6,-62.1,36.7C-68.6,22.9,-77.8,11.4,-77.5,0.1C-77.3,-11.2,-67.7,-22.4,-59,-32.3C-50.3,-42.3,-42.4,-51.2,-32.8,-59.3C-23.1,-67.4,-11.5,-74.8,-0.3,-74.3C10.9,-73.8,21.9,-65.3,31.6,-57.2Z;M36,-58.6C48.6,-55.1,62.1,-49.4,71.7,-39.3C81.3,-29.1,86.9,-14.6,87.8,0.5C88.7,15.6,84.8,31.2,76.7,43.8C68.6,56.5,56.3,66.3,42.8,73.3C29.3,80.2,14.6,84.3,2,80.8C-10.6,77.4,-21.3,66.3,-31.6,57.6C-42,48.8,-52.1,42.3,-60.6,33.1C-69.1,23.9,-76,12,-76,0C-75.9,-11.9,-68.9,-23.8,-60.3,-32.9C-51.7,-42,-41.6,-48.2,-31.3,-53.1C-21,-57.9,-10.5,-61.4,0.6,-62.4C11.7,-63.5,23.4,-62.1,36,-58.6Z;M40.3,-71.7C51.9,-63,60.9,-51.7,65.3,-39.3C69.8,-26.9,69.7,-13.4,71.1,0.8C72.4,15,75.2,30,70.3,41.7C65.4,53.3,52.9,61.7,40,64.7C27,67.8,13.5,65.5,-0.6,66.5C-14.6,67.4,-29.2,71.6,-39.8,67.2C-50.5,62.9,-57.3,49.9,-60.6,37.3C-63.9,24.7,-63.7,12.3,-65.7,-1.1C-67.6,-14.6,-71.8,-29.2,-69.2,-43.2C-66.7,-57.1,-57.5,-70.4,-44.9,-78.6C-32.2,-86.8,-16.1,-89.8,-0.9,-88.2C14.3,-86.6,28.6,-80.5,40.3,-71.7Z;M34.3,-57.5C46.8,-52.1,61.1,-47.8,70.9,-38.4C80.7,-29,86,-14.5,85.9,0C85.9,14.5,80.6,29,73.1,42.3C65.6,55.7,56,68,43.4,74.7C30.9,81.5,15.4,82.8,-0.6,83.8C-16.6,84.9,-33.3,85.7,-46.8,79.4C-60.3,73.2,-70.6,60,-74.6,45.6C-78.5,31.2,-76,15.6,-76.3,-0.2C-76.5,-15.9,-79.6,-31.8,-74.6,-44.3C-69.5,-56.9,-56.5,-66.1,-42.8,-70.9C-29,-75.6,-14.5,-75.8,-1.8,-72.6C10.9,-69.5,21.7,-62.9,34.3,-57.5Z"
          />
        </path>
      </svg>
      </div>
    </div>
  )
}