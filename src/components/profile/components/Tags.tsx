import React, { Fragment } from "react";
import { TagsProps } from '../models/TagsProps';

const Tags = ({ tags }: TagsProps) => {
  return (
    <>
      {tags.map((tag, index) => (
        <Fragment key={`tag-item-${index}`}>
          <p className="bg-[#757575] max-w-fit text-xs text-white rounded-lg px-1">
            {tag}
          </p>
        </Fragment>
      ))}
    </>
  );
};

export default Tags;