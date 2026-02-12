export type EditProfileFormProps = {
  user: any;
  onSubmit: (data: any) => Promise<void>;
  checkUsernameExistsApi: (username: string) => Promise<any>;
};
