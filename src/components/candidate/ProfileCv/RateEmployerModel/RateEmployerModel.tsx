import React from 'react'

export default function RateEmployerModel() {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-70 flex justify-center items-center z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg w-[450px] h-[500px]">
            <h2 className="text-xl font-bold mt-6 mb-4">Add Podcast</h2>
            <form onSubmit={handleSubmit}>
              {/* <div className="mb-4">
                <label htmlFor="image" className="block text-gray-700 mb-2">
                  Image URL
                </label>
                <input
                  type="text"
                  id="image"
                  name="image"
                  value={formData.image}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded"
                  placeholder="Enter image URL"
                />
              </div> */}
              <div className="mb-4 ">
                <label htmlFor="title" className="block text-gray-700 mb-2">
                  Title
                </label>
                <input
                  type="text"
                  id="title"
                  name="title"
                  value={formData.title}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border h-12 border-gray-300 rounded"
                  placeholder="Enter title"
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="description"
                  className="block text-gray-700 mb-2"
                >
                  Video link
                </label>
                <input
                  type="text"
                  id="description"
                  name="description"
                  value={formData.description}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 h-36 border border-gray-300 rounded"
                  placeholder="Enter video link"
                />
              </div>
              <div className="flex justify-end space-x-4">
                <Link
                  href={"#"}
                  type="button"
                  onClick={handleClosePopup}
                  className="px-4 py-2 bg-gray-500 text-white rounded hover:bg-gray-700"
                >
                  Cancel
                </Link>
                <Link
                  href={"#"}
                  type="submit"
                  className="px-4 py-2 bg-green-600 text-white rounded "
                >
                  Submit
                </Link>
              </div>
            </form>
          </div>
        </div>
  )
}
