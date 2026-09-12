function escapeWifi(value = '') {
  return value.replace(/([\\;,:"])/g, '\\$1');
}

export function buildQrValue(typeId, data = {}) {
  switch (typeId) {
    case 'website': {
      const url = data.url?.trim() || '';
      if (!url) return '';
      return /^https?:\/\//i.test(url) ? url : `https://${url}`;
    }

    case 'text':
      return data.text?.trim() || '';

    case 'email': {
      if (!data.email) return '';
      const params = new URLSearchParams();
      if (data.subject) params.set('subject', data.subject);
      if (data.body) params.set('body', data.body);
      const query = params.toString();
      return `mailto:${data.email}${query ? `?${query}` : ''}`;
    }

    case 'phone':
      return data.phone ? `tel:${data.phone}` : '';

    case 'sms':
      return data.phone ? `SMSTO:${data.phone}:${data.message || ''}` : '';

    case 'wifi': {
      if (!data.ssid) return '';
      const enc = data.encryption && data.encryption !== 'nopass' ? data.encryption : 'nopass';
      const hidden = data.hidden ? 'true' : 'false';
      return `WIFI:T:${enc};S:${escapeWifi(data.ssid)};P:${escapeWifi(data.password || '')};H:${hidden};;`;
    }

    case 'vcard': {
      if (!data.firstName && !data.lastName) return '';
      return [
        'BEGIN:VCARD',
        'VERSION:3.0',
        `N:${data.lastName || ''};${data.firstName || ''}`,
        `FN:${data.firstName || ''} ${data.lastName || ''}`.trim(),
        data.organization ? `ORG:${data.organization}` : '',
        data.title ? `TITLE:${data.title}` : '',
        data.phone ? `TEL:${data.phone}` : '',
        data.email ? `EMAIL:${data.email}` : '',
        data.website ? `URL:${data.website}` : '',
        'END:VCARD',
      ].filter(Boolean).join('\n');
    }

    default:
      return '';
  }
}