import { useDispatch } from 'react-redux';
import { BtnG, BtnWG } from '../../ui/Btn';
import ModalCase from './ModalCase';
import { IoCloseSharp } from 'react-icons/io5';
import { hideModal } from '../../reducers/gmt';
import Cropper from 'react-cropper';
import 'cropperjs/dist/cropper.css';

const CropperModal = ({ cropperRef, localPreview, setPreview, setLocalPreview }) => {
  const dispatch = useDispatch();

  const handleUpload = () => {
    if (cropperRef.current && cropperRef.current.cropper) {
      const croppedImage = cropperRef.current.cropper.getCroppedCanvas().toDataURL();
      setPreview(croppedImage);
      localStorage.setItem('profileImage', croppedImage);
      setLocalPreview(null);
    }
    dispatch(hideModal('cropperModal'));
  };

  return (
    <ModalCase modalKey="cropperModal">
      <div className="px-[25px] py-[20px]">
        <div className="flex justify-between items-center mb-[40px] ">
          <p className="text-[14px] md:text-[16px] lg:text-[18px] font-semibold ">Регистрация</p>
          <IoCloseSharp
            onClick={() => dispatch(hideModal('cropperModal'))}
            className="w-[20px] h-[20px] cursor-pointer "
          />
        </div>

        <div className=' w-[305px] h-[305px] md:w-[318px] md:h-[318px] lg:w-[450px] lg:h-[450px] mb-[40px] '>
          <Cropper
            ref={cropperRef}
            style={{ height: '100%', width: '100%' }}
            initialAspectRatio={1}
            src={localPreview}
            viewMode={1}
            guides={true}
            minCropBoxHeight={10}
            minCropBoxWidth={10}
            background={false}
            responsive={true}
            autoCropArea={1}
            checkOrientation={false}
          />
        </div>

        <div className="flex justify-end gap-[10px] ">
          <span onClick={() => dispatch(hideModal('cropperModal'))}>
            <BtnWG title={'Отменить'} />
          </span>
          <span onClick={handleUpload}>
            <BtnG title={'Применить'} />
          </span>
        </div>
      </div>
    </ModalCase>
  );
};

export default CropperModal;
