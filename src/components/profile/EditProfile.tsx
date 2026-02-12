import React, { useContext, useRef, useState } from "react";
import { toast } from "react-toastify";

import { updateUser, checkUsernameExists } from './ApiService';
import useAuth from "../../hooks/useAuth";
import { ActionTypes, AuthContext } from "../../contexts/AuthContext";
import Button from "./components/Button";
import ImageSelector from "./components/ImageSelector";
import Label from "./components/Label";
import Tags from "./components/Tags";
import EditProfileForm from "./components/EditProfileForm";

const EditProfile = () => {
  const { user, updateUserInfo } = useAuth();
  const { updateAuthAction } = useContext(AuthContext);
  const profileImageInputRef: any = useRef(null);
  const banner1InputRef: any = useRef(null);

  const [profileImage, setProfileImage] = useState<any>(null);
  const [banner1, setBanner1] = useState<any>(null);

  const handleImageSelect = (e: any, type = "profile") => {
    const file = e.target.files[0];
    if (type === "profile") setProfileImage(file);
    else if (type === "banner1") setBanner1(file);
  };

  const onSubmit = async (data: any) => {
    try {
      await updateUser(data);
      await updateUserInfo();
      toast.success("Updated successfully");
    } catch (e: any) {
      console.log("Error: ", e?.response?.data || e);
      toast.error(e?.response?.data?.message || "Something went wrong");
    }
  };

  return (
    <>
      <div className="grid grid-cols-2 col-span-4 gap-4 mx-20">
        <div className="col-span-auto">
          <EditProfileForm
            user={user}
            onSubmit={onSubmit}
            checkUsernameExistsApi={checkUsernameExists}
          />
        </div>
        <div className="col-span-auto">
          <ImageSelector
            label="Profile Image"
            handleImageSelect={handleImageSelect}
            selectedImage={profileImage}
            inputRef={profileImageInputRef}
            setImage={setProfileImage}
            type="profile"
            size="w-28 h-24"
          />
          <ImageSelector
            label="Banner Image"
            handleImageSelect={handleImageSelect}
            selectedImage={banner1}
            inputRef={banner1InputRef}
            setImage={setBanner1}
            type="banner1"
            size="w-48 h-24"
          />
          <div className="flex flex-col gap-2 my-2">
            <Label label="Password" />
            <Button
              type="button"
              onClick={() => {
                updateAuthAction(ActionTypes.ChangePassword);
              }}
              label="Change Password"
            />
          </div>

          <div className="flex flex-col gap-2 my-2">
            <Label label="My Titles" />
            <Tags tags={["Beginner"]} />
          </div>
        </div>
      </div>
    </>
  );
};

export default EditProfile;
