import { useEffect, useState } from 'react';
import Icon from '../../components/icon/icon';

export function useContactInformation(intitialContact) {
  const [getContactInformation, setContact] = useState([]);

  const getHref = (key, value) => {
    switch (key) {
      case 'phone':
        return { href: `tel:${value}` };
      case 'email':
        return { href: `mailto:${value}` };
      case 'linkedin':
      case 'github':
      case 'twitter':
      case 'youtube':
        return { href: `https://${value}` };
      default:
        return {};
    }
  };
  const setContactInformation = (contactInformation) => {
    const html = Object.entries(contactInformation).map(([key, value], idx) => (
      <a {...getHref(key, value)} key={idx}>
        {value}
        <Icon fileName={`${key}.png`}></Icon>
      </a>
    ));
    setContact(html);
  };

  useEffect(() => {
    setContactInformation(intitialContact);
  }, []);

  return { getContactInformation, setContactInformation };
}
