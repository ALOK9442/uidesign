import { useRouter } from 'next/router';
import { dummyData } from '../dummydata/dummydata';

export default function Home() {
    const router = useRouter();
    const { query } = router;
    const currentPage = parseInt(query.page) || 1; // Default to page 1 if not provided
    const itemsPerPage = 5;
  
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const paginatedData = dummyData.slice(startIndex, endIndex);
  
    const totalPages = Math.ceil(dummyData.length / itemsPerPage);
  
    const goToPage = (pageNumber) => {
      router.push(`/page=${pageNumber}`);
    };
  
    return (
      <div className="container mx-auto p-4">
        <h1 className="text-3xl font-bold mb-4">Pagination Example</h1>
        <ul>
          {paginatedData.map((item) => (
            <li key={item.id} className="mb-2">
              {item.name}
            </li>
          ))}
        </ul>
        <div className="mt-4">
          {Array.from({ length: totalPages }, (_, i) => i + 1).map((number) => (
            <button
              key={number}
              className={`mr-2 px-3 py-1 border ${
                number === currentPage ? 'bg-blue-500 text-white' : 'bg-gray-200'
              }`}
              onClick={() => goToPage(number)}
            >
              {number}
            </button>
          ))}
        </div>
      </div>
    );
  }
