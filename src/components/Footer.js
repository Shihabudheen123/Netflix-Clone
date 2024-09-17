import React from 'react';
import { fbicon, instaicon, youtubeicon, twittericon } from '../constants/images';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-400 py-12 px-4 md:px-16">
      <div className="max-w-7xl mx-auto">
        {/* Top Section: Social Icons and Description */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-10">
          <div className="mb-6 md:mb-0">
            <h2 className="text-white text-2xl font-bold mb-4">Connect with Us</h2>
            <div className="flex space-x-6">
              {/* Apply `filter invert` to make icons white */}
              <img
                src={fbicon}
                alt="Facebook"
                className="h-8 w-8 hover:opacity-80 cursor-pointer filter invert"
              />
              <img
                src={instaicon}
                alt="Instagram"
                className="h-8 w-8 hover:opacity-80 cursor-pointer filter invert"
              />
              <img
                src={twittericon}
                alt="Twitter"
                className="h-8 w-8 hover:opacity-80 cursor-pointer filter invert"
              />
              <img
                src={youtubeicon}
                alt="YouTube"
                className="h-8 w-8 hover:opacity-80 cursor-pointer filter invert"
              />
            </div>
          </div>
          <div className="text-center md:text-left">
            <p className="text-lg">
              Stay connected with us on social media for the latest updates and exclusive content.
            </p>
          </div>
        </div>

        {/* Middle Section: Links */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-10">
          <div>
            <h3 className="text-white text-lg font-semibold mb-4">Company</h3>
            <ul className="space-y-2">
              <li className="hover:text-white cursor-pointer">About Us</li>
              <li className="hover:text-white cursor-pointer">Careers</li>
              <li className="hover:text-white cursor-pointer">Press</li>
              <li className="hover:text-white cursor-pointer">Blog</li>
            </ul>
          </div>
          <div>
            <h3 className="text-white text-lg font-semibold mb-4">Help</h3>
            <ul className="space-y-2">
              <li className="hover:text-white cursor-pointer">Support</li>
              <li className="hover:text-white cursor-pointer">Contact Us</li>
              <li className="hover:text-white cursor-pointer">FAQs</li>
              <li className="hover:text-white cursor-pointer">Community</li>
            </ul>
          </div>
          <div>
            <h3 className="text-white text-lg font-semibold mb-4">Legal</h3>
            <ul className="space-y-2">
              <li className="hover:text-white cursor-pointer">Terms of Service</li>
              <li className="hover:text-white cursor-pointer">Privacy Policy</li>
              <li className="hover:text-white cursor-pointer">Cookie Policy</li>
              <li className="hover:text-white cursor-pointer">Security</li>
            </ul>
          </div>
          <div>
            <h3 className="text-white text-lg font-semibold mb-4">Discover</h3>
            <ul className="space-y-2">
              <li className="hover:text-white cursor-pointer">How it Works</li>
              <li className="hover:text-white cursor-pointer">Pricing</li>
              <li className="hover:text-white cursor-pointer">Features</li>
              <li className="hover:text-white cursor-pointer">Resources</li>
            </ul>
          </div>
        </div>

        {/* Bottom Section: Legal and Copyright */}
        <div className="border-t border-gray-700 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-gray-500 mb-4 md:mb-0">
            © 1997-2024 Netflix, Inc. All rights reserved.
          </p>
          <ul className="flex space-x-6 text-sm">
            <li className="hover:text-white cursor-pointer">Terms of Use</li>
            <li className="hover:text-white cursor-pointer">Privacy</li>
            <li className="hover:text-white cursor-pointer">Legal Notices</li>
            <li className="hover:text-white cursor-pointer">Corporate Information</li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
