import React from 'react';

export interface Props {
  className?: string;
  value: string;
  id: string;
  handleChange: (event: React.ChangeEvent) => void;
  placeholder: string;
}
