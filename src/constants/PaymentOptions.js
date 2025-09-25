import { FaCcVisa, FaCcMastercard, FaCcAmex, FaPaypal, FaApplePay } from "react-icons/fa";


const paymentOptions = [
    {
      id: "cards",
      label: "Credit/Debit Cards",
      icons: [
        <FaCcVisa key="visa" size={32} className="text-blue-700" />,
        <FaCcMastercard key="mastercard" size={32} className="text-red-500" />
        , <FaCcAmex key="amex" size={32} className="text-blue-800" />

      ]
    },
    { 
      id: "paypal", 
      label: "PayPal",
      icon: <FaPaypal size={32} className="text-blue-600" />
    }
  ];

export default paymentOptions;