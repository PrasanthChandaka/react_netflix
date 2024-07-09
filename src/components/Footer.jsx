import React, { useContext } from "react";
import { store } from "../context";

const Footer = () => {
  const { option, setOption } = useContext(store);
  return (
    <div className="inner-container flex flex-col gap-8 text-white py-10 md:py-20 text-sm md:text-[16px] font-light">
      {option === "English" ? (
        <>
          <p className="flex gap-3">
            Questions? Call{" "}
            <span className="underline cursor-pointer">000-800-919-1694</span>
          </p>
          <ul className="grid grid-cols-2 md:grid-cols-4 gap-4 underline cursor-pointer">
            <li>FAQ</li>
            <li>Help Center</li>
            <li>Account</li>
            <li>Media Center</li>
            <li>Investor Relations</li>
            <li>Jobs</li>
            <li>Ways to Watch</li>
            <li>Terms of Use</li>
            <li>Privacy</li>
            <li>Cookie Preferences</li>
            <li>Corporate Information</li>
            <li>Contact Us</li>
            <li>Speed Test</li>
            <li>Legal Notices</li>
            <li>Only on Netflix</li>
          </ul>
        </>
      ) : (
        <>
          <p className="flex gap-3">
            कोई सवाल है?
            <span className="underline cursor-pointer"> 000-800-919-1694 </span>
            पर कॉल करें
          </p>
          <ul className="grid grid-cols-2 md:grid-cols-4 gap-4 underline cursor-pointer">
            <li>FAQ</li>
            <li>सहायता केंद्र</li>
            <li>अकाउंट</li>
            <li>मीडिया केंद्र</li>
            <li>इंवेस्टर संबंध</li>
            <li>नौकरियां</li>
            <li>देखने के तरीके</li>
            <li>उपयोग की शर्तें</li>
            <li>प्रायवेसी</li>
            <li>कुकी प्रेफ़रेंस</li>
            <li>कॉरपोरेट जानकारी</li>
            <li>हमसे संपर्क करें</li>
            <li>स्पीड टेस्ट</li>
            <li>कानूनी सूचनाएं</li>
            <li>सिर्फ़ Netflix पर</li>
          </ul>
        </>
      )}
      <div>
        <select
          value={option}
          className="bg-transparent text-white border-[1px] border-[grey] px-5 py-2 rounded-md"
          onChange={(e) => setOption(e.target.value)}
        >
          <option className="text-black font-medium" value="English">
            English
          </option>
          <option className="text-black font-medium" value="Hindi">
            Hindi
          </option>
        </select>
      </div>
    </div>
  );
};

export default Footer;
