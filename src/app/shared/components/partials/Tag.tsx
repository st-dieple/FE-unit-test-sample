import React from 'react';
import { Link } from 'react-router-dom';

interface ITagProps {
  name: string,
  path: string
}

export const Tag = ({ name, path }: ITagProps) => {
  return (
    <li className="tag">
      <Link to={path} className="tag-link">
        #{name}
      </Link>
    </li>
  )
}
