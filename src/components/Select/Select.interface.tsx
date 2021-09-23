import React from 'react';

export interface Props {
  className?: string;
  options: string[];
  onChange: (event: React.ChangeEvent) => void;
  value: object;
  name: string;
  id: string;
}
