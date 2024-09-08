import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { FaFacebook, FaTelegram, FaTwitter, FaInstagram, FaYoutube } from 'react-icons/fa';

const FooterContent = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    setIsModalOpen(false); // Close modal after successful form submission
  };

  return (
    <div>
      <div className="bg-black/15 text-black/70">
        <div>
          <div className="grid md:grid-cols-3 grid-cols-1 py-10 px-5 md:gap-5">
            <div>
              <img src="https://i.ibb.co/61nBkFS/ARK-power-ltd-main.png" alt="ARK Power Ltd." />
              <div className="text-center my-4">
                <p>Follow us: </p>
                <div className="flex justify-center items-center gap-3 mt-2">
                  <a href="#" target="_blank"><FaFacebook className="text-xl" /></a>
                  <a href="#" target="_blank"><FaTelegram className="text-xl" /></a>
                  <a href="#" target="_blank"><FaTwitter className="text-xl" /></a>
                  <a href="#" target="_blank"><FaInstagram className="text-xl" /></a>
                  <a href="#" target="_blank"><FaYoutube className="text-xl" /></a>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-2 md:my-0 my-5 col-span-2">
              <div className="md:ps-10">
                <h1 className="text-xl font-bold uppercase opacity-80 pb-3">Quick Link</h1>
                <ul className="space-y-2">
                  <li><a href="#">Home</a></li>
                  <li><a href="#">About us</a></li>
                  <li><a href="#">Our Products</a></li>
                  <li><a href="#">Our Clients</a></li>
                  <li><a href="#">Contact Us</a></li>
                  <li><a href="#">Terms & Conditions</a></li>
                </ul>
              </div>
              <div>
                <h1 className="text-xl font-bold uppercase opacity-80 pb-3">Address</h1>
                <ul className="space-y-2">
                  <li><span>12B ATATURK TOWER, 22 KEMAL ATATURK AVENUE, BANANI, DHAKA-1213</span></li>
                  <li><span>Hot Line: Sales - 01678090037, Support - 01678090036</span></li>
                  <li><span>info@arkpowerltd.com.bd</span></li>
                </ul>
              </div>
            </div>
          </div>
          <div className="bg-black p-4 text-sm">
            <p className="text-center text-white">© All Rights Reserved, ARK POWER LTD.</p>
          </div>
        </div>
      </div>

      <div className="flex items-end justify-end mt-5">
        <button className="btn-primary" onClick={() => setIsModalOpen(true)}>Edit</button>
      </div>

      {/* Modal Section */}
      {isModalOpen && (
        <dialog id="my_modal_1" className="modal open">
          <div className="modal-box">
            <form onSubmit={handleSubmit(onSubmit)} className="rounded-3xl shadow-lg p-8">
              <h2 className="text-4xl font-bold mb-8 text-blue-600 text-center">Contact Information Input</h2>

              {/* Address Field */}
              <div className="mb-6">
                <label className="block text-gray-700 text-sm font-medium mb-1" htmlFor="address">Address</label>
                <textarea
                  id="address"
                  {...register('address', { required: true })}
                  className={`w-full px-4 py-2 rounded-lg border-2 ${errors.address ? 'border-red-500' : 'border-gray-300'}`}
                  rows="3"
                ></textarea>
                {errors.address && <p className="text-red-500 text-xs mt-1">Address is required.</p>}
              </div>

              {/* Contact Field */}
              <div className="mb-6">
                <label className="block text-gray-700 text-sm font-medium mb-1" htmlFor="contact">Contact</label>
                <input
                  type="text"
                  id="contact"
                  {...register('contact', { required: true })}
                  className={`w-full px-4 py-2 rounded-lg border-2 ${errors.contact ? 'border-red-500' : 'border-gray-300'}`}
                />
                {errors.contact && <p className="text-red-500 text-xs mt-1">Contact number is required.</p>}
              </div>

              {/* Email Field */}
              <div className="mb-6">
                <label className="block text-gray-700 text-sm font-medium mb-1" htmlFor="email">Email</label>
                <input
                  type="email"
                  id="email"
                  {...register('email', { required: true })}
                  className={`w-full px-4 py-2 rounded-lg border-2 ${errors.email ? 'border-red-500' : 'border-gray-300'}`}
                />
                {errors.email && <p className="text-red-500 text-xs mt-1">Email is required.</p>}
              </div>

              {/* Social URLs */}
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-gray-700 text-sm font-medium mb-1" htmlFor="facebook">Facebook URL</label>
                  <input
                    type="url"
                    id="facebook"
                    {...register('facebookUrl', { required: true })}
                    className={`w-full px-4 py-2 rounded-lg border-2 ${errors.facebookUrl ? 'border-red-500' : 'border-gray-300'}`}
                  />
                  {errors.facebookUrl && <p className="text-red-500 text-xs mt-1">Facebook URL is required.</p>}
                </div>

                {/* YouTube URL */}
                <div>
                  <label className="block text-gray-700 text-sm font-medium mb-1" htmlFor="youtube">YouTube URL</label>
                  <input
                    type="url"
                    id="youtube"
                    {...register('youtubeUrl', { required: true })}
                    className={`w-full px-4 py-2 rounded-lg border-2 ${errors.youtubeUrl ? 'border-red-500' : 'border-gray-300'}`}
                  />
                  {errors.youtubeUrl && <p className="text-red-500 text-xs mt-1">YouTube URL is required.</p>}
                </div>

                {/* Instagram URL */}
                <div>
                  <label className="block text-gray-700 text-sm font-medium mb-1" htmlFor="instagram">Instagram URL</label>
                  <input
                    type="url"
                    id="instagram"
                    {...register('instagramUrl', { required: true })}
                    className={`w-full px-4 py-2 rounded-lg border-2 ${errors.instagramUrl ? 'border-red-500' : 'border-gray-300'}`}
                  />
                  {errors.instagramUrl && <p className="text-red-500 text-xs mt-1">Instagram URL is required.</p>}
                </div>

                {/* Twitter URL */}
                <div>
                  <label className="block text-gray-700 text-sm font-medium mb-1" htmlFor="twitter">Twitter URL</label>
                  <input
                    type="url"
                    id="twitter"
                    {...register('twitterUrl', { required: true })}
                    className={`w-full px-4 py-2 rounded-lg border-2 ${errors.twitterUrl ? 'border-red-500' : 'border-gray-300'}`}
                  />
                  {errors.twitterUrl && <p className="text-red-500 text-xs mt-1">Twitter URL is required.</p>}
                </div>

                {/* Telegram URL */}
                <div>
                  <label className="block text-gray-700 text-sm font-medium mb-1" htmlFor="telegram">Telegram URL</label>
                  <input
                    type="url"
                    id="telegram"
                    {...register('telegramUrl', { required: true })}
                    className={`w-full px-4 py-2 rounded-lg border-2 ${errors.telegramUrl ? 'border-red-500' : 'border-gray-300'}`}
                  />
                  {errors.telegramUrl && <p className="text-red-500 text-xs mt-1">Telegram URL is required.</p>}
                </div>
              </div>

              <button type="submit" className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-md shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 w-full">Submit</button>
            </form>

            <div className="modal-action">
              <button className="btn" onClick={() => setIsModalOpen(false)}>Close</button>
            </div>
          </div>
        </dialog>
      )}
    </div>
  );
};

export default FooterContent;

