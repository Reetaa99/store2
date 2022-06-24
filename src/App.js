import "./styles.css";
import Display from "./Display";
export default function App() {
  const data = [
    { id: 1, name: "tom" },
    { id: 2, name: "ken" }
  ];

  const data2 = [
    { Empid: 3, Empname: "Etom" },
    { Empid: 4, Empname: "Eken" }
  ];
  const data3 = [
    { Empid: 5, Empname: "Etom", job: "developer" },
    { Empid: 6, Empname: "Eken", job: "PM" }
  ];

  return (
    <div className="App">
      <Display data={data} header={Object.keys(data[0])} />
      <Display data={data2} header={Object.keys(data2[0])} />
      <Display data={data3} header={Object.keys(data3[0])} />
    </div>
  );
}
