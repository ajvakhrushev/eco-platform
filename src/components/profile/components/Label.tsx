import { LabelProps } from '../models/LabelProps';

const Label = ({ label, className = "" }: LabelProps) => (
  <span className={`text-white font-urbanist text-lg font-medium ${className}`}>
    {label}
  </span>
);

export default Label;