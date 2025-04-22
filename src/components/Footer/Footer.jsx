import {
  InstagramLogo,
  Envelope,
  MapPin,
  Clock,
  ArrowSquareOut,
} from "@phosphor-icons/react";
import logo from "../../assets/landingPage/logo.png";

export default function Footer() {
  return (
    <div className="bg-[#1A1A1A] px-40 max-lg:px-20 max-md:px-10 py-16 flex flex-row justify-between max-md:flex-col max-md:items-center max-md:gap-12">
      <img src={logo} alt="logo" className="h-52 w-56" />
      <div className="flex flex-col gap-6">
        <div className="flex items-center gap-3">
          <span className="text-[#E0E0E0] text-lg font-semibold">
            Opening Hours
          </span>
        </div>
        <div className="flex flex-col gap-2 text-[#E0E0E0]">
          <div className="flex flex-row items-center gap-2">
            <Clock size={24} className="text-[#5E0C1C]" />
            <span>Mon - Fri 10:00 am - 8:00 pm</span>
          </div>
          <div className="flex flex-row items-center gap-2">
            <Clock size={24} className="text-[#5E0C1C]" />
            <span>Saturday 10:00 am - 7:00 pm</span>
          </div>
        </div>
        <span className="text-[#E0E0E0] text-lg font-semibold">Follow Us</span>
        <div className="flex items-center gap-3 group cursor-pointer">
          <InstagramLogo
            size={28}
            className="text-[#5E0C1C] group-hover:text-[#B8A082] transition-colors duration-300"
          />
          <span className="text-[#E0E0E0] group-hover:text-[#B8A082] transition-colors duration-300">
            @cadqua3d
          </span>
        </div>
      </div>

      <div className="flex flex-col gap-6">
        <div className="flex items-center gap-3">
          <span className="text-[#E0E0E0] text-lg font-semibold">Contact</span>
        </div>
        <div className="flex flex-col gap-4 text-[#E0E0E0]">
          <div className="flex flex-col gap-2">
            <span className="text-[#B8A082]">Address</span>
            <div className="flex flex-row items-start gap-1">
              <MapPin size={24} className="text-[#5E0C1C]" />
              <span className="flex items-center max-w-[300px] overflow-hidden">
                49/94 SITE IV SAHIBABAD INDUSTRIAL AREA GHAZIABAD UP-201010
                <ArrowSquareOut
                  size={20}
                  className="ml-2 shrink-0 text-[#5E0C1C] hover:text-[#B8A082] transition-colors duration-300 cursor-pointer"
                />
              </span>
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <span className="text-[#B8A082]">Email</span>
            <div className="flex items-center gap-1 group cursor-pointer">
              <Envelope
                size={24}
                className="text-[#5E0C1C] group-hover:text-[#B8A082] transition-colors duration-300"
              />
              <span className="group-hover:text-[#B8A082] transition-colors duration-300">
                CADQAU3D@GMAIL.COM
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
