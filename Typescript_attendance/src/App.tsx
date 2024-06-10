import { useState } from 'react'

type long = string | number

function App() {
  const [latitude, setLatitude] = useState<long>("")
  const [long, setLong] = useState<long>("")
  console.log(latitude)
  console.log(long)
  const handleClick = ():void => {
     if (navigator.geolocation) {
       navigator.geolocation.getCurrentPosition((position) => {
        setLatitude(position.coords.latitude)
        setLong(position.coords.longitude)
       },
       (error) => {
        console.error("Error getting location: ", error);
       }
      )
     }else(
      console.log("this is not supported")
     )
  }

  return (
    <div>
      <h1 className="text-3xl font-bold underline">Hello world!</h1>
      <div className="relative overflow-x-auto">
        <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-6 py-3">
                Name
              </th>
              <th scope="col" className="px-6 py-3">
                Thick
              </th>
              <th scope="col" className="px-6 py-3">
                Result
              </th>
            </tr>
          </thead>
          <tbody>
            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
              <th
                scope="row"
                className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
              >
                Abe
              </th>
              <td className="px-6 py-4">
                <button
                  onClick={() => {
                    handleClick();
                  }}
                >
                  check
                </button>
              </td>
              <td className="px-6 py-4">
                {latitude === 8.8866816 && long === 38.7743744 ? "Yes" : "Not"}
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default App
