import React, { useEffect } from "react";
import { useForm } from "react-hook-form";

import { ReactComponent as CopyIcon } from '../../../assets/images/copy.svg';
import { InputProps } from '../models/InputProps';
import { EditProfileFormProps } from '../models/EditProfileFormProps';
import Button from "./Button";
import Input from "./Input";

const EditProfileForm = ({
  user,
  onSubmit,
  checkUsernameExistsApi
}: EditProfileFormProps) => {
  const {
    register,
    handleSubmit,
    watch,
    setError,
    clearErrors,
    setValue,
    formState: { errors, isLoading, isSubmitting },
  } = useForm();

  const username = watch("username");

  const checkUsernameExists = async () => {
    try {
      // Send a request to your API to check if the username already exists
      const response = await checkUsernameExistsApi(username);

      if (response.data.exists) {
        setError("username", {
          type: "validate",
          message: "Username already exists!",
        });
        return false;
      }
      clearErrors("username");
      return true;
    } catch (error) {
      console.error("Error checking username:", error);
    }
    return ""; // Return an empty string if no error
  };

  const FORM_FIELDS: InputProps[] = [
    {
      name: 'firstName',
      label: 'First Name',
      placeholder: 'First Name',
      type: 'text',
      props: {
        ...register('firstName', {
          required: 'First Name is required',
        }),
      },
    },
    {
      name: 'lastName',
      label: 'Last Name',
      placeholder: 'Last Name',
      type: 'text',
      props: {
        ...register('lastName', {
          required: 'Last Name is required',
        }),
      },
    },
    {
      name: 'username',
      label: 'Enter Username/Nickname',
      placeholder: 'Enter username',
      type: 'text',
      props: {
        ...register('username', {
          required: 'Username is required',
          onBlur: checkUsernameExists,
        }),
      },
    },
    {
      name: 'intro',
      label: 'About me',
      placeholder: 'About...',
      type: 'textfield',
      props: {
        ...register('intro', {
          required: 'About me is required',
        }),
      },
    },
    {
      name: 'wallet_address',
      label: 'Wallet Address',
      placeholder: '0x72e6663e20504b6153d4c5',
      type: 'text',
      EndIcon: <CopyIcon className="cursor-pointer" />,
      props: {
        readOnly: true,
      },
    },
  ];

  useEffect(() => {
    if (user) {
      setValue("firstName", user.firstName);
      setValue("lastName", user.lastName);
      setValue("username", user.username);
      setValue("intro", user.intro);
    }
  }, [user, setValue]);

  return (
    <>
      <form
        onSubmit={handleSubmit(onSubmit)}
        noValidate
      >
        {FORM_FIELDS.map((field, index) => (
          <div
            className="mb-2"
            key={`field-${index}`}
          >
            <Input {...field} />
            {field.name in errors && (
              <p className="text-sm text-red-600">
                {/* @ts-ignore */}
                {errors[field.name]?.message as string}
              </p>
            )}
          </div>
        ))}
        <Button
          type="submit"
          label="Update"
          customClass="rounded-md"
          isLoading={isLoading}
          isValid={
            Object.values(errors).length === 0 && !isLoading && !isSubmitting
          }
        />
      </form>
    </>
  );
};

export default EditProfileForm;
