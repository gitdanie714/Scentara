import React from 'react'
import { FiFacebook } from "react-icons/fi";
import { FaInstagram, FaPinterest, FaTiktok, FaYoutube } from "react-icons/fa6";
import { CiTwitter } from "react-icons/ci";

function Footer() {
  return (
    <footer className="bg-darkred text-slate-50 px-6 md:px-12 py-10">
      {/* Newsletter Section */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <h2 className="text-xl font-bold mb-2">Sign up for Our Newsletter!</h2>
          <p className="text-sm mb-4">
            Join us and get exclusive sales, product launches, hair care tips and so much more
            directly delivered to your inbox.
          </p>
          <form className="flex flex-col sm:flex-row gap-3">
            <input
              type="email"
              placeholder="Enter your email"
              required
              className="p-2 rounded-lg border border-gray-300 w-full text-darkred"
            />
            <button
              type="submit"
              className="bg-white text-darkred px-4 py-2 rounded-lg font-semibold hover:bg-gray-200 transition"
            >
              Subscribe
            </button>
          </form>
        </div>

        {/* Contact Section */}
        <div className="text-left">
          <h2 className="text-xl font-bold mb-2">Contact Us</h2>
          <p className="text-sm">Call: 09384848218</p>
          <p className="text-sm">Email: support@example.com</p>

          {/* Social Icons */}
          <div className="flex gap-4 mt-4 text-lg">
            <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
              <FiFacebook className="hover:text-white transition" />
            </a>
            <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
              <FaInstagram className="hover:text-white transition" />
            </a>
            <a href="https://www.youtube.com" target="_blank" rel="noopener noreferrer">
              <FaYoutube className="hover:text-white transition" />
            </a>
            <a href="https://www.pinterest.com" target="_blank" rel="noopener noreferrer">
              <FaPinterest className="hover:text-white transition" />
            </a>
            <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
              <CiTwitter className="hover:text-white transition" />
            </a>
            <a href="https://www.tiktok.com" target="_blank" rel="noopener noreferrer">
              <FaTiktok className="hover:text-white transition" />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Line */}
      <div className="border-t border-slate-200/30 mt-8 pt-4 text-center text-sm text-slate-200">
        © {new Date().getFullYear()} Scentara. All rights reserved.
      </div>
    </footer>
  )
}

export default Footer
