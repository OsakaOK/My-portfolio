import React from 'react'

const MagicButton = ({
    title, icon, position, handleClick, otherClasses
}: {
    title: string; icon: React.ReactNode, position: String;
    handleClick?: () =>void; otherClasses?:string;
}) => {
  return (
    <button className="shadow-[inset_0_0_0_2px_#616467] text-black px-5 py-5 rounded-lg 
    tracking-widest uppercase font-bold bg-transparent hover:bg-[#616467] hover:text-white
     dark:text-neutral-200 transition duration-200 items-center inline-flex gap-2">
      {title} 
      {position === 'right' && icon}
</button>
  )
}

export default MagicButton