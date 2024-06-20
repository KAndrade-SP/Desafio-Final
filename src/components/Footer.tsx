import { Link, useLocation } from "react-router-dom"
import { useDispatch } from "react-redux"

import { navLinks } from "../types/NavLinks"

import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { submitFooterForm } from "../redux/FormFooter/actions"
import { FormFooterData, footerSchema } from "../types/FooterValidations"

const Footer = () => {

  const dispatch = useDispatch()
  const { register, handleSubmit, formState: { errors } } = useForm<FormFooterData>({
    resolver: zodResolver(footerSchema),
  })

  const onSubmit = (formFooterData: FormFooterData) => { 
    submitFooterForm(formFooterData, dispatch)
  }

  const location = useLocation()

  return (
    <>
      <footer className="bottom-0 py-10 h-auto flex flex-col gap-10 md:gap-20 border-t-2 border-carouselIndexGray">

        <div className="flex flex-col items-start lg:flex-row lg:justify-start xl:mx-40 lg:gap-32 px-10 py-2 gap-8">

          <div className="flex flex-col gap-8">
            <h3 className="text-2xl font-bold ">Furniro</h3>
            <p className="text-caption font-medium leading-6 lg:mt-4">400 University Drive Suite 200 Coral <br/> 
              Gables, <br/>
              FL 33134 USA
            </p>
            <div className="flex flex-row gap-3">

              <div className="flex items-center justify-center rounded-full bg-white w-7 h-7 shadow-md cursor-pointer hover:bg-carouselIndexGray">
                <a href="https://www.facebook.com/" target="_blank">
                  <img src="https://final-challenge-compass.s3.us-east-2.amazonaws.com/icons/facebook.svg" alt="Facebook Icon"/>
                </a>
              </div>

              <div className="flex items-center justify-center rounded-full bg-white w-7 h-7 shadow-md cursor-pointer hover:bg-carouselIndexGray">
                <a href="https://www.instagram.com/" target="_blank">
                  <img src="https://final-challenge-compass.s3.us-east-2.amazonaws.com/icons/instagram.svg" alt="Instagram Icon"/>
                </a>
              </div>

              <div className="flex items-center justify-center rounded-full bg-white w-7 h-7 shadow-md cursor-pointer hover:bg-carouselIndexGray">
                <a href="https://x.com/" target="_blank">
                  <img src="https://final-challenge-compass.s3.us-east-2.amazonaws.com/icons/twitter.svg" alt="Twitter Icon"/>
                </a>
              </div>

              <div className="flex items-center justify-center rounded-full bg-white w-7 h-7 shadow-md cursor-pointer hover:bg-carouselIndexGray">
                <a href="https://www.linkedin.com/" target="_blank">
                  <img src="https://final-challenge-compass.s3.us-east-2.amazonaws.com/icons/linkedin.svg" alt="LinkedIn Icon"/>
                </a>
              </div>

            </div>
          </div>

          <div className="flex flex-col gap-8">
            <h3 className="text-caption font-medium cursor-pointer text-lg">Links</h3>
            <ul className="text-black font-semibold text-md leading-[4rem]">
              {navLinks.map((link, index) => {
                const isActive = location.pathname === link.path
                return (
                  <li key={index}>
                    <Link to={link.path} className={isActive ? 'text-buttonBrown hover:text-buttonDarkBrown' : 'text-black hover:text-caption'}>
                      {link.label}
                    </Link>
                  </li>
                )
              })}   
            </ul>
          </div>

          <div className="flex flex-col gap-8">
            <h3 className="text-caption font-medium cursor-pointer text-lg">Help</h3>
            <ul className="text-black font-semibold text-md leading-[4rem]">
              <li className="hover:text-caption cursor-pointer">Payment Options</li>
              <li className="hover:text-caption cursor-pointer">Returns</li>
              <li className="hover:text-caption cursor-pointer">Privacy Policies</li>
            </ul>
          </div>

          <div className="flex flex-col gap-8">
          <h3 className="text-caption font-medium cursor-pointer text-lg">Newsletter</h3>
            <div className="flex flex-col items-start gap-4 sm:flex-row lg:mt-4">

              <div className="flex flex-col">
                <input 
                  type="email"
                  id="email-address"
                  className="border-b-2 border-black outline-none"
                  placeholder="Enter Your Email Address"
                  {...register('email')}                                                                  
                />
                {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>}
              </div>

              <button className="border-b-2 border-black font-semibold" onClick={handleSubmit(onSubmit)}>SUBSCRIBE</button>
            </div>
          </div>

        </div>

        <div className="flex justify-center lg:justify-start w-[85%] md:w-[90%] xl:w-[82%] mx-auto px-2 pt-8 border-t-2 border-carouselIndexGray">
          <div className="flex flex-col text-md text-center">
            <p className='text-black font-medium'>2023 Furniro. All rights reserved</p>
          </div>  
        </div>

      </footer>
    </>
  )
}

export default Footer