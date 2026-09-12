import { Globe, Type, Mail, Phone, MessageSquare, Wifi, Contact } from 'lucide-react';

export const QR_TYPES = [
  {
    id: 'website',
    label: 'Website',
    description: 'Link to any website URL',
    icon: Globe,
    fields: [
      { name: 'url', label: 'Website URL', type: 'text', placeholder: 'https://example.com', required: true },
    ],
  },
  {
    id: 'text',
    label: 'Text',
    description: 'Share plain text',
    icon: Type,
    fields: [
      { name: 'text', label: 'Text content', type: 'textarea', placeholder: 'Type your message...', required: true },
    ],
  },
  {
    id: 'email',
    label: 'Email',
    description: 'Compose an email',
    icon: Mail,
    fields: [
      { name: 'email', label: 'Email address', type: 'text', placeholder: 'name@example.com', required: true },
      { name: 'subject', label: 'Subject', type: 'text', placeholder: 'Subject (optional)' },
      { name: 'body', label: 'Message', type: 'textarea', placeholder: 'Message (optional)' },
    ],
  },
  {
    id: 'phone',
    label: 'Phone',
    description: 'Dial a phone number',
    icon: Phone,
    fields: [
      { name: 'phone', label: 'Phone number', type: 'text', placeholder: '+263 77 123 4567', required: true },
    ],
  },
  {
    id: 'sms',
    label: 'SMS',
    description: 'Pre-fill a text message',
    icon: MessageSquare,
    fields: [
      { name: 'phone', label: 'Phone number', type: 'text', placeholder: '+263 77 123 4567', required: true },
      { name: 'message', label: 'Message', type: 'textarea', placeholder: 'Message (optional)' },
    ],
  },
  {
    id: 'wifi',
    label: 'WiFi',
    description: 'Connect to a WiFi network',
    icon: Wifi,
    fields: [
      { name: 'ssid', label: 'Network name (SSID)', type: 'text', required: true },
      { name: 'password', label: 'Password', type: 'text' },
      { name: 'encryption', label: 'Encryption', type: 'select', options: ['WPA', 'WEP', 'nopass'], required: true },
      { name: 'hidden', label: 'Hidden network', type: 'checkbox' },
    ],
  },
  {
    id: 'vcard',
    label: 'vCard',
    description: 'Share a digital business card',
    icon: Contact,
    fields: [
      { name: 'firstName', label: 'First name', type: 'text', required: true },
      { name: 'lastName', label: 'Last name', type: 'text' },
      { name: 'organization', label: 'Company', type: 'text' },
      { name: 'title', label: 'Job title', type: 'text' },
      { name: 'phone', label: 'Phone', type: 'text' },
      { name: 'email', label: 'Email', type: 'text' },
      { name: 'website', label: 'Website', type: 'text' },
    ],
  },
];