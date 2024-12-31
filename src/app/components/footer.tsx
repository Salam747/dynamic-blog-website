import Link from "next/link";
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa'; // Importing icons

export default function Footer() {
  return (
    <footer className="bg-gradient-to-r from-purple-500 to-blue-500 text-white py-10">
      <div className="container mx-auto px-4">
        {/* Footer Top Section */}
        <div className="flex flex-col md:flex-row justify-between items-start mb-8">
          {/* About Section */}
          <div className="mb-8 md:mb-0 md:w-1/3">
            <h3 className="text-white text-2xl font-bold mb-4">About Us</h3>
            <p className="text-gray-200 text-sm">
              Welcome to Your Blog Name, your go-to source for insightful articles, updates, and inspiration. We aim to create a community that values knowledge and creativity.
            </p>
          </div>

          {/* Social Media */}
          <div className="md:w-1/3">
            <h3 className="text-white text-2xl font-bold mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <Link
                href="https://facebook.com"
                className="text-gray-200 hover:text-white"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
              >
                <FaFacebookF className="w-6 h-6" />
              </Link>
              <Link
                href="https://twitter.com"
                className="text-gray-200 hover:text-white"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Twitter"
              >
                <FaTwitter className="w-6 h-6" />
              </Link>
              <Link
                href="https://instagram.com"
                className="text-gray-200 hover:text-white"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
              >
                <FaInstagram className="w-6 h-6" />
              </Link>
              <Link
                href="https://linkedin.com"
                className="text-gray-200 hover:text-white"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
              >
                <FaLinkedinIn className="w-6 h-6" />
              </Link>
            </div>
          </div>
        </div>

        {/* Footer Bottom Section */}
        <div className="border-t border-gray-200 pt-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-200 text-sm mb-4 md:mb-0">
              © {new Date().getFullYear()} Your Blog Name. All rights reserved.
            </p>
            <div className="flex space-x-4">
              <Link href="/privacy" className="text-gray-200 hover:text-white text-sm">Privacy Policy</Link>
              <Link href="/terms" className="text-gray-200 hover:text-white text-sm">Terms of Service</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
