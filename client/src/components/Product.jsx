import React, { useState, useEffect } from 'react';
import { Package, CheckCircle, XCircle, DollarSign, Rocket } from 'lucide-react';

// Dummy product data (replace with real data from API or props)
const dummyProducts = [
  { id: 1, name: 'Wireless Headphones', available: 45, price: 89.99 },
  { id: 2, name: 'Smart Watch', available: 12, price: 199.99 },
  { id: 3, name: 'Bluetooth Speaker', available: 0, price: 59.99 },
  { id: 4, name: 'Laptop Backpack', available: 28, price: 49.99 },
  { id: 5, name: 'USB-C Hub', available: 7, price: 34.99 },
  { id: 6, name: 'Mechanical Keyboard', available: 3, price: 129.99 },
  { id: 7, name: 'Wireless Mouse', available: 19, price: 24.99 },
  { id: 8, name: 'Monitor Stand', available: 0, price: 39.99 },
  { id: 9, name: 'Desk Lamp', available: 14, price: 29.99 },
  { id: 10, name: 'Webcam', available: 5, price: 79.99 },
  { id: 11, name: 'Microphone', available: 2, price: 99.99 },
  { id: 12, name: 'Graphics Tablet', available: 1, price: 249.99 },
];

const ProductTable = ({ products = dummyProducts }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const rowsPerPage = 5;

  // Toast state
  const [toast, setToast] = useState({ show: false, message: '' });

  // Auto-hide toast after 3 seconds
  useEffect(() => {
    if (toast.show) {
      const timer = setTimeout(() => {
        setToast({ show: false, message: '' });
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [toast.show]);

  // Pagination logic
  const indexOfLastRow = currentPage * rowsPerPage;
  const indexOfFirstRow = indexOfLastRow - rowsPerPage;
  const currentRows = products.slice(indexOfFirstRow, indexOfLastRow);
  const totalPages = Math.ceil(products.length / rowsPerPage);

  const goToPage = (page) => {
    setCurrentPage(Math.max(1, Math.min(page, totalPages)));
  };

  const handleLaunch = (product) => {
    // Show toast notification
    setToast({ show: true, message: `🚀 ${product.name} launched successfully!` });
  };

  // Helper to format price
  const formatPrice = (price) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
    }).format(price);
  };

  return (
    <>
      {/* Toast Notification */}
      {toast.show && (
        <div className="fixed top-4 right-4 bg-green-600 text-white px-4 py-2 rounded-lg shadow-lg flex items-center gap-2 z-50 animate-slide-in">
          <Rocket size={18} />
          <span className="text-sm font-medium">{toast.message}</span>
          <button
            onClick={() => setToast({ show: false, message: '' })}
            className="ml-2 text-white/80 hover:text-white"
          >
            ×
          </button>
        </div>
      )}

      <div className="bg-white rounded-lg shadow overflow-hidden mt-6">
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-4 sm:px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Product Name
                </th>
                <th className="px-4 sm:px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Availability
                </th>
                <th className="px-4 sm:px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Price
                </th>
                <th className="px-4 sm:px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Action
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {currentRows.length > 0 ? (
                currentRows.map((product) => (
                  <tr key={product.id} className="hover:bg-gray-50">
                    {/* Product Name with icon */}
                    <td className="px-4 sm:px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                      <div className="flex items-center gap-2">
                        <Package size={16} className="text-gray-500" />
                        {product.name}
                      </div>
                    </td>
                    {/* Availability with icon */}
                    <td className="px-4 sm:px-6 py-4 whitespace-nowrap text-sm text-gray-700">
                      <div className="flex items-center gap-1">
                        {product.available > 0 ? (
                          <CheckCircle size={16} className="text-green-500" />
                        ) : (
                          <XCircle size={16} className="text-red-500" />
                        )}
                        <span className={product.available > 0 ? 'text-green-600' : 'text-red-600'}>
                          {product.available > 0 ? `${product.available} in stock` : 'Out of stock'}
                        </span>
                      </div>
                    </td>
                    {/* Price with icon */}
                    <td className="px-4 sm:px-6 py-4 whitespace-nowrap text-sm text-gray-700">
                      <div className="flex items-center gap-1">
                        <DollarSign size={16} className="text-gray-500" />
                        {formatPrice(product.price)}
                      </div>
                    </td>
                    {/* Launch button */}
                    <td className="px-4 sm:px-6 py-4 whitespace-nowrap">
                      <button
                        onClick={() => handleLaunch(product)}
                        className="inline-flex items-center gap-1 px-3 py-1.5 bg-indigo-600 text-white text-xs font-medium rounded-lg hover:bg-indigo-700 transition"
                      >
                        <Rocket size={14} />
                        Launch
                      </button>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="4" className="px-4 sm:px-6 py-4 text-center text-sm text-gray-500">
                    No products found.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>

        {/* Pagination */}
        <div className="bg-white px-4 py-3 flex flex-col sm:flex-row items-center justify-between border-t border-gray-200 gap-4">
          <div className="text-sm text-gray-700 order-2 sm:order-1">
            Showing {indexOfFirstRow + 1} to {Math.min(indexOfLastRow, products.length)} of {products.length} results
          </div>
          <div className="flex items-center gap-2 order-1 sm:order-2">
            <button
              onClick={() => goToPage(currentPage - 1)}
              disabled={currentPage === 1}
              className="px-3 py-1 border rounded-md text-sm disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-50"
            >
              Previous
            </button>
            <div className="flex items-center gap-1">
              {(() => {
                const pageNumbers = [];
                const maxVisible = 3;
                const half = Math.floor(maxVisible / 2);
                let start = Math.max(1, currentPage - half);
                let end = Math.min(totalPages, start + maxVisible - 1);
                if (end - start + 1 < maxVisible) {
                  start = Math.max(1, end - maxVisible + 1);
                }
                if (start > 1) {
                  pageNumbers.push(1);
                  if (start > 2) pageNumbers.push('...');
                }
                for (let i = start; i <= end; i++) {
                  pageNumbers.push(i);
                }
                if (end < totalPages) {
                  if (end < totalPages - 1) pageNumbers.push('...');
                  pageNumbers.push(totalPages);
                }
                return pageNumbers.map((page, index) => {
                  if (page === '...') {
                    return <span key={`ellipsis-${index}`} className="px-2 py-1 text-sm">...</span>;
                  }
                  return (
                    <button
                      key={page}
                      onClick={() => goToPage(page)}
                      className={`px-2 sm:px-3 py-1 border rounded-md text-sm ${
                        currentPage === page
                          ? 'bg-indigo-600 text-white border-indigo-600'
                          : 'hover:bg-gray-50'
                      }`}
                    >
                      {page}
                    </button>
                  );
                });
              })()}
            </div>
            <button
              onClick={() => goToPage(currentPage + 1)}
              disabled={currentPage === totalPages}
              className="px-3 py-1 border rounded-md text-sm disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-50"
            >
              Next
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductTable;