import React from 'react';
import { CreditCard, Banknote, Wallet, X } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Donation = () => {
  const navigate = useNavigate();

  const handleDonateClick = () => {
    alert(`Payment process is underway... can be added in future.`);
  };

  const handleClose = () => {
    navigate('/services');
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 px-4 py-12">
      <div className="relative w-full max-w-md bg-white/10 backdrop-blur-md dark:bg-white/10 dark:backdrop-blur-lg rounded-2xl shadow-2xl p-6 text-white">
        
        <button
          onClick={handleClose}
          className="absolute top-4 right-4 text-white hover:text-gray-400 transition duration-200"
        >
          <X />
        </button>

        <h2 className="text-2xl font-bold mb-4 text-center">Support Our Mission</h2>
        <p className="text-sm text-gray-300 text-center mb-6">
          Choose a payment method to proceed. Every contribution helps us do more.
        </p>

        <div className="space-y-4">
          <DonationOption
            icon={<CreditCard />}
            label="Credit / Debit Card"
            onClick={handleDonateClick}
          />
          <DonationOption
            icon={<Banknote />}
            label="Net Banking / UPI"
            onClick={handleDonateClick}
          />
          <DonationOption
            icon={<Wallet />}
            label="Digital Wallets"
            onClick={handleDonateClick}
          />
        </div>
      </div>
    </div>
  );
};

const DonationOption = ({ icon, label, onClick }) => (
  <button
    onClick={onClick}
    className="flex items-center space-x-4 w-full bg-gray-800 hover:bg-gray-700 px-4 py-3 rounded-xl transition duration-200"
  >
    <span>{icon}</span>
    <span className="font-medium">{label}</span>
  </button>
);

export default Donation;
