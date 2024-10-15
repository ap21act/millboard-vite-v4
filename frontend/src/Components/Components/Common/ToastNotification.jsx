import { toast } from 'react-toastify';

// Success notification
export const showSuccessToast = (message = 'Action successful!') => {
  toast.success(message, {
    position: "top-right",
    autoClose: 3000, // Auto close after 3 seconds
    hideProgressBar: true,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    className: 'text-primary font-3xl text-bold  px-6 py-2 h-16  rounded-lg shadow-md',
  });
};

// Info notification
export const showInfoToast = (message = 'Here is some information!') => {
  toast.info(message, {
    position: "top-right",
    autoClose: 3000, // Auto close after 3 seconds
    hideProgressBar: true,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    className: '  px-4 py-2 rounded-lg shadow-md',
  });
};

// Error notification
export const showErrorToast = (message = 'Something went wrong!') => {
  toast.error(message, {
    position: "top-right",
    autoClose: 3000, // Auto close after 3 seconds
    hideProgressBar: true,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    className: 'text-red  px-4 py-2 rounded-lg shadow-md',
  });
};
