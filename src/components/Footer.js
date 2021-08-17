import { FiInstagram } from 'react-icons/fi';
import { AiFillFacebook } from 'react-icons/ai';
import { SiTwitter } from 'react-icons/si';

function Footer(){
  return(
    <div className="bg-primary-dark text-white py-10 md:py-14 px-6 md:px-8">

      {/* Level 1 - subscription || Links || Social media icons */}
      <div className="md:flex md:justify-between md:space-x-10">

        {/* subscription */}
        <div className="space-y-3 md:max-w-lg md:pr-28">
          <h2 className="font-heading text-2xl md:text-3xl">Let's stay in touch</h2>
          <p className="text-xs md:text-base md:font-thin leading-5">We’ll give you a heads up on new Lumin products, deals, and events, plus tips & tricks on how to keep your skin looking its damned finest.</p>
          <form>
            <label htmlFor="email"></label>
            <input className="w-full bg-transparent focus:border-white text-sm py-1 font-semibold text-gray-200 border-b-2 border-white" name="email" type="text" placeholder="EMAIL ADDRESS"></input>
          </form>
        </div>

        {/* Links -- Shop || About || More || Social media icons  */}
        <div className="grid grid-cols-2 md:flex-1 md:grid-cols-4 gap-6 py-6 text-xs">

          {/* Shop */}
          <ul className="space-y-3">
            <li><h3 className="font-black">Shop</h3></li>
            <li><button className="md:text-sm hover:underline">Skin</button></li>
            <li><button className="md:text-sm hover:underline">Hair</button></li>
            <li><button className="md:text-sm hover:underline">Body</button></li>
          </ul>

          {/* About */}
          <ul className="space-y-3">
            <li><h3 className="font-black">About</h3></li>
            <li><a href="https://www.luminskin.com/blog" className="md:text-sm hover:underline">Blog</a></li>
            <li><a href="https://www.luminskin.com/pages/how-to" className="md:text-sm hover:underline">How To</a></li>
            <li><a href="https://www.luminskin.com/pages/ingredients" className="md:text-sm hover:underline">Ingredients</a></li>
            <li><a href="https://luminskin.com/pages/customer-reviews" className="md:text-sm hover:underline">Reviews</a></li>
            <li><a href="https://www.luminskin.com/pages/faq" className="md:text-sm hover:underline">FAQ</a></li>
          </ul>

          {/* More */}
          <ul className="space-y-3">
            <li><h3 className="font-black">More</h3></li>
            <li><a href="https://angel.co/company/skinco" className="md:text-sm hover:underline">Jobs</a></li>
            <li><a href="mailto:wholesale@luminskin.com" className="md:text-sm hover:underline">wholesale</a></li>
            <li><a href="https://www.luminskin.com/pages/heroes-program-discount" className="md:text-sm hover:underline">Heroes Program</a></li>
            <li><a href="https://www.luminskin.com/pages/request-personal-data" className="md:text-sm hover:underline">Request Personal Data</a></li>
          </ul>

          {/* Social media links */}
          <div className="flex space-x-3">
            <a href="https://www.instagram.com/lumin.skin/" className="text-xl md:text-2xl"><FiInstagram/></a>
            <a href="https://www.facebook.com/lumin.skincare/" className="text-xl md:text-2xl"><AiFillFacebook/></a>
            <a href="https://twitter.com/lumin_skin" className="text-xl md:text-2xl"><SiTwitter/></a>
          </div>

        </div>
      </div> 
      
      {/* Level 2 - Need help ? || Accepted credit cards */}
      <div>

        {/* Need help ? */}
        <div className="text-xs space-y-3 py-3 md:py-0 md:pb-6">
          <h3 className=" text-xs  md:text-base font-bold">Need Help?</h3>
          <p className="md:font-thin md:text-base">Contact us through our <a href="https://www.luminskin.com/pages/customer-support-portal" className="underline md:text-sm">Support concierge</a></p>
          <p className=" md:font-thin md:text-base">Or email us at <a className="underline" href="mailto:support@luminskin.com underline">support@luminskin.com</a></p>
        </div>

        {/* Accepted credit cards */}
        <div className="flex md:flex-row-reverse items-center border-t border-white md:border-transparent py-4 justify-between md:justify-end">
            <div className="flex w-44">
              <svg viewBox="0 0 40 25" focusable="false">
                <path opacity=".07" d="M35 0H3C1.3 0 0 1.3 0 3v18c0 1.7 1.4 3 3 3h32c1.7 0 3-1.3 3-3V3c0-1.7-1.4-3-3-3z"></path>
                <path fill="#fff" d="M35 1c1.1 0 2 .9 2 2v18c0 1.1-.9 2-2 2H3c-1.1 0-2-.9-2-2V3c0-1.1.9-2 2-2h32"></path>
                <path d="M28.3 10.1H28c-.4 1-.7 1.5-1 3h1.9c-.3-1.5-.3-2.2-.6-3zm2.9 5.9h-1.7c-.1 0-.1 0-.2-.1l-.2-.9-.1-.2h-2.4c-.1 0-.2 0-.2.2l-.3.9c0 .1-.1.1-.1.1h-2.1l.2-.5L27 8.7c0-.5.3-.7.8-.7h1.5c.1 0 .2 0 .2.2l1.4 6.5c.1.4.2.7.2 1.1.1.1.1.1.1.2zm-13.4-.3l.4-1.8c.1 0 .2.1.2.1.7.3 1.4.5 2.1.4.2 0 .5-.1.7-.2.5-.2.5-.7.1-1.1-.2-.2-.5-.3-.8-.5-.4-.2-.8-.4-1.1-.7-1.2-1-.8-2.4-.1-3.1.6-.4.9-.8 1.7-.8 1.2 0 2.5 0 3.1.2h.1c-.1.6-.2 1.1-.4 1.7-.5-.2-1-.4-1.5-.4-.3 0-.6 0-.9.1-.2 0-.3.1-.4.2-.2.2-.2.5 0 .7l.5.4c.4.2.8.4 1.1.6.5.3 1 .8 1.1 1.4.2.9-.1 1.7-.9 2.3-.5.4-.7.6-1.4.6-1.4 0-2.5.1-3.4-.2-.1.2-.1.2-.2.1zm-3.5.3c.1-.7.1-.7.2-1 .5-2.2 1-4.5 1.4-6.7.1-.2.1-.3.3-.3H18c-.2 1.2-.4 2.1-.7 3.2-.3 1.5-.6 3-1 4.5 0 .2-.1.2-.3.2M5 8.2c0-.1.2-.2.3-.2h3.4c.5 0 .9.3 1 .8l.9 4.4c0 .1 0 .1.1.2 0-.1.1-.1.1-.1l2.1-5.1c-.1-.1 0-.2.1-.2h2.1c0 .1 0 .1-.1.2l-3.1 7.3c-.1.2-.1.3-.2.4-.1.1-.3 0-.5 0H9.7c-.1 0-.2 0-.2-.2L7.9 9.5c-.2-.2-.5-.5-.9-.6-.6-.3-1.7-.5-1.9-.5L5 8.2z" fill="#142688"></path></svg><svg viewBox="0 0 40 25" focusable="false" className="chakra-icon css-5l75p9"><g fill="none"><path fill="#000" d="M35,0 L3,0 C1.3,0 0,1.3 0,3 L0,21 C0,22.7 1.4,24 3,24 L35,24 C36.7,24 38,22.7 38,21 L38,3 C38,1.3 36.6,0 35,0 Z" opacity=".07"></path>
                <path fill="#006FCF" d="M35,1 C36.1,1 37,1.9 37,3 L37,21 C37,22.1 36.1,23 35,23 L3,23 C1.9,23 1,22.1 1,21 L1,3 C1,1.9 1.9,1 3,1 L35,1"></path>
                <path fill="#FFF" d="M8.971,10.268 L9.745,12.144 L8.203,12.144 L8.971,10.268 Z M25.046,10.346 L22.069,10.346 L22.069,11.173 L24.998,11.173 L24.998,12.412 L22.075,12.412 L22.075,13.334 L25.052,13.334 L25.052,14.073 L27.129,11.828 L25.052,9.488 L25.046,10.346 L25.046,10.346 Z M10.983,8.006 L14.978,8.006 L15.865,9.941 L16.687,8 L27.057,8 L28.135,9.19 L29.25,8 L34.013,8 L30.494,11.852 L33.977,15.68 L29.143,15.68 L28.065,14.49 L26.94,15.68 L10.03,15.68 L9.536,14.49 L8.406,14.49 L7.911,15.68 L4,15.68 L7.286,8 L10.716,8 L10.983,8.006 Z M19.646,9.084 L17.407,9.084 L15.907,12.62 L14.282,9.084 L12.06,9.084 L12.06,13.894 L10,9.084 L8.007,9.084 L5.625,14.596 L7.18,14.596 L7.674,13.406 L10.27,13.406 L10.764,14.596 L13.484,14.596 L13.484,10.661 L15.235,14.602 L16.425,14.602 L18.165,10.673 L18.165,14.603 L19.623,14.603 L19.647,9.083 L19.646,9.084 Z M28.986,11.852 L31.517,9.084 L29.695,9.084 L28.094,10.81 L26.546,9.084 L20.652,9.084 L20.652,14.602 L26.462,14.602 L28.076,12.864 L29.624,14.602 L31.499,14.602 L28.987,11.852 L28.986,11.852 Z"></path></g></svg><svg viewBox="0 0 40 25" focusable="false" className="chakra-icon css-5l75p9"><path d="M35 0H3C1.3 0 0 1.3 0 3v18c0 1.7 1.4 3 3 3h32c1.7 0 3-1.3 3-3V3c0-1.7-1.4-3-3-3z" fill="#000" opacity=".07"></path>
                <path d="M35 1c1.1 0 2 .9 2 2v18c0 1.1-.9 2-2 2H3c-1.1 0-2-.9-2-2V3c0-1.1.9-2 2-2h32" fill="#FFF"></path>
                <path d="M37 16.95V21c0 1.1-.9 2-2 2H23.228c7.896-1.815 12.043-4.601 13.772-6.05z" fill="#EDA024"></path>
                <path fill="#494949" d="M9 11h20v2H9z"></path>
                <path d="M22 12c0 1.7-1.3 3-3 3s-3-1.4-3-3 1.4-3 3-3c1.7 0 3 1.3 3 3z" fill="#EDA024"></path>
              </svg>
              <svg viewBox="0 0 40 25" focusable="false">
                <path opacity=".07" d="M35 0H3C1.3 0 0 1.3 0 3v18c0 1.7 1.4 3 3 3h32c1.7 0 3-1.3 3-3V3c0-1.7-1.4-3-3-3z"></path>
                <path fill="#fff" d="M35 1c1.1 0 2 .9 2 2v18c0 1.1-.9 2-2 2H3c-1.1 0-2-.9-2-2V3c0-1.1.9-2 2-2h32"></path>
                <circle fill="#EB001B" cx="15" cy="12" r="7"></circle><circle fill="#F79E1B" cx="23" cy="12" r="7"></circle>
                <path fill="#FF5F00" d="M22 12c0-2.4-1.2-4.5-3-5.7-1.8 1.3-3 3.4-3 5.7s1.2 4.5 3 5.7c1.8-1.2 3-3.3 3-5.7z"></path>
              </svg>
            </div>
            
            <p className="text-sm md:pr-4">© 2021,&nbsp;<a className="text-xs" href="/">Lumin</a></p>
          </div>
        

      </div>
      
      {/* Level 3 - Privacy policy || Address */}
      <div className="space-y-3 md:pt-6">
        <div className="flex ">
          <div className="ml-auto md:ml-0 text-xs space-x-3">
          <a className="underline" href="https://www.luminskin.com/pages/privacy-policy">Privacy Policy</a>
          <a className="underline" href="https://www.luminskin.com/pages/return-policy">Return Policy</a>
          <a className="underline" href="https://www.luminskin.com/pages/terms-of-service">Terms of Service</a>
          </div>
          
        </div>
        <p className="text-sm">3600 Wilshire Boulevard, Suite 1700, Los Angeles, CA 90010</p>
      </div>
    </div>
  )
}


export default Footer;