
'use client';

import { useEffect } from 'react';

const PipedriveChat = () => {
  useEffect(() => {
    // Prevent adding the script multiple times
    if (window.LeadBooster) return;

    // Set configuration
    window.pipedriveLeadboosterConfig = {
      base: 'leadbooster-chat.pipedrive.com',
      companyId: 11412775,
      playbookUuid: 'df6d239e-689c-4046-8049-6ccc4aad9dd4',
      version: 2,
    };

    // Add loader script
    const script = document.createElement('script');
    script.src = 'https://leadbooster-chat.pipedrive.com/assets/loader.js';
    script.async = true;
    document.body.appendChild(script);

    // Initialize the stub if not already present
    if (!window.LeadBooster) {
      window.LeadBooster = {
        q: [],
        on: function (n, h) {
          this.q.push({ t: 'o', n: n, h: h });
        },
        trigger: function (n) {
          this.q.push({ t: 't', n: n });
        },
      };
    }
  }, []);

  return null; // This component doesn't render anything visually
};

export default PipedriveChat;


/*const PipedriveChat = () => {
  useEffect(() => {
    // Prevent adding the script multiple times
    if (window.LeadBooster) return;

    // Set configuration
    window.pipedriveLeadboosterConfig = {
      base: 'leadbooster-chat.pipedrive.com',
      companyId: 11412775,
      playbookUuid: 'df6d239e-689c-4046-8049-6ccc4aad9dd4',
      version: 2,
    };

    // Add loader script
    const script = document.createElement('script');
    script.src = 'https://leadbooster-chat.pipedrive.com/assets/loader.js';
    script.async = true;
    document.body.appendChild(script);

    // Initialize the stub if not already present
    if (!window.LeadBooster) {
      window.LeadBooster = {
        q: [],
        on: function (n, h) {
          this.q.push({ t: 'o', n: n, h: h });
        },
        trigger: function (n) {
          this.q.push({ t: 't', n: n });
        },
      };
    }
  }, []);

  return null; // This component doesn't render anything visually
};

export default PipedriveChat;*/
