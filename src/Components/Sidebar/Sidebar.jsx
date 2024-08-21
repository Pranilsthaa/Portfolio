/* eslint-disable react/prop-types */
import myPIC from '/images/pp.jpg'
import npFLAG from '/images/np.png'

const navLinks = [
    { name: "HOME", href: "#home" },
    { name: "ABOUT", href: "#about" },
    { name: "SERVICES", href: "#services" },
    { name: "SKILLS", href: "#" },
    { name: "EDUCATION", href: "#" },
    { name: "EXPERIENCE", href: "#" },
    { name: "CONTACT", href: "#" },
  ];

function Sidebar({activeLink}) {
  return (
    <div className='bg-[#efefef] fixed min-w-[250px] min-h-[100lvh] flex flex-col items-center pt-[3rem] hidden sm:flex'>
        <img src={myPIC} alt="profile picture" className='rounded-full min-h-[135px] max-w-[135px] mb-[20px]' />
        <h1 className='mb-[10px] text-2xl font-playfair font-bold'>Pranil Shrestha</h1>
        <h2 className='mb-[20px] flex gap-2'><span className='text-[#2C98F0]'>Web Developer</span> <img src={npFLAG} alt="np" height={20} width={20} /></h2>
        <ul className='flex flex-col items-center gap-[10px] text-sm tracking-[2px] font-poppins text-[#3d3d3d] hover:text-black'>
            {navLinks.map((link, index) => (
                <li key={link.name} className='group flex flex-col items-center'>
                <a
                    href={link.href}
                    className={`${activeLink === `nav_link_${index}` ? 'text-blue-500' : ''} `}
                >
                    {link.name}
                </a>
                <div className={`relative w-[1px] h-[0.01rem] duration-500 transition-all ease-in-out group-hover:w-full group-hover:bg-[#3d3d3d] ${ activeLink === `nav_link_${index}` ? 'w-full bg-[#144be1]' : ''}`} />
                </li>
            ))}
        </ul>
      </div>
  )
}

export default Sidebar
