import { FiEdit, FiTrash2 } from "react-icons/fi";

const launches = [
  {
    id: "1",
    name: "Falcon 9",
    type: "Rocket",
    totalSeats: 7,
    image: "https://example.com/falcon9.jpg",
    description: "Falcon 9 is a reusable rocket developed by SpaceX.",
    status: "pending"
  },
  {
    id: "2",
    name: "Crew Dragon",
    type: "Spacecraft",
    totalSeats: 4,
    image: "https://example.com/crew-dragon.jpg",
    description: "Crew Dragon is a spacecraft designed to carry astronauts to the ISS.",
    status: "pending"
  },
  {
    id: "3",
    name: "Starship",
    type: "Rocket",
    totalSeats: 100,
    image: "https://example.com/starship.jpg",
    description: "Starship is SpaceX's next-generation fully reusable spacecraft for interplanetary missions.",
    status: "pending"
  },
  {
    id: "4",
    name: "Soyuz MS-20",
    type: "Spacecraft",
    totalSeats: 3,
    image: "https://example.com/soyuz-ms20.jpg",
    description: "Soyuz MS-20 is a Russian spacecraft used for transporting crew to the ISS.",
    status: "pending"
  },
  {
    id: "5",
    name: "New Shepard",
    type: "Suborbital Rocket",
    totalSeats: 6,
    image: "https://example.com/new-shepard.jpg",
    description: "Blue Origin's New Shepard rocket is designed for suborbital tourism flights.",
    status: "pending"
  }
];

const Launch = () => {
  return (
    <div>
      <div className="flex w-[100%] justify-between mb-5">
        <h2 className="text-2xl text-[var(--text-color)]">All Booking</h2>
        <button className="px-5 py-2 rounded-full bg-[var(--accent-color)] text-[var(--card-bg)] hover:bg-[var(--primary-color)] transition duration-300">
          Add New
        </button>
      </div>
      <div className="bg-white shadow rounded-lg overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-sm font-medium text-gray-500 uppercase tracking-wider">id</th>
              <th className="px-6 py-3 text-left text-sm font-medium text-gray-500 uppercase tracking-wider">name</th>
              <th className="px-6 py-3 text-left text-sm font-medium text-gray-500 uppercase tracking-wider">type</th>
              <th className="px-6 py-3 text-left text-sm font-medium text-gray-500 uppercase tracking-wider">totalSeats</th>
              <th className="px-6 py-3 text-left text-sm font-medium text-gray-500 uppercase tracking-wider">image</th>
              <th className="px-6 py-3 text-left text-sm font-medium text-gray-500 uppercase tracking-wider">Status</th>
              <th className="px-6 py-3 text-center text-sm font-medium text-gray-500 uppercase tracking-wider">Actions</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {launches.map((launche) => (
              <tr key={launche.id} className="hover:bg-gray-100 transition duration-200">
                <td className="px-6 py-4">{launche.id}</td>
                <td className="px-6 py-4">{launche.name}</td>
                <td className="px-6 py-4">{launche.type}</td>
                <td className="px-6 py-4">{launche.totalSeats}</td>
                <td className="px-6 py-4">{launche.image}</td>
                <td className="px-6 py-4">{launche.status}</td>
               
                <td className="px-6 py-4 text-center flex justify-center gap-3">
                  <button className="text-indigo-600 hover:text-indigo-900 transition">
                    <FiEdit size={18} />
                  </button>
                  <button className="text-red-600 hover:text-red-900 transition">
                    <FiTrash2 size={18} />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Launch;
