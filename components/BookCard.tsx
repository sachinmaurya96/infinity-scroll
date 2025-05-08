export default function BookCard({ book }: { book: any }) {
    const info = book.volumeInfo
    return (
      <div className="border rounded-lg p-4 shadow-sm hover:shadow-md transition">
        <img
          src={info.imageLinks?.thumbnail}
          alt={info.title}
          className="w-full h-48 object-cover rounded"
        />
        <h2 className="mt-2 font-bold text-lg">{info.title}</h2>
        <p className="text-sm text-gray-600">{info.authors?.join(', ')}</p>
        <p className="text-xs text-gray-500 mt-1">{info.publisher} ({info.publishedDate})</p>
      </div>
    )
  }
  