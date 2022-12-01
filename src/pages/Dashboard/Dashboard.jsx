import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const Dashboard = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    getData();
  }, []);

  const getData = () => {
    axios
      // .get("https://bootcamp-rent-cars.herokuapp.com/admin/v2/order")
      .get("https://reqres.in/api/users")
      .then((res) => setData(res.data.data))
      .catch((err) => console.log(err));
  };

  return (
    <section className="flex flex-wrap gap-6 container mx-auto items-stretch justify-center">
      {data?.map((item) => {
        return (
          <div key={item?.id} className="max-w-sm rounded overflow-hidden shadow-lg bg-white">
            <img className="w-full h-60" src={item?.avatar} alt={item?.first_name} />
            <div className="px-6 py-4">
              <div className="font-bold text-xl mb-2">
                #ID {item?.id} - {item?.first_name} {item?.last_name}
              </div>
              <p className="italic">{item?.email || "-"}</p>
            </div>
            <div className="px-6 pt-4 pb-2 flex gap-4">
              <Link to={`/detail/${item?.id}`} className="border-teal-500 border text-teal-500 rounded-md p-1 hover:bg-teal-700 hover:text-white flex items-center w-full justify-center">
                <button>Edit</button>
              </Link>
              <button
                onClick={() => {
                  // setSelectedData(item);
                  // handleDeleteConfirmation();
                }}
                className="bg-teal-500 text-white rounded-md p-1 hover:bg-teal-700 flex items-center w-full justify-center"
              >
                Delete
              </button>
            </div>
          </div>
        );
      })}
    </section>
  );
};

export default Dashboard;
