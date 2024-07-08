import React, { useRef, useState } from 'react';
import { AiFillInstagram, AiOutlineEdit } from 'react-icons/ai';
import { FaFacebookF, FaOdnoklassniki, FaTwitter } from 'react-icons/fa';
import { SlSocialVkontakte } from 'react-icons/sl';
import { useDispatch, useSelector } from 'react-redux';
import { BtnW } from '../ui/Btn';
import ProfileImg from './modals/ProfileImg';
import PersonalInfo from './modals/PersonalInfo';
import { hideModal, saveOrUpdatePersonalInfo, showModal } from '../reducers/gmt';
import EditEmial from './modals/EditEmail';
import AddPhone from './modals/AddPhone';
import CropperModal from './modals/Cropper';
import ChangeParol from './modals/ChangeParol';

const ProfileHeader = () => {
  const { user, personal, phone } = useSelector((state) => state.gmt);
  const firstLetter = user.email.charAt(0).toUpperCase();
  const [isActive, setIsActive] = useState(false);
  const dispatch = useDispatch();

  const [personalData, setPersonal] = useState({
    firstname: '',
    lastname: '',
    vk: '',
    instagram: '',
    facebook: '',
    odno: '',
    twitter: '',
    phone: '',
  });

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setPersonal({ ...personalData, [id]: value });
  };

  const handleInfo = (e) => {
    e.preventDefault();
    dispatch(saveOrUpdatePersonalInfo(personalData));
    dispatch(hideModal('personalInfo'));
  };

  //  set avatar image
  const [preview, setPreview] = useState(localStorage.getItem('profileImage') || '');
  const [localPreview, setLocalPreview] = useState(preview);

  const cropperRef = useRef(null);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setLocalPreview(reader.result);
        setLocalImage(reader.result);
      };
      reader.readAsDataURL(file);
      dispatch(hideModal('profileImg'));
      dispatch(showModal('cropperModal'));
    }
  };

  const handleRemve = () => {
    setPreview(null);
    localStorage.removeItem('profileImage');
    setIsActive((prev) => !prev);
  };

  return (
    <>
      <div className="mt-[40px] md:mt-[50px] lg:mt-[100px] container custom-margin  ">
        <div className="flex flex-wrap gap-[25px] md:gap-[66px] lg:gap-[120px] ">
          <div className=" relative">
            <div className="w-[140px] group overflow-hidden h-[140px] md:w-[180px] md:h-[180px] lg:w-[210px] lg:h-[210px] rounded-full bg-[#E1EFE6] relative ">
              {preview ? (
                <img src={preview} alt="" className="w-full h-full object-cover" />
              ) : (
                <span className="absolute text-[60px] md:text-[70p] w-full h-full flex items-center justify-center">
                  {firstLetter}
                </span>
              )}

              <div
                className={` ${
                  isActive ? 'block' : 'hidden'
                }  cursor-pointer  group-hover:block z-30  absolute bottom-0 left-1/2 -translate-x-1/2 `}
              >
                <div
                  onClick={() => setIsActive((prev) => !prev)}
                  className=" bg-[--pri]  rounded-full w-[24px] h-[24px] flex justify-center items-center "
                >
                  <AiOutlineEdit className="text-white  " />
                </div>
              </div>
            </div>
            <div
              className={` ${
                isActive ? 'flex' : 'hidden'
              } absolute md:bottom-[-20px] lg:bottom-[-5px] left-1/2 -translate-x-1/2 bg-white  flex-col gap-[10px] rounded-[5px] py-[10px] px-[12px] `}
            >
              <p
                onClick={() => {
                  dispatch(showModal('profileImg'));
                  setIsActive((prev) => !prev);
                }}
                className=" cursor-pointer text-[12px] "
              >
                Редактировать
              </p>
              <p onClick={handleRemve} className=" cursor-pointer text-[12px] text-[#C13515] ">
                Удалить фото
              </p>
            </div>
          </div>

          <div className="flex flex-col gap-[60px] md:gap-[40px] lg:gap-[50px]  ">
            <div>
              <p className="text-[18px] md:text-[20px] lg:text-[30px] mb-[20px] font-medium capitalize ">
                {personal?.firstname ? `${personal.firstname} ${personal.lastname}` : 'Имя'}
              </p>
              <div className="flex gap-[15px] items-center text-[--second] mb-[30px] lg:mb-[40px] ">
                <a href={`https://${personal?.vk}`}>
                  <SlSocialVkontakte className="w-[24px] h-[24px] hover:text-[--pri] duration-200 cursor-pointer " />{' '}
                </a>

                <a href={`https://${personal?.facebook}`}>
                  <FaFacebookF className="w-[22px] h-[22px] hover:text-[--pri] duration-200 cursor-pointer " />
                </a>
                <a target="_blank" href={`https://${personal?.instagram}`}>
                  <AiFillInstagram className="w-[24px] h-[24px] hover:text-[--pri] duration-200 cursor-pointer " />
                </a>
                <a href={`https://${personal?.twitter}`}>
                  <FaTwitter className="w-[24px] h-[24px] hover:text-[--pri] duration-200 cursor-pointer " />
                </a>
                <a target="_blank" href={`https://${personal?.odno}`}>
                  <FaOdnoklassniki className="w-[24px] h-[24px] hover:text-[--pri] duration-200 cursor-pointer " />
                </a>
              </div>

              <div className="flex flex-wrap items-center gap-[10px] ">
                <span onClick={() => dispatch(showModal('personalInfo'))}>
                  <BtnW title={'Изменить персональную информацию'} />{' '}
                </span>
                <span onClick={() => dispatch(showModal('changeParol'))}>
                  <BtnW title={'Изменить пароль'} />
                </span>
              </div>
            </div>

            <div className="flex justify-between">
              <div className="flex flex-col gap-[4px] ">
                <p className=" custom-text font-medium flex items-center gap-[10px] ">
                  {phone ? phone : ' +998 00 000–00–00'}
                  <AiOutlineEdit
                    onClick={() => dispatch(showModal('addPhone'))}
                    className=" cursor-pointer text-[--pri] text-[20px] "
                  />
                </p>
                <span className=" custom-text text-[--text] ">Телефон</span>
              </div>
              <div className="flex flex-col gap-[4px] ">
                <p className=" custom-text font-medium flex items-center gap-[10px] ">
                  {user.email}{' '}
                  <AiOutlineEdit
                    onClick={() => dispatch(showModal('editEmail'))}
                    className=" cursor-pointer text-[--pri] text-[20px] "
                  />
                </p>
                <span className=" custom-text text-[--text] ">Email</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <AddPhone />
      <ChangeParol />
      <PersonalInfo
        handleInputChange={handleInputChange}
        handleInfo={handleInfo}
        personalData={personalData}
      />
      <CropperModal
        localPreview={localPreview}
        cropperRef={cropperRef}
        setPreview={setPreview}
        setLocalPreview={setLocalPreview}
      />
      <ProfileImg handleImageChange={handleImageChange} />
      <EditEmial />
    </>
  );
};

export default ProfileHeader;
