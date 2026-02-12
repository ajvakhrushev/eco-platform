export type ButtonProps = {
  type?: "button" | "submit" | "reset";
  label: string;
  customClass?: string;
  isValid?: boolean;
  isLoading?: boolean;
  onClick?: any;
};
