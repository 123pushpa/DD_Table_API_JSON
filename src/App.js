import "./styles.css";
import { useState, useEffect } from "react";

export default function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        let response = await fetch(
          "https://dummyjson.com/products?limit=10&skip=10&select=title,price"
        );

        let jsonData = await response.json();
        console.log(jsonData);
        setData(jsonData);
        console.log("......", data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      {data ? (
        <select>
          {data?.products?.map((el, index) => (
            <option key={el.id} value={el.price}>
              {el.title}
            </option>
          ))}
        </select>
      ) : (
        <p>LOADINg...</p>
      )}
      <div>
        Show data in List
        {data ? (
          <table>
            <thead>
              <tr>
                <th>ID</th>
                <th>NAME</th>
                <th>EMAIL</th>
              </tr>
            </thead>
            <tbody>
              {data?.products?.map((el, index) => (
                <tr key={el.id} value={el.price}>
                  <td>{el.id}</td>
                  <td>{el.price}</td>
                  <td>{el.title}</td>
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          <p>Loading...</p>
        )}
      </div>
    </>
  );
}
