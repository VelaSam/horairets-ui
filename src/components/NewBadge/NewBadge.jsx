import React from 'react';
import { useTranslation } from 'react-i18next';
import NewBadgeWrapper from './NewBadge.styles';

function NewBadge() {
  const { t } = useTranslation('common');
  return <NewBadgeWrapper>{t('badgeNew')}</NewBadgeWrapper>;
}

export default NewBadge;
