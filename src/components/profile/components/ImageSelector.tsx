import Label from "./Label";
import { ProfileImageProps } from '../models/ProfileImageProps';

const ImageSelector = ({
  label,
  handleImageSelect,
  size = "w-28 h-28",
  selectedImage,
  inputRef,
  setImage,
  type = "profile",
}: ProfileImageProps) => {
  return (
    <div
      className="relative mb-4 cursor-pointer max-w-fit"
      onClick={() => inputRef?.current?.click()}
    >
      <Label label={label} />
      {selectedImage ? (
        <>
          <img
            className={`rounded-md ${size}`}
            src={URL.createObjectURL(selectedImage)}
            alt="Profile"
          />
          <button
            className="text-gray-100 text-lg cursor-pointer absolute top-[24px] right-[5px]"
            onClick={(e) => {
              e.stopPropagation();
              setImage(null);
            }}
          >
            &times;
          </button>
        </>
      ) : (
        <div className={`bg-gray-400 rounded-md ${size}`}></div>
      )}
      <input
        type="file"
        ref={inputRef}
        onChange={(e) => handleImageSelect(e, type)}
        hidden
      />
    </div>
  );
};

export default ImageSelector;