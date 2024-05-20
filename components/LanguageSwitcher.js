import React from 'react';
import { useRouter } from 'next/router';

const LanguageSwitcher = () => {
  const router = useRouter();
  const { pathname } = router;

  const switchLanguage = (lang) => {
    router.push(`/${lang}`);
  };

  return (
    <div className="mb-4">
    <button onClick={() => switchLanguage('en')} className="px-4 py-2 mr-2 bg-blue-500 text-white rounded">
      English
    </button>
    <button onClick={() => switchLanguage('tr')} className="px-4 py-2 bg-green-500 text-white rounded">
      Türkçe
    </button>
  </div>
  );
};

export default LanguageSwitcher;
