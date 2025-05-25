export default async function handler(req, res) {
  let lendingData = {
    USDC: {
      interestRate: 'Loading...',
      available: 'Loading...',
      lendLink: 'https://jup.ag/lend?token=USDC'
    },
    SOL: {
      interestRate: 'Loading...',
      available: 'Loading...',
      lendLink: 'https://jup.ag/lend?token=SOL'
    }
  };

  try {
    const response = await fetch('https://quote-api.jup.ag/v6/lending/markets');
    const data = await response.json();

    const usdc = data.find((d) => d.token === 'USDC');
    const sol = data.find((d) => d.token === 'SOL');

    lendingData = {
      USDC: {
        interestRate: (usdc.interestRate * 100).toFixed(2) + '%',
        available: usdc.availableAmount.toLocaleString() + ' USDC',
        lendLink: 'https://jup.ag/lend?token=USDC'
      },
      SOL: {
        interestRate: (sol.interestRate * 100).toFixed(2) + '%',
        available: sol.availableAmount.toLocaleString() + ' SOL',
        lendLink: 'https://jup.ag/lend?token=SOL'
      }
    };
  } catch (err) {
    console.error('Error fetching lending data:', err.message);
  }

  const frameMetadata = {
    'fc-frame': 'vNext',
    'fc-frame-title': 'Jupiter Lending Dashboard',
    'fc-frame-subtitle': `USDC: ${lendingData.USDC.interestRate} | ${lendingData.USDC.available}`,
    'fc-frame-button-1': 'Lend USDC',
    'fc-frame-button-1-action': 'link',
    'fc-frame-button-1-target': lendingData.USDC.lendLink,
    'fc-frame-button-2': 'Lend SOL',
    'fc-frame-button-2-action': 'link',
    'fc-frame-button-2-target': lendingData.SOL.lendLink,
    'fc-frame-footer': `SOL: ${lendingData.SOL.interestRate} | ${lendingData.SOL.available}`,
  };

  for (const key in frameMetadata) {
    res.setHeader(key, frameMetadata[key]);
  }

  res.status(200).send('');
}
