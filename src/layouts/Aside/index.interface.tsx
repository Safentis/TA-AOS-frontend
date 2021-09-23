import { IconDefinition } from '@fortawesome/fontawesome-common-types';

export interface Props {
  className?: string;
}

export interface Link {
  link: string;
  to: string;
  icon: IconDefinition;
}
